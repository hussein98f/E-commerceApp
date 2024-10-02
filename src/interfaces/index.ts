export interface ICategory {
  id: number;
  documentId: string;
  Name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

export interface IThumbnailFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface IThumbnail {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: IThumbnailFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

export interface IProduct {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  Price: number;
  Rating: number;
  Stock: number;
  Brand: string;
  weight: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  categories: ICategory[];
  Thumbnail: IThumbnail;
}
