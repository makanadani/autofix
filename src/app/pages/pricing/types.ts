import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type PlanItem = {
  id: number
  name: string
  price: string
  duration: string
  features: Array<string>
  isRecommended: boolean
  isPopular?: boolean
}

export type Benefit = {
  icon: ReactNode
  title: string
  description: string
}

export type ImageType = {
  src: StaticImageData
  caption: string
}

export type GalleryItem = {
  id?: number
  image: ImageType
}

export type Vacancy = {
  category: string
  jobs: {
    designation: string
    type: string
  }[]
}
