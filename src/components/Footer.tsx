import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  const contactDetails = [
    { icon: <IoMail />, text: "hamzi@hazmi.com" },
    { icon: <IoIosCall />, text: "+92-300-1234567" },
    { icon: <MdLocationPin />, text: "St#4, Gt Road, Grw" },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, link: "/" },
    { icon: <FiYoutube />, link: "/" },
    { icon: <FaFacebookSquare />, link: "/" },
  ];

  return (
    <footer className="p-3 text-white border-t border-stone-800">
      <div className="py-2 flex flex-col sm:flex-row justify-between gap-6">
        <div>
          {contactDetails.map((item, index) => (
            <p key={index} className="relative pl-6">
              <span className="absolute top-1/2 -translate-y-1/2 left-0">
                {item.icon}
              </span>
              {item.text}
            </p>
          ))}
        </div>
        <div>
          <h4>Socials</h4>
          <div className="flex gap-3 text-2xl my-2">
            {socialLinks.map((item, index) => (
              <a key={index} href={item.link}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="py-2 border-t border-stone-800 font-bold italic text-center">
        <h3 className="text-sm sm:text-basis md:text-lg">
          DESIGN BY HAMZI & WEBSITE BY FAYZAN
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
