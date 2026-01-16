import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Workflow } from "@/types/workflow";

// 模拟数据 - 当API请求失败时使用
const MOCK_WORKFLOWS: Workflow[] = [
  {
    id: "7c19a396-f500-4d86-bfb4-d485b2e92025",
    title: "自动化客户数据同步",
    description: "将CRM系统中的客户数据自动同步到营销平台，实现数据统一管理",
    video_path: "videos/1768457545654-6ikyo7.mp4",
    video_size: 187603,
    markdown_content: "# 客户数据同步工作流\n\n自动化同步流程",
    is_public: true,
    package_path: null,
    package_size: null,
    package_name: null,
    created_at: "2026-01-15T14:12:26.334625+08:00",
    updated_at: "2026-01-15T14:12:26.334625+08:00"
  }
];

const fetchWorkflows = async (): Promise<Workflow[]> => {
  try {
    const { data, error } = await supabase
      .from('workflows')
      .select('id, title, description, video_path, video_size, markdown_content, is_public, package_path, package_size, package_name, created_at, updated_at')
      .eq('is_public', true);

    if (error) {
      throw error;
    }

    return data && data.length > 0 ? data : MOCK_WORKFLOWS;
  } catch (error) {
    console.warn("Supabase查询失败，使用模拟数据:", error);
    return MOCK_WORKFLOWS;
  }
};

export const useWorkflows = () => {
  return useQuery({
    queryKey: ["workflows"],
    queryFn: fetchWorkflows,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};

export type { Workflow };
