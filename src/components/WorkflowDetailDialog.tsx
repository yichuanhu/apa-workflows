import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";

interface Workflow {
  id: string;
  title: string;
  description: string;
  video_path: string;
  video_size: number;
  markdown_content: string;
  created_at: string;
}

interface WorkflowDetailDialogProps {
  workflow: Workflow | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const STORAGE_BASE_URL = "https://tjm-supabase.laiye.com/storage/v1/object/public/workflows";

export const WorkflowDetailDialog = ({
  workflow,
  open,
  onOpenChange,
}: WorkflowDetailDialogProps) => {
  if (!workflow) return null;

  const videoUrl = workflow.video_path
    ? `${STORAGE_BASE_URL}/${workflow.video_path}`
    : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{workflow.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Video Player */}
          {videoUrl && (
            <div className="rounded-lg overflow-hidden bg-secondary">
              <video
                src={videoUrl}
                controls
                className="w-full aspect-video"
                preload="metadata"
              >
                您的浏览器不支持视频播放
              </video>
            </div>
          )}

          {/* Markdown Content */}
          {workflow.markdown_content && (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown>{workflow.markdown_content}</ReactMarkdown>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
