"use client";
import { InView } from "@/components/motion-ui/InView";
import { useState } from "react";
import ProjectCardInner from "./ProjectCardInner";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectCard = ({ projectDetails }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -30px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ProjectCardInner
          projectDetails={projectDetails}
          setShowModal={setShowModal}
        />
      </InView>
      {showModal && (
        <ProjectDetailsModal
          projectDetails={projectDetails}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default ProjectCard;
