const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen fixed grid grid-cols-1 lg:grid-cols-2">
      {/* Static Images */}
      <div className="w-full h-full hidden lg:block"></div>

      {/* <Separator orientation={"vertical"} /> */}

      {/* Auth Form with Tabs */}
      <div className="w-full py-6 bg-[#FAFAFA]">{children}</div>
    </div>
  );
};

export default AuthLayout;
