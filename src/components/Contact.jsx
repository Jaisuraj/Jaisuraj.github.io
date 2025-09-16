import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="section bg-white">
      <div className="container max-w-3xl text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Get in touch</h3>
        <p className="text-gray-700 mb-4">
          Reach out for collaborations, research discussions, or just a chat.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:jaisuraj.bantupalli@gmail.com"
            className="text-sky-600"
          >
            <Mail className="w-5 h-5 inline" />{" "}
            <span className="ml-2">jaisuraj.bantupalli@gmail.com</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <a
            href="https://github.com/Jaisuraj"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jaisuraj-bantupalli-b073141b4/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <p className="text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} Jaisuraj Bantupalli
        </p>
      </div>
    </footer>
  );
}
