import { cn } from "@/utils/cn";

const ScheduleBanner = () => {
  return (
    <section
      className={cn(
        "bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#7f1d1d]",
        "mb-5 py-10 rounded-md text-white text-center relative p-5"
      )}
    >
      <div
        aria-label="blur effect bg"
        className="top-0 -left-5 absolute bg-red-300/75 blur-2xl rounded-full w-24 h-24"
      />
      <div
        aria-label="blur effect bg"
        className="-right-5 bottom-0 absolute bg-red-300/75 blur-2xl rounded-full w-24 h-24"
      />
      <h1 className="font-bold text-2xl md:text-4xl">TV Schedule</h1>
      <p className="mt-2 md:text-lg">
        Stay in the loop with shows airing in the next 7 days
      </p>
    </section>
  );
};

export default ScheduleBanner;
