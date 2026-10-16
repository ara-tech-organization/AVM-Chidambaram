import { asset } from '../lib/asset'

export const clinic = {
  name: 'AVM Smiles',
  // TODO: contact details below come from the Kumbakonam "Contact Us" page of the content doc; replace with the client's final values
  phone: '+91 8071404432',
  phoneHref: 'tel:+918071404432',
  // TODO: confirm the WhatsApp number with the client
  whatsappHref: 'https://wa.me/918071404432',
  email: 'avmsmiles.kumbakonam@gmail.com',
  address: 'No 1/317/1B, Lakshmi Vilas St, nearby Sri Annamalai Stationery, Anna Nagar, Kumbakonam, Tamil Nadu 612001.',
  shortAddress: 'Anna Nagar, Kumbakonam',
  hours: 'Monday - Saturday: 9:00 AM - 8:00 PM', // TODO: the doc's Contact page says 7:00 PM, confirm
  mapsHref: 'https://maps.app.goo.gl/SQQjnadApF1ourYM9',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0379765290795!2d79.38168217451943!3d10.960503955772436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5533437d2f0edb%3A0x7eeed8200bf8bc53!2sAVMSmiles%20Dental%20Wellness!5e0!3m2!1sen!2sin!4v1792144830617!5m2!1sen!2sin',
  // TODO: replace with the real Kumbakonam social profile URLs
  social: { facebook: 'https://facebook.com', instagram: 'https://instagram.com', youtube: 'https://youtube.com' },
}

export const nav = [
  { label: 'Home', href: '/kumbakonam' },
  { label: 'About Us', href: '/kumbakonam#about' },
  { label: 'Services', href: '/kumbakonam#services', dropdown: true },
  { label: 'Smile Gallery', href: '/kumbakonam#gallery' },
  { label: 'Contact Us', href: '/kumbakonam#contact' },
]

export const heroChips = [
  'Qualified Dental Professionals',
  'Digital Dentistry Solutions',
  'Comfort-Focused Treatments',
  'Tailored Smile Care',
  'Affordable, Transparent Pricing',
]

export const services = [
  { icon: 'Scissors', title: 'Tooth Extraction', slug: 'tooth-extraction', image: asset('/assets/images/site/tooth-extraction.webp'), text: 'Careful, comfortable tooth extractions handled by experienced dentists using modern tools and effective anesthesia.' },
  { icon: 'Crown', title: 'Crowns & Bridges', slug: 'dental-crowns-and-bridges', image: asset('/assets/images/site/dental-crowns-and-bridges.jpg'), text: 'Restore damaged or missing teeth with sturdy, natural-looking crowns and bridges built to last for years.' },
  { icon: 'Smile', title: 'Dentures', slug: 'dental-dentures', image: asset('/assets/images/site/dental-dentures.png'), text: 'Well-fitted removable and fixed dentures created to replace missing teeth and bring back your natural smile.' },
  { icon: 'Activity', title: 'Root Canal Treatment', slug: 'root-canal-treatment', image: asset('/assets/images/site/root-canal-treatment.jpg'), text: 'Treat infected teeth effectively with advanced root canal care that relieves pain and saves natural tooth structure.' },
  { icon: 'Sparkles', title: 'Teeth Whitening', slug: 'teeth-whitening-treatment', image: asset('/assets/images/site/teeth-whitening-treatment.webp'), text: 'Skilled whitening treatments designed to clear stubborn stains and brighten your smile by multiple shades.' },
  { icon: 'Droplets', title: 'Scaling & Polishing', slug: 'dental-scaling-polishing', image: asset('/assets/images/site/dental-scaling-polishing.jpg'), text: 'Professional cleaning that removes plaque, tartar, and stains, supporting better long-term oral health.' },
  { icon: 'Layers', title: 'Invisible Aligners', slug: 'invisible-aligners', image: asset('/assets/images/site/invisible-aligners.webp'), text: 'Clear, comfortable aligners that gradually straighten teeth without the visibility of metal braces.' },
  { icon: 'Grip', title: 'Braces', slug: 'invisible-braces', image: asset('/assets/images/site/invisible-braces.jpg'), text: 'Complete orthodontic treatment for children, teens, and adults to correct bite and alignment concerns.' },
  { icon: 'Gem', title: 'Veneers', slug: 'dental-veneer-treatment', image: asset('/assets/images/site/dental-veneer-treatment.jpg'), text: 'Custom-designed veneers to enhance the shape, color, and overall appearance of your teeth.' },
  { icon: 'Anchor', title: 'Dental Implants', slug: 'dental-implants-treatment', image: asset('/assets/images/site/dental-implants-treatment.webp'), text: 'Reliable, long-term tooth replacement options that look, feel, and function like natural teeth.' },
]

export const why = [
  { icon: 'Cpu', title: 'Advanced Technology', text: 'Digital diagnostic tools and updated methods for accurate, comfortable dental treatment.' },
  { icon: 'GraduationCap', title: 'Experienced Specialists', text: 'A team of dentists with specialized training across multiple dental disciplines.' },
  { icon: 'UserCheck', title: 'Patient-Focused Care', text: "Individualized treatment plans built around each patient's unique dental goals." },
  { icon: 'ShieldCheck', title: 'Hygiene & Safety', text: 'Strict sterilization practices that follow recognized international safety standards.' },
  { icon: 'Wallet', title: 'Clear Pricing', text: 'Straightforward treatment costs with no hidden fees or unexpected charges.' },
  { icon: 'Armchair', title: 'Comfortable Setting', text: 'A warm, welcoming clinic where every patient feels at ease.' },
]

export const steps = [
  { icon: 'Stethoscope', title: 'Consultation', text: 'A thorough dental exam paired with a discussion of your treatment needs.' },
  { icon: 'ScanLine', title: 'Diagnosis', text: 'Digital assessment used to build an accurate treatment plan.' },
  { icon: 'ClipboardList', title: 'Personalized Treatment Plan', text: 'A custom care approach designed around your dental requirements.' },
  { icon: 'HeartPulse', title: 'Treatment', text: 'Professional care delivered with modern techniques and reliable equipment.' },
  { icon: 'CalendarClock', title: 'Follow-Up Care', text: 'Continued support to help maintain your oral health and smile.' },
]

export const testimonials = [
  'My visit to AVM Smiles Kumbakonam was smooth and reassuring. The dentist was patient, explained each step clearly, and kept me comfortable throughout the treatment.',
  'I had a dental procedure done here and was impressed by how professional the entire team was. Modern equipment paired with genuinely caring service made all the difference.',
  'The team at AVM Smiles Kumbakonam was friendly and thorough, walking me through every stage of my treatment. The clinic was clean, calm, and easy to recommend.',
]

export const faqs = [
  ['What is the best dental clinic in Kumbakonam?', 'AVM Smiles is a well-known and growing dental clinic in Kumbakonam, recognized for its experienced dentists, modern technology, and personalized approach to complete dental care for individuals and families.'],
  ['Do you offer dental implants?', 'Yes, we provide dental implants for single teeth, multiple teeth, and full mouth restorations, helping restore both natural appearance and function.'],
  ['Are invisible aligners offered at your clinic?', 'Yes, we offer custom invisible aligners as a discreet and comfortable option for straightening teeth, ideal for many patients over traditional braces.'],
  ['How often should dental checkups be scheduled?', 'A checkup every six months is recommended to help maintain healthy teeth and catch potential issues early.'],
  ['Is professional teeth whitening safe?', 'Yes, our teeth whitening treatments are performed under expert supervision, ensuring safe, comfortable, and effective results.'],
  ['Is emergency dental care available?', 'Yes, we provide emergency treatment for tooth pain, infections, injuries, and broken teeth to relieve discomfort and prevent further issues.'],
]

export const gallerySlots = [
  { label: 'Modern treatment room', src: asset('/assets/images/site/clinic-interior.jpg') },
  { label: 'Dental chair and equipment', src: asset('/assets/images/site/who-we-are.png') },
  { label: 'Our clinic', src: asset('/assets/images/site/clinic-cta.jpg') },
  { label: 'A higher standard of dental care', src: asset('/assets/images/site/higher-standard.jpg') },
  { label: 'Smiling patient', src: asset('/assets/images/site/hero-patient.jpg') },
  { label: 'Dental implants care', src: asset('/assets/images/site/dental-implants-treatment.webp') },
]

export const transformations = [
  { title: 'Complete Smile Transformation', before: asset('/assets/images/site/before-1.png'), after: asset('/assets/images/site/after-1.png') },
  { title: 'Smile Makeover', before: asset('/assets/images/site/before-2.png'), after: asset('/assets/images/site/after-2.png') },
  { title: 'Restored Confidence', before: asset('/assets/images/site/before-3.jpg'), after: asset('/assets/images/site/after-3.jpg') },
]
