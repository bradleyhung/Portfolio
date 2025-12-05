import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { About } from "@/app/components/about";
import { Projects } from "@/app/components/projects";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="relative bg-custom-gradient min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
