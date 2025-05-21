import { RefreshCcw } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center gap-4 pt-[116px]">
      <RefreshCcw className="animate-spin" />
      Loading...
    </div>
  );
}
