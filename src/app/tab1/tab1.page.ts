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

  constructor(private _ds: NewsApiService) {
  }

  ngOnInit() {
    this._ds.loadNews().subscribe(data => {
      this.respuestaTopHeadlines = data;
    })
  }
}