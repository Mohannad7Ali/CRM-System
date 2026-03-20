import type { ActivePage } from "@/components/layout/layout";
import {
  BarChart3,
  CheckSquare,
  LayoutDashboard,
  MessageCircle,
  TrendingUp,
  Users,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    key: "dashboard" as ActivePage,
  },
  {
    title: "Contacts",
    icon: Users,
    key: "contacts" as ActivePage,
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    key: "tasks" as ActivePage,
  },
  {
    title: "Funnels",
    icon: TrendingUp,
    key: "funnels" as ActivePage,
  },
  {
    title: "Analytics",
    icon: BarChart3,
    key: "analytics" as ActivePage,
  },
  {
    title: "Team Chat",
    icon: MessageCircle,
    key: "chat" as ActivePage,
  },
];
export default menuItems;
