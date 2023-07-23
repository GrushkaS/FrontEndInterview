import { acceptTermsOfUse } from "./components/termOfUse/termsofuse.js";
import { imagesAndTermOfUseService } from "./services/getImagesAndTermsOfUse.js";
import { getUrl } from "./services/getImagesAndTermsOfUse.js";
import { renderImages } from "./components/renderImages/renderImages.js";

  const main = async () => {

    const imagesAndTermsOfUseData = await imagesAndTermOfUseService.getImagesAndTermOfuse();

    const termsOfUse = imagesAndTermsOfUseData.terms_of_use;

    const imagesUrl = imagesAndTermsOfUseData.images.map(image => {
      return {
        ...image,
        imageFullUrl: getUrl(image.image_url),
      };
    });

    await acceptTermsOfUse(termsOfUse);
    
    await renderImages(imagesUrl);

  };
  
  main();