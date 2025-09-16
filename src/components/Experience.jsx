import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-sky-600" /> Professional Experience
        </h2>

        <div className="space-y-4">
          <div className="card">
            <h3 className="font-semibold">
              Accenture India Pvt. Ltd., Bengaluru — Advanced Application
              Engineering Analyst
            </h3>
            <p className="small-muted">July 2024 – Present</p>
            <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1">
              <li>
                Automated 20+ business workflows by developing Java delegate
                code and Activiti listeners.
              </li>
              <li>
                Mapped BPMN workflows to Activiti, improving execution
                efficiency by ~15–20%.
              </li>
              <li>
                Developed a GenAI agent that recommends optimized BPM workflows,
                reducing manual config effort by ~30%.
              </li>
              <li>
                Architected a multi-agent GenAI pipeline on Vertex AI & GCP for
                STTM analysis, SQL generation/validation with human-in-loop,
                validated on 10,000+ rows.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold">
              ORGware Technologies Pvt Ltd., Chennai — Software Engineer Intern
            </h3>
            <p className="small-muted">Jan 2023 – May 2023</p>
            <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1">
              <li>
                Built a drone control application with voice controls and
                anomaly detection (91% accuracy).
              </li>
              <li>
                Integrated real-time TCP streaming for drone video feeds and
                anomaly detection pipeline.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
