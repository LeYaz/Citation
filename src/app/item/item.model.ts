export class ItemModel{
    titre : string;
    description : string;
    lien : string;

    constructor(titre:string, description:string, lien:string){
        this.titre = titre;
        this.description = description;
        this.lien =lien;
    }
}