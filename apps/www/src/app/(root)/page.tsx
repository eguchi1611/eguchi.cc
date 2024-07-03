import { Layout } from "@/layouts/Layout";
import { Hero } from "./_components/Hero";
import { SubHeader } from "@/layouts/SubHeader";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <div className="sticky top-16">
        <SubHeader />
      </div>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
    </Layout>
  );
}
