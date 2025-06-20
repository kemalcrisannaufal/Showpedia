import Button from "@/components/ui/Button";
import TypingTextEffect from "@/components/ui/TypingTextEffect";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useRouter } from "next/router";

const BannerShowpedia = () => {
  const { push } = useRouter();
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-[#B11226] via-[#E50914] to-[#B11226]",
        "w-full h-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 relative p-5 md:py-10"
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
          classname="font-semibold text-2xl md:text-3xl lg:text-5xl block lg:min-h-[3rem] md:min-h-[2.5rem] min-h-[2rem]"
          text="Showpedia"
        />

        <p className="mt-2 font-medium md:text-md text-sm lg:text-2xl">
          Explore information on movies, TV series, and dramas from various
          genres with us.
        </p>
        <Button
          classname="bg-white text-red-600 font-medium mt-3 hover:bg-gray-200 text-sm md:text-md"
          onClick={() => push("/shows")}
        >
          Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default BannerShowpedia;
