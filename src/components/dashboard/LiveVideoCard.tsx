
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Camera, Maximize, Pause, Play } from "lucide-react";

export function LiveVideoCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCamera, setSelectedCamera] = useState("entrance");
  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Camera className="h-5 w-5 mr-2" />
          Live Video Feed
        </CardTitle>
        <Select value={selectedCamera} onValueChange={setSelectedCamera}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select camera" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="entrance">Main Entrance</SelectItem>
            <SelectItem value="checkout">Checkout Area</SelectItem>
            <SelectItem value="aisle1">Aisle 1</SelectItem>
            <SelectItem value="aisle2">Aisle 2</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pb-3 relative">
        <div className="aspect-video w-full bg-slate-900 relative rounded-md overflow-hidden video-feed">
          {selectedCamera === "entrance" && (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop')`
              }}
            >
              {/* Sample heat zone overlay */}
              <div className="heat-zone absolute top-[30%] left-[40%] w-24 h-24 rounded-full"></div>
              <div className="heat-zone absolute top-[50%] left-[60%] w-16 h-16 rounded-full"></div>
              
              {/* Stats overlays */}
              <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                Live
              </div>
              <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                Visitors: 12
              </div>
              
              {!isPlaying && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white font-semibold">Paused</div>
                </div>
              )}
            </div>
          )}
          {selectedCamera === "checkout" && (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2070&auto=format&fit=crop')`
              }}
            >
              {/* Sample heat zone overlay */}
              <div className="heat-zone absolute top-[40%] left-[30%] w-20 h-20 rounded-full"></div>
              
              {/* Stats overlays */}
              <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                Live
              </div>
              <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                Visitors: 8
              </div>
              
              {!isPlaying && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white font-semibold">Paused</div>
                </div>
              )}
            </div>
          )}
          {(selectedCamera === "aisle1" || selectedCamera === "aisle2") && (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop')`
              }}
            >
              {/* Sample heat zone overlay */}
              <div className="heat-zone absolute top-[50%] left-[50%] w-24 h-24 rounded-full"></div>
              
              {/* Stats overlays */}
              <div className="absolute top-3 left-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                Live
              </div>
              <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                Visitors: {selectedCamera === "aisle1" ? 5 : 7}
              </div>
              
              {!isPlaying && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white font-semibold">Paused</div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0">
        <div className="text-xs text-muted-foreground">
          {isPlaying ? "Streaming live..." : "Paused"}
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={togglePlayback}>
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button size="sm" variant="outline">
            <Maximize className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
