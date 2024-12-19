import { Database } from "lucide-react";

const RepositoryRow = ({
  title,
  visibility,
  techStack,
  size,
  updatedAt,
}: {
  title: string;
  visibility: string;
  techStack: string;
  size: string;
  updatedAt: string;
}) => {
  return (
    <div className="p-6 border-t flex items-center justify-start">
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2">
          <h2 className="text-[20px] font-medium text-[#181D27]">{title}</h2>
          <span className="text-[14px] text-[#175CD3] border bg-[#EFF8FF] border-[#B2DDFF] rounded-full px-2 py-0.5">
            {visibility}
          </span>
        </div>

        <div className="flex items-center gap-10">
          <div>
            {techStack}{" "}
            <span className="h-2 w-2 inline-flex rounded-full bg-[#1570EF]"></span>
          </div>

          <div className="flex items-center gap-1">
            <Database className="h-3 w-3" /> {size} KB
          </div>

          <div>Updated {updatedAt} ago</div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryRow;
