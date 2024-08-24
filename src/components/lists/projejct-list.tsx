import { PropsWithChildren } from "react";

export const ProjejctList = ({ children }: PropsWithChildren) => {
  //   const count = useSignal(0);
  return (
    <div className="px-5 sm:px-20 md:px-24 lg:px-40 xl:px-60 pb-20 space-y-16">
      {children}
    </div>
  );
};
