import { DesktopSidebar } from "../_components/DesktopSidebar";
import { AboutSection } from "./_components/AboutSection";

export default function IndexPage() {
  return (
    <div className="bg-main">
      <div className="container mx-auto flex">
        <div className="sticky top-0 h-screen w-56 border-r bg-white">
          <DesktopSidebar />
        </div>
        <div className="grid flex-1 grid-cols-2 gap-4 bg-teal-50 p-4">
          <div className="flex flex-col gap-4">
            <AboutSection />
          </div>
          <div className="flex flex-col gap-4">{/* <AboutSection /> */}</div>
        </div>
      </div>
    </div>
  );
}
