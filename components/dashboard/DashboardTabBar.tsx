import { type Contact } from "@/types/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import {
  Activity,
  AlertTriangle,
  Calendar,
  Clock,
  DollarSign,
  LucideProps,
  Mail,
  Phone,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface Props {
  contacts: Contact[];
}

const chartData = [
  { month: "Jan", leads: 65, revenue: 45000, calls: 120 },
  { month: "Feb", leads: 59, revenue: 52000, calls: 98 },
  { month: "Mar", leads: 80, revenue: 48000, calls: 145 },
  { month: "Apr", leads: 81, revenue: 61000, calls: 167 },
  { month: "May", leads: 56, revenue: 55000, calls: 134 },
  { month: "Jun", leads: 95, revenue: 67000, calls: 189 },
];
const chartConfig = {
  leads: { label: "Leads", color: "hsl(var(--chart-1))" },
  revenue: { label: "Revenue", color: "hsl(var(--chart-2))" },
  calls: { label: "Calls", color: "hsl(var(--chart-3))" },
};
const topPerformers = [
  { name: "John Doe", deals: 12, revenue: 85000, conversion: 85 },
  { name: "Jane Smith", deals: 10, revenue: 72000, conversion: 78 },
  { name: "Mike Johnson", deals: 8, revenue: 58000, conversion: 72 },
];
// Mock data for enhanced features
const recentActivities = [
  {
    id: 1,
    type: "call",
    contact: "Alice Johnson",
    action: "Called",
    time: "2 hours ago",
    status: "completed",
  },
  {
    id: 2,
    type: "email",
    contact: "Bob Smith",
    action: "Email sent",
    time: "4 hours ago",
    status: "pending",
  },
  {
    id: 3,
    type: "meeting",
    contact: "Carol Davis",
    action: "Meeting scheduled",
    time: "1 day ago",
    status: "upcoming",
  },
  {
    id: 4,
    type: "deal",
    contact: "David Wilson",
    action: "Deal closed",
    time: "2 days ago",
    status: "won",
  },
];
const upcomingTasks = [
  {
    id: 1,
    task: "Follow up with Alice Johnson",
    priority: "high",
    due: "Today 2:00 PM",
  },
  {
    id: 2,
    task: "Prepare proposal for Tech Corp",
    priority: "medium",
    due: "Tomorrow 10:00 AM",
  },
  {
    id: 3,
    task: "Demo call with Design Studio",
    priority: "high",
    due: "Tomorrow 3:00 PM",
  },
];

const DashboardTabBar = ({ contacts }: Props) => {
  const recentLeads = contacts
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5);

  const getStatusBadge = (status: string) => {
    const variants: Record<
      string,
      "default" | "secondary" | "destructive" | "outline"
    > = {
      new: "default",
      contacted: "secondary",
      qualified: "outline",
      proposal: "secondary",
      won: "default",
      lost: "destructive",
    };

    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "call":
        return <Phone className="h-4 w-4" />;
      case "email":
        return <Mail className="h-4 w-4" />;
      case "meeting":
        return <Calendar className="h-4 w-4" />;
      case "deal":
        return <DollarSign className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500";
      case "medium":
        return "text-yellow-500";
      case "low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="performance">Performance</TabsTrigger>
        <TabsTrigger value="activities">Activities</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Enhanced Chart */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>
                Leads, revenue, and calls over time
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="leads"
                      stackId="1"
                      stroke="var(--color-leads)"
                      fill="var(--color-leads)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="calls"
                      stackId="2"
                      stroke="var(--color-calls)"
                      fill="var(--color-calls)"
                      fillOpacity={0.4}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Recent Leads */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Leads</CardTitle>
              <CardDescription>Latest leads in your pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {lead.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {lead.company}
                      </p>
                    </div>
                    {getStatusBadge(lead.status)}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="performance" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Top Performers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>
                Best performing sales reps this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div
                    key={performer.name}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{performer.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {performer.deals} deals • $
                        {performer.revenue.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">
                          {performer.conversion}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="revenue" fill="var(--color-revenue)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="activities" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest interactions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-full">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">
                        {activity.action} {activity.contact}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                    <Badge
                      variant={
                        activity.status === "completed"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
              <CardDescription>Tasks requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-full">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{task.task}</p>
                      <p className="text-xs text-muted-foreground">
                        {task.due}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle
                        className={`h-4 w-4 ${getPriorityColor(task.priority)}`}
                      />
                      <span
                        className={`text-xs font-medium ${getPriorityColor(task.priority)}`}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabBar;
