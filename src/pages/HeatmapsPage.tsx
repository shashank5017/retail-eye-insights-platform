
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid } from "lucide-react";

export default function HeatmapsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Heatmaps</h1>
          <p className="text-muted-foreground mt-2">
            Visualize customer traffic patterns and identify high-traffic areas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
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
        </div>

        <Tabs defaultValue="traffic" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="traffic">Traffic Heatmaps</TabsTrigger>
            <TabsTrigger value="time">Time-based</TabsTrigger>
            <TabsTrigger value="entry">Entry/Exit Points</TabsTrigger>
            <TabsTrigger value="interest">Areas of Interest</TabsTrigger>
          </TabsList>
          
          <TabsContent value="traffic">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <CardTitle>Store Traffic Density</CardTitle>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="high">
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Traffic level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High Traffic</SelectItem>
                        <SelectItem value="medium">Medium Traffic</SelectItem>
                        <SelectItem value="low">Low Traffic</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Grid className="h-4 w-4 mr-2" />
                      Change Layout
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative h-[500px] bg-muted/10 rounded-md border overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2940&auto=format&fit=crop')`
                    }}
                    
                  >
                    {/* Heat zones */}
                    <div className="heat-zone absolute top-[30%] left-[40%] w-32 h-32 rounded-full opacity-70 bg-red-500 blur-xl"></div>
                    <div className="heat-zone absolute top-[45%] left-[25%] w-24 h-24 rounded-full opacity-50 bg-yellow-500 blur-xl"></div>
                    <div className="heat-zone absolute top-[60%] left-[60%] w-40 h-40 rounded-full opacity-60 bg-red-500 blur-xl"></div>
                    <div className="heat-zone absolute top-[20%] left-[70%] w-28 h-28 rounded-full opacity-40 bg-yellow-500 blur-xl"></div>
                    
                    {/* Store layout overlay */}
                    <div className="absolute inset-0 border-4 border-dashed border-white/30"></div>
                    
                    {/* Legend */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white p-3 rounded">
                      <div className="text-sm font-semibold mb-2">Traffic Intensity</div>
                      <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-full bg-red-500"></div>
                        <span className="text-xs">High</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                        <span className="text-xs">Medium</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        <span className="text-xs">Low</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="time">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Morning (9AM - 12PM)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/20 rounded-md"></div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Afternoon (12PM - 5PM)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/20 rounded-md"></div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Evening (5PM - 9PM)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/20 rounded-md"></div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Weekend vs Weekday</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/20 rounded-md"></div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="entry">
            <Card>
              <CardHeader>
                <CardTitle>Entry/Exit Flow Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] bg-muted/20 rounded-md flex items-center justify-center">
                  <div className="text-muted">Entry/Exit heatmap visualization</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="interest">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Checkout Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/20 rounded-md"></div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Promotional Display</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/20 rounded-md"></div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Electronics Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/20 rounded-md"></div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Customer Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted/20 rounded-md"></div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
