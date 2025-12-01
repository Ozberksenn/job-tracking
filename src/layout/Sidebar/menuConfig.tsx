import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Bell,
  Library,
  Calendar,
  AlarmClockCheck,
  LucideProps,
  QrCode,
  Package,
  CompassIcon,
} from "lucide-react";

export type MenuType = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const menu: MenuType[] = [
  {
    title: "Stock Management",
    url: "stock",
    icon: Package,
  },
  {
    title: "Qr Menu",
    url: "notifications",
    icon: QrCode,
  },
  {
    title: "Company",
    url: "calendar",
    icon: CompassIcon,
  },
  {
    title: "Raporlar",
    url: "reports",
    icon: Library,
  },
];
