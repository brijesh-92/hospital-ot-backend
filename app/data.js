// ─── BEDS ───────────────────────────────────────────────────────────────────
export const beds = [
  { bed_id: "BED-101", ward: "Surgical ICU",    type: "ICU",     status: "available",   patient: null },
  { bed_id: "BED-102", ward: "Surgical ICU",    type: "ICU",     status: "occupied",    patient: "P-2291" },
  { bed_id: "BED-103", ward: "Surgical ICU",    type: "ICU",     status: "available",   patient: null },
  { bed_id: "BED-201", ward: "General Surgery", type: "General", status: "available",   patient: null },
  { bed_id: "BED-202", ward: "General Surgery", type: "General", status: "available",   patient: null },
  { bed_id: "BED-203", ward: "General Surgery", type: "General", status: "maintenance", patient: null },
  { bed_id: "BED-301", ward: "Cardiac Care",    type: "Cardiac", status: "available",   patient: null },
  { bed_id: "BED-302", ward: "Cardiac Care",    type: "Cardiac", status: "occupied",    patient: "P-3342" },
  { bed_id: "BED-401", ward: "Orthopaedics",    type: "General", status: "available",   patient: null },
  { bed_id: "BED-402", ward: "Orthopaedics",    type: "General", status: "available",   patient: null },
  { bed_id: "BED-501", ward: "Neuro Surgery",   type: "General", status: "available",   patient: null },
  { bed_id: "BED-502", ward: "Neuro Surgery",   type: "General", status: "occupied",    patient: "P-4421" },
];

// ─── SURGEONS ────────────────────────────────────────────────────────────────
export const surgeons = [
  {
    surgeon_id: "SUR-001",
    name: "Dr. Suresh Iyer",
    short_name: "Dr. S. Iyer",
    specialty: "General Surgery",
    degrees: "MBBS, MS (General Surgery), FACS",
    experience_years: 18,
    designation: "Senior Consultant — General Surgery",
    contact: "suresh.iyer@citygeneral.in",
    available: true,
  },
  {
    surgeon_id: "SUR-002",
    name: "Dr. Ramesh Sharma",
    short_name: "Dr. R. Sharma",
    specialty: "Orthopaedics",
    degrees: "MBBS, MS (Orthopaedics), DNB, FRCS (Orth)",
    experience_years: 22,
    designation: "HOD & Chief Orthopaedic Surgeon",
    contact: "ramesh.sharma@citygeneral.in",
    available: true,
  },
  {
    surgeon_id: "SUR-003",
    name: "Dr. Vikram Reddy",
    short_name: "Dr. V. Reddy",
    specialty: "Cardiac Surgery",
    degrees: "MBBS, MCh (Cardiothoracic Surgery), FRCS (CTh)",
    experience_years: 25,
    designation: "Senior Cardiothoracic Surgeon",
    contact: "vikram.reddy@citygeneral.in",
    available: true,
  },
  {
    surgeon_id: "SUR-004",
    name: "Dr. Krishna Menon",
    short_name: "Dr. K. Menon",
    specialty: "Cardiac Surgery",
    degrees: "MBBS, MCh (Cardiothoracic Surgery), FACC",
    experience_years: 20,
    designation: "Consultant Cardiac Surgeon",
    contact: "krishna.menon@citygeneral.in",
    available: true,
  },
  {
    surgeon_id: "SUR-005",
    name: "Dr. Anand Gupta",
    short_name: "Dr. A. Gupta",
    specialty: "General Surgery",
    degrees: "MBBS, MS (General Surgery), FMAS, FIAGES",
    experience_years: 14,
    designation: "Consultant Laparoscopic Surgeon",
    contact: "anand.gupta@citygeneral.in",
    available: true,
  },
  {
    surgeon_id: "SUR-006",
    name: "Dr. Pradeep Iyer",
    short_name: "Dr. P. Iyer",
    specialty: "General Surgery",
    degrees: "MBBS, MS (General Surgery), DNB",
    experience_years: 10,
    designation: "Consultant General Surgeon",
    contact: "pradeep.iyer@citygeneral.in",
    available: true,
  },
  {
    surgeon_id: "SUR-007",
    name: "Dr. Neha Patel",
    short_name: "Dr. N. Patel",
    specialty: "Neuro Surgery",
    degrees: "MBBS, MCh (Neurosurgery), FRCS (Neuro.Surg)",
    experience_years: 16,
    designation: "Senior Neurosurgeon",
    contact: "neha.patel@citygeneral.in",
    available: true,
  },
  {
    surgeon_id: "SUR-008",
    name: "Dr. Rohan Patel",
    short_name: "Dr. R. Patel",
    specialty: "Orthopaedics",
    degrees: "MBBS, MS (Orthopaedics), Fellowship in Joint Replacement",
    experience_years: 12,
    designation: "Consultant Joint Replacement Surgeon",
    contact: "rohan.patel@citygeneral.in",
    available: false,
  },
];

// ─── ANESTHESIOLOGISTS ───────────────────────────────────────────────────────
export const anesthesiologists = [
  { id: "ANS-001", name: "Dr. Priya Nair",    specialization: "Cardiac Anesthesia",     status: "available", shift: "Morning",   contact: "priya.nair@citygeneral.in" },
  { id: "ANS-002", name: "Dr. Rajan Mehta",   specialization: "Neuro Anesthesia",       status: "available", shift: "Morning",   contact: "rajan.mehta@citygeneral.in" },
  { id: "ANS-003", name: "Dr. Sunita Sharma", specialization: "Pediatric Anesthesia",   status: "on_leave",  shift: "N/A",       contact: "sunita.sharma@citygeneral.in" },
  { id: "ANS-004", name: "Dr. Vikram Bose",   specialization: "General Anesthesia",     status: "available", shift: "Afternoon", contact: "vikram.bose@citygeneral.in" },
  { id: "ANS-005", name: "Dr. Amrita Desai",  specialization: "Orthopaedic Anesthesia", status: "in_ot",     shift: "Morning",   contact: "amrita.desai@citygeneral.in" },
  { id: "ANS-006", name: "Dr. Karan Verma",   specialization: "General Anesthesia",     status: "available", shift: "Afternoon", contact: "karan.verma@citygeneral.in" },
];

// ─── EQUIPMENT ───────────────────────────────────────────────────────────────
export const equipment = [
  { equipment_id: "EQ-001", name: "Laparoscopic Tower",      category: "Surgical",   status: "available",   ot_assigned: null,   last_serviced: "2026-05-10" },
  { equipment_id: "EQ-002", name: "C-Arm Fluoroscopy",       category: "Imaging",    status: "in_use",      ot_assigned: "OT-2", last_serviced: "2026-04-22" },
  { equipment_id: "EQ-003", name: "Cardiac Bypass Machine",  category: "Cardiac",    status: "available",   ot_assigned: null,   last_serviced: "2026-06-01" },
  { equipment_id: "EQ-004", name: "Anaesthesia Workstation", category: "Anesthesia", status: "available",   ot_assigned: null,   last_serviced: "2026-05-28" },
  { equipment_id: "EQ-005", name: "Robotic Surgical System", category: "Surgical",   status: "maintenance", ot_assigned: null,   last_serviced: "2026-03-15" },
  { equipment_id: "EQ-006", name: "Arthroscopy Set",         category: "Ortho",      status: "available",   ot_assigned: null,   last_serviced: "2026-05-20" },
  { equipment_id: "EQ-007", name: "Neuro Navigation System", category: "Neuro",      status: "available",   ot_assigned: null,   last_serviced: "2026-06-10" },
  { equipment_id: "EQ-008", name: "Patient Monitor (Multi)", category: "Monitoring", status: "available",   ot_assigned: null,   last_serviced: "2026-06-05" },
];

// ─── DYNAMIC OT SLOTS (generated from today, next 21 days) ──────────────────
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatDate(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function formatDateDisplay(d) {
  return `${WEEKDAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// Daily slot templates — 4 slots/day rotating across OT rooms & specialties
const DAILY_TEMPLATES = [
  { ot_room: "OT-1", time: "08:00", time_end: "10:00", duration_mins: 120, specialty: "General Surgery" },
  { ot_room: "OT-2", time: "09:30", time_end: "12:30", duration_mins: 180, specialty: "Cardiac Surgery" },
  { ot_room: "OT-3", time: "10:30", time_end: "11:30", duration_mins: 60,  specialty: "Neuro Surgery" },
  { ot_room: "OT-4", time: "13:00", time_end: "15:00", duration_mins: 120, specialty: "Orthopaedics" },
];

function generateSlots() {
  const slots = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let counter = 1;

  for (let day = 0; day < 21; day++) {
    const d = new Date(today);
    d.setDate(today.getDate() + day);
    for (const tpl of DAILY_TEMPLATES) {
      slots.push({
        slot_id: `SLOT-${String(counter).padStart(3, "0")}`,
        ot_room: tpl.ot_room,
        date: formatDate(d),
        date_display: formatDateDisplay(d),
        time: tpl.time,
        time_end: tpl.time_end,
        duration_mins: tpl.duration_mins,
        status: "available",
        specialty: tpl.specialty,
        booked_by: null,
      });
      counter++;
    }
  }

  // Day 1 (today): mark 2 slots booked, linked to the 2 seed bookings below
  slots[1].status = "booked"; // SLOT-002 (OT-2, Cardiac) → Vikram Joshi
  slots[1].booked_by = "Dr. K. Menon";
  slots[3].status = "booked"; // SLOT-004 (OT-4, Orthopaedics) → Anita Singh
  slots[3].booked_by = "Dr. R. Sharma";

  return slots;
}

export const otSlots = generateSlots();

// ─── PATIENTS ────────────────────────────────────────────────────────────────
export const patients = [
  { patient_id: "P-1001", name: "Rajesh Kumar",       age: 54, blood_group: "B+",  procedure: "Appendectomy",      surgeon: "Dr. S. Iyer",   status: "pre_op",  ward: "General Surgery", allergies: ["Penicillin"], fasting: true,  mrn: "MRN-10010" },
  { patient_id: "P-1002", name: "Rajesh Mehta",       age: 38, blood_group: "O+",  procedure: "Hernia Repair",     surgeon: "Dr. A. Gupta",  status: "ready",   ward: "General Surgery", allergies: [],             fasting: true,  mrn: "MRN-10011" },
  { patient_id: "P-1003", name: "Rajesh Nair",        age: 62, blood_group: "A-",  procedure: "Cholecystectomy",   surgeon: "Dr. S. Iyer",   status: "pre_op",  ward: "General Surgery", allergies: ["Sulfa"],      fasting: true,  mrn: "MRN-10012" },
  { patient_id: "P-2001", name: "Priya Desai",        age: 45, blood_group: "AB+", procedure: "Knee Replacement",  surgeon: "Dr. R. Sharma", status: "in_ot",   ward: "Orthopaedics",    allergies: [],             fasting: true,  mrn: "MRN-20010" },
  { patient_id: "P-2002", name: "Priya Sharma",       age: 33, blood_group: "B-",  procedure: "Spinal Fusion",     surgeon: "Dr. R. Patel",  status: "pre_op",  ward: "Orthopaedics",    allergies: ["Aspirin"],    fasting: true,  mrn: "MRN-20011" },
  { patient_id: "P-3001", name: "Suresh Nair",        age: 67, blood_group: "A-",  procedure: "CABG",              surgeon: "Dr. V. Reddy",  status: "pre_op",  ward: "Cardiac Care",    allergies: ["Aspirin"],    fasting: true,  mrn: "MRN-30010" },
  { patient_id: "P-3002", name: "Suresh Patil",       age: 55, blood_group: "O+",  procedure: "Pacemaker Implant", surgeon: "Dr. K. Menon",  status: "ready",   ward: "Cardiac Care",    allergies: [],             fasting: false, mrn: "MRN-30011" },
  { patient_id: "P-4001", name: "Mohammed Iqbal",     age: 72, blood_group: "B-",  procedure: "Pacemaker Implant", surgeon: "Dr. K. Menon",  status: "post_op", ward: "Cardiac Care",    allergies: ["Sulfa"],      fasting: false, mrn: "MRN-40010" },
  { patient_id: "P-4002", name: "Mohammed Shaikh",    age: 48, blood_group: "A+",  procedure: "Craniotomy",        surgeon: "Dr. N. Patel",  status: "pre_op",  ward: "Neuro Surgery",   allergies: [],             fasting: true,  mrn: "MRN-40011" },
  { patient_id: "P-2291", name: "Anita Singh",        age: 45, blood_group: "AB+", procedure: "Knee Replacement",  surgeon: "Dr. R. Sharma", status: "in_ot",   ward: "Orthopaedics",    allergies: [],             fasting: true,  mrn: "MRN-22910" },
  { patient_id: "P-2292", name: "Anita Joshi",        age: 39, blood_group: "O-",  procedure: "Appendectomy",      surgeon: "Dr. S. Iyer",   status: "pre_op",  ward: "General Surgery", allergies: ["Penicillin"], fasting: true,  mrn: "MRN-22911" },
  { patient_id: "P-5001", name: "Sandeep Jadhav",     age: 52, blood_group: "B+",  procedure: "Cholecystectomy",   surgeon: "Dr. A. Gupta",  status: "pre_op",  ward: "General Surgery", allergies: [],             fasting: true,  mrn: "MRN-50010" },
  { patient_id: "P-5002", name: "Sandeep Kulkarni",   age: 44, blood_group: "A+",  procedure: "Hernia Repair",     surgeon: "Dr. P. Iyer",   status: "ready",   ward: "General Surgery", allergies: [],             fasting: true,  mrn: "MRN-50011" },
  { patient_id: "P-3342", name: "Vikram Joshi",       age: 72, blood_group: "B-",  procedure: "Pacemaker Implant", surgeon: "Dr. K. Menon",  status: "post_op", ward: "Cardiac Care",    allergies: ["Sulfa"],      fasting: false, mrn: "MRN-33420" },
  { patient_id: "P-4421", name: "Deepa Kulkarni",     age: 29, blood_group: "O+",  procedure: "Craniotomy",        surgeon: "Dr. N. Patel",  status: "pre_op",  ward: "Neuro Surgery",   allergies: [],             fasting: true,  mrn: "MRN-44210" },
  { patient_id: "P-6001", name: "Arun Mehta",         age: 61, blood_group: "AB-", procedure: "CABG",              surgeon: "Dr. V. Reddy",  status: "pre_op",  ward: "Cardiac Care",    allergies: ["Penicillin"], fasting: true,  mrn: "MRN-60010" },
];

// ─── DYNAMIC BOOKINGS (seeded on today's 2 booked slots) ────────────────────
function generateBookings() {
  const s2 = otSlots[1]; // today's OT-2 Cardiac slot (booked)
  const s4 = otSlots[3]; // today's OT-4 Orthopaedics slot (booked)

  return [
    {
      booking_id:          "BKG-SEED-0001",
      slot_id:             s4.slot_id,
      ot_room:             s4.ot_room,
      date:                s4.date,
      date_display:        s4.date_display,
      time:                s4.time,
      time_end:            s4.time_end,
      duration_mins:       s4.duration_mins,
      surgeon_name:        "Dr. Ramesh Sharma",
      patient_name:        "Anita Singh",
      patient_id:          "P-2291",
      procedure:           "Knee Replacement",
      anesthesiologist_id: "ANS-005",
      bed_id:              "BED-401",
      notes:               "Pre-op complete",
      booked_at:           new Date().toISOString(),
      status:              "confirmed",
    },
    {
      booking_id:          "BKG-SEED-0002",
      slot_id:             s2.slot_id,
      ot_room:             s2.ot_room,
      date:                s2.date,
      date_display:        s2.date_display,
      time:                s2.time,
      time_end:            s2.time_end,
      duration_mins:       s2.duration_mins,
      surgeon_name:        "Dr. Krishna Menon",
      patient_name:        "Vikram Joshi",
      patient_id:          "P-3342",
      procedure:           "Pacemaker Implant",
      anesthesiologist_id: "ANS-001",
      bed_id:              "BED-302",
      notes:               "Cardiac team on standby",
      booked_at:           new Date().toISOString(),
      status:              "confirmed",
    },
  ];
}

export const bookings = generateBookings();