
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ProductPathCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Popular Product Paths</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-sm">Path 1: High Conversion</h4>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                82% Completion
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="bg-blue-100 text-blue-800 h-8 w-8 rounded-full flex items-center justify-center font-medium">E</div>
                <ArrowRight className="h-4 w-4 mx-2" />
                <div className="bg-blue-100 text-blue-800 h-8 w-8 rounded-full flex items-center justify-center font-medium">C</div>
                <ArrowRight className="h-4 w-4 mx-2" />
                <div className="bg-blue-100 text-blue-800 h-8 w-8 rounded-full flex items-center justify-center font-medium">CH</div>
              </div>
              <div className="text-xs text-muted-foreground">
                Avg. time: 15 min
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              <strong>Insight:</strong> Electronics → Clothing → Checkout
            </div>
          </div>
          
          <div className="bg-muted/50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-sm">Path 2: Casual Browsing</h4>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                46% Completion
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="bg-purple-100 text-purple-800 h-8 w-8 rounded-full flex items-center justify-center font-medium">F</div>
                <ArrowRight className="h-4 w-4 mx-2" />
                <div className="bg-purple-100 text-purple-800 h-8 w-8 rounded-full flex items-center justify-center font-medium">H</div>
                <ArrowRight className="h-4 w-4 mx-2" />
                <div className="bg-purple-100 text-purple-800 h-8 w-8 rounded-full flex items-center justify-center font-medium">B</div>
              </div>
              <div className="text-xs text-muted-foreground">
                Avg. time: 22 min
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              <strong>Insight:</strong> Food → Home → Beauty sections
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground mt-4">
            <strong>Recommendation:</strong> Add complementary products along Path 1 to increase basket size. For Path 2, consider adding promotional displays to increase conversion.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
