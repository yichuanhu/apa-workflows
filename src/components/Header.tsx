import { Search, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "工作流程", hasDropdown: true },
  { label: "产品", hasDropdown: true },
  { label: "文档", hasDropdown: false },
  { label: "社区", hasDropdown: true },
  { label: "企业版", hasDropdown: true },
  { label: "定价", hasDropdown: false },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-lg font-semibold text-foreground">APA</span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="nav-link flex items-center gap-1 text-sm font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
              </button>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="nav-link p-2">
            <Search className="h-5 w-5" />
          </button>
          
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <span>简体中文</span>
            <ChevronDown className="h-3 w-3" />
          </div>

          <Button 
            variant="ghost" 
            className="nav-link text-sm font-medium"
            onClick={() => {
              // SSO登录预留
              console.log("SSO Login clicked");
            }}
          >
            <User className="h-4 w-4 mr-2" />
            登录
          </Button>

          <Button className="gradient-button rounded-full px-5 py-2 text-sm">
            开始使用
          </Button>
        </div>
      </div>
    </header>
  );
};
