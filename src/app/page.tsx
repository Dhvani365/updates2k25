import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import Counter from "../components/Counter";
import { Metadata } from "next";

const SponserSection = dynamic(() => import("../components/SponserSection"));
const FeaturedEvents = dynamic(() => import("../components/FeaturedEvents"));
const ScheduleSection = dynamic(() => import("../components/ScheduleSection"));

export const metadata: Metadata = {
  title: "Updates 2k25",
  description:
    "Updates 2k25 - The Official Tech Fest of the Computer Engineering Department at SCET. Get ready to dive into exciting events, where we go from Floppy to Cloud, celebrating tech in every way!",
  openGraph: {
    title: "Updates 2k25",
    description:
      "Updates 2k25 - The Official Tech Fest of the Computer Engineering Department at SCET. Get ready to dive into exciting events, where we go from Floppy to Cloud, celebrating tech in every way!",
    images: [
      {
        url: "/updates-poster.png",
        width: 1200,
        height: 630,
        alt: "Updates 2k25 poster",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Updates 2k25",
    description:
      "Updates 2k25 - The Official Tech Fest of the Computer Engineering Department at SCET. Get ready to dive into exciting events, where we go from Floppy to Cloud, celebrating tech in every way!",
    images: ["/updates-poster.png"],
  },
};
export default async function Page() {
  return (
    <main className="min-h-screen bg-background max-w-7xl mx-auto relative mb-36">
      <HeroSection />
      <Counter />
      <SponserSection />
      <FeaturedEvents />
      <ScheduleSection />
    </main>
  );
}
