import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Article } from '../services/news-api.service';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  @Input() new;

  constructor(private iab: InAppBrowser,
    public actionSheetController: ActionSheetController,
    private storage: Storage,
    private socialSharing: SocialSharing) { }

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
            this.socialSharing.share(this.new.url);
          }
        }, {
          text: 'Share on Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.socialSharing.shareViaFacebook(this.new.title, this.new.url);
          }
        }, {
          text: 'Share on Twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter(this.new.title, this.new.url);
          }
        }, {
          text: 'Share on Whatsapp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.socialSharing.shareViaWhatsApp(this.new.title, this.new.url);
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
      this.storage.set('new-' + keysLength, noticia);
    });
  }
}
