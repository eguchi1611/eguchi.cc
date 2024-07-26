import styles from "./Section.module.css";
import { SectionTitle } from "./SectionTitle";

export function ActivitiesSection() {
  return (
    <div className={styles.section}>
      <SectionTitle href="activities" label="Activities" />
      <div className="flex flex-col">
        {[1, 2, 3, 4].map((v) => (
          <div key={v} className="relative flex px-4 py-3">
            <div className="absolute left-28 h-full w-2 bg-slate-100">
              {/* Vertical line */}
            </div>
            <div className="min-w-28">Aug 2021</div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -left-4 h-full w-2 bg-primary-200">
                  {/* vertical bar (primary color) */}
                </div>
                Joined the team
              </div>
              <div className="text-sm">
                I joined the team as a software engineer.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
