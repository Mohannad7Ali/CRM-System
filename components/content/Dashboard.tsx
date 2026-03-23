import { useCRM } from "@/store/provider";
import QuickActionsBar from "../dashboard/QuickActionsBar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  DollarSign,
  FileText,
  Mail,
  Phone,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import DashboardTabBar from "../dashboard/DashboardTabBar";
const Dashboard = () => {
  const { contacts, tasks, callLogs, emails, meetings, proposals } = useCRM();

  // Enhanced metrics calculations
  const newLeads = contacts.filter((c) => c.status === "new").length;
  const conversions = contacts.filter((c) => c.status === "won").length;
  const totalRevenue = conversions * 5000;
  const pendingTasks = tasks.filter((t) => t.status !== "completed").length;
  const conversionRate =
    contacts.length > 0 ? Math.round((conversions / contacts.length) * 100) : 0;
  const avgDealSize =
    conversions > 0 ? Math.round(totalRevenue / conversions) : 0;
  const pipelineValue =
    contacts.filter((c) => ["qualified", "proposal"].includes(c.status))
      .length * 5000;

  // Sales funnel data
  const funnelData = [
    {
      stage: "Leads",
      count: contacts.filter((c) => c.status === "new").length,
      color: "bg-blue-500",
    },
    {
      stage: "Qualified",
      count: contacts.filter((c) => c.status === "qualified").length,
      color: "bg-yellow-500",
    },
    {
      stage: "Proposal",
      count: contacts.filter((c) => c.status === "proposal").length,
      color: "bg-orange-500",
    },
    {
      stage: "Closed",
      count: contacts.filter((c) => c.status === "won").length,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions buttons */}
      <QuickActionsBar />
      {/* Cards */}
      {/* Enhanced Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newLeads}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{conversionRate}%</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
            <Progress value={conversionRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalRevenue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pipeline Value
            </CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${pipelineValue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Potential revenue</p>
            <Progress value={60} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Activity Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calls Logged</CardTitle>
            <Phone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{callLogs.length}</div>
            <p className="text-xs text-muted-foreground">
              Total calls this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{emails.length}</div>
            <p className="text-xs text-muted-foreground">Total emails sent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meetings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{meetings.length}</div>
            <p className="text-xs text-muted-foreground">Scheduled meetings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Proposals</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{proposals.length}</div>
            <p className="text-xs text-muted-foreground">Active proposals</p>
          </CardContent>
        </Card>
      </div>

      {/* /Cards */}

      {/* Sales Funnel Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Funnel</CardTitle>
          <CardDescription>
            Lead progression through sales stages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {funnelData.map((stage, index) => (
              <div key={stage.stage} className="text-center relative">
                <div
                  className={`w-full h-20 ${stage.color} rounded-lg flex items-center justify-center text-white font-bold text-2xl mb-2`}
                >
                  {stage.count}
                </div>
                <p className="font-medium">{stage.stage}</p>
                {index < funnelData.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-2 transform translate-x-1/2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <DashboardTabBar contacts={contacts} />
    </div>
  );
};

export default Dashboard;
