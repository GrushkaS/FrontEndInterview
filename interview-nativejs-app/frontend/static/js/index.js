import { acceptTermsOfUse } from "./components/termOfUse/termsofuse.js";
import { imagesAndTermOfUseService } from "./services/getImagesAndTermsOfUse.js";

  const main = async () => {

    const data = await imagesAndTermOfUseService.getImagesAndTermOfuse();

    await acceptTermsOfUse(data.terms_of_use);

    
    const app = document.createElement("div");
    app.textContent = "Main Content";
    document.body.appendChild(app);
  };
  
  main();