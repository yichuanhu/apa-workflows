import { useState } from "react";
import { Play, Calendar, FileText } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { WorkflowDetailDialog } from "./WorkflowDetailDialog";

interface Workflow {
  id: string;
  title: string;
  description: string;
  video_path: string;
  video_size: number;
  markdown_content: string;
  created_at: string;
}

interface WorkflowCardProps {
  workflow: Workflow;
}

export const WorkflowCard = ({ workflow }: WorkflowCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const timeAgo = formatDistanceToNow(new Date(workflow.created_at), {
    addSuffix: true,
    locale: zhCN,
  });

  return (
    <>
      <div
        className="group relative rounded-xl border border-border bg-card p-5 card-glow cursor-pointer animate-fade-in"
        onClick={() => setDialogOpen(true)}
      >
        {/* Video indicator */}
        {workflow.video_path && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
            <Play className="h-3 w-3" />
            <span>{formatFileSize(workflow.video_size)}</span>
          </div>
        )}

        {/* Icon placeholders - simulating integration icons */}
        <div className="flex gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-muted-foreground/50" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {workflow.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {workflow.description}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{timeAgo}</span>
        </div>

        {/* Hover overlay effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      <WorkflowDetailDialog
        workflow={workflow}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};
