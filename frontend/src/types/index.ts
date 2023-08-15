export type VideoData = {
  videoID: string
  url_image_thumbnail: string
}

export type ProductData = {
  productID: string
  link: string
  title: string
  price: string
}

export type CommentData = {
  username: string
  comment: string
  timestamp: {
    createdtAt: Date
    updatedAt: Date
  }
}
