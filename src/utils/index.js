export const viewImage = (payload) => {
    return import.meta.env.VITE_BASE_URL.replace('api/', '') + 'postImage/' + payload.photo; 
}