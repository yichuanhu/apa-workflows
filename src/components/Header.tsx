import { Search, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navItems = [
  { label: "平台", hasDropdown: true },
  { label: "智能体", hasDropdown: true },
  { label: "解决方案", hasDropdown: true },
  { label: "成功案例", hasDropdown: false },
  { label: "资源中心", hasDropdown: true },
  { label: "关于我们", hasDropdown: true },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-10">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Laiye" className="h-6" />
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
            <span>中文</span>
            <ChevronDown className="h-3 w-3" />
          </div>

          <div className="hidden lg:flex items-center gap-2 text-sm text-foreground">
            <Phone className="h-4 w-4" />
            <span>400-001-8136</span>
          </div>

          <Button 
            variant="outline" 
            className="text-sm font-medium border-foreground/20 hover:bg-foreground/10"
          >
            联系我们
          </Button>

          <Button className="gradient-button rounded-md px-5 py-2 text-sm font-semibold">
            申请试用
          </Button>
        </div>
      </div>
    </header>
  );
};
