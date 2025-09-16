import React from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-40 bg-white/60 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-semibold text-lg text-sky-600">
          Jaisuraj Bantupalli
        </a>
        <ul className="hidden md:flex gap-4 text-sm">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                className="px-3 py-2 rounded hover:bg-sky-50 text-sky-600"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* simple mobile nav: show dropdown or keep minimal for now */}
          <a href="#contact" className="text-sm text-sky-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
