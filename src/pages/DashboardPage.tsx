
import {
  Activity,
  Calendar,
  CreditCard,
  DollarSign,
  ShoppingCart,
  UserRound,
  Users
} from "lucide-react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { LiveVideoCard } from "@/components/dashboard/LiveVideoCard";
import { CustomerInsightsCard } from "@/components/dashboard/CustomerInsightsCard";
import { TrafficHeatmapCard } from "@/components/dashboard/TrafficHeatmapCard";
import { ProductPathCard } from "@/components/dashboard/ProductPathCard";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Today is</span>
          <div className="flex items-center gap-1 bg-muted px-3 py-1 rounded-md">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-medium">April 5, 2025</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard
          title="Store Visitors"
          value="1,284"
          delta="+12.5% from last week"
          deltaType="increase"
          icon={<UserRound className="h-4 w-4" />}
        />
        <StatCard
          title="Conversion Rate"
          value="24.8%"
          delta="+2.1% from last week"
          deltaType="increase"
          icon={<Activity className="h-4 w-4" />}
        />
        <StatCard
          title="Average Purchase"
          value="$58.39"
          delta="-3.2% from last week"
          deltaType="decrease"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatCard
          title="Items per Purchase"
          value="3.2"
          delta="No change from last week"
          deltaType="neutral"
          icon={<ShoppingCart className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <div className="lg:col-span-2">
          <LiveVideoCard />
        </div>
        <div>
          <CustomerInsightsCard />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <TrafficHeatmapCard />
        <ProductPathCard />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
