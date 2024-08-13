import Image from "next/image";
import Logo from "@/assets/logo-color.png";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/20  md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container ">
        <div className="flex justify-between items-center  md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div className="border rounded inline-flex justify-center align-center border-white/10">
            <Image
              src={Logo}
              className="py-1 px-1"
              alt="Logo"
              width={100}
              height={120}
              priority={true}
            />{" "}
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-5 text-sm">
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Developers
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Pricing
              </a>
              <a
                href="#"
                className=" text-white/70 hover:text-white transition"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex item-center gap-4">
            <Button>Join Waitlist</Button>

            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
