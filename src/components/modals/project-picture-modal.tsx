"use client";
import { PiX } from "react-icons/pi";

interface ProjectPictureModalProps {
  open: boolean;
  pictureUrl: string;
  hideModal: () => void;
}

export const ProjectPictureModal = ({
  open = false,
  pictureUrl,
  hideModal,
}: ProjectPictureModalProps) => {
  return (
    <div
      className={`w-screen h-screen lg:px-10 fixed inset-0 z-20 ${
        open ? "visible" : "invisible"
      }`}
    >
      <button
        onClick={hideModal}
        className="fixed z-50 top-4 right-4 p-2 rounded-full bg-gray-900 opacity-70 hover:opacity-90 transition-all"
      >
        <PiX className="text-white text-2xl" />
      </button>
      <div
        className="absolute z-30 inset-0 bg-gray-900 opacity-50"
        onClick={hideModal}
      ></div>

      <div className="relative z-40 top-1/2 transform -translate-y-1/2 w-full max-h-[96vh] aspect-video">
        <img src={pictureUrl} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};
