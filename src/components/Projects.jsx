import { Code, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ title, tech, duration, details }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
    >
      <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold text-blue-600">{title}</h3>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.split("|").map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full shadow-sm"
            >
              {t.trim()}
            </span>
          ))}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 w-full flex items-center justify-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
        >
          {open ? <ChevronUp /> : <ChevronDown />}
          {open ? "Hide Details" : "Show Details"}
        </button>

        {/* Expandable details */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 list-disc list-inside space-y-2 text-gray-600 text-sm"
            >
              {details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3 text-gray-800">
          <Code className="w-8 h-8 text-blue-600" /> Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="AquaVision – Underwater Image Enhancement"
            tech="Python | OpenCV | Autoencoders"
            duration="Dec 2022 – Mar 2023"
            details={[
              "Incorporated auto-encoder with ResNet block to reduce excessive blue in underwater images.",
            ]}
          />
          <ProjectCard
            title="Vinci – Fashion Generation using AI"
            tech="React Native | ExpressJS | SQL | Stable Diffusion"
            duration="Jul 2022 – Nov 2022"
            details={[
              "Built Android/iOS app to identify trending fashion items.",
              "Generated clothing images using Stable Diffusion.",
              "Designed recommendation engine using wishlists & order history.",
            ]}
          />
          <ProjectCard
            title="Camera Assisted Hotkey Automation Tool (CAHAT)"
            tech="Python | OpenCV | Mediapipe | PyAutoGUI | Face Recognition"
            duration="Jan 2022 – Mar 2022"
            details={[
              "Implemented OpenCV-based face recognition for authentication.",
              "Developed gesture recognition (94.6% accuracy) to automate shortcuts like closing apps, brightness & volume control.",
            ]}
          />
          <ProjectCard
            title="Event Planning Application"
            tech="MongoDB | ExpressJS | ReactJS | NodeJS"
            duration="Jan 2022 – May 2022"
            details={[
              "Built login/registration with secure authentication.",
              "Integrated Google Maps & Places APIs for event location suggestions.",
              "Automated email notifications for users.",
            ]}
          />
          <ProjectCard
            title="Intelligent Lighting System using ML"
            tech="Arduino | Python | OpenCV | Edge Impulse Studio"
            duration="Oct 2021 – Jan 2022"
            details={[
              "Designed algorithms to adjust traffic lights based on vehicle counts.",
              "Trained ML models to detect emergency vehicle sirens with 97% accuracy.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
