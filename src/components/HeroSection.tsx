import { Search } from "lucide-react";

interface HeroSectionProps {
  workflowCount: number;
}

export const HeroSection = ({ workflowCount }: HeroSectionProps) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">{workflowCount}</span>
            <span className="text-foreground"> 个工作流程</span>
            <br />
            <span className="text-foreground">自动化模板</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8">
            浏览我们的工作流程库，快速启动你的自动化之旅
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索工作流程..."
                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Category tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {["AI", "销售", "营销", "DevOps", "IT运维", "数据分析"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
