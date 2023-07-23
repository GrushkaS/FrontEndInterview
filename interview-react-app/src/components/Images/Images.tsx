import { Box, ImageList } from "@mui/material";
import ImageItem from "./ImageItem/Imageitem";
import { IImage } from "../../Interfaces/termOfUse";

type Props = {
    images: Array<IImage>;
}

const Images = ({images}: Props) => {

return (
  <Box>
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={165}>
      {images.map((image, index) => (
        <ImageItem key={index} image={image}/>
      ))}
    </ImageList>
  </Box>
);
}

export default Images;