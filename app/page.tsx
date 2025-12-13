import { FeaturedProducts } from "@/components/featuredNotes";
import { FashionRevolution } from "@/components/featuresImages";
import FooterSection from "@/components/footerSection";
import { HeroGrid } from "@/components/heroSection";
import { LifestyleSections } from "@/components/lifeStyleSection";
import { Navbar } from "@/components/navBar";
import { Testimonials } from "@/components/videoBanner";

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroGrid />
      <FashionRevolution/>
      <LifestyleSections/>
      <FeaturedProducts />
      <Testimonials />
      <FooterSection />
    </div>
  )
}
