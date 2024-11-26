// ProjectDetailsModal.js
import Tag from "@/components/Tag/Tag";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
// ProjectDetailsModal.js
import Link from "next/link";
import { GoDash } from "react-icons/go";
import { MdClose } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const ProjectDetailsModal = ({ projectDetails, setShowModal }) => {
  const {
    name,
    title,
    description,
    cover,
    technologies,
    clientCode,
    images,
    liveLink,
    features,
  } = projectDetails;

  const galleryImages = images.map((image) => ({
    original: image,
    thumbnail: image,
  }));
  const desc = description.split(". ");
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 overflow-y-auto no-scrollbar bg-slate-950/50  py-5">
        <div className=" bg-navy-dark  rounded-md shadow-lg max-w-3xl w-full md:w-1/2 max-h-full overflow-auto border border-slate-700 scrollbar-hide">
          <div className="relative rounded-t-xl overflow-hidden min-h-24">
            <button
              onClick={() => setShowModal(false)}
              className="absolute z-50 top-2 right-2  ring ring-rose-600 text-rose-600 hover:bg-rose-600 hover:text-slate-300 rounded-full transition-all"
            >
              <MdClose size={28} />
            </button>
            <ImageGallery items={galleryImages} />
          </div>
          <div className="p-5 space-y-5">
            <article>
              {desc.map((text, index) => (
                <p key={index} className="text-slate-300 text-sm">
                  {text}.
                </p>
              ))}
            </article>
            <div>
              <h3 className="text-slate-light font-semibold mb-2 border-b w-fit border-dashed border-slate-600">
                Technologies:
              </h3>
              <Tag tags={technologies} />
            </div>
            <div>
              <h3 className="text-slate-light font-semibold mb-2 border-b w-fit border-dashed border-slate-600">
                Key Features:
              </h3>
              {features.map((feature, index) => (
                <p
                  key={index}
                  className="text-slate-300 flex items-start gap-2 text-sm mb-1"
                >
                  <span className="flex-shrink-0">
                    <GoDash className="w-4 h-4 text-green-400" />
                  </span>
                  {feature}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Link href={clientCode} target="_blank" rel="noopener noreferrer">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-getResume2 relative p-1.5 text-xs flex items-center gap-1"
                >
                  Code
                  <FaGithub
                    size={18}
                    className="hover:text-slate-200 transition-all"
                  />
                </button>
              </Link>
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <button
                  onClick={() => setShowModal(true)}
                  className="btn-getResume2 relative p-1.5 text-xs flex items-center gap-1"
                >
                  Preview
                  <LuExternalLink
                    size={18}
                    className="hover:text-slate-200 transition-all"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsModal;
