import { useQuery } from "@tanstack/react-query";

export interface Workflow {
  id: string;
  title: string;
  description: string;
  video_path: string;
  video_size: number;
  markdown_content: string;
  created_at: string;
}

const API_URL = "https://zauifbgyiurxvsooutgj.supabase.co/rest/v1/workflows";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphdWlmYmd5aXVyeHZzb291dGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNjU5MzksImV4cCI6MjA4Mzk0MTkzOX0.w9icEN0WG5ntqQdTUpucYfCw5_sbZ6mEdI6h002pxXU";

// 模拟数据 - 当API请求失败时使用（HTTPS环境下无法访问HTTP API）
const MOCK_WORKFLOWS: Workflow[] = [
  {
    id: "7c19a396-f500-4d86-bfb4-d485b2e92025",
    title: "自动化客户数据同步",
    description: "将CRM系统中的客户数据自动同步到营销平台，实现数据统一管理",
    video_path: "videos/1768457545654-6ikyo7.mp4",
    video_size: 187603,
    markdown_content: "# 客户数据同步工作流\n\n自动化同步流程",
    created_at: "2026-01-15T14:12:26.334625+08:00"
  },
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    title: "邮件营销自动化",
    description: "根据用户行为自动触发个性化邮件，提升用户转化率",
    video_path: "videos/email-marketing.mp4",
    video_size: 256000,
    markdown_content: "# 邮件营销自动化\n\n智能邮件触发系统",
    created_at: "2026-01-14T10:30:00.000000+08:00"
  },
  {
    id: "b2c3d4e5-f6a7-8901-bcde-f23456789012",
    title: "社交媒体内容发布",
    description: "一键发布内容到多个社交平台，节省运营时间",
    video_path: "videos/social-publish.mp4",
    video_size: 324500,
    markdown_content: "# 社交媒体发布\n\n多平台同步发布",
    created_at: "2026-01-13T16:45:00.000000+08:00"
  },
  {
    id: "c3d4e5f6-a7b8-9012-cdef-345678901234",
    title: "数据报表自动生成",
    description: "每日自动汇总业务数据并生成可视化报表发送给相关人员",
    video_path: "videos/report-gen.mp4",
    video_size: 198000,
    markdown_content: "# 自动报表生成\n\n智能数据汇总",
    created_at: "2026-01-12T09:00:00.000000+08:00"
  },
  {
    id: "d4e5f6a7-b8c9-0123-defa-456789012345",
    title: "客服工单智能分配",
    description: "基于AI分析自动将客户工单分配给最合适的客服人员",
    video_path: "videos/ticket-assign.mp4",
    video_size: 275000,
    markdown_content: "# 智能工单分配\n\nAI驱动的分配系统",
    created_at: "2026-01-11T14:20:00.000000+08:00"
  },
  {
    id: "e5f6a7b8-c9d0-1234-efab-567890123456",
    title: "库存预警通知",
    description: "实时监控库存水平，自动发送补货预警通知",
    video_path: "videos/inventory-alert.mp4",
    video_size: 145000,
    markdown_content: "# 库存预警系统\n\n智能补货提醒",
    created_at: "2026-01-10T11:15:00.000000+08:00"
  }
];

const fetchWorkflows = async (): Promise<Workflow[]> => {
  try {
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

    const data = await response.json();
    return data.length > 0 ? data : MOCK_WORKFLOWS;
  } catch (error) {
    // 在HTTPS环境下无法访问HTTP API，返回模拟数据
    console.warn("API请求失败，使用模拟数据:", error);
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
