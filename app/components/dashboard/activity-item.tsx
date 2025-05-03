import type { LucideIcon } from "lucide-react";

interface ActivityItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  iconColor?: string;
}

export function ActivityItem({
  icon: Icon,
  title,
  description,
  time,
  iconColor = "bg-blue-100 text-blue-600",
}: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 py-4">
      <div className={`rounded-full p-2 ${iconColor}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="text-xs text-gray-500">{time}</div>
    </div>
  );
}
