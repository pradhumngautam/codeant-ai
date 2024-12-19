const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen fixed grid grid-cols-1 lg:grid-cols-2">
      {/* Static Images */}
      <div className="w-full"></div>

      {/* <Separator orientation={"vertical"} /> */}

      {/* Auth Form with Tabs */}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
