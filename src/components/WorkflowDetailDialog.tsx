import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Workflow {
  id: string;
  title: string;
  description: string;
  video_path: string;
  video_size: number;
  markdown_content: string;
  package_path?: string | null;
  package_size?: number | null;
  package_name?: string | null;
  created_at: string;
}

interface WorkflowDetailDialogProps {
  workflow: Workflow | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const STORAGE_BASE_URL = "https://zauifbgyiurxvsooutgj.supabase.co/storage/v1/object/public/workflows";

const isImageFile = (path: string): boolean => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'];
  const lowerPath = path.toLowerCase();
  return imageExtensions.some(ext => lowerPath.endsWith(ext));
};

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
};

export const WorkflowDetailDialog = ({
  workflow,
  open,
  onOpenChange,
}: WorkflowDetailDialogProps) => {
  if (!workflow) return null;

  const mediaUrl = workflow.video_path
    ? `${STORAGE_BASE_URL}/${workflow.video_path}`
    : null;

  const isImage = workflow.video_path ? isImageFile(workflow.video_path) : false;

  const packageUrl = workflow.package_path
    ? `${STORAGE_BASE_URL}/${workflow.package_path}`
    : null;

  const handleDownload = () => {
    if (packageUrl) {
      const link = document.createElement('a');
      link.href = packageUrl;
      link.download = workflow.package_name || 'workflow-package';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{workflow.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Media Display - Video or Image */}
          {mediaUrl && (
            <div className="rounded-lg overflow-hidden bg-secondary">
              {isImage ? (
                <img
                  src={mediaUrl}
                  alt={workflow.title}
                  className="w-full max-h-[60vh] object-contain"
                />
              ) : (
                <video
                  src={mediaUrl}
                  controls
                  className="w-full aspect-video"
                  preload="metadata"
                >
                  您的浏览器不支持视频播放
                </video>
              )}
            </div>
          )}

          {/* Download Package Button */}
          {packageUrl && (
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {workflow.package_name || '流程包'}
                  </p>
                  {workflow.package_size && (
                    <p className="text-sm text-muted-foreground">
                      {formatFileSize(workflow.package_size)}
                    </p>
                  )}
                </div>
              </div>
              <Button onClick={handleDownload} variant="default" size="sm">
                <Download className="h-4 w-4 mr-2" />
                下载流程包
              </Button>
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
