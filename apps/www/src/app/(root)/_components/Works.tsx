import sampleImage from "../_assets/sample-image.jpeg";

const items = [
  { label: "article1" },
  { label: "article2" },
  { label: "article3" },
  { label: "article4" },
];

export function Works() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-2 text-center text-xl font-bold text-gray-900">
        <a href="#works" className="block">
          Works
        </a>
      </h2>
      <div className="grid flex-1 grid-cols-1 grid-rows-2 gap-2 lg:grid-cols-2">
        {items.map(({ label }) => (
          <a key={label} href="#" className="group flex flex-col p-2">
            <div
              className="relative min-h-32 flex-1 rounded border bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${sampleImage.src})` }}
            >
              <ul className="absolute bottom-0 right-0 flex flex-row-reverse flex-wrap-reverse gap-1 p-1">
                <li className="rounded bg-primary-600 px-1 text-sm text-white">
                  Next.js
                </li>
                <li className="rounded bg-primary-600 px-1 text-sm text-white">
                  Next.js
                </li>
                <li className="rounded bg-primary-600 px-1 text-sm text-white">
                  Next.js
                </li>
              </ul>
            </div>
            <div className="mt-1 text-center group-hover:underline">
              {label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
