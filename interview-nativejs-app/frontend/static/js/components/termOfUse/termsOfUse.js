export const acceptTermsOfUse = async (termsOfUse) => {
    return new Promise((resolve) => {
      
      const { paragraphs } = termsOfUse;

      const modal = document.createElement("div");
      modal.style.position = 'fixed';
      modal.style.top = '0';
      modal.style.left = '0';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      modal.style.display = 'flex';
      modal.style.justifyContent = 'center';
      modal.style.alignItems = "center";
  
      const content = document.createElement('div');
      content.style.backgroundColor = '#fff';
      content.style.padding = '20px';
      content.style.borderRadius = '5px';
  
      const terms = document.createElement('h2');
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
      buttonContent.style.marginTop = '2';

      const acceptButton = document.createElement('button');
      acceptButton.textContent = 'Accept';
      const declineButton = document.createElement('button');
      declineButton.textContent = 'Decline';

      buttonContent.appendChild(acceptButton);
      buttonContent.appendChild(declineButton);


      acceptButton.addEventListener('click', () => {
        // Remove the modal from the DOM
        document.body.removeChild(modal);
        // Resolve the promise to indicate that the terms have been accepted
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
  titleSpan.textContent = termOfUseItem.title;
  const contentSpan = document.createElement('span');
  contentSpan.textContent = termOfUseItem.content || termOfUseItem.text;

  content.appendChild(titleSpan);
  content.appendChild(contentSpan);

  return content;
};