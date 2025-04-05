
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Camera,
  ChevronLeft,
  ChevronRight,
  FileText,
  Grid,
  Home,
  Menu,
  MoreHorizontal,
  Settings,
  Timer
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "border-r bg-background flex flex-col transition-all duration-300 ease-in-out h-screen",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between h-14 px-3 py-2 border-b">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary"
            >
              <circle cx="14" cy="10" r="2.5"/>
              <path d="M16.5 15h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V5c0-.5-.2-1-.6-1.4C18 3.2 17.5 3 17 3H8c-.5 0-1 .2-1.4.6C6.2 4 6 4.5 6 5v8c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6h.5"/>
              <path d="M11 15h4"/>
              <path d="M6 15v3c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6h8c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4v-3"/>
            </svg>
            <span className="font-semibold">Retail Eye</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <ScrollArea className="flex-1 px-1 py-2">
        <nav className="flex flex-col gap-1">
          <NavItem
            to="/dashboard"
            icon={Home}
            title="Dashboard"
            collapsed={collapsed}
          />
          <NavItem
            to="/live-video"
            icon={Camera}
            title="Live Video"
            collapsed={collapsed}
          />
          <NavItem
            to="/analytics"
            icon={BarChart3}
            title="Analytics"
            collapsed={collapsed}
          />
          <NavItem
            to="/reports"
            icon={FileText}
            title="Reports"
            collapsed={collapsed}
          />
          <NavItem
            to="/heatmaps"
            icon={Grid}
            title="Heatmaps"
            collapsed={collapsed}
          />
          <NavItem
            to="/dwell-time"
            icon={Timer}
            title="Dwell Time"
            collapsed={collapsed}
          />
          <NavItem
            to="/more"
            icon={MoreHorizontal}
            title="More"
            collapsed={collapsed}
          />
        </nav>
      </ScrollArea>

      <div className="border-t p-2">
        <Button
          variant="ghost"
          size={collapsed ? "icon" : "default"}
          className={cn(
            "w-full justify-start",
            collapsed && "items-center justify-center"
          )}
          asChild
        >
          <NavLink to="/settings">
            <Settings className="h-4 w-4 mr-2" />
            {!collapsed && <span>Settings</span>}
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  title: string;
  collapsed: boolean;
}

function NavItem({ to, icon: Icon, title, collapsed }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      size={collapsed ? "icon" : "default"}
      className={cn(
        "w-full justify-start",
        collapsed ? "items-center justify-center" : "px-2"
      )}
      asChild
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(isActive && "bg-muted")
        }
      >
        <Icon className="h-4 w-4 mr-2" />
        {!collapsed && <span>{title}</span>}
      </NavLink>
    </Button>
  );
}
