import { Layout } from "@/layouts/Layout";
import { SubHeader } from "@/layouts/SubHeader";
import { Articles } from "./_components/Articles";
import { Hero } from "./_components/Hero";
import { Profile } from "./_components/Profile";

import styles from "./_page.module.css";

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <div className="sticky top-16">
        <SubHeader />
      </div>
      <section id="profile" className="bg-cyan-50">
        <div className={styles.section}>
          <Profile />
        </div>
      </section>
      <section id="articles" className="bg-yellow-50">
        <div className={styles.section}>
          <Articles />
        </div>
      </section>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
      <div className="min-h-screen">a</div>
    </Layout>
  );
}
