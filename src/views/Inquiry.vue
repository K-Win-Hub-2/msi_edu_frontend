<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useInquiryStore } from "../stores/inquiry";
import { useRoute } from "vue-router";

const InquiryStore = useInquiryStore();
const route = useRoute();

const selectedCountry = ref("");
const formSchema = ref(null);
const configError = ref("");
const formData = ref({});

const errors = ref({});
const successMessage = ref("");

const isSubmitting = computed(() => InquiryStore.isSubmitting);
const isLoadingConfig = computed(() => InquiryStore.isLoadingConfig);

onMounted(() => {
  if (route.query.country_id) {
    selectedCountry.value = Number(route.query.country_id) || route.query.country_id;
  }
});

// Watch for country selection → fetch schema
watch(selectedCountry, async (newCountryId) => {
  errors.value = {};
  successMessage.value = "";
  formSchema.value = null;
  configError.value = "";
  formData.value = {};

  if (!newCountryId) return;

  try {
    const config = await InquiryStore.fetchFormConfig(newCountryId);
    const fields = config.fields || config;

    if (Array.isArray(fields) && fields.length > 0) {
      formSchema.value = fields;
      fields.forEach(field => {
        if (field.field_type === 'checkbox') formData.value[field.field_key] = false;
        else if (field.field_type === 'radio') formData.value[field.field_key] = null;
        else formData.value[field.field_key] = "";
      });
    } else {
      configError.value = "No form fields configured for this country yet.";
    }
  } catch (error) {
    console.error("[Inquiry] fetchFormConfig error:", error);
    configError.value = error.response?.data?.message || "Failed to load form. Please try again.";
  }
});

// Group fields into rows using field_width from the schema:
// 'full'  → always its own full-width row
// 'half'  → pair consecutive half fields into a 2-column row;
//           orphan half (no half partner next) renders as full
const groupedRows = computed(() => {
  if (!Array.isArray(formSchema.value)) return [];

  const rows = [];
  const fields = formSchema.value;
  let i = 0;

  while (i < fields.length) {
    const field = fields[i];
    const width = field.field_width || 'half';

    if (width === 'full') {
      rows.push({ type: 'full', fields: [field] });
      i++;
    } else {
      // half — try to pair with next half field
      const next = fields[i + 1];
      const nextWidth = next?.field_width || 'half';
      if (next && nextWidth === 'half') {
        rows.push({ type: 'half', fields: [field, next] });
        i += 2;
      } else {
        rows.push({ type: 'full', fields: [field] });
        i++;
      }
    }
  }

  return rows;
});

const handleSubmit = async () => {
  errors.value = {};
  successMessage.value = "";
  InquiryStore.resetSubmitState();

  let hasErrors = false;

  if (Array.isArray(formSchema.value)) {
    formSchema.value.forEach(field => {
      const value = formData.value[field.field_key];
      if (field.is_required) {
        if (value === "" || value === null || value === undefined || (field.field_type === 'checkbox' && value === false)) {
          errors.value[field.field_key] = [`${field.field_label} is required`];
          hasErrors = true;
        }
      }
    });
  }

  if (hasErrors) return;

  try {
    const payload = {
      country_id: selectedCountry.value,
      submission_data: { ...formData.value },
    };

    const response = await InquiryStore.storeInquiry(payload);

    if (response?.data?.success || response?.status === 200 || response?.status === 201) {
      successMessage.value = response?.data?.message || "Your inquiry has been submitted successfully!";
      formSchema.value.forEach(field => {
        if (field.field_type === 'checkbox') formData.value[field.field_key] = false;
        else if (field.field_type === 'radio') formData.value[field.field_key] = null;
        else formData.value[field.field_key] = "";
      });
    }
  } catch (error) {
    if (error.response?.status === 422) {
      errors.value = error.response.data.errors || {};
    } else {
      alert(error.response?.data?.message || "Failed to submit form. Please try again.");
    }
  }
};
</script>

<template>
  <div class="inquiry-page">
    <div class="inquiry-container">

      <!-- Loading -->
      <div v-if="isLoadingConfig" class="loading-state">
        <svg class="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p>Loading form...</p>
      </div>

      <!-- Error -->
      <div v-else-if="configError" class="error-state">
        ⚠ {{ configError }}
      </div>

      <!-- Form -->
      <form v-else-if="formSchema" @submit.prevent="handleSubmit" class="inquiry-form" style="text-align:left">

        <div v-if="successMessage" class="success-banner">
          ✓ {{ successMessage }}
        </div>

        <template v-for="(row, rowIdx) in groupedRows" :key="rowIdx">

          <!-- Full-width row -->
          <div v-if="row.type === 'full'" class="field-row full">
            <div
              v-for="field in row.fields"
              :key="field.field_key"
              class="field-group"
              :class="{ 'has-error': errors[field.field_key] }"
            >
              <!-- Checkbox -->
              <template v-if="field.field_type === 'checkbox'">
                <div class="checkbox-group">
                  <input
                    v-model="formData[field.field_key]"
                    type="checkbox"
                    :id="field.field_key"
                    :disabled="isSubmitting"
                    class="checkbox-input"
                  />
                  <label :for="field.field_key" class="checkbox-label">
                    {{ field.field_label }}
                    <span v-if="field.is_required" class="required-star">*</span>
                  </label>
                </div>
              </template>

              <!-- Textarea -->
              <template v-else-if="field.field_type === 'textarea'">
                <label class="field-label">
                  {{ field.field_label }}
                  <span v-if="field.is_required" class="required-star">*</span>
                </label>
                <textarea
                  v-model="formData[field.field_key]"
                  rows="4"
                  :placeholder="`Write your questions here...`"
                  :disabled="isSubmitting"
                  class="field-input textarea-input"
                ></textarea>
              </template>

              <!-- Radio full-width solo -->
              <template v-else-if="field.field_type === 'radio'">
                <p class="field-label">
                  {{ field.field_label }}
                  <span v-if="field.is_required" class="required-star">*</span>
                </p>
                <div class="radio-options">
                  <label v-for="opt in field.options" :key="opt.value" class="radio-option">
                    <input
                      v-model="formData[field.field_key]"
                      type="radio"
                      :value="opt.value"
                      :name="field.field_key"
                      :disabled="isSubmitting"
                      class="radio-input"
                    />
                    <span>{{ opt.label }}</span>
                  </label>
                </div>
              </template>

              <!-- Full-width text/etc -->
              <template v-else>
                <label class="field-label">
                  {{ field.field_label }}
                  <span v-if="field.is_required" class="required-star">*</span>
                </label>
                <input
                  v-model="formData[field.field_key]"
                  :type="field.field_type"
                  :placeholder="field.field_label"
                  :disabled="isSubmitting"
                  class="field-input"
                />
              </template>

              <span v-if="errors[field.field_key]" class="error-text">
                {{ errors[field.field_key][0] }}
              </span>
            </div>
          </div>

          <!-- Half-width row (2 cols) -->
          <div v-else class="field-row half">
            <div
              v-for="field in row.fields"
              :key="field.field_key"
              class="field-group"
              :class="{ 'has-error': errors[field.field_key] }"
            >
              <label class="field-label">
                {{ field.field_label }}
                <span v-if="field.is_required" class="required-star">*</span>
              </label>

              <input
                v-if="['text', 'email', 'tel', 'date', 'number'].includes(field.field_type)"
                v-model="formData[field.field_key]"
                :type="field.field_type"
                :placeholder="field.field_label"
                :disabled="isSubmitting"
                class="field-input"
              />

              <select
                v-else-if="field.field_type === 'select'"
                v-model="formData[field.field_key]"
                :disabled="isSubmitting"
                class="field-input"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="opt in field.options" :key="opt.value" :value="opt.value">
                  {{ opt.label }}
                </option>
              </select>

              <!-- Radio in a pair -->
              <div v-else-if="field.field_type === 'radio'" class="radio-options">
                <label v-for="opt in field.options" :key="opt.value" class="radio-option">
                  <input
                    v-model="formData[field.field_key]"
                    type="radio"
                    :value="opt.value"
                    :name="field.field_key"
                    :disabled="isSubmitting"
                    class="radio-input"
                  />
                  <span>{{ opt.label }}</span>
                </label>
              </div>

              <span v-if="errors[field.field_key]" class="error-text">
                {{ errors[field.field_key][0] }}
              </span>
            </div>
          </div>

        </template>

        <!-- Submit -->
        <div class="submit-row">
          <button type="submit" :disabled="isSubmitting" class="submit-btn">
            {{ isSubmitting ? "Sending..." : "Send Message" }}
          </button>
        </div>

      </form>

      <!-- No country -->
      <div v-else-if="selectedCountry === ''" class="empty-state">
        <svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p>Please start your inquiry from a specific country page.</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.inquiry-page {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 140px 1rem 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.inquiry-container {
  background: #fff;
  width: 100%;
  max-width: 720px;
  border-radius: 6px;
  padding: 2.5rem 3rem 3rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  text-align: left;
}

/* ── Field rows ─────────────────────────── */
.field-row {
  display: grid;
  gap: 1.25rem;
  margin-bottom: 1rem;
}
.field-row.full { grid-template-columns: 1fr; }
.field-row.half { grid-template-columns: 1fr 1fr; }

@media (max-width: 580px) {
  .inquiry-container { padding: 2rem 1.25rem 2.5rem; }
  .field-row.half { grid-template-columns: 1fr; }
}

/* ── Field group ────────────────────────── */
.field-group {
  display: flex;
  flex-direction: column;
}

.field-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #1a2744;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-bottom: 6px;
  text-align: left;
  display: block;
}

.required-star {
  color: #e53e3e;
  margin-left: 1px;
}

/* ── Inputs ─────────────────────────────── */
.field-input {
  background: #f0f2f5;
  border: 1.5px solid #e8eaf0;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 0.9rem;
  color: #1a2744;
  outline: none;
  width: 100%;
  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
  -webkit-appearance: none;
}
.field-input::placeholder { color: #a0aec0; }
.field-input:focus {
  border-color: #b8bfce;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(26, 39, 68, 0.06);
}
.field-input:disabled { opacity: 0.55; cursor: not-allowed; }

.textarea-input { resize: none; min-height: 110px; line-height: 1.5; }

.has-error .field-input { border-color: #e53e3e; }
.error-text { font-size: 0.7rem; color: #e53e3e; margin-top: 4px; }

/* ── Radio ──────────────────────────────── */
.radio-options {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 4px;
}
.radio-option {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #2d3748;
  cursor: pointer;
}
.radio-input {
  width: 16px;
  height: 16px;
  accent-color: #1a2744;
  cursor: pointer;
  flex-shrink: 0;
}

/* ── Checkbox ───────────────────────────── */
.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}
.checkbox-input {
  width: 17px;
  height: 17px;
  border-radius: 4px;
  accent-color: #1a2744;
  cursor: pointer;
  flex-shrink: 0;
}
.checkbox-label {
  font-size: 0.875rem;
  color: #2d3748;
  cursor: pointer;
  line-height: 1.4;
}

/* ── Submit ─────────────────────────────── */
.submit-row { margin-top: 1.75rem; }
.submit-btn {
  width: 100%;
  padding: 0.9rem;
  font-weight: 800;
  font-size: 1rem;
  color: #1a202c;
  background: linear-gradient(to right, #f6d365, #f5a623);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: opacity 0.2s, transform 0.1s, box-shadow 0.2s;
}
.submit-btn:hover:not(:disabled) {
  opacity: 0.92;
  box-shadow: 0 4px 14px rgba(245, 166, 35, 0.4);
}
.submit-btn:active:not(:disabled) { transform: scale(0.99); }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

/* ── Success banner ─────────────────────── */
.success-banner {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  color: #276749;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  margin-bottom: 1.75rem;
}

/* ── Loading ────────────────────────────── */
.loading-state { text-align: center; padding: 3rem 0; color: #718096; }
.spinner {
  width: 36px; height: 36px;
  margin: 0 auto 0.75rem;
  animation: spin 0.9s linear infinite;
  color: #4299e1;
}
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* ── Error ──────────────────────────────── */
.error-state {
  text-align: center;
  padding: 2rem 1rem;
  color: #c53030;
  background: #fff5f5;
  border: 1px solid #feb2b2;
  border-radius: 8px;
  font-size: 0.875rem;
}

/* ── Empty ──────────────────────────────── */
.empty-state { text-align: center; padding: 3rem 1rem; color: #a0aec0; }
.empty-icon { width: 48px; height: 48px; margin: 0 auto 0.75rem; color: #cbd5e0; }
</style>
