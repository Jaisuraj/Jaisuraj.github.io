import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header id="home" className="min-h-[72vh] flex items-center">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-violet-600"
          >
            Jaisuraj Bantupalli
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-700 max-w-xl"
          >
            B.Tech in Electronics and Computer Engineering — Silver Medalist.
            Researcher and AI/ML Engineer experienced with Vertex AI, BigQuery,
            and multi-agent GenAI pipelines.
          </motion.p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="mailto:jaisuraj.bantupalli@gmail.com"
              title="Email"
              className="p-2 rounded hover:bg-sky-50"
            >
              <Mail className="w-6 h-6 text-sky-600" />
            </a>
            <a
              href="https://github.com/Jaisuraj"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2 rounded hover:bg-sky-50"
            >
              <Github className="w-6 h-6 text-sky-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaisuraj-bantupalli-b073141b4/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="p-2 rounded hover:bg-sky-50"
            >
              <Linkedin className="w-6 h-6 text-sky-600" />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.img
            src="/profile.jpg"
            alt="Jaisuraj"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-44 h-44 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-sky-100 shadow-xl"
          />
        </div>
      </div>
    </header>
  );
}
