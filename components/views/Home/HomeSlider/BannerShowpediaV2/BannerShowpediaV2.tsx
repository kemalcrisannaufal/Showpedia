import { cn } from "@/utils/cn";
import Image from "next/image";
import Button from "@/components/ui/Button";
import TypingTextEffect from "@/components/ui/TypingTextEffect";

const BannerShowpediaV2 = () => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-[#111] via-[#1f2937] to-[#0f172a]",
        "w-full h-full flex flex-col md:flex-row-reverse items-center justify-center gap-5 md:gap-10 relative p-5 md:p-10"
      )}
    >
      <div
        aria-label="blur effect bg"
        className="top-0 -left-2 absolute bg-red-300/75 blur-2xl rounded-full w-24 h-24"
      />
      <div
        aria-label="blur effect bg"
        className="-right-2 bottom-0 absolute bg-red-300/75 blur-2xl rounded-full w-24 h-24"
      />
      <Image
        src={"/images/general/logo-white.svg"}
        alt={"logo"}
        width={70}
        height={70}
        className={"md:w-[100px] lg:w-1/10 h-auto aspect-square"}
      />
      <div className="text-white">
        <TypingTextEffect
          classname="font-semibold text-2xl md:text-3xl lg:text-5xl lg:min-h-[3rem] md:min-h-[2.5rem] min-h-[2rem]"
          text="Explore the Screen"
        />

        <p className="mt-2 font-medium md:text-md text-sm lg:text-2xl">
          Get detailed information on films and series, including genres and
          story insights.
        </p>
        <Button classname="font-medium mt-3 text-sm md:text-md">
          Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default BannerShowpediaV2;
