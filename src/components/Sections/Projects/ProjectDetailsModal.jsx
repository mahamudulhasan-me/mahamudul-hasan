// ProjectDetailsModal.js
"use client";
// ProjectDetailsModal.js
import { MdClose } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectDetailsModal = ({ setShowModal }) => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 overflow-y-auto no-scrollbar bg-slate-950/50 pt-10">
        <div className=" bg-navy-dark mt-10 rounded-md shadow-lg max-w-3xl w-1/2 overflow-hidden">
          <div className="relative rounded-t-xl overflow-hidden">
            <button
              onClick={() => setShowModal(false)}
              className="absolute z-50 top-2 right-2  ring ring-rose-600 text-rose-600 hover:bg-rose-600 hover:text-slate-300 rounded-full transition-all"
            >
              <MdClose size={28} />
            </button>
            <ImageGallery items={images} />
          </div>

          <div className="p-5">
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              tenetur eligendi natus sed est consequatur dolores neque
              cupiditate debitis necessitatibus officiis, ipsam velit vero eos
              temporibus dicta repudiandae quam sequi autem. Harum doloremque
              reiciendis, nihil, repellat fugiat consequuntur et distinctio
              dolores voluptate, saepe perspiciatis voluptatum eius iusto nam
              molestiae vitae?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsModal;
