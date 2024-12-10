import { FaTelegram, FaDiscord, FaTwitter } from "react-icons/fa";
import OngearLogo from "../ui/OngearLogo";
import Link from "next/link";
import { Globe } from "lucide-react";

export const Footer = async () => {
  const linksdata = [
    {
      name: "Privacy Policy",
      route: "/",
    },
    {
      name: "Support",
      route: "/",
    },
    {
      name: "Technology",
      route: "/",
    },
    {
      name: "White Paper",
      route: "/",
    },
    {
      name: "Terms and conditions",
      route: "/",
    },
    {
      name: "Solutions",
      route: "/",
    },
  ];

  return (
    <div className="w-full text-sm relative text-gray-400 mx-auto px-[1rem] flex flex-col items-center bg-[#3b203b] py-8 mt-16">
      <div className="absolute bottom-0  w-full h-10 bg-black flex items-center justify-center">
        <span className="text-gray-400">Made with ❤️ by Rahul Soni</span>
      </div>
      <div className="w-full max-w-[1280px]">
        <div className="flex flex-col gap-4 w-full py-3 justify-between md:flex-row">
          <div className="flex flex-col gap-4">
            <OngearLogo />
            <span className="w-[15rem]">
              All game copyrights, trade marks, service marks
            </span>
            <div className="inline-block w-fit rounded-full overflow-hidden">
              {/* <div className="flex items-center gap-2">
            <div className="text-sm text-primary ">English</div>
            <UkIcon />
          </div> */}
              {/* <ModeToggle /> */}
            </div>
          </div>
          <div className="flex flex-col flex-wrap gap-y-4 gap-x-20 h-28 w-full max-w-lg">
            {linksdata.map((link, index) => {
              return (
                <span key={index}>
                  <Link className="hover:underline" href={link.route}>
                    {link.name}
                  </Link>
                </span>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <span>Follow Us</span>
            <div className="flex gap-3">
              <Link href="https://rahul-soni.vercel.app" target="_blank" className="bg-[#2463EB] p-2 rounded-full">
                <Globe className="w-5 h-5 rounded-full" />
              </Link>
              <Link href="https://discordapp.com/users/1085286345108357262" target="_blank" className="bg-[#2463EB] p-2 rounded-full">
                <FaDiscord className="w-5 h-5 rounded-full" />
              </Link>
              <Link href="https://x.com/soniRahul3108" target="_blank" className="bg-[#2463EB] p-2 rounded-full">
                <FaTwitter className="w-5 h-5 rounded-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
