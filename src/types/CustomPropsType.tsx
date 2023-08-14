import { ReactNode } from 'react'

export type ServiceCardPropsType = {
    icon: ReactNode
    title: string
    subtitle: string
    isBordered?: boolean
}

export type SectionServicePropsType = {
    title: string
    subtitle: string
    services: ServiceCardPropsType[]
}
