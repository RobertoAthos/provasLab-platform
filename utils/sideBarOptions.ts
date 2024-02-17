import { IoHome, IoStatsChart } from "react-icons/io5";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { IoMdStar } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { BsCreditCardFill } from "react-icons/bs";

export const sideBarOptions = {
    general: [
        {
            icon: IoHome,
            label: "Início",
            href: '/platform/dashboard'
        },
        {
            icon: HiOutlineDocumentCheck,
            label: "Exercícios",
            href: '/platform/dashboard/exercises'
        },
        {
            icon: IoStatsChart,
            label: "Planos de aula",
            href: '/platform/dashboard/class-plan'
        },
        {
            icon: IoMdStar,
            label: "Favoritos",
            href: '/platform/dashboard/favorites'
        },
    ],
    account:[
        {
            icon: FaUser,
            label: "Meu perfil",
            href: '/platform/dashboard/profile'
        },
        {
            icon: BsCreditCardFill,
            label: "Pagamentos",
            href: '/platform/dashboard/profile/payments'
        },
    ]
}