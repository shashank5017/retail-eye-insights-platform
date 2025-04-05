
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Sample data for the chart
const dwellTimeData = [
  { department: "Electronics", time: 15 },
  { department: "Clothing", time: 10 },
  { department: "Food", time: 7 },
  { department: "Health", time: 6 },
  { department: "Home", time: 12 },
  { department: "Beauty", time: 9 },
];

export function CustomerInsightsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Customer Dwell Time</CardTitle>
          <Badge variant="outline" className="bg-amber-100 text-amber-900 hover:bg-amber-100">
            Insights Available
          </Badge>
        </div>
        <CardDescription className="flex items-center">
          Time spent per department (minutes)
          <TooltipProvider>
            <UITooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 ml-1 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Dwell time indicates how long customers spend in each area. 
                  Areas with high dwell time may be engaging customers effectively.
                </p>
              </TooltipContent>
            </UITooltip>
          </TooltipProvider>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dwellTimeData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <XAxis 
                dataKey="department" 
                tick={{ fontSize: 12 }}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                formatter={(value) => [`${value} min`, 'Dwell Time']}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid #f0f0f0',
                  borderRadius: '6px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                }}
              />
              <Bar dataKey="time" fill="#0284c7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-sm mb-2">Key Insights:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-700 h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">↑</span>
              <span>Electronics has the highest dwell time, consider adding more staff</span>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-700 h-5 w-5 rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">↓</span>
              <span>Health section has low engagement, visual merchandising recommended</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
