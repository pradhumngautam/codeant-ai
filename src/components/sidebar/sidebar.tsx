import Image from "next/image";

import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-full border-r border-[#E9EAEB] bg-[#FFFFFF] flex flex-col overflow-y-auto py-6">
      <div className="px-6 pb-6">
        <Image
          src={"/codeant-logo.png"}
          alt="card"
          width={161}
          height={32}
          className=""
        />
      </div>

      <div className="flex flex-col w-full h-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
