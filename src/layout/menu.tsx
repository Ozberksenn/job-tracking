import {ForwardRefExoticComponent, RefAttributes} from "react"
import {Bell,Library,Calendar,AlarmClockCheck,LucideProps} from "lucide-react"

export type MenuType = {
    title: string
    url : string
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export const menu: MenuType[] = [
    {
        title: "İşler",
        url: "jobs",
        icon: AlarmClockCheck,
    },
    {
        title: "Bildirimler",
        url: "notifications",
        icon: Bell,
    },
     {
        title: "Takvim",
        url: "calendar",
        icon: Calendar,
    },
    {
        title: "Raporlar",
        url: "reports",
        icon: Library
    }
]