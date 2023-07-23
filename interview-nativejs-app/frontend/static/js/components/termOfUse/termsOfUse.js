export const acceptTermsOfUse = async (termsOfUse) => {
    return new Promise((resolve) => {
      
      const { paragraphs } = termsOfUse;

      const modal = document.createElement("div");
      modal.style.position = 'absolute';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      modal.style.width = '80%';
      modal.style.backgroundColor = '#212121';
      modal.style.border = '3px solid #000';
      modal.style.borderRadius = '8px';
      modal.style.boxShadow = 24;
  
      const content = document.createElement('div');
      content.style.backgroundColor = '#212121';
      content.style.padding = '10px';
  
      const terms = document.createElement('h2');
      terms.style.color = "#fff";
      terms.textContent = "Term Of Use";

      const termsOfUseContent = document.createElement('div');

      termsOfUseContent.style.overflow = 'auto';
      termsOfUseContent.style.maxHeight = '80vh';
      termsOfUseContent.style.padding = "1rem 1rem 1rem 0";

      paragraphs.map(termOfUseItem).forEach(element => {
        termsOfUseContent.appendChild(element);
      });
  
      const buttonContent = document.createElement('div');
      buttonContent.style.display = 'flex';
      buttonContent.style.justifyContent = 'flex-end';
      buttonContent.style.padding = '1rem 0 0 0';

  
      const acceptButton = document.createElement('button');
      acceptButton.textContent = 'Accept';
      acceptButton.style.backgroundColor = '#27a7e3';
      acceptButton.style.borderWidth = '0px';
      acceptButton.style.borderRadius = '5px';
      acceptButton.style.color = '#fff';
      acceptButton.style.width = '70px';
      acceptButton.style.height = '30px';

      acceptButton.onmouseenter = function(){
        acceptButton.style.backgroundColor = "#025da8";
      }
      acceptButton.onmouseleave = function(){
        acceptButton.style.backgroundColor = "#27a7e3";
      }
      acceptButton.onmousedown = function(){
        acceptButton.style.backgroundColor = "#014175";
      }
  

      const declineButton = document.createElement('button');
      declineButton.textContent = 'Decline';
      declineButton.style.backgroundColor = '#e32727';
      declineButton.style.borderWidth = '0px';
      declineButton.style.borderRadius = '5px';
      declineButton.style.color = '#fff';
      declineButton.style.width = '70px';
      declineButton.style.height = '30px';
      declineButton.style.marginLeft = '0.5rem';

      declineButton.onmouseenter = function(){
        declineButton.style.backgroundColor = "#a81111";
      }
      declineButton.onmouseleave = function(){
        declineButton.style.backgroundColor = "#e32727";
      }
      declineButton.onmousedown = function(){
        declineButton.style.backgroundColor = "#610404";
      }


      buttonContent.appendChild(acceptButton);
      buttonContent.appendChild(declineButton);


      acceptButton.addEventListener('click', () => {

        document.body.removeChild(modal);
        
        resolve();
      });
  
      content.appendChild(terms);
      content.appendChild(termsOfUseContent);
      content.appendChild(buttonContent);
      modal.appendChild(content);
      document.body.appendChild(modal);
    });
  };


  const termOfUseItem = (termOfUseItem) => {
  const content = document.createElement('div');

  const titleSpan = document.createElement('h4');
  titleSpan.style.color = "#fff";
  titleSpan.textContent = termOfUseItem.title;
  const contentSpan = document.createElement('span');
  contentSpan.style.color = "#fff";
  contentSpan.textContent = termOfUseItem.content || termOfUseItem.text;

  content.appendChild(titleSpan);
  content.appendChild(contentSpan);

  return content;
  };