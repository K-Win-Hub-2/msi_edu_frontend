import bannerImage from "@/assets/img/countries/banner/singapore.jpg";
// import AccountancyImage from "@/assets/img/logo/programs/Accountancy.jpg";
import AccountingImage from "@/assets/img/logo/programs/Accounting.jpg";
import AgricultureImage from "@/assets/img/logo/programs/Agriculture.jpg";
import ArchitectureImage from "@/assets/img/logo/programs/Architecture.jpg";
// import ArtificialIntelligenceImage from "@/assets/img/logo/programs/ArtificialIntelligence.jpg";
import BiologyImage from "@/assets/img/logo/programs/Biology.jpg";
import BusinessImage from "@/assets/img/logo/programs/Business.jpg";
import ChemicalEngineeringImage from "@/assets/img/logo/programs/ChemicalEngineering.jpg";
// import CommunicationsImage from "@/assets/img/logo/programs/Communications.jpg";
// import ComputerScienceImage from "@/assets/img/logo/programs/ComputerScience.jpg";
// import CriminologyImage from "@/assets/img/logo/programs/Criminology.jpg";
import EconomicsImage from "@/assets/img/logo/programs/Economics.jpg";
import EducationImage from "@/assets/img/logo/programs/Education.jpg";
import ElectricalEngineeringImage from "@/assets/img/logo/programs/ElectricalEngineering.jpg";
import EngineeringImage from "@/assets/img/logo/programs/Engineering.jpg";
// import HealthcareImage from "@/assets/img/logo/programs/Healthcare.jpg";
import HistoryImage from "@/assets/img/logo/programs/History.jpg";
import HumanitiesImage from "@/assets/img/logo/programs/Humanities.jpg";
import LawImage from "@/assets/img/logo/programs/Law.jpg";
import ManagementScienceImage from "@/assets/img/logo/programs/ManagementScience.jpg";
import MedicineImage from "@/assets/img/logo/programs/Medicine.jpg";
import NaturalSciencesImage from "../assets/img/logo/programs/NaturalSciences.jpg";
import NursingImage from "@/assets/img/logo/programs/Nursing.jpg";
import PerformingArtsImage from "@/assets/img/logo/programs/PerformingArts.jpg";
import PoliticalScienceImage from "@/assets/img/logo/programs/PoliticalScience.jpg";
import PsychologyImage from "@/assets/img/logo/programs/Psychology.jpg";
import PublicHealthImage from "@/assets/img/logo/programs/PublicHealth.jpg";
import SociologyImage from "@/assets/img/logo/programs/Sociology.jpg";
// import SportsScienceImage from "@/assets/img/logo/programs/SportsScience.jpg";

// export const programs = [
//   {
//     title: "Engineering",
//     image: bannerImage,
//     description: "testing",
//     country: "singapore",
//     university: "stamford",
//   },
//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "singapore",
//     university: "stamford",
//   },
//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "singapore",
//     university: "stamford",
//   },
//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "singapore",
//     university: "stamford",
//   },
//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "singapore",
//     university: "stamford",
//   },
//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "singapore",
//     university: "stamford",
//   },
//   {
//     title: "program mdis",
//     image: bannerImage,
//     description: "testing",
//     country: "singapore",
//     university: "mdis",
//   },
//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "singapore",
//     university: "kaplan",
//   },
//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "thailand",
//     university: "assumption",
//   },

//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "thailand",
//     university: "assumption",
//   },
//   {
//     title: "program one",
//     image: bannerImage,
//     description: "testing",
//     country: "thailand",
//     university: "assumption",
//   },
// ];

const getImage = (programName) => {
  if (programName === "Accountancy") return bannerImage;
  if (programName === "Accounting") return AccountingImage;
  if (programName === "Agriculture") return AgricultureImage;
  if (programName === "Architecture") return ArchitectureImage;
  if (programName === "ArtificialIntelligence")
    return bannerImage;
  if (programName === "Biology") return BiologyImage;
  if (programName === "Business") return BusinessImage;
  if (programName === "ChemicalEngineering") return ChemicalEngineeringImage;
  if (programName === "Communications") return bannerImage;
  if (programName === "ComputerScience") return bannerImage;
  if (programName === "Criminology") return bannerImage;
  if (programName === "Economics") return EconomicsImage;
  if (programName === "Education") return EducationImage;
  if (programName === "ElectricalEngineering")
    return ElectricalEngineeringImage;
  if (programName === "Engineering") return EngineeringImage;
  if (programName === "Healthcare") return bannerImage;
  if (programName === "History") return HistoryImage;
  if (programName === "Humanities") return HumanitiesImage;
  if (programName === "Law") return LawImage;
  if (programName === "ManagementScience") return ManagementScienceImage;
  if (programName === "Medicine") return MedicineImage;
  if (programName === "NaturalSciences") return NaturalSciencesImage;
  if (programName === "Nursing") return NursingImage;
  if (programName === "PerformingArts") return PerformingArtsImage;
  if (programName === "PoliticalScience") return PoliticalScienceImage;
  if (programName === "Psychology") return PsychologyImage;
  if (programName === "PublicHealth") return PublicHealthImage;
  if (programName === "Sociology") return SociologyImage;
  if (programName === "SportsScience") return bannerImage;
};

const getPrograms = (programName, country) => {
  return {
    title: programName,
    country: country,
    image: getImage(programName),
  };
};

export const programs = [
  getPrograms("Engineering", "singapore"),
  getPrograms("Business", "singapore"),
  getPrograms("Healthcare", "singapore"),
  getPrograms("Computer Science", "singapore"),
  getPrograms("Medicine", "singapore"),
  getPrograms("Accountancy", "singapore"),
  getPrograms("Architecture", "singapore"),
  getPrograms("Education", "singapore"),
  getPrograms("Law", "singapore"),
  getPrograms("Artificial Intelligence", "singapore"),

  // thailand
  getPrograms("Business", "thailand"),
  getPrograms("Engineering", "thailand"),
  getPrograms("Humanities", "thailand"),
  getPrograms("NaturalSciences", "thailand"),
  getPrograms("Law", "thailand"),
  getPrograms("Medicine", "thailand"),

  // uk
  getPrograms("Computer science", "uk"),
  getPrograms("Medicine", "uk"),
  getPrograms("Psychology", "uk"),
  getPrograms("Economics", "uk"),
  getPrograms("Engineering", "uk"),
  getPrograms("Nursing", "uk"),
  getPrograms("Sociology", "uk"),
  getPrograms("Sports Science", "uk"),
  getPrograms("Criminology", "uk"),

  // usa
  getPrograms("PoliticalScience", "usa"),
  getPrograms("ComputerScience", "usa"),
  getPrograms("Engineering", "usa"),
  getPrograms("Psychology", "usa"),
  getPrograms("Economics", "usa"),
  getPrograms("Biology", "usa"),
  getPrograms("History", "usa"),
  getPrograms("Business", "usa"),
  getPrograms("Communications", "usa"),
  getPrograms("Accounting", "usa"),
  getPrograms("Nursing", "usa"),
  getPrograms("Education", "usa"),
  getPrograms("SocialScience", "usa"),
  getPrograms("Sociology", "usa"),
  getPrograms("PerformingArts", "usa"),

  //canada
  getPrograms("Medicine", "canada"),
  getPrograms("ChemicalEngineering", "canada"),
  getPrograms("ComputerScience", "canada"),
  getPrograms("Psychology", "canada"),
  getPrograms("Accounting", "canada"),
  getPrograms("Nursing", "canada"),
  getPrograms("PublicHealth", "canada"),
  getPrograms("Agriculture", "canada"),
  getPrograms("ElectricalEngineering", "canada"),
  getPrograms("ManagementScience", "canada"),
  getPrograms("Sociology", "canada"),
];
