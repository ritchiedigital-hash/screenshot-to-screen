export const BUSINESS = {
  name: "Cleaning Angels",
  slogan: "Your Home, Our Passion",
  owner: "Jeniferr Collins",
  phone: "0450 385 771",
  phoneHref: "tel:+61450385771",
  email: "cleaningangels2@outlook.com",
  location: "Maclean NSW",
  contactLocation: "McPhee Street, Maclean NSW",
  area: "Maclean & surrounding areas",
  supportingStatement: "We deliver exceptional cleaning services with care, quality, and attention to detail.",
  additionalStatement: "We create happy, clean spaces for all our clientele to enjoy.",
  facebook: "https://www.facebook.com/p/Cleaning-Angels-61589612488675/",
} as const;

export const LOGO_URL = "/images/cleaning-angels-logo.jpg";

export const PHOTOS = {
  twinBedroom: { src: "/images/twin-bedroom.jpg", alt: "Twin bedroom freshly made and cleaned for guests" },
  showerBathroom: { src: "/images/shower-bathroom.jpg", alt: "Sparkling glass shower, vanity and tiled floor after a bathroom clean" },
  timberStaircase: { src: "/images/timber-staircase.jpg", alt: "Polished timber staircase and floors cleaned in a Maclean home" },
  kitchenIsland: { src: "/images/kitchen-island.jpg", alt: "Bright white kitchen with spotless island benchtop after a clean in Maclean" },
  livingRoom: { src: "/images/living-room.jpg", alt: "Freshly cleaned open living area with polished timber floors" },
  benchtopSink: { src: "/images/benchtop-sink.jpg", alt: "Gleaming stone benchtop and stainless steel sink after cleaning" },
  cleanOven: { src: "/images/clean-oven.jpg", alt: "Oven interior and racks cleaned to a shine" },
  holidayBedroom: { src: "/images/holiday-bedroom.jpg", alt: "Holiday accommodation bedroom prepared and presented for guests" },
  kitchenGalley: { src: "/images/kitchen-galley.jpg", alt: "Clean kitchen with wiped cabinets and timber floors ready for new tenants" },
  cleanBath: { src: "/images/clean-bath.jpg", alt: "Sparkling clean bathtub and tiled bathroom wall" },
  guestBedroom: { src: "/images/guest-bedroom.jpg", alt: "Neatly made guest bedroom after an Airbnb turnover clean" },
} as const;

export const SERVICE_OPTIONS = [
  "General Service Cleaning",
  "Deep Clean",
  "End of Lease Clean",
  "Airbnb / Holiday Clean",
  "Other",
] as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  };
}
