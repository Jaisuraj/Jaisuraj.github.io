import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-700">
            I am Jaisuraj Bantupalli. I graduated from Vellore Institute of
            Technology (B.Tech, Electronics & Computer Engineering, CGPA
            9.34/10) and currently work as an Advanced Application Engineering
            Analyst at Accenture. I build GenAI and data engineering solutions —
            including multi-agent pipelines on Vertex AI for source-to-target
            mapping, SQL generation, validation, and human-in-the-loop
            execution.
          </p>
          <p className="text-gray-700">
            My research interests include AI for healthcare, explainable models,
            and real-time embedded ML for biosignal processing.
          </p>

          <div className="mt-4">
            <a
              href="/Jaisuraj_Masters_2page.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-sky-600">Quick Facts</h3>
          <ul className="mt-3 text-gray-700 space-y-2">
            <li>
              <strong>Education:</strong> VIT Chennai — B.Tech (E&C), 2020–2024
            </li>
            <li>
              <strong>CGPA:</strong> 9.34 / 10 — Silver Medalist
            </li>
            <li>
              <strong>Current:</strong> Accenture India — Advanced Application
              Engineering Analyst
            </li>
            <li>
              <strong>Interests:</strong> GenAI, Research, Machine Learning,
              Vertex AI
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
