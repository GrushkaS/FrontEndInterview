import { IImagesAndTermOfUse } from "../../Interfaces/termOfUse"

const baseUrl = "http://167.71.69.158";

export const imagesAndTermOfUseService = {
    getImagesAndTermOfuse(): Promise<IImagesAndTermOfUse>{
        return fetch(`${baseUrl}/static/test.json`)
        .then(response => {
            return response.json() as Promise<IImagesAndTermOfUse> 
        })
    }
}