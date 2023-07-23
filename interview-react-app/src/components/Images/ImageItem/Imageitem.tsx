import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DownloadIcon from '@mui/icons-material/Download';
import { IImage } from "../../../interfaces/termOfUse";
import { useState } from "react";
import Box from "@mui/material/Box";

type Props = {
    image: IImage;
}

const ImageItem = ({image}: Props) => {
    const [isHover, setIsHover] = useState(false);

    const downloadImage = (downloadUrl: string, fileName: string): void => {

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = fileName;     
      link.click();

    }

 return (
   <Box
     onMouseEnter={() => setIsHover(true)}
     onMouseLeave={() => setIsHover(false)}>
     <ImageListItem key={image.image_url}>
       <img src={`${image.fullUrl}`} loading="lazy" />
       {isHover ? (
           <ImageListItemBar
             actionIcon={
               <IconButton
                 onClick={() => downloadImage(image.fullUrl, image.image_url)}
                 sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                 aria-label={"Download image"}>
                 <DownloadIcon />
               </IconButton>
             }
           />
       ) : null}
     </ImageListItem>
   </Box>
 );
}

export default ImageItem;