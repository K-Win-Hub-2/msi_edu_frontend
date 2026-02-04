// import AwardOne from "@/assets/img/home/Awards/SpaceEggActivity.png";
// import SpaceEggActivity from "@/assets/img/home/Awards/SpaceEggActivity.png";
// import AppreciationAward from "@/assets/img/home/Awards/AppreciationAward.png";
// import AppreciationAward2018 from "@/assets/img/home/Awards/AppreciationAward2018.png";
// import BestAgencyinASEANAward from "@/assets/img/home/Awards/BestAgencyinASEANAward.png";
// import BestNewAgentAward2017 from "@/assets/img/home/Awards/BestNewAgentAward2017.png";
// import BestPartnership2019 from "@/assets/img/home/Awards/BestPartnership2019.png";
// import BestPerformanceRecruitmentPartnerAward from "@/assets/img/home/Awards/BestPerformanceRecruitmentPartnerAward.png";
// import BestPerformingPartner from "@/assets/img/home/Awards/BestPerformingPartner.png";
// import BestSupportiveBusinessPartner from "@/assets/img/home/Awards/BestSupportiveBusinessPartner.png";
// import ExcellentPerformingAward from "@/assets/img/home/Awards/ExcellentPerformingAward.png";
// import InAppreciationofOurPartnership from "@/assets/img/home/Awards/InAppreciationofOurPartnership.png";
// import KaplanSingapore2021 from "@/assets/img/home/Awards/KaplanSingapore2021.png";
// import OutstandingInternationalStudentRecruitmentPartnerAward from "@/assets/img/home/Awards/OutstandingInternationalStudentRecruitmentPartnerAward.png";
// import RisingStarAward from "@/assets/img/home/Awards/RisingStarAward.png";
// import StrategicPlanningforBusinessSuccess from "@/assets/img/home/Awards/StrategicPlanningforBusinessSuccess.png";
// import TheBestPerformingPartnerin2021 from "@/assets/img/home/Awards/TheBestPerformingPartnerin2021.png";
// import TheExcellenceAward from "@/assets/img/home/Awards/TheExcellenceAward.png";
// import TheMostOutstandingAgentAward from "@/assets/img/home/Awards/TheMostOutstandingAgentAward.png";
// import TopAgentAward from "@/assets/img/home/Awards/TopAgentAward.png";
// import SingaporeEducationSpecialistCertificate from "@/assets/img/home/Awards/SingaporeEducationSpecialistCertificate.png";
// import PartnershipAppreciationAward from "@/assets/img/home/Awards/PartnershipAppreciationAward.png";
// import BestPartnerAwardMDIS from "@/assets/img/home/Awards/BestPartnerAwardMDIS.png";
// import BestUprisingAward from "@/assets/img/home/Awards/BestUprisingAward.png";
// import BestPerformingPartnerAward from "@/assets/img/home/Awards/BestPerformingPartnerAward.png";
// import TopRecruitmentPartnerAward from "@/assets/img/home/Awards/TopRecruitmentPartnerAward.png";
// import BestCollaborationAward from "@/assets/img/home/Awards/BestCollaborationAward.png";
// import BestPerformingAward from "@/assets/img/home/Awards/BestPerformingAward.png";
import img1 from "@/assets/img/home/Awards3/1.png";
import img2 from "@/assets/img/home/Awards3/2.png";
import img3 from "@/assets/img/home/Awards3/3.png";
import img4 from "@/assets/img/home/Awards3/4.png";
import img5 from "@/assets/img/home/Awards3/5.png";
import img6 from "@/assets/img/home/Awards3/6.png";
import img7 from "@/assets/img/home/Awards3/7.png";
import img8 from "@/assets/img/home/Awards3/8.png";
import img9 from "@/assets/img/home/Awards3/9.png";
import img10 from "@/assets/img/home/Awards3/10.png";
import img11 from "@/assets/img/home/Awards3/11.png";
import img12 from "@/assets/img/home/Awards3/12.png";
import img13 from "@/assets/img/home/Awards3/13.png";
import img14 from "@/assets/img/home/Awards3/14.png";
import img15 from "@/assets/img/home/Awards3/15.png";
import img16 from "@/assets/img/home/Awards3/16.png";
import img17 from "@/assets/img/home/Awards3/17.png";
import img18 from "@/assets/img/home/Awards3/18.png";
import img19 from "@/assets/img/home/Awards3/19.png";
import img20 from "@/assets/img/home/Awards3/20.png";
import img21 from "@/assets/img/home/Awards3/21.png";
import img22 from "@/assets/img/home/Awards3/22.png";
import img23 from "@/assets/img/home/Awards3/23.png";
import img24 from "@/assets/img/home/Awards3/24.png";
import img25 from "@/assets/img/home/Awards3/25.png";
import img26 from "@/assets/img/home/Awards3/26.png";



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
  {
    title: "Judges's Choice Award \"Strategic Planning for Business Success\"",
    description: "Webster University (U.S.A., Thailand Campus)",
    university: "Webster University",
    country: "U.S.A. and Thailand",
    year: "2012",
    photo: img1,
    order: "1",
    show_on_website: "yes",
  },
  {
    title: "Outstanding International Student Recruitment Partner Award",
    description: "KDU University (Malaysia)",
    university: "KDU University",
    country: "Malaysia",
    year: "2015",
    photo: img2,
    order: "2",
    show_on_website: "yes",
  },
  {
    title: "The Most Outstanding Agent Award",
    description: "Webster University (U.S.A., Thailand Campus)",
    university: "Webster University",
    country: "U.S.A. and Thailand",
    year: "2015",
    photo: img3,
    order: "3",
    show_on_website: "yes",
  },
  {
    title: "Best Performance Recruitment Partner Award",
    description: "PSB Academy (Singapore)",
    university: "PSB Academy",
    country: "Singapore",
    year: "2016",
    photo: img4,
    order: "4",
    show_on_website: "yes",
  },
  {
    title: "Best Agency in ASEAN Award",
    description: "Webster University (U.S.A., Thailand Campus)",
    university: "Webster University",
    country: "U.S.A. and Thailand",
    year: "2016",
    photo: img5,
    order: "5",
    show_on_website: "yes",
  },
  {
    title: "Best New Agent Award",
    description: "SIM Global Education (Singapore)",
    university: "SIM Global Education",
    country: "Singapore",
    year: "2017",
    photo: img6,
    order: "6",
    show_on_website: "yes",
  },
  {
    title: "Best Performing Partner Award",
    description: "Taylor's University (Malaysia)",
    university: "Taylor's University",
    country: "Malaysia",
    year: "2017",
    photo: img7,
    order: "7",
    show_on_website: "yes",
  },
  {
    title: "Singapore Education Specialist Certificate",
    description: "TMC Academy (Singapore)",
    university: "TMC Academy",
    country: "Singapore",
    year: "2017",
    photo: img8,
    order: "8",
    show_on_website: "yes",
  },
  {
    title: "Rising Star Award",
    description: "B.H.M.S (Switzerland)",
    university: "B.H.M.S",
    country: "Switzerland",
    year: "2017/2018",
    photo: img9,
    order: "9",
    show_on_website: "yes",
  },
  {
    title: "The Excellence Award",
    description: "SIM Global Education (Singapore)",
    university: "SIM Global Education",
    country: "Singapore",
    year: "2018",
    photo: img10,
    order: "10",
    show_on_website: "yes",
  },
  {
    title: "Appreciation Award",
    description: "PSB Academy (Singapore)",
    university: "PSB Academy",
    country: "Singapore",
    year: "2018",
    photo: img11,
    order: "11",
    show_on_website: "yes",
  },
  {
    title: "Best Supportive Business Partner Award",
    description: "MDIS (Singapore Campus)",
    university: "MDIS",
    country: "Singapore",
    year: "2018",
    photo: img12,
    order: "12",
    show_on_website: "yes",
  },
  {
    title: "In Appreciation of Our Partnership Award",
    description: "Asia Pacific University (Malaysia)",
    university: "Asia Pacific University",
    country: "Malaysia",
    year: "2019",
    photo: img13,
    order: "13",
    show_on_website: "yes",
  },
  {
    title: "Appreciation Award",
    description: "B.H.M.S (Switzerland)",
    university: "B.H.M.S",
    country: "Switzerland",
    year: "2019",
    photo: img14,
    order: "14",
    show_on_website: "yes",
  },
  {
    title: "Best Partnership Award",
    description: "James Cook University (Australia, Singapore Campus)",
    university: "James Cook University",
    country: "Singapore",
    year: "2019",
    photo: img15,
    order: "15",
    show_on_website: "yes",
  },
  {
    title: "Partner Appreciation Award",
    description: "INTI International University Colleges (Malaysia)",
    university: "INTI International University Colleges",
    country: "Malaysia",
    year: "2020/2021",
    photo: img16,
    order: "16",
    show_on_website: "yes",
  },
  {
    title: "The Best Performing Partner in 2021",
    description: "James Cook University (Australia, Singapore Campus)",
    university: "James Cook University",
    country: "Singapore",
    year: "2021",
    photo: img17,
    order: "17",
    show_on_website: "yes",
  },
  {
    title: "10 Years Friendship Award",
    description: "Kaplan (Singapore)",
    university: "Kaplan",
    country: "Singapore",
    year: "2021",
    photo: img18,
    order: "18",
    show_on_website: "yes",
  },
  {
    title: "Top Agent Award",
    description: "Raffles",
    university: "Raffles",
    country: "Singapore, Thailand",
    year: "2022",
    photo: img19,
    order: "19",
    show_on_website: "yes",
  },
  {
    title: "Excellent Performing Award",
    description: "Taylor's University (Malaysia)",
    university: "Taylor's University",
    country: "Malaysia",
    year: "2021-2022",
    photo: img20,
    order: "20",
    show_on_website: "yes",
  },
  {
    title: "Best Partnership Award",
    description: "MDIS (Singapore Campus)",
    university: "MDIS",
    country: "Singapore",
    year: "2023",
    photo: img21,
    order: "21",
    show_on_website: "yes",
  },
  {
    title: "Best Uprising Partnership Award",
    description: "Nanyang Institute of Management (Singapore)",
    university: "Nanyang Institute of Management",
    country: "Singapore",
    year: "2023",
    photo: img22,
    order: "22",
    show_on_website: "yes",
  },
  {
    title: "Best Performing Partner Award",
    description: "James Cook University (Australia, Singapore Campus)",
    university: "James Cook University",
    country: "Singapore",
    year: "2023",
    photo: img23,
    order: "23",
    show_on_website: "yes",
  },
  {
    title: "Top Recruitment Partner Award",
    description: "Tunku Abdul Rahman University of Management and Technology",
    university: "TAR UMT",
    country: "Malaysia",
    year: "2023-2024",
    photo: img24,
    order: "24",
    show_on_website: "yes",
  },
  {
    title: "Best Performing Partner Award",
    description: "James Cook University (Australia, Singapore Campus)",
    university: "James Cook University",
    country: "Singapore",
    year: "2024",
    photo: img25,
    order: "25",
    show_on_website: "yes",
  },
  {
    title: "Best Collaboration and Partnership Excellence Award",
    description: "Tunku Abdul Rahman University of Management and Technology",
    university: "TAR UMT",
    country: "Malaysia",
    year: "2024-2025",
    photo: img26,
    order: "26",
    show_on_website: "yes",
  }
];