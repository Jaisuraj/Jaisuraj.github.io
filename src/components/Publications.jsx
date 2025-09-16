import { BookOpen } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="section bg-white">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-sky-600" /> Publications
        </h2>

        <div className="space-y-4">
          <div className="card">
            <h3 className="font-semibold">
              Exploring Healthcare and Public Health Implications via Temporal
              Analysis of Human–Virus Interactions
            </h3>
            <p className="small-muted mt-1">
              Applied Artificial Intelligence — 2025
            </p>
            <p className="mt-2 text-gray-700 text-sm">
              Jaisuraj Bantupalli, Srivastava N., Ravi L., Devarajan M.,
              Kachapilly A. J., Roy S. — Leveraged adversarial networks and
              saliency maps for temporal virus–host interaction analysis.
            </p>
            <a
              className="text-sky-600 mt-2 inline-block"
              href="https://doi.org/10.1080/08839514.2025.2476237"
              target="_blank"
              rel="noreferrer"
            >
              View DOI
            </a>
          </div>

          <div className="card">
            <h3 className="font-semibold">
              Unveiling the hidden depths: advancements in underwater image
              enhancement using deep learning and auto-encoders
            </h3>
            <p className="small-muted mt-1">PeerJ Computer Science — 2024</p>
            <p className="mt-2 text-gray-700 text-sm">
              Jaisuraj Bantupalli, Amal John K., Sanjukta Roy, Dr Pavithra L.K.
              — Convolutional autoencoders for color correction and enhancement;
              improved SSIM/PSNR.
            </p>
            <a
              className="text-sky-600 mt-2 inline-block"
              href="https://peerj.com/articles/cs-2392/"
              target="_blank"
              rel="noreferrer"
            >
              View Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
