import Book from "@/components/home/book";
import Hero from "@/components/home/hero";
import Intro from "@/components/home/intro";
import Testimonials from "@/components/home/testimonials";
import TreatSection from "@/components/home/treat";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <TreatSection />
      <Book />
      <Testimonials />
    </>
  );
}
