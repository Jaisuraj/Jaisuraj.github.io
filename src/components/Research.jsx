import { Beaker, Activity } from "lucide-react";

export default function Research() {
  return (
    <section id="research" className="section bg-blue-50">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Activity className="w-6 h-6 text-sky-600" /> Research Experience
        </h2>

        <div className="space-y-4">
          <div className="card">
            <h3 className="font-semibold">
              Sleep Apnea Detection System — Capstone Thesis
            </h3>
            <p className="small-muted">Dec 2023 – May 2024</p>
            <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1">
              <li>
                Designed custom hardware prototype (ESP32-Wrover, SF15-600
                strain, Max30100 SpO2, airflow pressure) sampling at 10 Hz.
              </li>
              <li>
                Implemented multi-hour storage and wireless transmission for
                real-time biosignal monitoring.
              </li>
              <li>
                Created ML pipeline using Catch-22 features (reduced 7700 → 22)
                and Random Forest achieving 94.87% accuracy and 94.44%
                sensitivity.
              </li>
              <li>
                Demonstrated edge feasibility combining efficient sensors and
                interpretable ML.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold">
              Deep Learning for Virus–Host Interaction Modeling
            </h3>
            <p className="small-muted">Mar 2023 – Jul 2023</p>
            <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1">
              <li>
                Engineered adversarial networks with 36 virus, 14 human, 11
                environmental features on 850 daily records to forecast pandemic
                progression.
              </li>
              <li>
                Used saliency maps to interpret models and quantify
                mutation/behavior impact.
              </li>
              <li>
                Deployed hybrid CNN–LSTM with skip-connections achieving up to
                85% accuracy for variant progression modeling.
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold">
              Deep Learning Autoencoder for Color Correction
            </h3>
            <p className="small-muted">Dec 2022 – Apr 2023</p>
            <ul className="mt-3 text-gray-700 list-disc list-inside space-y-1">
              <li>
                Built convolutional autoencoders to correct bluish-green
                distortion in underwater images.
              </li>
              <li>
                Improved SSIM/PSNR by 15–20% over traditional methods on UIEB
                dataset and validated on 2000+ images.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
