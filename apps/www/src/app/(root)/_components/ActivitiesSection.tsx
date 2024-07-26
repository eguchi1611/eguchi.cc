import styles from "./Section.module.css";
import { SectionTitle } from "./SectionTitle";

export function ActivitiesSection() {
  return (
    <div className={styles.section}>
      <SectionTitle href="activities" label="Activities" />
      <div className="flex flex-col"></div>
    </div>
  );
}
