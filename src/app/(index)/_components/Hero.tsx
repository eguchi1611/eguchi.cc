import Image from "next/image";
import MediaList from "./MediaList";

function Hero() {
  return (
    <div className="min-h-screen grid place-items-center place-content-center gap-4">
      <Image
        alt="logo"
        src="/logo.svg"
        width={96.48}
        height={21.26}
        className="w-96"
      />
      <MediaList />
    </div>
  );
}

export default Hero;
