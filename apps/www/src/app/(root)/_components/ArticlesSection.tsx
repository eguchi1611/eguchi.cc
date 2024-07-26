import { IconHeart } from "@tabler/icons-react";
import styles from "./Section.module.css";
import { SectionTitle } from "./SectionTitle";

export function ArticleSection() {
  return (
    <div className={styles.section}>
      <SectionTitle href="articles" label="Articles" />
      <div className="divide-y">
        {[1, 2, 3, 4, 5].map((v) => (
          <a
            key={v}
            className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-primary-50"
            href="#"
          >
            <img
              src="/zenn.svg"
              alt=""
              width="88.3"
              height="88.3"
              className="h-auto w-6"
            />
            <div className="flex-1">
              <div>調布祭にモバイルオーダーを導入した話</div>
              <div className="flex items-center gap-2 text-sm">
                <div>2024/07/26</div>
                <IconHeart size={16} />
                12
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
