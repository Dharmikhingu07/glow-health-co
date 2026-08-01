import {
  ShieldCheck,
  Clock4,
  HeartHandshake,
  BadgeIndianRupee,
  type LucideIcon,
} from "lucide-react";

export type Stat = { label: string; value: number; suffix: string };

export const stats: Stat[] = [
  { label: "Patients treated", value: 1500, suffix: "+" },
  { label: "Years of experience", value: 2, suffix: "+" },
  { label: "Consultations delivered", value: 5000, suffix: "+" },
  { label: "Patient satisfaction", value: 98, suffix: "%" },
];

export type Reason = { title: string; description: string; icon: LucideIcon };

export const reasons: Reason[] = [
  {
    title: "Evidence-based care",
    description:
      "Every prescription follows current clinical guidelines. No unnecessary antibiotics, no unnecessary tests.",
    icon: ShieldCheck,
  },
  {
    title: "On-time appointments",
    description:
      "Slots are capped daily so consultations start close to schedule and never feel rushed.",
    icon: Clock4,
  },
  {
    title: "One doctor, continuous care",
    description:
      "You see Dr. Kasariya every visit, so your history is known and your treatment stays consistent.",
    icon: HeartHandshake,
  },
  {
    title: "Transparent pricing",
    description:
      "Consultation fees are published upfront, with no hidden charges for follow-ups within 7 days.",
    icon: BadgeIndianRupee,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Deshpande",
    role: "Patient since 2024",
    quote:
      "Dr. Kasariya spent twenty minutes explaining my thyroid reports instead of handing me a prescription and moving on. I have never felt rushed at this clinic.",
    rating: 5,
  },
  {
    name: "Mahesh Iyer",
    role: "Diabetes care",
    quote:
      "My HbA1c dropped from 9.1 to 6.4 in a year. The diet plan was built around what my family actually cooks, which made it possible to stick to.",
    rating: 5,
  },
  {
    name: "Farah Qureshi",
    role: "Teleconsultation patient",
    quote:
      "I booked a video consult at 9pm for my son's fever and had a prescription in ten minutes. Follow-up call the next morning came without me asking.",
    rating: 5,
  },
  {
    name: "Ramesh Nair",
    role: "Elderly care, age 74",
    quote:
      "He reduced my medicines from nine tablets to five and wrote the schedule on a chart for me. My blood pressure has been steady ever since.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Preventive checkup",
    quote:
      "The annual checkup caught early anaemia I had no symptoms of. Clear explanation, sensible treatment, no scare tactics or extra packages sold.",
    rating: 5,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Walk-ins are welcome during clinic hours, but booked appointments are always seen first. Booking online takes under a minute and guarantees a specific time slot.",
  },
  {
    question: "What is the consultation fee?",
    answer:
      "An in-clinic consultation is ₹600 and a teleconsultation is ₹400. Follow-up visits within 7 days for the same complaint are free of charge.",
  },
  {
    question: "Do you offer online or video consultations?",
    answer:
      "Yes. Teleconsultations are available every day, including Sunday mornings. You will receive a secure video link and a digital prescription after the call.",
  },
  {
    question: "Which conditions should I see a General Physician for?",
    answer:
      "Fever, infections, fatigue, digestive problems, blood pressure, diabetes, respiratory issues and general health concerns. If specialist care is needed, you will be referred with a full summary.",
  },
  {
    question: "How long does a consultation take?",
    answer:
      "First consultations are scheduled for 20 minutes and follow-ups for 10 to 15 minutes. Complex or chronic reviews are given a longer slot on request.",
  },
  {
    question: "Do you accept health insurance or cashless claims?",
    answer:
      "Outpatient consultations are self-pay, and a detailed invoice is provided for reimbursement. We assist with paperwork for insurers that cover OPD benefits.",
  },
  {
    question: "Can I get my reports reviewed without a new consultation?",
    answer:
      "Yes. Report reviews can be done over a short teleconsultation, which is particularly convenient for annual checkups and routine blood work.",
  },
];

export const values = [
  {
    title: "Listen first",
    description:
      "Diagnosis begins with the story. Consultations are built around unhurried conversation, not a checklist.",
  },
  {
    title: "Treat conservatively",
    description:
      "The simplest safe treatment wins. Tests and medicines are ordered only when they change the outcome.",
  },
  {
    title: "Explain everything",
    description:
      "You leave knowing what you have, why it happened, what the plan is, and what warning signs to watch for.",
  },
  {
    title: "Stay reachable",
    description:
      "Questions after the visit are part of the care. Message the clinic and you will get a reply the same day.",
  },
];

export const milestones = [
  { year: "2022", text: "Completed MBBS and began internship in municipal hospitals across Gujarat." },
  { year: "2023", text: "Completed housemanship and joined a busy primary care centre in Surat." },
  { year: "2024", text: "Opened Medira Clinic in Adajan as a single-doctor, unhurried primary care practice." },
  { year: "2025", text: "Crossed 1,500 patients treated and introduced Sunday morning teleconsultations." },
];

export type Step = { title: string; description: string };

export const visitSteps: Step[] = [
  {
    title: "Book your slot",
    description:
      "Request a time online or by phone. The clinic confirms by call within an hour during working hours.",
  },
  {
    title: "Consultation",
    description:
      "A 20-minute unhurried consultation: history, examination, and a diagnosis explained in plain language.",
  },
  {
    title: "Plan & prescription",
    description:
      "You leave with a written plan, a conservative prescription, and clear warning signs to watch for.",
  },
  {
    title: "Follow-up",
    description:
      "A follow-up within 7 days is free. Reports can be reviewed over a short teleconsultation.",
  },
];

export type PriceItem = { item: string; price: string; note: string };

export const pricing: PriceItem[] = [
  { item: "General consultation", price: "₹600", note: "20 minutes, in-clinic" },
  { item: "Teleconsultation", price: "₹400", note: "Video or phone, 15 minutes" },
  { item: "Follow-up within 7 days", price: "Free", note: "Same complaint" },
  { item: "Preventive health checkup", price: "₹1,200", note: "Consultation + report review" },
  { item: "Chronic care review", price: "₹500", note: "Diabetes / blood pressure, quarterly" },
  { item: "Home visit (Adajan area)", price: "₹1,500", note: "Subject to availability" },
];

export const facilities = [
  "Air-conditioned waiting area with 8 seats",
  "On-site point-of-care testing (sugar, BP, SpO2, ECG)",
  "Digital prescriptions and records",
  "Wheelchair-accessible entrance",
  "Sample collection tie-up with a NABL lab",
  "UPI, card and cash payments accepted",
];

export const expertiseAreas = [
  "Fever, flu and seasonal infections",
  "Type 2 diabetes and pre-diabetes",
  "Hypertension and cardiovascular risk",
  "Thyroid and lipid disorders",
  "Asthma and chronic cough",
  "Digestive and acidity complaints",
  "Preventive health screening",
  "Elderly medication review",
];
