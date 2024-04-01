import { Button } from "@nextui-org/button";
import Hero from "./_components/Hero";
import DesktopHeader from "./_components/DesktopHeader";

function IndexPage() {
  return (
    <div>
      <div className="fixed right-0 top-0 bottom-0">
        <DesktopHeader />
      </div>
      <Hero />
      <p className="text-orange-500">Index page</p>
      <Button>Hello</Button>
    </div>
  );
}

export default IndexPage;
