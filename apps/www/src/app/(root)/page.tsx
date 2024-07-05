import { Layout } from "@/layouts/Layout";
import { SubHeader } from "@/layouts/SubHeader";
import { Hero } from "./_components/Hero";
import { Profile } from "./_sections/Profile";

import styles from "./_page.module.css";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <div className="sticky top-16">
        <SubHeader />
      </div>
      <div className="min-h-screen">a</div>
      <section id="profile" className="bg-cyan-100">
        <div className={styles.section}>
          <Profile />
        </div>
      </section>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
    </Layout>
  );
}
