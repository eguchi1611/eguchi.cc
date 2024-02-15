import DesktopHeader from "./_components/DesktopHeader";
import Hero from "./_components/Hero";
import MobileHeader from "./_components/MobileHeader";

export default function IndexPage() {
  return (
    <div className="sm:pr-32">
      <div className="fixed left-0 right-0 top-0 sm:hidden">
        <MobileHeader />
      </div>
      <div className="fixed bottom-0 right-0 top-0 hidden sm:block">
        <DesktopHeader />
      </div>
      <Hero />
      <p className="text-red-500">Hello World</p>
      <p>Hello</p>
    </div>
  );
}
