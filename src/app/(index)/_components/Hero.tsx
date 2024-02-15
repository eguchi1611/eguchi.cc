import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-hero flex h-screen items-center justify-center">
      <Image
        alt="ロゴ"
        src="/logo.svg"
        width={96.48}
        height={21.26}
        className="h-auto w-96"
      />
    </div>
  );
}
