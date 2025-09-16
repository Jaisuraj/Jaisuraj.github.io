import { GraduationCap, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Education() {
  const [open, setOpen] = useState(false);
  return (
    <section id="education" className="section bg-blue-50">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-sky-600" /> Education
        </h2>

        <div className="card">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">
                Vellore Institute of Technology, Chennai
              </h3>
              <p className="text-gray-700">
                B.Tech in Electronics and Computer Engineering (2020 – 2024)
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-500">CGPA: 9.34 / 10</p>
              <div className="mt-2 flex items-center justify-end gap-2 text-yellow-500">
                <Award className="w-5 h-5" />
                <span className="font-medium">Silver Medalist</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="mt-4 w-full flex items-center justify-center gap-2 text-gray-600 hover:text-sky-600"
          >
            {open ? <ChevronUp /> : <ChevronDown />}{" "}
            {open ? "Show Less" : "Show More"}
          </button>

          {open && (
            <div className="mt-4 text-gray-700">
              <p>
                <strong>Relevant Coursework:</strong> Data Structures &
                Algorithms, Machine Learning Algorithms, Computer Vision, DBMS,
                Operating Systems, Probability & Random Processes.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
