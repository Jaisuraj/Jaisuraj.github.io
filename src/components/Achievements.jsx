import { Award } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section bg-blue-50">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Award className="w-6 h-6 text-sky-600" /> Awards & Achievements
        </h2>

        <ul className="list-disc list-inside text-gray-700">
          <li>
            Secured Highest CGPA (10/10) in final semester at VIT Chennai.
          </li>
          <li>
            Top 6 in Google Cloud Agentic AI Hackathon (solo participant).
          </li>
          <li>1st place — Visteon Code Challenge 2023 (out of 20 teams).</li>
        </ul>
      </div>
    </section>
  );
}
