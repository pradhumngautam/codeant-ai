import Sidebar from "@/components/sidebar/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center h-full w-full">
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      <div className="bg-[#FAFAFA] md:pl-56 h-full w-full">
        <div className="p-6 lg:max-w-screen-xl lg:mx-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
