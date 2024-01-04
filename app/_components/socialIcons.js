import { Button } from "@/components/ui/button";
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
          <Button asChild variant="ghost">
            <a href="https://facebook.com">
              <FacebookIcon />
            </a>
          </Button>
        </li>
        <li>
          <Button asChild variant="ghost">
            <a href="https://instagram.com">
              <InstagramIcon />
            </a>
          </Button>
        </li>
        <li>
          <Button asChild variant="ghost">
            <a href="https://linkedin.com">
              <LinkedinIcon />
            </a>
          </Button>
        </li>
        <li>
          <Button asChild variant="ghost">
            <a href="https://youtube.com">
              <YoutubeIcon />
            </a>
          </Button>
        </li>
      </ul>
    </>
  );
}
