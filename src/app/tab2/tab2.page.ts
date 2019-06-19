import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { RespuestaTopHeadlines } from '../services/news-api.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  respuestaTopHeadlines: RespuestaTopHeadlines;

  constructor(private _ds: NewsApiService) { }

  ngOnInit() {
    this._ds.loadNewsByCat('business').subscribe(data => {
      this.respuestaTopHeadlines = data;
    })
  }

  loadNewsByCat(category) {
    console.log(category);
    switch (category.detail.value) {
      case 'ion-sb-0':
        this._ds.loadNewsByCat('business').subscribe(data => {
          this.respuestaTopHeadlines = data;
        });
        break;
      case 'ion-sb-1':
        this._ds.loadNewsByCat('entertainment').subscribe(data => {
          this.respuestaTopHeadlines = data;
        });
        break;
      case 'ion-sb-2':
        this._ds.loadNewsByCat('general').subscribe(data => {
          this.respuestaTopHeadlines = data;
        });
        break;
      case 'ion-sb-3':
        this._ds.loadNewsByCat('health').subscribe(data => {
          this.respuestaTopHeadlines = data;
        });
        break;
      case 'ion-sb-4':
        this._ds.loadNewsByCat('science').subscribe(data => {
          this.respuestaTopHeadlines = data;
        });
        break;
      case 'ion-sb-5':
        this._ds.loadNewsByCat('sports').subscribe(data => {
          this.respuestaTopHeadlines = data;
        });
        break;
      case 'ion-sb-6':
        this._ds.loadNewsByCat('technology').subscribe(data => {
          this.respuestaTopHeadlines = data;
        });
        break;
    }
  }
}