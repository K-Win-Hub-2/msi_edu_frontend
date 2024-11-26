import AwardOne from "@/assets/img/home/Awards/SpaceEggActivity.png";
import SpaceEggActivity from "@/assets/img/home/Awards/SpaceEggActivity.png";
import AppreciationAward from "@/assets/img/home/Awards/AppreciationAward.png";
import AppreciationAward2018 from "@/assets/img/home/Awards/AppreciationAward2018.png";
import BestAgencyinASEANAward from "@/assets/img/home/Awards/BestAgencyinASEANAward.png";
import BestNewAgentAward2017 from "@/assets/img/home/Awards/BestNewAgentAward2017.png";
import BestPartnership2019 from "@/assets/img/home/Awards/BestPartnership2019.png";
import BestPerformanceRecruitmentPartnerAward from "@/assets/img/home/Awards/BestPerformanceRecruitmentPartnerAward.png";
import BestPerformingPartner from "@/assets/img/home/Awards/BestPerformingPartner.png";
import BestSupportiveBusinessPartner from "@/assets/img/home/Awards/BestSupportiveBusinessPartner.png";
import ExcellentPerformingAward from "@/assets/img/home/Awards/ExcellentPerformingAward.png";
import InAppreciationofOurPartnership from "@/assets/img/home/Awards/InAppreciationofOurPartnership.png";
import KaplanSingapore2021 from "@/assets/img/home/Awards/KaplanSingapore2021.png";
import OutstandingInternationalStudentRecruitmentPartnerAward from "@/assets/img/home/Awards/OutstandingInternationalStudentRecruitmentPartnerAward.png";
import RisingStarAward from "@/assets/img/home/Awards/RisingStarAward.png";
import StrategicPlanningforBusinessSuccess from "@/assets/img/home/Awards/StrategicPlanningforBusinessSuccess.png";
import TheBestPerformingPartnerin2021 from "@/assets/img/home/Awards/TheBestPerformingPartnerin2021.png";
import TheExcellenceAward from "@/assets/img/home/Awards/TheExcellenceAward.png";
import TheMostOutstandingAgentAward from "@/assets/img/home/Awards/TheMostOutstandingAgentAward.png";
import TopAgentAward from "@/assets/img/home/Awards/TopAgentAward.png";
import SingaporeEducationSpecialistCertificate from "@/assets/img/home/Awards/SingaporeEducationSpecialistCertificate.png";
import PartnershipAppreciationAward from "@/assets/img/home/Awards/PartnershipAppreciationAward.png";
import BestPartnerAwardMDIS from "@/assets/img/home/Awards/BestPartnerAwardMDIS.png";
import BestUprisingAward from "@/assets/img/home/Awards/BestUprisingAward.png";
import BestPerformingPartnerAward from "@/assets/img/home/Awards/BestPerformingPartnerAward.png";
import TopRecruitmentPartnerAward from "@/assets/img/home/Awards/TopRecruitmentPartnerAward.png";

const generateRandomColor = () => {
  // Generate random R, G, and B values
  const r = Math.floor(Math.random() * 256); // 0 to 255
  const g = Math.floor(Math.random() * 256); // 0 to 255
  const b = Math.floor(Math.random() * 256); // 0 to 255

  // Convert the decimal values to hexadecimal
  const hexR = r.toString(16).padStart(2, "0"); // Ensure at least two digits
  const hexG = g.toString(16).padStart(2, "0");
  const hexB = b.toString(16).padStart(2, "0");

  // Concatenate the hexadecimal values to form a color code
  const colorCode = `#${hexR}${hexG}${hexB}`;

  return colorCode;
};

export const awards = [
  // {
  //   title: "Strategic Planning for Business Success",
  //   description: "Webster University (U.S.A, Thailand Campus)",
  //   university: "university",
  //   country: "country",
  //   year: "2012",
  //   photo: StrategicPlanningforBusinessSuccess,
  //   order: "test",
  //   show_on_website: "test",
  // },
  {
    title: "Judges' Choice Award",
    description: "Webster University (U.S.A, Thailand Campus)",
    university: "university",
    country: "country",
    year: "2012",
    photo: StrategicPlanningforBusinessSuccess,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Outstanding International Student Recruitment Partner Award ",
    description: "KDU University (Malaysia)",
    university: "university",
    country: "country",
    year: "2015",
    photo: OutstandingInternationalStudentRecruitmentPartnerAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "The Most Outstanding Agent Award",
    description: "Webster University (U.S.A., Thailand Campus)",
    university: "university",
    country: "country",
    year: "2014 - 2015",
    photo: TheMostOutstandingAgentAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best Performance Recruitment Partner Award",
    description: "PSB Academy (Singapore)",
    university: "university",
    country: "country",
    year: "2016",
    photo: BestPerformanceRecruitmentPartnerAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best Agency in ASEAN Award",
    description: "Webster University (U.S.A., Thailand Campus)",
    university: "university",
    country: "country",
    year: "2016",
    photo: BestAgencyinASEANAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best New Agent Award 2017",
    description: "SIM Global Education (Singapore)",
    university: "university",
    country: "country",
    year: "2017",
    photo: BestNewAgentAward2017,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best Performance Partner Award",
    description: "Taylor's University(Malaysia)",
    university: "university",
    country: "country",
    year: "2017",
    photo: BestPerformingPartner,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Singapore Education Specialist Certificate",
    description: "TMC Academy (Singapore)",
    university: "university",
    country: "country",
    year: "2017",
    photo: SingaporeEducationSpecialistCertificate,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Rising Star Award",
    description: "B.H.M.S (Switzerland)",
    university: "university",
    country: "country",
    year: "2017 - 2018",
    photo: RisingStarAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "The Excellence Award",
    description: "SIM Global Education (Singapore)",
    university: "university",
    country: "country",
    year: "2018",
    photo: TheExcellenceAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Appreciation Award",
    description: "PSB Academy (Singapore)",
    university: "university",
    country: "country",
    year: "2018",
    photo: AppreciationAward2018,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best Supportive Partner Award",
    description: "MDIS (Singapore Campus)",
    university: "university",
    country: "country",
    year: "2018",
    photo: BestSupportiveBusinessPartner,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "In Appreciation of Our Partnership",
    description: "Asia-University (Malaysia)",
    university: "university",
    country: "country",
    year: "2019",
    photo: InAppreciationofOurPartnership,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Appreciation Award",
    description: "B.H.M.S (Switzerland)",
    university: "university",
    country: "country",
    year: "2019",
    photo: AppreciationAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best Partnership",
    description: "James Cook University (Australia, Singapore Campus)",
    university: "university",
    country: "country",
    year: "2019",
    photo: BestPartnership2019,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Partnership Appreciation Award",
    description: "INTI International University Colleges (Malaysia)",
    university: "university",
    country: "country",
    year: "2020 - 2021",
    photo: PartnershipAppreciationAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "The Best Performing Partner in 2021",
    description: "James Cook University (Australia, Singapore Campus)",
    university: "university",
    country: "country",
    year: "2021",
    photo: TheBestPerformingPartnerin2021,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "10 Years Friendship Award",
    description: "Kaplan (Singapore)",
    university: "university",
    country: "country",
    year: "2021",
    photo: KaplanSingapore2021,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Top Agent Award",
    description: "Raffles",
    university: "university",
    country: "country",
    year: "2022",
    photo: TopAgentAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Excellent Performing Award",
    description: "Taylor's University(Malaysia)",
    university: "university",
    country: "country",
    year: "2021 - 2022",
    photo: ExcellentPerformingAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best Partnership Award",
    description: "MDIS (Singapore Campus)",
    university: "university",
    country: "country",
    year: "2023",
    photo: BestPartnerAwardMDIS,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best Uprising Partnership Award",
    description: "Nanyang institute of Management NIM (Singapore Campus)",
    university: "university",
    country: "country",
    year: "2023",
    photo: BestUprisingAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Best Performing Partner Award",
    description: "James Cook University (Australia, Singapore Campus)",
    university: "university",
    country: "country",
    year: "2023",
    photo: BestPerformingPartnerAward,
    order: "test",
    show_on_website: "test",
  },
  {
    title: "Top Recruitment Partner Award",
    description: "Tunku Abdul Rahman University of Management and Technology (Malaysia)",
    university: "university",
    country: "country",
    year: "2023-2024",
    photo: TopRecruitmentPartnerAward,
    order: "test",
    show_on_website: "test",
  },
];
