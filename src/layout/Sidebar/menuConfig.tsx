import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Library,
  AlarmClockCheck,
  LucideProps,
  Package,
  CompassIcon,
} from "lucide-react";

export type SidebarType = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const menu: SidebarType[] = [
  {
    title: "Stock Management",
    url: "stock",
    icon: Package,
  },
  {
    title: "Reservation",
    url: "reservation",
    icon: AlarmClockCheck,
  },
  {
    title: "Raporlar",
    url: "reports",
    icon: Library,
  },
  {
    title: "Company",
    url: "company",
    icon: CompassIcon,
  },
];
