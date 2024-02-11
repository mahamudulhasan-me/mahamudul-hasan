// useModal.js
import { useState } from "react";

const useModal = (initialState = false) => {
  const [showModal, setShowModal] = useState(initialState);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return { showModal, openModal, closeModal };
};

export default useModal;
