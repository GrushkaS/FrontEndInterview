import { IImagesAndTermOfUse } from "../../interfaces/termOfUse";


const baseUrl = "http://167.71.69.158";

export const getUrl = (path: string): string => `${baseUrl}${path}`

export const imagesAndTermOfUseService = {
    getImagesAndTermOfuse(): Promise<IImagesAndTermOfUse>{
        return fetch(getUrl("/static/test.json"))
        .then(response => {
            return response.json() as Promise<IImagesAndTermOfUse> 
        })
    }
}