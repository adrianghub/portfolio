import { formatDate } from "@/lib/utils";

interface PostDateProps {
  createdAt: string;
}

export const PostDate = ({ createdAt }: PostDateProps) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 inline mr-2 ml-2 text-pink-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
    <span className="inline align-middle text-accent text-sm md:text-lg">
      {formatDate(createdAt)}
    </span>
  </>
);
