import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginForm = () => {
  return (
    <div className="border border-[#E9EAEB] rounded-xl bg-[#FFFFFF] w-full lg:w-[672px] lg:h-[602px]">
      <Tabs defaultValue="saas">
        <div className="px-5 py-9 flex flex-col items-center justify-center text-center gap-5 border-b border-[#D5D7DA]">
          <Image
            src={"/codeant-logo.png"}
            alt="card"
            width={201}
            height={40}
            className=""
          />

          <div className="text-[32px] font-semibold">Welcome to CodeAnt AI</div>

          <TabsList className="w-full lg:w-[624px] h-[60px] p-0 border">
            <TabsTrigger
              value="saas"
              className="w-full h-full text-[20px] font-semibold"
            >
              SAAS
            </TabsTrigger>

            <TabsTrigger
              value="selfHosted"
              className="w-full h-full text-[20px] font-semibold"
            >
              Self Hosted
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="py-6 px-5 w-full">
          <TabsContent
            value="saas"
            className="w-full flex flex-col items-center"
          >
            <div className="flex flex-col items-center w-full lg:w-[446px] gap-4">
              <Button variant={"native"} size={"login"}>
                <Link href={"/dashboard"}>Sign in with Github</Link>
              </Button>

              <Button variant={"native"} size={"login"}>
                <Link href={"/dashboard"}>Sign in with Bitbucket</Link>
              </Button>

              <Button variant={"native"} size={"login"}>
                <Link href={"/dashboard"}>Sign in with Azure DevOps</Link>
              </Button>

              <Button variant={"native"} size={"login"}>
                <Link href={"/dashboard"}>Sign in with Gitlab</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent
            value="selfHosted"
            className="w-full flex flex-col items-center"
          >
            <div className="flex flex-col items-center w-full lg:w-[446px] gap-4">
              <Button variant={"native"} size={"login"}>
                <Link href={"/dashboard"}>Self Hosted Gitlab</Link>
              </Button>

              <Button variant={"native"} size={"login"}>
                <Link href={"/dashboard"}>Sign in with SSO</Link>
              </Button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default LoginForm;
