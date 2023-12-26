import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

export default function SocialIcons() {
  return (
    <>
      <ul className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
        <li>
          <button>
            <a href="https://facebook.com">
              <FacebookIcon />
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://instagram.com">
              <InstagramIcon />
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://linkedin.com">
              <LinkedinIcon />
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://youtube.com">
              <YoutubeIcon />
            </a>
          </button>
        </li>
      </ul>
    </>
  );
}
