import { BedDouble, House, KeyRound, Sparkles, type LucideIcon } from "lucide-react";
import { PHOTOS } from "./site";

export type Service = { id: string; title: string; short: string; long: string[]; icon: LucideIcon; photo: { src: string; alt: string } };

export const SERVICES: Service[] = [
  {
    id: "deep-cleans",
    title: "Deep Cleans",
    short: "A detailed top-to-bottom clean designed to give your home a fresh start.",
    long: [
      "A deep clean goes further than a routine clean, reaching the areas that don't usually get attention week to week.",
      "Think inside appliances, built-up grime in kitchens and bathrooms, skirting boards, fittings and the little corners that make a real difference to how a home feels.",
    ],
    icon: Sparkles,
    photo: PHOTOS.cleanOven,
  },
  {
    id: "general-service-cleaning",
    title: "General Service Cleaning",
    short: "Reliable regular cleaning to help keep your home fresh, comfortable and beautifully maintained.",
    long: [
      "Ongoing household cleaning suited to busy homes that want to stay fresh and well looked after.",
      "Regular visits keep kitchens, bathrooms, floors and living spaces consistently clean, so you can spend your time on the things you enjoy.",
    ],
    icon: House,
    photo: PHOTOS.showerBathroom,
  },
  {
    id: "end-of-lease-cleans",
    title: "End of Lease Cleans",
    short: "Thorough cleaning to help leave your property fresh, presentable and ready for the next chapter.",
    long: [
      "Moving out is busy enough. An end of lease clean helps prepare the property so it's fresh and presentable when you hand back the keys.",
      "Kitchens, bathrooms, floors and fittings are given careful attention to help leave the home ready for whoever comes next.",
    ],
    icon: KeyRound,
    photo: PHOTOS.kitchenGalley,
  },
  {
    id: "airbnb-holiday-cleans",
    title: "Airbnb & Holiday Cleans",
    short: "Reliable cleaning and presentation for holiday properties, Airbnb accommodation and guest stays.",
    long: [
      "Cleaning Angels can prepare holiday accommodation between guest stays, so every arrival feels welcoming.",
      "From fresh bedrooms to sparkling bathrooms and kitchens, the focus is on keeping your property clean, fresh and beautifully presented.",
    ],
    icon: BedDouble,
    photo: PHOTOS.holidayBedroom,
  },
];
