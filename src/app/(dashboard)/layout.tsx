import Sidebar from "@/components/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center h-full w-full">
      <div className="hidden md:flex h-full w-[242px] flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      <div className="bg-[#FAFAFA] md:pl-[242px] h-full w-full">
        <div className="p-6 h-full lg:max-w-screen-xl lg:mx-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
