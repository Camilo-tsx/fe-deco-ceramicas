import { useSearchParams } from "react-router-dom";

export const useGetParams = () => {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const category = searchParams.get("category") || "all";

  return { id, category };
};
