const items = [
  { src: "/twitter.svg", alt: "twitter", width: 128, height: 128 },
  { src: "/bluesky.svg", alt: "bluesky", width: 682.667, height: 682.667 },
  { src: "/qiita.svg", alt: "qiita", width: 400, height: 400 },
  { src: "/zenn.svg", alt: "zenn", width: 88.3, height: 88.3 },
  { src: "/github.svg", alt: "github", width: 128, height: 128 },
] as const;

export function DesktopSidebar() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <img
        src="/logo.svg"
        alt="logo"
        width="96.48"
        height="21.26"
        className="h-auto w-full"
      />
      <div className="flex justify-between gap-1">
        {items.map(({ alt, ...props }) => (
          <a key={alt} href="#" target="_blank" rel="noopener noreferrer">
            <img {...props} alt={alt} className="h-8 w-auto" />
          </a>
        ))}
      </div>
    </div>
  );
}
