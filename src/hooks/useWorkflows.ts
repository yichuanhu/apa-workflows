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
    created_at: "2026-01-15T14:12:26.334625+08:00",
    updated_at: "2026-01-15T14:12:26.334625+08:00"
  },
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    title: "邮件营销自动化",
    description: "根据用户行为自动触发个性化邮件，提升用户转化率",
    video_path: "videos/email-marketing.mp4",
    video_size: 256000,
    markdown_content: "# 邮件营销自动化\n\n智能邮件触发系统",
    is_public: true,
    created_at: "2026-01-14T10:30:00.000000+08:00",
    updated_at: "2026-01-14T10:30:00.000000+08:00"
  },
  {
    id: "b2c3d4e5-f6a7-8901-bcde-f23456789012",
    title: "社交媒体内容发布",
    description: "一键发布内容到多个社交平台，节省运营时间",
    video_path: "videos/social-publish.mp4",
    video_size: 324500,
    markdown_content: "# 社交媒体发布\n\n多平台同步发布",
    is_public: true,
    created_at: "2026-01-13T16:45:00.000000+08:00",
    updated_at: "2026-01-13T16:45:00.000000+08:00"
  },
  {
    id: "c3d4e5f6-a7b8-9012-cdef-345678901234",
    title: "数据报表自动生成",
    description: "每日自动汇总业务数据并生成可视化报表发送给相关人员",
    video_path: "videos/report-gen.mp4",
    video_size: 198000,
    markdown_content: "# 自动报表生成\n\n智能数据汇总",
    is_public: true,
    created_at: "2026-01-12T09:00:00.000000+08:00",
    updated_at: "2026-01-12T09:00:00.000000+08:00"
  },
  {
    id: "d4e5f6a7-b8c9-0123-defa-456789012345",
    title: "客服工单智能分配",
    description: "基于AI分析自动将客户工单分配给最合适的客服人员",
    video_path: "videos/ticket-assign.mp4",
    video_size: 275000,
    markdown_content: "# 智能工单分配\n\nAI驱动的分配系统",
    is_public: true,
    created_at: "2026-01-11T14:20:00.000000+08:00",
    updated_at: "2026-01-11T14:20:00.000000+08:00"
  },
  {
    id: "e5f6a7b8-c9d0-1234-efab-567890123456",
    title: "库存预警通知",
    description: "实时监控库存水平，自动发送补货预警通知",
    video_path: "videos/inventory-alert.mp4",
    video_size: 145000,
    markdown_content: "# 库存预警系统\n\n智能补货提醒",
    is_public: true,
    created_at: "2026-01-10T11:15:00.000000+08:00",
    updated_at: "2026-01-10T11:15:00.000000+08:00"
  }
];

const fetchWorkflows = async (): Promise<Workflow[]> => {
  try {
    const { data, error } = await supabase
      .from('workflows')
      .select('id, title, description, video_path, video_size, markdown_content, is_public, created_at, updated_at')
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
