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

export type ServiceOfficeCardPropsType = {
    imageUrl: string
    title: string
    subtitle: string
}

export type SectionServiceOfficePropType = {
    title: string
    subtitle: string
    description: string
    services: ServiceOfficeCardPropsType[]
}

export type SectionReviewPropsType = {
    Cards: ReviewCardPropsType[]
}

export type ItemTeamPropsType = {
    name: string,
    position: string,
    imageUrl: string,
    isLast?: boolean
}

export type SectionOurTeamPropType = {
    title: string;
    subtitle: string
    description: string,
    teams: ItemTeamPropsType[]
}


export type ReviewCardPropsType = {
    description: string
    name: string
    role: string
    imageUrl: string

}