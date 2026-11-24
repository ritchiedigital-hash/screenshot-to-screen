import kitchenIsland from "@/assets/photos/kitchen-island.jpg.asset.json";
import livingRoom from "@/assets/photos/living-room.jpg.asset.json";
import benchtopSink from "@/assets/photos/benchtop-sink.jpg.asset.json";
import cleanOven from "@/assets/photos/clean-oven.jpg.asset.json";
import holidayBedroom from "@/assets/photos/holiday-bedroom.jpg.asset.json";
import kitchenGalley from "@/assets/photos/kitchen-galley.jpg.asset.json";
import cleanBath from "@/assets/photos/clean-bath.jpg.asset.json";
import twinBedroom from "@/assets/photos/twin-bedroom.jpg.asset.json";
import showerBathroom from "@/assets/photos/shower-bathroom.jpg.asset.json";
import timberStaircase from "@/assets/photos/timber-staircase.jpg.asset.json";
import logoAsset from "@/assets/brand/logo.jpg.asset.json";
import guestBedroom from "@/assets/photos/guest-bedroom.jpg.asset.json";

export const BUSINESS = {
  name: "Cleaning Angels",
  slogan: "Your Home, Our Passion",
  owner: "Jeniferr Collins",
  phone: "0450 385 771",
  phoneHref: "tel:+61450385771",
  email: "cleaningangels2@outlook.com",
  location: "Maclean NSW",
  area: "Maclean, Yamba & all local areas up to Ballina",
  facebook: "https://www.facebook.com/p/Cleaning-Angels-61589612488675/",
} as const;

export const LOGO_URL = logoAsset.url;

export const PHOTOS = {
  twinBedroom: { src: twinBedroom.url, alt: "Twin bedroom freshly made and cleaned for guests" },
  showerBathroom: { src: showerBathroom.url, alt: "Sparkling glass shower, vanity and tiled floor after a bathroom clean" },
  timberStaircase: { src: timberStaircase.url, alt: "Polished timber staircase and floors cleaned in a Maclean home" },
  kitchenIsland: { src: kitchenIsland.url, alt: "Bright white kitchen with spotless island benchtop after a clean in Maclean" },
  livingRoom: { src: livingRoom.url, alt: "Freshly cleaned open living area with polished timber floors" },
  benchtopSink: { src: benchtopSink.url, alt: "Gleaming stone benchtop and stainless steel sink after cleaning" },
  cleanOven: { src: cleanOven.url, alt: "Oven interior and racks cleaned to a shine" },
  holidayBedroom: { src: holidayBedroom.url, alt: "Holiday accommodation bedroom prepared and presented for guests" },
  kitchenGalley: { src: kitchenGalley.url, alt: "Clean kitchen with wiped cabinets and timber floors ready for new tenants" },
  cleanBath: { src: cleanBath.url, alt: "Sparkling clean bathtub and tiled bathroom wall" },
  guestBedroom: { src: guestBedroom.url, alt: "Neatly made guest bedroom after an Airbnb turnover clean" },
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
