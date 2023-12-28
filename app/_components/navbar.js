import Link from "next/link";
import React from "react";

export default function Navbar({ items }) {
  return (
    <nav>
      <ul className="grid gap-4">
        {items.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
