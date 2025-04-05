
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Clock, Download } from "lucide-react";

export default function DwellTimePage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dwell Time</h1>
          <p className="text-muted-foreground mt-2">
            Analyze how long customers spend in different areas of the store.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select store" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stores</SelectItem>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="eastside">Eastside Mall</SelectItem>
                <SelectItem value="westend">West End</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="today">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Dwell Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12m 36s</div>
              <p className="text-xs text-muted-foreground">+2.5% from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Longest Dwell Areas</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Electronics</div>
              <p className="text-xs text-muted-foreground">18m 22s average</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shortest Dwell Areas</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Checkout</div>
              <p className="text-xs text-muted-foreground">4m 12s average</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Purchase Correlation</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">73%</div>
              <p className="text-xs text-muted-foreground">High dwell to purchase rate</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Dwell Time by Department</CardTitle>
            <CardDescription>Average time spent in each area of the store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] flex items-center justify-center">
              <BarChart className="h-40 w-40 text-muted" />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Zone-based Analysis</CardTitle>
              <CardDescription>Dwell time heat zones on store map</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-[300px] bg-muted/10 rounded-md border overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2940&auto=format&fit=crop')`
                  }}
                >
                </div>
                
                {/* Dwell time zones */}
                <div className="dwell-zone absolute top-[30%] left-[40%] w-24 h-24 rounded-full opacity-70 bg-blue-500 blur-lg"></div>
                <div className="dwell-zone absolute top-[45%] left-[25%] w-32 h-32 rounded-full opacity-60 bg-purple-500 blur-lg"></div>
                <div className="dwell-zone absolute top-[60%] left-[60%] w-20 h-20 rounded-full opacity-40 bg-blue-300 blur-lg"></div>
                
                {/* Legend */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white p-3 rounded">
                  <div className="text-sm font-semibold mb-2">Dwell Time</div>
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                    <span className="text-xs">15+ min</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-xs">5-15 min</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-300"></div>
                    <span className="text-xs">&lt;5 min</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Behavior Analysis</CardTitle>
              <CardDescription>Relationship between dwell time and purchases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted">
                  <Clock className="h-20 w-20 mx-auto mb-4" />
                  <p>Correlation between time spent and conversion rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Product Interaction Time</CardTitle>
            <CardDescription>How long customers interact with specific products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <div className="text-center text-muted">Product interaction visualization</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
