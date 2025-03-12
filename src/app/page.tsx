import BlogSection from "@/Components/BlogSection";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Testimonials from "@/Components/Testimonials";
import TypesOfWaterproofing from "@/Components/TypesOfWaterproofing";
import Whytowaterproof from "@/Components/Whytowaterproof";

export default function Home() {
  return (
    <div className="overflow-clip">
      <Navbar bg="black" />
      <Hero />
      <Whytowaterproof />
      <TypesOfWaterproofing />
      <BlogSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
