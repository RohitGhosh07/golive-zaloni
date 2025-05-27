// Import all member images
import rupjyotiPhukan from '../assets/PRESIDENT - RUPJYOTI PHUKAN -MNO 2030.jpg';
import dilipGoswami from '../assets/DILIP KUMAR GOSWAMI.jpg';
import dipKumarSaikia from '../assets/DIP KUMAR SAIKIA.jpg';
import pankajChetia from '../assets/PANKAJ KUMAR CHETIA.jpg';
import manabTamuly from '../assets/MANAB KALYAN TAMULY.jpg';
import drPnTaid from '../assets/DR PN TAID.jpg';
import pranjalNeog from '../assets/PRANJAL NEOG.jpg';
import biswajitBhattacharya from '../assets/BISWAJIT BHATTACHARYA.jpg';
import rupamBarua from '../assets/FC- RUPAM BARUA.jpg';
import madhurjyaBarua from '../assets/MADHURJYA BARUA.jpg';
import shakeelIntaz from '../assets/SHAKEEL INTAZ.jpg';

export interface CommitteeMember {
  name: string;
  designation: string;
  photo: string;
}

export const committeeMembers: CommitteeMember[] = [
  {
    name: "Mr. RUPJYOTI PHUKAN",
    designation: "PRESIDENT",
    photo: rupjyotiPhukan
  },
  {
    name: "Mr. DILIP KR GOSWAMI",
    designation: "VICE PRESIDENT",
    photo: dilipGoswami
  },
  {
    name: "Mr. DIP KUMAR SAIKIA",
    designation: "HONY. GENERAL SECRETARY",
    photo: dipKumarSaikia
  },
  {
    name: "Mr. PANKAJ KR CHETIA",
    designation: "HONY ENT SECRETARY",
    photo: pankajChetia
  },
  {
    name: "Mr. MANAB KALYAN TAMULY",
    designation: "HONY TREASURER",
    photo: manabTamuly
  },
  {
    name: "Mr. MADHURJYA BARUA",
    designation: "EC MEMBER",
    photo: madhurjyaBarua
  },
  {
    name: "Mr. PRAKASH DEKA",
    designation: "EC MEMBER",
    photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" // No matching image found
  },
  {
    name: "Mr. GAURANGA BORGOHAIN",
    designation: "EC MEMBER",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" // No matching image found
  },
  {
    name: "Mr. MALAY KUMAR DAS",
    designation: "EC MEMBER",
    photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" // No matching image found
  },
  {
    name: "Mr. SHAKEEL INTAZ",
    designation: "EC MEMBER",
    photo: shakeelIntaz
  },
  {
    name: "Mr. DIP KUMAR SAIKIA",
    designation: "HONY. GENERAL SECRETARY",
    photo: dipKumarSaikia
  },
  {
    name: "Mr. PANKAJ KR CHETIA",
    designation: "HONY ENT SECRETARY",
    photo: pankajChetia
  },
  {
    name: "Mr. MANAB KALYAN TAMULY",
    designation: "HONY TREASURER",
    photo: manabTamuly
  },
  {
    name: "Mr. PADMA NATH TAID",
    designation: "HONY GOLF SECRETARY",
    photo: drPnTaid
  },
  {
    name: "Mr. PRANJAL NEOG",
    designation: "HONY ANNEXE SECRETARY",
    photo: pranjalNeog
  },
  {
    name: "Mr. BISWAJIT BHATTACHARJEE",
    designation: "HONY TENNIS SECRETARY",
    photo: biswajitBhattacharya
  },
  // EC Members
  {
    name: "Mr. RUPAM BARUA",
    designation: "EC MEMBER",
    photo: rupamBarua
  },
  {
    name: "Mr. MADHURJYA BARUA",
    designation: "EC MEMBER",
    photo: madhurjyaBarua
  },
  {
    name: "Mr. SHAKEEL INTAZ",
    designation: "EC MEMBER",
    photo: shakeelIntaz
  }
];