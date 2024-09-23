import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

const links = [
  {
    url: "https://discordapp.com/users/814819452309733406",
    icon: <FaDiscord />,
  },
  {
    url: "https://www.instagram.com/ehsan.hpy/",
    icon: <FaInstagram />,
  },
  {
    url: "http://t.me/EhsanHpy",
    icon: <FaTelegram />,
  },
  {
    url: "https://github.com/Ehsan-hpy",
    icon: <FaGithub />,
  },
  {
    url: "https://www.linkedin.com/in/ehsan-mosaddeghi-a54732307/",
    icon: <FaLinkedin />,
  },
];

function Links() {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <span key={link.url}>
          <a
            href={link.url}
            className="text-2xl duration-300 hover:text-blue-400"
          >
            {link.icon}
          </a>
        </span>
      ))}
    </div>
  );
}

export default Links;
