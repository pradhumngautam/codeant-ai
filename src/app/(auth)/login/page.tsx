import LoginForm from "@/components/login-form";

const LoginPage = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-8">
      <LoginForm />

      <span>
        By signing up you agree to the <b>Privacy Policy</b>.
      </span>
    </div>
  );
};

export default LoginPage;
