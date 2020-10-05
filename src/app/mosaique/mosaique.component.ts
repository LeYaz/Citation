import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../item/item.model';
import data from '../../assets/item.data.js';
import { ItemService } from '../item/item.service';


@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.component.html',
  styleUrls: ['./mosaique.component.css']
})
export class MosaiqueComponent implements OnInit {
  items : ItemModel[] = new Array();
  item : ItemModel;
  itvide : ItemModel = {
    titre : "",
    description : "",
    lien : ""
  }

  constructor(private itemservice : ItemService) { }

  ngOnInit() {
    // data.forEach(element=>{
    //   var titre = element.titre;
    //   var description = element.description;
    //   var lien = element.lien;
    //   var it = new ItemModel(titre, description, lien);
    //   this.items.push(it);
    // })
      let objet;
      let secondobjet;
      this.itemservice.getItem().subscribe(it=>{
        console.log(it);
        objet = it;
        let titre = "Citation aléatoire";
        let description = objet.content;
        let lien = objet.originator.name;
        let a = new ItemModel(titre, description, lien);
        this.items.push(a);
      })

      this.itemservice.getSecondItem().subscribe(it=>{
        console.log(it);
        secondobjet = it;
        let titre = "Citation du jour";
        let description = secondobjet.text;
        let lien = secondobjet.author;
        let a = new ItemModel(titre, description, lien);
        this.items.push(a);
      })

    
  }

}
