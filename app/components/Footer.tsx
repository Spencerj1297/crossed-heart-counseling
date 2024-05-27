import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <div className="h-32 flex gap-6 justify-center items-center absolute bot-0 w-full z-20 text-white bg-gradient-custom ">
      <a
        href="https://www.facebook.com/redeemyourmarriage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-grey"><IconBrandFacebook size={48}/></p>
      </a>
      <a
        href="https://www.instagram.com/laurapottercounseling/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-grey"><IconBrandInstagram size={48}/></p>
      </a>
    </div>
  );
};
