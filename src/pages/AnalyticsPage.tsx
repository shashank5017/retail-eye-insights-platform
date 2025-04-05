
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart, Users } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive analysis of customer behavior and store performance.
          </p>
        </div>

        <Tabs defaultValue="customer" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="customer">Customer Behavior</TabsTrigger>
            <TabsTrigger value="store">Store Performance</TabsTrigger>
            <TabsTrigger value="product">Product Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="customer">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Customer Segmentation
                  </CardTitle>
                  <CardDescription>Analyze customer groups by behavior</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-60 flex items-center justify-center bg-muted/20 rounded-md">
                    <PieChart className="h-24 w-24 text-muted" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Path Analysis</CardTitle>
                  <CardDescription>Popular customer routes through store</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-60 flex items-center justify-center bg-muted/20 rounded-md">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                      <circle cx="18" cy="18" r="3" />
                      <circle cx="6" cy="6" r="3" />
                      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                      <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Demographics Analysis</CardTitle>
                  <CardDescription>Age and gender distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-60 flex items-center justify-center bg-muted/20 rounded-md">
                    <BarChart className="h-24 w-24 text-muted" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="store">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Foot Traffic Analysis</CardTitle>
                  <CardDescription>Weekly store traffic patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                    <LineChart className="h-24 w-24 text-muted" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Conversion Tracking</CardTitle>
                  <CardDescription>Measure display effectiveness</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                    <BarChart className="h-24 w-24 text-muted" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="product">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Product Interactions</CardTitle>
                  <CardDescription>Most viewed and engaged products</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                    <BarChart className="h-24 w-24 text-muted" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Cross-Selling Analysis</CardTitle>
                  <CardDescription>Related product purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                    <PieChart className="h-24 w-24 text-muted" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
