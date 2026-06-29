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

// ─── OT SLOTS ────────────────────────────────────────────────────────────────
export const otSlots = [
  // June 29
  { slot_id: "SLOT-001", ot_room: "OT-1", date: "2026-06-29", date_display: "Mon, 29 June 2026", time: "08:00", time_end: "10:00", duration_mins: 120, status: "available", specialty: "General Surgery",  booked_by: null },
  { slot_id: "SLOT-002", ot_room: "OT-1", date: "2026-06-29", date_display: "Mon, 29 June 2026", time: "10:30", time_end: "12:00", duration_mins: 90,  status: "booked",    specialty: "Orthopaedics",    booked_by: "Dr. R. Sharma" },
  { slot_id: "SLOT-003", ot_room: "OT-2", date: "2026-06-29", date_display: "Mon, 29 June 2026", time: "08:00", time_end: "11:00", duration_mins: 180, status: "available", specialty: "Cardiac Surgery", booked_by: null },
  { slot_id: "SLOT-004", ot_room: "OT-2", date: "2026-06-29", date_display: "Mon, 29 June 2026", time: "12:00", time_end: "14:00", duration_mins: 120, status: "available", specialty: "General Surgery", booked_by: null },
  { slot_id: "SLOT-005", ot_room: "OT-3", date: "2026-06-29", date_display: "Mon, 29 June 2026", time: "09:00", time_end: "10:00", duration_mins: 60,  status: "available", specialty: "Neuro Surgery",   booked_by: null },
  { slot_id: "SLOT-006", ot_room: "OT-3", date: "2026-06-29", date_display: "Mon, 29 June 2026", time: "11:00", time_end: "12:30", duration_mins: 90,  status: "booked",    specialty: "General Surgery", booked_by: "Dr. P. Iyer" },
  // June 30
  { slot_id: "SLOT-007", ot_room: "OT-4", date: "2026-06-30", date_display: "Tue, 30 June 2026", time: "08:00", time_end: "10:00", duration_mins: 120, status: "available", specialty: "Orthopaedics",    booked_by: null },
  { slot_id: "SLOT-008", ot_room: "OT-4", date: "2026-06-30", date_display: "Tue, 30 June 2026", time: "10:30", time_end: "13:30", duration_mins: 180, status: "available", specialty: "Cardiac Surgery", booked_by: null },
  { slot_id: "SLOT-009", ot_room: "OT-1", date: "2026-06-30", date_display: "Tue, 30 June 2026", time: "08:00", time_end: "10:00", duration_mins: 120, status: "available", specialty: "General Surgery", booked_by: null },
  { slot_id: "SLOT-010", ot_room: "OT-2", date: "2026-06-30", date_display: "Tue, 30 June 2026", time: "11:00", time_end: "12:00", duration_mins: 60,  status: "available", specialty: "Neuro Surgery",   booked_by: null },
  // July 1
  { slot_id: "SLOT-011", ot_room: "OT-1", date: "2026-07-01", date_display: "Wed, 1 July 2026",  time: "08:00", time_end: "10:00", duration_mins: 120, status: "available", specialty: "General Surgery", booked_by: null },
  { slot_id: "SLOT-012", ot_room: "OT-2", date: "2026-07-01", date_display: "Wed, 1 July 2026",  time: "09:00", time_end: "12:00", duration_mins: 180, status: "available", specialty: "Cardiac Surgery", booked_by: null },
  { slot_id: "SLOT-013", ot_room: "OT-3", date: "2026-07-01", date_display: "Wed, 1 July 2026",  time: "10:00", time_end: "11:00", duration_mins: 60,  status: "available", specialty: "Orthopaedics",   booked_by: null },
  { slot_id: "SLOT-014", ot_room: "OT-4", date: "2026-07-01", date_display: "Wed, 1 July 2026",  time: "13:00", time_end: "15:00", duration_mins: 120, status: "available", specialty: "Neuro Surgery",   booked_by: null },
  // July 2
  { slot_id: "SLOT-015", ot_room: "OT-1", date: "2026-07-02", date_display: "Thu, 2 July 2026",  time: "08:00", time_end: "10:00", duration_mins: 120, status: "available", specialty: "General Surgery", booked_by: null },
  { slot_id: "SLOT-016", ot_room: "OT-2", date: "2026-07-02", date_display: "Thu, 2 July 2026",  time: "10:00", time_end: "13:00", duration_mins: 180, status: "available", specialty: "Cardiac Surgery", booked_by: null },
];

// ─── PATIENTS ────────────────────────────────────────────────────────────────
export const patients = [
  // Rajesh — multiple patients same first name
  { patient_id: "P-1001", name: "Rajesh Kumar",       age: 54, blood_group: "B+",  procedure: "Appendectomy",      surgeon: "Dr. S. Iyer",   status: "pre_op",  ward: "General Surgery", allergies: ["Penicillin"], fasting: true,  mrn: "MRN-10010" },
  { patient_id: "P-1002", name: "Rajesh Mehta",       age: 38, blood_group: "O+",  procedure: "Hernia Repair",     surgeon: "Dr. A. Gupta",  status: "ready",   ward: "General Surgery", allergies: [],             fasting: true,  mrn: "MRN-10011" },
  { patient_id: "P-1003", name: "Rajesh Nair",        age: 62, blood_group: "A-",  procedure: "Cholecystectomy",   surgeon: "Dr. S. Iyer",   status: "pre_op",  ward: "General Surgery", allergies: ["Sulfa"],      fasting: true,  mrn: "MRN-10012" },
  // Priya — multiple patients same first name
  { patient_id: "P-2001", name: "Priya Desai",        age: 45, blood_group: "AB+", procedure: "Knee Replacement",  surgeon: "Dr. R. Sharma", status: "in_ot",   ward: "Orthopaedics",    allergies: [],             fasting: true,  mrn: "MRN-20010" },
  { patient_id: "P-2002", name: "Priya Sharma",       age: 33, blood_group: "B-",  procedure: "Spinal Fusion",     surgeon: "Dr. R. Patel",  status: "pre_op",  ward: "Orthopaedics",    allergies: ["Aspirin"],    fasting: true,  mrn: "MRN-20011" },
  // Suresh
  { patient_id: "P-3001", name: "Suresh Nair",        age: 67, blood_group: "A-",  procedure: "CABG",              surgeon: "Dr. V. Reddy",  status: "pre_op",  ward: "Cardiac Care",    allergies: ["Aspirin"],    fasting: true,  mrn: "MRN-30010" },
  { patient_id: "P-3002", name: "Suresh Patil",       age: 55, blood_group: "O+",  procedure: "Pacemaker Implant", surgeon: "Dr. K. Menon",  status: "ready",   ward: "Cardiac Care",    allergies: [],             fasting: false, mrn: "MRN-30011" },
  // Mohammed
  { patient_id: "P-4001", name: "Mohammed Iqbal",     age: 72, blood_group: "B-",  procedure: "Pacemaker Implant", surgeon: "Dr. K. Menon",  status: "post_op", ward: "Cardiac Care",    allergies: ["Sulfa"],      fasting: false, mrn: "MRN-40010" },
  { patient_id: "P-4002", name: "Mohammed Shaikh",    age: 48, blood_group: "A+",  procedure: "Craniotomy",        surgeon: "Dr. N. Patel",  status: "pre_op",  ward: "Neuro Surgery",   allergies: [],             fasting: true,  mrn: "MRN-40011" },
  // Anita
  { patient_id: "P-2291", name: "Anita Singh",        age: 45, blood_group: "AB+", procedure: "Knee Replacement",  surgeon: "Dr. R. Sharma", status: "in_ot",   ward: "Orthopaedics",    allergies: [],             fasting: true,  mrn: "MRN-22910" },
  { patient_id: "P-2292", name: "Anita Joshi",        age: 39, blood_group: "O-",  procedure: "Appendectomy",      surgeon: "Dr. S. Iyer",   status: "pre_op",  ward: "General Surgery", allergies: ["Penicillin"], fasting: true,  mrn: "MRN-22911" },
  // Sandeep
  { patient_id: "P-5001", name: "Sandeep Jadhav",     age: 52, blood_group: "B+",  procedure: "Cholecystectomy",   surgeon: "Dr. A. Gupta",  status: "pre_op",  ward: "General Surgery", allergies: [],             fasting: true,  mrn: "MRN-50010" },
  { patient_id: "P-5002", name: "Sandeep Kulkarni",   age: 44, blood_group: "A+",  procedure: "Hernia Repair",     surgeon: "Dr. P. Iyer",   status: "ready",   ward: "General Surgery", allergies: [],             fasting: true,  mrn: "MRN-50011" },
  // Others
  { patient_id: "P-3342", name: "Vikram Joshi",       age: 72, blood_group: "B-",  procedure: "Pacemaker Implant", surgeon: "Dr. K. Menon",  status: "post_op", ward: "Cardiac Care",    allergies: ["Sulfa"],      fasting: false, mrn: "MRN-33420" },
  { patient_id: "P-4421", name: "Deepa Kulkarni",     age: 29, blood_group: "O+",  procedure: "Craniotomy",        surgeon: "Dr. N. Patel",  status: "pre_op",  ward: "Neuro Surgery",   allergies: [],             fasting: true,  mrn: "MRN-44210" },
  { patient_id: "P-6001", name: "Arun Mehta",         age: 61, blood_group: "AB-", procedure: "CABG",              surgeon: "Dr. V. Reddy",  status: "pre_op",  ward: "Cardiac Care",    allergies: ["Penicillin"], fasting: true,  mrn: "MRN-60010" },
];

// ─── BOOKINGS (pre-filled for demo) ─────────────────────────────────────────
export const bookings = [
  {
    booking_id:          "BKG-1782600001",
    slot_id:             "SLOT-002",
    ot_room:             "OT-1",
    date:                "2026-06-29",
    date_display:        "Mon, 29 June 2026",
    time:                "10:30",
    time_end:            "12:00",
    duration_mins:       90,
    surgeon_name:        "Dr. Ramesh Sharma",
    patient_name:        "Anita Singh",
    patient_id:          "P-2291",
    procedure:           "Knee Replacement",
    anesthesiologist_id: "ANS-005",
    bed_id:              "BED-401",
    notes:               "Pre-op complete",
    booked_at:           "2026-06-29T05:00:00Z",
    status:              "confirmed",
  },
  {
    booking_id:          "BKG-1782600002",
    slot_id:             "SLOT-006",
    ot_room:             "OT-3",
    date:                "2026-06-29",
    date_display:        "Mon, 29 June 2026",
    time:                "11:00",
    time_end:            "12:30",
    duration_mins:       90,
    surgeon_name:        "Dr. Pradeep Iyer",
    patient_name:        "Vikram Joshi",
    patient_id:          "P-3342",
    procedure:           "Pacemaker Implant",
    anesthesiologist_id: "ANS-001",
    bed_id:              "BED-302",
    notes:               "Cardiac team on standby",
    booked_at:           "2026-06-29T04:30:00Z",
    status:              "confirmed",
  },
];
