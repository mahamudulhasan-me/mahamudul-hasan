// ProjectDetailsModal.js
"use client";
import { MdClose } from "react-icons/md";
// ProjectDetailsModal.js

const ProjectDetailsModal = ({ setShowModal }) => {
  return (
    <>
      <div className="fixed bg-slate-950/50 inset-0 flex items-center justify-center text-slate-400">
        <div className="bg-navy-dark p-5 rounded-md shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg">
          project details modal{" "}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-0 right-0 ring rounded-full text-rose-600 ring-rose-600 hover:bg-rose-600 hover:text-slate-300 transition-all "
          >
            <MdClose size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsModal;
