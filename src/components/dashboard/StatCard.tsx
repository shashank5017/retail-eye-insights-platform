
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  delta?: string;
  deltaType?: "increase" | "decrease" | "neutral";
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  value,
  delta,
  deltaType = "neutral",
  icon,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {delta && (
          <p
            className={cn(
              "text-xs font-medium mt-1",
              deltaType === "increase" && "text-green-500",
              deltaType === "decrease" && "text-red-500",
              deltaType === "neutral" && "text-muted-foreground"
            )}
          >
            {delta}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
