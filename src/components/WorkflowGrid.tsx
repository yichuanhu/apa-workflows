import { WorkflowCard } from "./WorkflowCard";
import { Loader2, AlertCircle } from "lucide-react";
import { useWorkflows } from "@/hooks/useWorkflows";

export const WorkflowGrid = () => {
  const { data: workflows, isLoading, error } = useWorkflows();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">加载工作流程中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <AlertCircle className="h-10 w-10 text-destructive mb-4" />
        <p className="text-muted-foreground">加载失败，请稍后重试</p>
      </div>
    );
  }

  if (!workflows || workflows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground">暂无工作流程</p>
      </div>
    );
  }

  return (
    <section className="container pb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">所有工作流程</h2>
        <span className="text-sm text-muted-foreground">
          共 {workflows.length} 个
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {workflows.map((workflow, index) => (
          <div 
            key={workflow.id} 
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <WorkflowCard workflow={workflow} />
          </div>
        ))}
      </div>
    </section>
  );
};
