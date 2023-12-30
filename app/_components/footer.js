import React from "react";
import SocialIcons from "./socialIcons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 space-y-8 text-center text-white">
      <div className="max-width py-20">
        <h3 className="text-white mb-4">Connect with us on social media</h3>
        <div className="flex items-center justify-center">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
