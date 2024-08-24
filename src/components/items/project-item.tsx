"use client";
import { LuArrowUpRight } from "react-icons/lu";
import { RiFullscreenLine } from "react-icons/ri";
import { ProjectPictureModal } from "../modals/project-picture-modal";
import { useState } from "react";

interface ProjectItemProps {
  name: string;
  mainPictureName: string;
  link?: string;
  description: string;
  inDevelopement?: boolean;
}

export const ProjectItem = ({
  name,
  mainPictureName,
  link,
  description,
  inDevelopement,
}: ProjectItemProps) => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
      <div className="relative group w-full md:w-80 aspect-video rounded md:mr-8 bg-gray-50">
        <ProjectPictureModal
          open={open}
          pictureUrl={`/images/projects/${mainPictureName}`}
          hideModal={hideModal}
        />
        <img
          src={`/images/projects/${mainPictureName}`}
          alt={name}
          className="w-full h-full border object-contain border-gray-300"
        />
        <button
          onClick={showModal}
          className="opacity-0 group-hover:visible absolute bottom-3 right-3 rounded-md bg-gray-900 group-hover:opacity-70 hover:opacity-90 transition-all cursor-pointer p-1"
        >
          <RiFullscreenLine className="text-sm text-white" />
        </button>
      </div>
      <div className="flex-1 border-b border-gray-300 mt-4 md:mt-0">
        <div className="flex items-center gap-x-2">
          <div className="text-lg font-semibold mb-2 mt-2">{name}</div>
          {inDevelopement && (
            <div className="text-[12px] px-1.5 font-medium border border-blue-500 rounded-full text-blue-500">
              In developement
            </div>
          )}
        </div>
        <div className="text-sm text-gray-500">{description}</div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferer"
            className="my-2 text-sm w-max flex items-center gap-x-1 text-gray-800 hover:text-blue-500 transition-colors"
          >
            <span>See app</span>
            <LuArrowUpRight className="text-base" />
          </a>
        )}
      </div>
    </div>
  );
};
