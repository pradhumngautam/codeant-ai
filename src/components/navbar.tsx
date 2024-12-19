import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-[#FFFFFF] border-b p-4 flex items-center justify-between w-full">
      <Link href={"/dashboard"}>
        <Image
          src={"/codeant-logo.png"}
          alt="card"
          width={122}
          height={26}
          className=""
        />
      </Link>

      <div></div>
    </div>
  );
};

export default Navbar;
