import { Layout } from "@/layouts/Layout";
import { Hero } from "./_components/Hero";

export default function IndexPage() {
  return (
    <Layout>
      <div id="top">
        <Hero />
      </div>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
    </Layout>
  );
}
