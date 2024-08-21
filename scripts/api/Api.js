export default class Api {
    constructor(url){
        this.url = url;
    }
    async get(){
        try{
            const response = await fetch(this.url);
            const data = await response.json();
            console.log(data);
            return data;
        } catch {
            console.error("Erreur sur l'API");
        }
    }
};