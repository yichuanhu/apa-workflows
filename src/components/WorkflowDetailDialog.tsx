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
            <div className="space-y-2 text-foreground">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-xl font-bold mb-3">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-lg font-semibold mb-2">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-base font-medium mb-2">{children}</h3>,
                  p: ({ children }) => <p className="mb-2 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc pl-5 mb-2 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-5 mb-2 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  code: ({ children }) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>,
                  pre: ({ children }) => <pre className="bg-muted p-3 rounded-lg overflow-x-auto mb-2">{children}</pre>,
                  a: ({ href, children }) => <a href={href} className="text-primary underline hover:no-underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">{children}</blockquote>,
                }}
              >
                {workflow.markdown_content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
