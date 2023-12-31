export interface IParagraph {
  index: number;
  title: string;
  content: string;
  text: string;
};

export interface IImage {
    image_url: string;
    fullUrl: string;
}

export interface ITermOfUse {
  paragraphs: Array<IParagraph>;
}
  
export  interface IImagesAndTermsOfUse {
    images: Array<IImage>;
    terms_of_use: ITermOfUse;
};