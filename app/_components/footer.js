import React from "react";
import SocialIcons from "./socialIcons";

export default function Footer() {
  return (
    <footer className="py-20 px-4 max-width border-t space-y-8 text-center">
      <h3>Connect with us on social media</h3>
      <div className="flex items-center justify-center">
        <SocialIcons />
      </div>
    </footer>
  );
}
