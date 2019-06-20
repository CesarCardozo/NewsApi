import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Article } from '../services/news-api.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  @Input() new;

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  displayInAppBrowser(noticia:Article){
    this.iab.create(noticia.url,'_blank');
  }

}
