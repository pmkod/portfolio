import { ProjectItem } from "@/components/items/project-item";
import { ProjejctList } from "@/components/lists/projejct-list";
import { works } from "@/constants/works";

export default () => {
  return (
    <div>
      <div className="pt-10 mb-10 text-3xl text-center font-semibold">
        My works
      </div>
      <ProjejctList>
        {works.map((item, index) => (
          <ProjectItem key={index} {...item} />
        ))}
      </ProjejctList>
    </div>
  );
};

export const metadata = {
  title: "Works",
  meta: [
    {
      name: "description",
      content: "Portfolio",
    },
  ],
};
