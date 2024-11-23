import { ProjectItem } from "@/components/items/project-item";
import { ProjejctList } from "@/components/lists/projejct-list";
import { works } from "@/constants/works";

export const metadata = {
  title: "Works",
  meta: [
    {
      name: "description",
      content:
        "Discover my creative journey through these selected projects. Each one represents unique challenges, innovative solutions, and my commitment to quality. Browse through to see my work in action.",
    },
  ],
};

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
