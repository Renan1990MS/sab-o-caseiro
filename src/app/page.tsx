import { About } from "./_components/about";
import { Footer } from './_components/footer';
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

