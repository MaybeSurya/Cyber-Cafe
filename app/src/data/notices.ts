// src/data/notices.ts
import type { Notice } from "./types";

export const notices: Notice[] = [
  {
    id: "notice-rates",
    type: "laminated",
    content: "RATE CHART",
    subtext: "Browsing  ₹30/hr\nPrint B&W  ₹2/pg\nPrint Col  ₹10/pg\nScan       ₹10/doc\nCV Print   ₹20",
    rotation: -3,
    language: "en",
  },
  {
    id: "notice-no-smoking",
    type: "handwritten",
    content: "NO SMOKING!",
    subtext: "Fine Rs. 500/-\n\nManagement",
    rotation: 2,
    language: "en",
  },
  {
    id: "notice-no-pendrives",
    type: "sticky",
    content: "No Pendrives!!\nVirus warning",
    rotation: 5,
    language: "en",
  },
  {
    id: "notice-computer-class",
    type: "printed",
    content: "COMPUTER CLASSES\nADMISSION OPEN",
    subtext: "MS Office · Tally · DTP · Internet\n₹500 / month\nCall: 98XXXXXXXX",
    rotation: -1,
    language: "en",
  },
  {
    id: "notice-switch-off",
    type: "handwritten",
    content: "PLEASE DO NOT\nSWITCH OFF\nCOMPUTER",
    rotation: 3,
    language: "en",
  },
  {
    id: "notice-server-busy",
    type: "sticky",
    content: "PLEASE WAIT\nSERVER BUSY HAI",
    rotation: -4,
    language: "hinglish",
  },
  {
    id: "notice-no-food",
    type: "laminated",
    content: "NO FOOD\nNEAR COMPUTER",
    rotation: 1,
    language: "en",
  },
  {
    id: "notice-passport-photo",
    type: "printed",
    content: "PASSPORT SIZE PHOTO",
    subtext: "₹20 / 8 Copies\nSame Day Delivery",
    rotation: -2,
    language: "en",
  },
  {
    id: "notice-online-form",
    type: "laminated",
    content: "ONLINE FORM YAHAN\nBHARE JATE HAIN",
    subtext: "Govt. Forms · Bank Forms · Job Apply\n₹30 per form",
    rotation: 4,
    language: "hinglish",
  },
  {
    id: "notice-internet",
    type: "printed",
    content: "INTERNET",
    subtext: "BSNL BROADBAND\n100 Mbps LIMIT",
    rotation: 2,
    language: "en",
  },
];

export const getNoticeById = (id: string): Notice | undefined =>
  notices.find((n) => n.id === id);
