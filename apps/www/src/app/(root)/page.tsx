import { DesktopSidebar } from "../_components/DesktopSidebar";

export default function IndexPage() {
  return (
    <div className="bg-main">
      <div className="container mx-auto flex">
        <div className="sticky top-0 h-screen w-56 border-r bg-white">
          <DesktopSidebar />
        </div>
        <div className="flex-1 bg-teal-50">
          <div className="min-h-screen">Content 1</div>
          <div className="min-h-screen">Content 2</div>
          <div className="min-h-screen">Content 3</div>
        </div>
      </div>
    </div>
  );
}
