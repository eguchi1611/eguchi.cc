import { Button } from "@nextui-org/button";
import Hero from "./_components/Hero";

function IndexPage() {
  return (
    <div>
      <Hero />
      <p className="text-orange-500">Index page</p>
      <Button>Hello</Button>
    </div>
  );
}

export default IndexPage;
