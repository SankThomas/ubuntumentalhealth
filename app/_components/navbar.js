import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="grid gap-4">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Contacts</button>
        </li>
      </ul>
    </nav>
  );
}
