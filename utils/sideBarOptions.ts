import { IoHome, IoStatsChart } from "react-icons/io5";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { IoMdStar,IoIosRocket } from "react-icons/io";
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
            href: '/platform/exercises'
        },
        {
            icon: IoStatsChart,
            label: "Planos de aula",
            href: '/platform/class-plan'
        },
        {
            icon: IoMdStar,
            label: "Favoritos",
            href: '/platform/favorites'
        },
    ],
    account:[
        {
            icon: FaUser,
            label: "Meu perfil",
            href: '/platform/profile'
        },
        {
            icon: BsCreditCardFill,
            label: "Pagamentos",
            href: '/platform/payments'
        },
        {
            icon: IoIosRocket,
            label: "Sair",
            href: '/auth/signin'
        },
    ]
}