import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Article } from '../services/news-api.service';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  @Input() new;

  constructor(private iab: InAppBrowser,
    public actionSheetController: ActionSheetController,
    private storage: Storage) { }

  ngOnInit() {
  }

  displayInAppBrowser(noticia: Article) {
    this.iab.create(noticia.url, '_blank');
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
            this.addToFav(this.new);
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

  addToFav(noticia: Article) {
    this.storage.length().then((keysLength: Number) => {
      this.storage.set('new-'+keysLength, noticia);
    });
  }
}
