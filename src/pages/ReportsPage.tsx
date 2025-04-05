
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Download, FileText, Search } from "lucide-react";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground mt-2">
            Pre-designed and customizable reports on key metrics.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search reports..." className="pl-8" />
          </div>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="gap-1">
              <Calendar className="h-4 w-4" />
              <span>Date Range</span>
            </Button>
            <Button size="sm" className="gap-1">
              <FileText className="h-4 w-4" />
              <span>New Report</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Daily Sales Report",
                  description: "Summary of today's sales data",
                  date: "Today"
                },
                {
                  title: "Daily Traffic Report",
                  description: "Customer traffic analysis",
                  date: "Today"
                },
                {
                  title: "Daily Conversion Report",
                  description: "Visit-to-purchase conversion rates",
                  date: "Today"
                },
                {
                  title: "Department Performance",
                  description: "Performance by department",
                  date: "Today"
                },
                {
                  title: "Staff Productivity",
                  description: "Staff performance metrics",
                  date: "Today"
                }
              ].map((report, index) => (
                <ReportCard key={index} {...report} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="weekly" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Weekly Sales Summary",
                  description: "Sales data from the past week",
                  date: "Last 7 Days"
                },
                {
                  title: "Weekly Traffic Analysis",
                  description: "Traffic patterns week over week",
                  date: "Last 7 Days"
                },
                {
                  title: "Product Performance",
                  description: "Top and bottom performing products",
                  date: "Last 7 Days"
                }
              ].map((report, index) => (
                <ReportCard key={index} {...report} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="monthly">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Monthly Executive Summary",
                  description: "High-level business performance",
                  date: "June 2025"
                },
                {
                  title: "Marketing Effectiveness",
                  description: "Campaign performance analysis",
                  date: "June 2025"
                },
                {
                  title: "Store Comparison",
                  description: "Performance across all locations",
                  date: "June 2025"
                }
              ].map((report, index) => (
                <ReportCard key={index} {...report} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="custom">
            <div className="flex flex-col items-center justify-center p-12 border rounded-lg text-center">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Create Custom Report</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Select specific metrics, date ranges, and visualizations to create your custom report.
              </p>
              <Button>Start Building</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

interface ReportCardProps {
  title: string;
  description: string;
  date: string;
}

function ReportCard({ title, description, date }: ReportCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">{title}</CardTitle>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{date}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="h-40 flex items-center justify-center bg-muted/20 rounded-md">
          <FileText className="h-16 w-16 text-muted" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm">View</Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
