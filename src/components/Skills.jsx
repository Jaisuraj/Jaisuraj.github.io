import { Code } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="section bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Code className="w-6 h-6 text-sky-600" /> Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card">
            <h4 className="font-semibold text-sky-600">Programming</h4>
            <p className="mt-2 text-gray-700">
              C, C++, Python, JavaScript, SQL, Assembly
            </p>
          </div>

          <div className="card">
            <h4 className="font-semibold text-sky-600">
              Frameworks & Libraries
            </h4>
            <p className="mt-2 text-gray-700">
              PyTorch, TensorFlow, Keras, Scikit-learn, OpenCV, FastAPI, React
            </p>
          </div>

          <div className="card">
            <h4 className="font-semibold text-sky-600">Cloud & Tools</h4>
            <p className="mt-2 text-gray-700">
              Google Cloud (Vertex AI, BigQuery, Cloud Run), Firebase, Docker,
              Git, REST API, MATLAB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
