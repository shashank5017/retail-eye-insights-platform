
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  ChevronRight,
  Fullscreen,
  Grid2X2,
  Grid3X3,
  Pause,
  Play,
  Video,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const STORE_LOCATIONS = [
  { id: "main", name: "Main Store" },
  { id: "downtown", name: "Downtown" },
  { id: "mall", name: "Shopping Mall" },
];

const CAMERA_FEEDS = [
  { id: "entrance", name: "Main Entrance", location: "main", status: "online" },
  { id: "checkout", name: "Checkout Area", location: "main", status: "online" },
  { id: "aisle1", name: "Aisle 1", location: "main", status: "online" },
  { id: "aisle2", name: "Aisle 2", location: "main", status: "online" },
  { id: "electronics", name: "Electronics", location: "main", status: "online" },
  { id: "clothing", name: "Clothing Section", location: "main", status: "offline" },
  { id: "entrance2", name: "Main Entrance", location: "downtown", status: "online" },
  { id: "checkout2", name: "Checkout Area", location: "downtown", status: "online" },
  { id: "entrance3", name: "Main Entrance", location: "mall", status: "online" },
  { id: "foodcourt", name: "Food Court", location: "mall", status: "offline" },
];

const LiveVideoPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("main");
  const [selectedLayout, setSelectedLayout] = useState("2x2");
  const [isPlaying, setIsPlaying] = useState(true);

  const filteredCameras = CAMERA_FEEDS.filter(
    (camera) => camera.location === selectedLocation
  );

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Live Video Monitoring</h1>

          <div className="flex items-center gap-3">
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select store" />
              </SelectTrigger>
              <SelectContent>
                {STORE_LOCATIONS.map((location) => (
                  <SelectItem key={location.id} value={location.id}>
                    {location.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center gap-1 bg-muted p-1 rounded-md">
              <Button
                size="sm"
                variant={selectedLayout === "2x2" ? "default" : "ghost"}
                className="h-8 w-8 p-0"
                onClick={() => setSelectedLayout("2x2")}
              >
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={selectedLayout === "3x3" ? "default" : "ghost"}
                className="h-8 w-8 p-0"
                onClick={() => setSelectedLayout("3x3")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="live" className="flex gap-2">
              <Video className="h-4 w-4" />
              Live View
            </TabsTrigger>
            <TabsTrigger value="recordings" className="flex gap-2">
              <Camera className="h-4 w-4" />
              Recordings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="live">
            <div className="flex gap-4">
              <div className="w-64 h-[calc(100vh-220px)] overflow-auto border rounded-lg shrink-0">
                <div className="p-3 border-b sticky top-0 bg-background z-10">
                  <h3 className="font-medium text-sm">Cameras</h3>
                  <p className="text-xs text-muted-foreground">
                    {filteredCameras.filter((c) => c.status === "online").length}{" "}
                    online, {filteredCameras.filter((c) => c.status === "offline").length} offline
                  </p>
                </div>
                <div className="p-2 space-y-1">
                  {filteredCameras.map((camera) => (
                    <Button
                      key={camera.id}
                      variant="ghost"
                      className="w-full justify-between"
                    >
                      <div className="flex items-center">
                        <Camera className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{camera.name}</span>
                      </div>
                      <div className="flex items-center">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            camera.status === "online"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {camera.status === "online" ? "Live" : "Offline"}
                        </Badge>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold">Camera Grid</h2>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={togglePlayback}
                        >
                          {isPlaying ? (
                            <Pause className="h-4 w-4 mr-2" />
                          ) : (
                            <Play className="h-4 w-4 mr-2" />
                          )}
                          {isPlaying ? "Pause All" : "Play All"}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Fullscreen className="h-4 w-4 mr-2" />
                          Full Screen
                        </Button>
                      </div>
                    </div>

                    <div
                      className={`grid gap-4 ${
                        selectedLayout === "2x2" ? "grid-cols-2" : "grid-cols-3"
                      }`}
                    >
                      {filteredCameras.slice(0, selectedLayout === "2x2" ? 4 : 9).map((camera) => (
                        <div
                          key={camera.id}
                          className="aspect-video bg-slate-900 relative rounded-md overflow-hidden video-feed"
                        >
                          {camera.status === "online" ? (
                            <div
                              className="w-full h-full bg-cover bg-center"
                              style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-${
                                  camera.id.includes("aisle")
                                    ? "1578916171728-46686eac8d58"
                                    : camera.id.includes("checkout")
                                    ? "1556742031-c6961e8560b0"
                                    : camera.id.includes("entrance")
                                    ? "1567401893414-76b7b1e5a7a5"
                                    : "1604467794349-0b74285de7e7"
                                }?q=80&w=1974&auto=format&fit=crop`
                              }}
                            >
                              {/* Sample heat zone overlay */}
                              <div className="heat-zone absolute top-[30%] left-[40%] w-16 h-16 rounded-full"></div>
                              
                              {/* Stats overlays */}
                              <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                                {camera.name}
                              </div>
                              <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                                Visitors: {Math.floor(Math.random() * 10) + 1}
                              </div>
                              
                              {!isPlaying && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                  <div className="text-white font-semibold">Paused</div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-300">
                              <div className="text-center">
                                <Camera className="h-12 w-12 mx-auto mb-2 opacity-30" />
                                <p className="font-medium">Camera Offline</p>
                                <p className="text-xs mt-1 text-slate-400">
                                  {camera.name}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="recordings">
            <div className="flex items-center justify-center h-[calc(100vh-220px)] bg-muted rounded-lg">
              <div className="text-center">
                <h3 className="text-lg font-medium">Recordings Feature</h3>
                <p className="text-muted-foreground">
                  View and search past video recordings
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LiveVideoPage;
