import { Search } from "lucide-react";

interface HeroSectionProps {
  workflowCount: number;
}

export const HeroSection = ({ workflowCount }: HeroSectionProps) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient effect - Laiye style deep blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(224,71%,15%)] via-background to-[hsl(224,71%,8%)]" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(to right, hsl(48 100% 50% / 0.1) 1px, transparent 1px), linear-gradient(to bottom, hsl(48 100% 50% / 0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Announcement badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8">
            APA Workflow Library 1.0 重磅发布
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">更智能、更高效的</span>
            <br />
            <span className="text-foreground">自动化工作流程</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            浏览 <span className="text-primary font-semibold">{workflowCount}</span> 个精选工作流程模板，快速启动你的自动化之旅
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto mb-8">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索工作流程..."
                className="w-full h-14 pl-12 pr-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Category tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {["AI智能", "销售自动化", "营销运营", "DevOps", "IT运维", "数据分析"].map((tag) => (
              <button
                key={tag}
                className="px-5 py-2.5 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-secondary transition-all"
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
