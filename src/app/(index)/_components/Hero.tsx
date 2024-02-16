import Image from "next/image";
import LogoBluesky from "./../_assets/mediakit/bluesky.png";
import LogoGitHub from "./../_assets/mediakit/github.svg";
import LogoQiita from "./../_assets/mediakit/qiita.svg";
import LogoX from "./../_assets/mediakit/x.svg";
import LogoZenn from "./../_assets/mediakit/zenn.svg";
import SocialButton from "./SocialButton";

export default function Hero() {
  return (
    <div className="grid-col-1 grid h-screen grid-rows-[1fr_auto_1fr] justify-center gap-4">
      <div></div>
      <Image
        alt="ロゴ"
        src="/logo.svg"
        width={96.48}
        height={21.26}
        className="h-auto w-96 justify-self-center"
      />
      <div className="flex items-start justify-center gap-4 justify-self-center">
        <SocialButton
          href="#"
          label="GitHub"
          icon={<Image alt="GitHub" src={LogoGitHub} className="h-5 w-auto" />}
        />
        <SocialButton
          href="#"
          label="Zenn"
          icon={<Image alt="Zenn" src={LogoZenn} className="h-5 w-auto" />}
        />
        <SocialButton
          href="#"
          label="Qiita"
          icon={<Image alt="Qiita" src={LogoQiita} className="h-5 w-auto" />}
        />
        <SocialButton
          href="#"
          label="X"
          icon={<Image alt="X" src={LogoX} className="h-5 w-auto" />}
        />
        <SocialButton
          href="#"
          label="Bluesky"
          icon={
            <Image alt="Bluesky" src={LogoBluesky} className="h-5 w-auto" />
          }
        />
      </div>
    </div>
  );
}
