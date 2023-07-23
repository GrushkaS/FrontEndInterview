import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import TermOfUse, { ETermOfUseAction } from "../../components/TermOfUse/TermOfUse";
import Images from "../../components/Images/Images";
import { getUrl, imagesAndTermOfUseService } from "../../services/getImagesAndTermsOfUse/getImagesAndTermsOfUse";
import { IImage, ITermOfUse } from "../../Interfaces/termOfUse";

const initialTermsOfUse: ITermOfUse = {
  paragraphs: [],
};

const MainPage = () => {

const [images, setImages] = useState<Array<IImage>>([]);
const [termsOfUse, setTermsOfUse] = useState<ITermOfUse>(initialTermsOfUse);

const [showImageList, setShowImageList] = useState<boolean>(false);

const onAction = (action: ETermOfUseAction) => {
  switch (action) {

    case ETermOfUseAction.ACCEPT: 
      setShowImageList(true);
      break;

    case ETermOfUseAction.DECLINE:
      setShowImageList(false);
      break;
  }
}


const fetchImagesAndTermsOfUse = () => { 
  return imagesAndTermOfUseService.getImagesAndTermOfuse().then((data) => {
    setImages(data.images.map(image => {
      return {
        ...image,
        fullUrl: getUrl(image.image_url)
      }
    }));
    setTermsOfUse(data.terms_of_use);
  }); 
  }
  
  useEffect(() => {
    fetchImagesAndTermsOfUse();
  }, [])

  return (
    <Box>
      <TermOfUse termsOfUse={termsOfUse} onAction={onAction} />
      {showImageList ? <Images images={images} /> : null}
    </Box>
  );
};

export default MainPage;