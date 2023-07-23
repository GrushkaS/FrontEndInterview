export const renderImageToCanvas = async (imageUrl) => {

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';

    const imageCanvas = document.createElement('canvas');
    imageCanvas.style.width = '160px';
    imageCanvas.style.height = '160px';
    imageCanvas.style.margin = '10px';
    imageCanvas.style.float = 'left';

    const containerDownloadButton = document.createElement('button');
    containerDownloadButton.textContent = 'Download';
    containerDownloadButton.style.backgroundColor = '#27a7e3';
    containerDownloadButton.style.borderWidth = '0px';
    containerDownloadButton.style.borderRadius = '5px';
    containerDownloadButton.style.color = "#fff";
    containerDownloadButton.style.width = '70px';
    containerDownloadButton.style.height = '30px';

    containerDownloadButton.onmouseenter = function(){
      containerDownloadButton.style.backgroundColor = "#025da8";
    }
    containerDownloadButton.onmouseleave = function(){
      containerDownloadButton.style.backgroundColor = "#27a7e3";
    }
    containerDownloadButton.onmousedown = function(){
      containerDownloadButton.style.backgroundColor = "#014175";
    }

    containerDownloadButton.addEventListener('click', () => {
      const link = document.createElement("a");
      link.href = imageUrl.imageFullUrl;
      link.download = imageUrl.image_url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    const ctx = imageCanvas.getContext('2d');
  
    const image = new Image();
    image.src = imageUrl.imageFullUrl;
    

    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
    }); 
  
    ctx.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height);

    container.appendChild(imageCanvas);

    container.onmouseenter = function(){
      container.appendChild(containerDownloadButton);
    }

    container.onmouseleave = function(){
      container.removeChild(containerDownloadButton);
    }

    return container;
  }