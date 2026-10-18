// ============================================================
// ALL SERVICE CONTENT LIVES HERE (JSX file, no separate data js)
// Edit text, add/remove services — Navbar, Home, Services page
// and every service detail page update automatically.
// ============================================================

export const BUSINESS = {
  name: "Pothala Consultants & Services",
  owner: "Pothala Srinivasa Rao",
  role: "Document Writer",
  phone: "99459 98878",
  phoneLink: "919945998878",
  email: "info@pothalaconsultants.com", // replace
  address: "Your shop address, City, State - PIN", // replace
  hours: "Mon - Sat: 9:00 AM - 7:00 PM", // replace
};

export const SERVICES = [
  {
    slug: "document-writing",
    icon: "✒️",
    title: "Document Writing",
    short: "Sale deeds, agreements, affidavits, wills and every legal document drafted accurately.",
    intro:
      "Our experienced document writer prepares clear, legally structured documents so that your property and personal transactions are protected from the very first line.",
    includes: ["Sale deeds & gift deeds", "Rental & lease agreements", "Affidavits & declarations", "Wills & partition deeds", "General & special power of attorney", "Business & partnership agreements"],
    documents: ["Identity proof of all parties (Aadhaar / PAN)", "Property details or previous title documents", "Passport size photographs", "Details of witnesses"],
    steps: ["Share your requirement", "We draft the document", "You review and confirm", "Final printing & stamping"],
    faqs: [
      { q: "How long does it take to draft a document?", a: "Most standard documents are drafted the same day once all the details are provided." },
      { q: "Can I make corrections after the draft?", a: "Yes. We revise the draft until every detail is correct before final printing." },
      { q: "Do you help with registration after writing?", a: "Yes, we guide you through the complete registration process." },
    ],
  },
  {
    slug: "telugu-typing",
    icon: "⌨️",
    title: "Telugu Typing",
    short: "Fast and error-free Telugu typing for legal, government and personal documents.",
    intro:
      "Accurate Telugu typing is essential for petitions, applications and legal papers. We type from handwritten or printed matter with careful proofreading.",
    includes: ["Petitions & applications", "Legal & court documents", "Letters & notices", "Handwritten matter to typed copy", "Bulk typing work", "Proofreading & formatting"],
    documents: ["Handwritten or printed matter", "Soft copy (if available)", "Special formatting instructions"],
    steps: ["Hand over your matter", "We type & proofread", "You verify the copy", "Print or soft copy delivery"],
    faqs: [
      { q: "Can you type from handwritten notes?", a: "Yes, we type from handwritten and printed matter." },
      { q: "Do you provide soft copies?", a: "Yes, we can share the file along with a printed copy." },
    ],
  },
  {
    slug: "registrations",
    icon: "🏛️",
    title: "Registrations",
    short: "Complete assistance for property and document registrations at the Sub-Registrar office.",
    intro:
      "Registration can feel confusing. We handle the paperwork, slot guidance and checklists so your registration is smooth and free of last-minute surprises.",
    includes: ["Sale deed registration", "Gift & settlement deed registration", "Rental agreement registration", "Mortgage & release deeds", "Slot booking guidance", "Document verification"],
    documents: ["Original title documents", "Aadhaar & PAN of buyer and seller", "Recent photographs", "Encumbrance Certificate", "Market value details", "Two witnesses with ID proof"],
    steps: ["Document verification", "Stamp duty calculation", "Slot booking", "Registration at Sub-Registrar office", "Receive registered documents"],
    faqs: [
      { q: "What are the registration charges?", a: "Charges depend on the market value and type of document. We calculate them for you in advance." },
      { q: "Do I need to be present?", a: "Yes, parties and witnesses must be present for biometric and photo capture." },
    ],
  },
  {
    slug: "land-plot-purchases",
    icon: "🏡",
    title: "Land & Plot Purchases",
    short: "Trusted guidance for buying and selling land, plots and properties safely.",
    intro:
      "Buying property is a big decision. We help you verify papers, check legal clarity and complete the transaction with full documentation support.",
    includes: ["Title & document verification", "Buyer and seller coordination", "Agreement of sale drafting", "Registration support", "Mutation & follow-up guidance", "Market value assessment"],
    documents: ["Parent / link documents", "Latest Encumbrance Certificate", "Tax receipts", "Survey and layout details", "ID proofs of parties"],
    steps: ["Requirement discussion", "Property document check", "Agreement & payment guidance", "Registration", "Post-registration support"],
    faqs: [
      { q: "Can you help me find property?", a: "We assist with verified listings and document checks for properties you shortlist." },
      { q: "How do you verify a property?", a: "We examine title documents, EC and market value records before you proceed." },
    ],
  },
  {
    slug: "e-stamping",
    icon: "🔖",
    title: "E-Stamping",
    short: "Instant electronic stamp paper for agreements and deeds of any value.",
    intro:
      "E-Stamping is the secure, electronic way to pay stamp duty. We generate genuine e-stamp certificates quickly, saving you a trip to the vendor and avoiding fake papers.",
    includes: ["Rental agreements", "Sale & gift deeds", "Affidavits & indemnity bonds", "Business agreements", "Any denomination", "Instant printout"],
    documents: ["Names and addresses of both parties", "Purpose of the stamp paper", "Stamp duty amount or document details"],
    steps: ["Share document details", "Duty payment", "E-stamp certificate generated", "Printed and handed over"],
    faqs: [
      { q: "Is an e-stamp valid everywhere?", a: "Yes, e-stamp certificates are legally valid and can be verified online." },
      { q: "How fast can I get it?", a: "Usually within minutes during working hours." },
    ],
  },
  {
    slug: "scanning",
    icon: "🖨️",
    title: "Scanning",
    short: "High-quality scanning of documents, certificates and large papers.",
    intro:
      "Digitise your important papers with crisp, clear scans. We provide PDF and image formats ready for emails, uploads and online applications.",
    includes: ["Documents to PDF", "Certificates & ID proofs", "Multi-page file scanning", "Colour & black-and-white scans", "Email or pen drive delivery", "Size-optimised files for portals"],
    documents: ["Original documents to scan", "Email or storage device for delivery"],
    steps: ["Bring your documents", "Quality scanning", "File check & compression", "Delivery by email or pen drive"],
    faqs: [
      { q: "Can you reduce file size for online portals?", a: "Yes, we optimise scans to meet portal upload limits." },
      { q: "Is my data kept private?", a: "Your files are never kept or shared after delivery." },
    ],
  },
  {
    slug: "black-and-white-xerox",
    icon: "📄",
    title: "Black & White Xerox",
    short: "Sharp, affordable photocopies in bulk or single copies.",
    intro:
      "Quick and clean black and white photocopying for documents of any size, with attestation-ready copies and bulk pricing for large orders.",
    includes: ["A4 & legal size copies", "Single and bulk copying", "Double-sided copies", "Document enlargement & reduction", "Spiral & file binding", "Same-day service"],
    documents: ["Original documents to be copied"],
    steps: ["Hand over documents", "Choose copies & size", "Copying & sorting", "Collect your copies"],
    faqs: [
      { q: "Do you offer bulk discounts?", a: "Yes, please contact us for large-volume pricing." },
      { q: "Can you copy old or faded papers?", a: "We adjust contrast to give the clearest copy possible." },
    ],
  },
  {
    slug: "documents-ec-market-value",
    icon: "📑",
    title: "Document Copies, EC & Market Value",
    short: "Certified copies, Encumbrance Certificates and market value details applied for you.",
    intro:
      "Need a copy of an old registered document, an Encumbrance Certificate or the market value of a property? We apply on your behalf and track the request until you receive it.",
    includes: ["Certified copies of registered documents", "Encumbrance Certificate (EC)", "Market value certificate", "Online application filing", "Status tracking", "Doorstep-ready documents"],
    documents: ["Document number, year and Sub-Registrar office", "Survey number / plot details", "Period required for EC", "ID proof of applicant"],
    steps: ["Share property details", "We file the application", "Track the status", "Receive your certificate"],
    faqs: [
      { q: "What is an Encumbrance Certificate?", a: "It records all registered transactions on a property for a period and proves it is free of legal dues." },
      { q: "How long does an EC take?", a: "Online ECs are typically issued within a few working days." },
    ],
  },
];
