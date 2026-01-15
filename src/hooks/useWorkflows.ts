import { useQuery } from "@tanstack/react-query";

interface Workflow {
  id: string;
  title: string;
  description: string;
  video_path: string;
  video_size: number;
  markdown_content: string;
  created_at: string;
}

const API_URL = "http://8.161.186.51/rest/v1/workflows";
const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzY4Mjk1MDA3LCJleHAiOjEzMjc4OTM1MDA3fQ.EI1f4mdT26L1fTj5-fgq4mCiuhfgDUdOCVFJ8B2koK4";

const fetchWorkflows = async (): Promise<Workflow[]> => {
  const response = await fetch(
    `${API_URL}?is_public=eq.true&select=id,title,description,video_path,video_size,markdown_content,created_at`,
    {
      headers: {
        apikey: API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workflows");
  }

  return response.json();
};

export const useWorkflows = () => {
  return useQuery({
    queryKey: ["workflows"],
    queryFn: fetchWorkflows,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
