import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Laiye" className="h-5" />
            <span className="text-lg font-semibold text-foreground">APA工作流程</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">关于我们</a>
            <a href="#" className="hover:text-foreground transition-colors">文档</a>
            <a href="#" className="hover:text-foreground transition-colors">隐私政策</a>
            <a href="#" className="hover:text-foreground transition-colors">服务条款</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Laiye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
