import {renderImageToCanvas} from "./renderImagesToCanvas/renderImagesToCanvas.js"

export const renderImages = async (images) => {
    const imagesContainer = document.createElement("div");
    imagesContainer.style.display = 'flex';
    imagesContainer.style.flexDirection = 'row';
    imagesContainer.style.width = '100%';


    images.map(renderImageToCanvas).forEach(async element => {
      const canvas = await element;
      imagesContainer.appendChild(canvas);
    });

    document.body.appendChild(imagesContainer);
}