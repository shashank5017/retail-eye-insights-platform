
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TrafficHeatmapCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Store Traffic Heatmap</CardTitle>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Real-time</Badge>
        </div>
        <CardDescription>Visualizing high-traffic areas in your store</CardDescription>
      </CardHeader>
      <CardContent className="pb-4 relative">
        <div 
          className="aspect-[4/3] w-full border rounded-md bg-white relative overflow-hidden"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=2080&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4
          }}
        >
          {/* Store layout overlay */}
          <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full">
            {/* Store outline */}
            <rect x="10" y="10" width="380" height="280" fill="none" stroke="#333" strokeWidth="2" />
            
            {/* Interior walls */}
            <line x1="100" y1="10" x2="100" y2="290" stroke="#333" strokeWidth="1" />
            <line x1="200" y1="10" x2="200" y2="290" stroke="#333" strokeWidth="1" />
            <line x1="300" y1="10" x2="300" y2="290" stroke="#333" strokeWidth="1" />
            
            <line x1="10" y1="80" x2="390" y2="80" stroke="#333" strokeWidth="1" />
            <line x1="10" y1="160" x2="390" y2="160" stroke="#333" strokeWidth="1" />
            <line x1="10" y1="240" x2="390" y2="240" stroke="#333" strokeWidth="1" />
            
            {/* Entrance */}
            <line x1="195" y1="290" x2="205" y2="290" stroke="#333" strokeWidth="0" />
            <text x="185" y="285" fontSize="10" fill="#333">Entrance</text>
            
            {/* Heatmap Zones */}
            <circle cx="50" cy="50" r="30" fill="url(#gradient1)" opacity="0.7" />
            <circle cx="150" cy="120" r="40" fill="url(#gradient1)" opacity="0.8" />
            <circle cx="250" cy="200" r="35" fill="url(#gradient1)" opacity="0.9" />
            <circle cx="350" cy="50" r="25" fill="url(#gradient1)" opacity="0.6" />
            <circle cx="200" cy="240" r="20" fill="url(#gradient1)" opacity="1" />
            
            {/* Gradients */}
            <defs>
              <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="red" stopOpacity="0.8" />
                <stop offset="50%" stopColor="orange" stopOpacity="0.5" />
                <stop offset="100%" stopColor="yellow" stopOpacity="0.2" />
              </radialGradient>
            </defs>
            
            {/* Section Labels */}
            <text x="50" y="40" fontSize="8" fill="#333" textAnchor="middle">Electronics</text>
            <text x="150" y="40" fontSize="8" fill="#333" textAnchor="middle">Clothing</text>
            <text x="250" y="40" fontSize="8" fill="#333" textAnchor="middle">Food</text>
            <text x="350" y="40" fontSize="8" fill="#333" textAnchor="middle">Health</text>
            
            <text x="50" y="120" fontSize="8" fill="#333" textAnchor="middle">Beauty</text>
            <text x="150" y="120" fontSize="8" fill="#333" textAnchor="middle">Home</text>
            <text x="250" y="120" fontSize="8" fill="#333" textAnchor="middle">Kitchen</text>
            <text x="350" y="120" fontSize="8" fill="#333" textAnchor="middle">Sports</text>
            
            <text x="50" y="200" fontSize="8" fill="#333" textAnchor="middle">Books</text>
            <text x="150" y="200" fontSize="8" fill="#333" textAnchor="middle">Toys</text>
            <text x="250" y="200" fontSize="8" fill="#333" textAnchor="middle">Tech</text>
            <text x="350" y="200" fontSize="8" fill="#333" textAnchor="middle">Garden</text>
          </svg>
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex items-center justify-center space-x-8">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-xs">High Traffic</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-orange-400 mr-2"></div>
            <span className="text-xs">Medium Traffic</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-300 mr-2"></div>
            <span className="text-xs">Low Traffic</span>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-sm mb-2">Actionable Insights:</h4>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Place high-margin products in the red zones for maximum visibility</li>
            <li>• Consider staff reallocation to high-traffic areas during peak hours</li>
            <li>• Yellow zones may benefit from promotional displays to increase engagement</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
