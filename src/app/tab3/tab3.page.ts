import { Component } from '@angular/core';
import { Article } from '../services/news-api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  favNews:Article[]=[];

  constructor(private storage: Storage) {}

  ngOnInit(){
    this.favNews=[];
    this.storage.length().then((keysLength: Number) => {
      for(let i=0; i<keysLength;i++){
        this.storage.get('new-'+i).then((val:Article) => {
          this.favNews[this.favNews.length]=val;
        }).catch((error) => {
          console.log(error);
        });
      }
    });
  }

  updateFavs(){
    this.favNews=[];
    this.storage.length().then((keysLength: Number) => {
      for(let i=0; i<keysLength;i++){
        this.storage.get('new-'+i).then((val:Article) => {
          this.favNews[this.favNews.length]=val;
        }).catch((error) => {
          console.log(error);
        });
      }
    });
  }

  displayOrNoMessage(){
    return this.favNews.length==0;
  }
}
