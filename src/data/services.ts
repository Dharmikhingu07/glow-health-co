import {
  Stethoscope,
  Thermometer,
  Droplets,
  HeartPulse,
  ClipboardCheck,
  Wind,
  Salad,
  Flower2,
  User,
  Accessibility,
  Video,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "general-consultation",
    title: "General Consultation",
    description: "Unhurried assessment of any new or ongoing health concern, with a clear plan you understand.",
    details:
      "A 20-minute consultation covering history, examination, diagnosis and next steps — including referrals or investigations only when they genuinely change treatment.",
    icon: Stethoscope,
  },
  {
    slug: "fever-infection",
    title: "Fever & Infection Treatment",
    description: "Rapid evaluation of fever, flu, dengue, typhoid and other common infections.",
    details:
      "Same-day slots for acute illness, point-of-care testing where useful, and careful antibiotic stewardship so you get treatment only when it will help.",
    icon: Thermometer,
  },
  {
    slug: "diabetes-management",
    title: "Diabetes Management",
    description: "Long-term blood sugar control through medication review, diet and regular monitoring.",
    details:
      "Quarterly HbA1c tracking, insulin and oral medication titration, foot and eye screening reminders, and practical dietary coaching for Indian meal patterns.",
    icon: Droplets,
  },
  {
    slug: "blood-pressure",
    title: "Blood Pressure Management",
    description: "Diagnosis and control of hypertension with lifestyle-first, medication-smart care.",
    details:
      "Home BP monitoring guidance, cardiovascular risk scoring, and stepwise medication adjustment aimed at the lowest effective dose.",
    icon: HeartPulse,
  },
  {
    slug: "preventive-checkups",
    title: "Preventive Health Checkups",
    description: "Annual health screening packages tailored to your age, family history and risk.",
    details:
      "Blood profile, ECG, BMI and lifestyle review followed by a detailed sit-down explanation of every result — not just a printed report.",
    icon: ClipboardCheck,
  },
  {
    slug: "respiratory-care",
    title: "Respiratory Care",
    description: "Asthma, COPD, chronic cough and allergy management with inhaler technique training.",
    details:
      "Spirometry referral where needed, seasonal allergy planning, and written action plans so you know exactly what to do during a flare-up.",
    icon: Wind,
  },
  {
    slug: "gastrointestinal-care",
    title: "Gastrointestinal Care",
    description: "Acidity, IBS, constipation and liver health assessed and managed conservatively.",
    details:
      "Structured evaluation of digestive symptoms, dietary trial plans, and early identification of red flags requiring gastroenterology referral.",
    icon: Salad,
  },
  {
    slug: "womens-health",
    title: "Women's General Health",
    description: "Anaemia, thyroid, PCOS support, menopause guidance and general wellbeing.",
    details:
      "A comfortable, private space for concerns that often go unaddressed, with coordinated referrals to gynaecology when specialist input is needed.",
    icon: Flower2,
  },
  {
    slug: "mens-health",
    title: "Men's Health Consultation",
    description: "Cardiac risk, cholesterol, stress, sleep and lifestyle-related conditions.",
    details:
      "Practical screening for the conditions men present with late — hypertension, fatty liver, diabetes and burnout — plus honest lifestyle conversation.",
    icon: User,
  },
  {
    slug: "elderly-care",
    title: "Elderly Care",
    description: "Gentle, coordinated care for seniors, including medication review and mobility support.",
    details:
      "Polypharmacy simplification, fall-risk assessment, vaccination scheduling and home-visit coordination for patients with limited mobility.",
    icon: Accessibility,
  },
  {
    slug: "teleconsultation",
    title: "Teleconsultation",
    description: "Secure video or phone consultations for follow-ups, reports and minor illness.",
    details:
      "Book a slot, join from home, and receive a digital prescription within minutes. Ideal for report reviews and repeat medication.",
    icon: Video,
  },
  {
    slug: "health-counseling",
    title: "Health Counseling",
    description: "Nutrition, sleep, stress, smoking cessation and habit-change support.",
    details:
      "Longer counselling sessions focused on the everyday behaviours that drive most chronic disease, with realistic, step-by-step goals.",
    icon: MessagesSquare,
  },
];
