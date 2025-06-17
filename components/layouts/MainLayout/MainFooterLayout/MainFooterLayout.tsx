import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SOCIAL_ITEMS, TECH_STACKS } from "../MainLayout.constants";
import { cn } from "@/utils/cn";

const MainFooterLayout = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-5 bg-red-600 p-10 lg:p-20 w-full text-white lg:text-left text-center">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-5">
        <Image
          src={"/images/general/logo-white.svg"}
          alt="logo"
          width={75}
          height={75}
        />
        <span className="font-semibold text-3xl tracking-wide">Showpedia</span>
      </Link>

      <div>
        <h5 className="font-bold text-lg">Created with</h5>
        <div className="flex gap-5 mt-3">
          {TECH_STACKS.map((item, index) => (
            <div key={index}>{<item.icon className={"text-3xl"} />}</div>
          ))}
        </div>
      </div>

      <div>
        <h5 className="font-bold text-lg">API</h5>
        <Link href={"https://www.tvmaze.com/api"} className="block mt-3">
          <Image
            src={"/images/general/tvm_api.png"}
            alt="logo"
            width={150}
            height={150}
            className="bg-white px-4 py-2 rounded-md"
          />
        </Link>
      </div>

      <div>
        <h5 className="font-bold text-lg">Menu</h5>
        <div className="flex lg:flex-col gap-5 lg:gap-1.5 mt-3">
          {NAV_ITEMS.map((item, index) => (
            <Link href={item.href} key={index} className={cn("font-medium")}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h5 className="font-bold text-lg">Social Media</h5>
        <div className="flex gap-5 mt-3">
          {SOCIAL_ITEMS.map((item, index) => (
            <Link key={index} href={item.href}>
              {<item.icon className="text-3xl" />}
            </Link>
          ))}
        </div>

        <p className="mt-5">Copyright &copy; 2025 Ulasin</p>
      </div>
    </div>
  );
};

export default MainFooterLayout;
