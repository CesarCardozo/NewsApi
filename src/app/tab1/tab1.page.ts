import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { RespuestaTopHeadlines } from '../services/news-api.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  respuestaTopHeadlines: RespuestaTopHeadlines;

  constructor(private _ds: NewsApiService,
    public actionSheetController: ActionSheetController) {
  }

  ngOnInit() {
    this._ds.loadNews().subscribe(data => {
      this.respuestaTopHeadlines = data;
    })
  }

  async presentShareActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

}
