import { LuChevronDown } from "react-icons/lu";
import { ProjectItem } from "@/components/items/project-item";
import { ProjejctList } from "@/components/lists/projejct-list";
import { stacks } from "@/constants/stack";
import { works } from "@/constants/works";
import Link from "next/link";

export default () => {
  return (
    <div>
      <div className="h-[91vh] flex flex-col items-center justify-between pt-28 pb-10 px-6 bg-amber-100">
        <div className="text-center font-bold text-5xl md:text-[64px] 2xl:text-7xl">
          Kodossou Kouassi <br />
          Full stack web & mobile <br /> developer
        </div>

        <div className="py-2 px-6 flex flex-col items-center gap-x-2 text-sm text-gray-900">
          Scroll down
          <LuChevronDown className="w-5 h-5 mt-0.5 text-inherit" />
        </div>
      </div>
      <div className="px-10 bg-blue-100 pt-20 pb-10">
        <div className="mb-2 text-center text-3xl lg:text-3xl text-gray-900 font-semibold">
          My works
        </div>
        <div className="mb-12 text-center">
          <Link href="/works" className="text-sm 2xl:text-lg text-blue-600">
            See all here my works
          </Link>
        </div>

        <ProjejctList>
          {works.map((item) => (
            <ProjectItem key={item.mainPictureName} {...item} />
          ))}
        </ProjejctList>
      </div>

      <div id="stack" className="pb-20 max-w-[1400px] mx-auto">
        <div className="mb-16 pt-20 text-center text-3xl lg:text-3xl font-semibold">
          My stack
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-24 px-12 md:px-24 xl:px-64">
          {stacks.map(({ name, stack }, index) => (
            <div key={index} className="">
              <div className="mb-6 textlg text-center text-gray-800 font-semibold">
                {name}
              </div>
              <div className="flex gap-x-10 pb-2 w-max mx-auto justify-center flex-wrap gap-y-4">
                {stack.map(({ name, icon }, index) => (
                  <div className="w-max" key={index}>
                    <div className="mb-2 text-6xl">{icon}</div>
                    <div className="text-xs text-center font-medium text-gray-600">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const metadata = {
  title: "Kodossou Kouassi",
  meta: [
    {
      name: "description",
      content: "Portfolio",
    },
  ],
};
