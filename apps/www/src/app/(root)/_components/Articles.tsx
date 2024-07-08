import { Suspense } from "react";
import { ArticlesViewer } from "./ArticlesViewer";

export function Articles() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ArticlesViewer />
      </Suspense>
    </div>
  );
}
