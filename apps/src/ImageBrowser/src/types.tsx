type LinkObj = {
  download: string
  download_location: string
  html: string
  self: string
}

type UrlsObj = {
  full: string
  raw: string
  regular: string
  small: string
  small_s3: string
  thumb: string
}

export type DataObj = {
  alt_description: string
  blur_hash: string
  breadcrumbs: []
  color: string
  height: number
  width: number
  id: string
  likes: number
  links: LinkObj
  slug: string
  created_at: string
  updated_at: string
  promoted_at: string
  urls: UrlsObj
  username: string
}
