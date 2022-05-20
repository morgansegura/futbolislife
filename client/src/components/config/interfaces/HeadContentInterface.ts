import { ChildrenType } from '../types/React'

export interface HeadContentInterface {
  title?: string
  description?: string
  canonicalUrl?: string
  ogTwitterImage?: string
  ogType?: string
  ogImageUrl?: string
  children?: ChildrenType
}
