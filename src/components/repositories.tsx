import { Plus, RefreshCcw } from "lucide-react";

import { Button } from "./ui/button";

import SearchInput from "./ui/search-input";

const RepositoiresList = () => {
  return (
    <div className="h-full w-full bg-[#FFFFFF] border border-[#E9EAEB] rounded-xl">
      <div className="px-6 py-5 flex flex-col items-start justify-center w-full gap-4">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-[#181D27]">
              Repositories
            </h1>
            <p className="text-[14px] text-[#414651]">33 total repositories</p>
          </div>

          <div className="space-x-2">
            <Button variant={"outline"}>
              <RefreshCcw className="h-4 w-4" />
              Refresh All
            </Button>

            <Button className="bg-[#1570EF] text-[#FFFFFF] hover:bg-[#1570EF] border-2 border-blue-500/60">
              <Plus className="h-4 w-4" /> Add Repository
            </Button>
          </div>
        </div>

        <SearchInput />
      </div>
    </div>
  );
};

export default RepositoiresList;
