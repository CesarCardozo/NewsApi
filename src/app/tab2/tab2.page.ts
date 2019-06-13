import { Component } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';
import { RespuestaTopHeadlines} from '../services/news-api.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  respuestaTopHeadlines: RespuestaTopHeadlines;

  constructor(private _ds: NewsApiService) {}

  ngOnInit(){
    this._ds.loadNewsByCat('general').subscribe(data => {
      this.respuestaTopHeadlines = data;
    })
  }

  loadNewsByCat(category){
    console.log(category);
    this._ds.loadNewsByCat(category).subscribe(data => {
      this.respuestaTopHeadlines = data;
    })
  }

}
