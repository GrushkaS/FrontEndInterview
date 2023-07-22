export interface IParagraph {
  index: number;
  title: string;
  content: string;
};

export interface IImage {
    image_url: string
}

export interface ITermOfUse {
  paragraphs: Array<IParagraph>;
}
  
export  interface IImagesAndTermOfUse {
    images: Array<IImage>;
    terms_of_use: ITermOfUse;
};