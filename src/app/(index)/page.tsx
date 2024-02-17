import DesktopHeader from "./_components/DesktopHeader";
import Hero from "./_components/Hero";
import MobileHeader from "./_components/MobileHeader";

export default function IndexPage() {
  return (
    <div className="sm:pr-24">
      <div className="fixed left-0 right-0 top-0 sm:hidden">
        <MobileHeader />
      </div>
      <div className="fixed bottom-0 right-0 top-0 hidden sm:block">
        <DesktopHeader />
      </div>
      <div id="top" className="px-4">
        <Hero />
      </div>
      <div id="about" className="h-screen">
        about
      </div>
      <div id="work" className="h-screen">
        work
      </div>
      <div id="skill" className="h-screen">
        skill
      </div>
      <div id="contact" className="h-screen">
        contact
      </div>
    </div>
  );
}
