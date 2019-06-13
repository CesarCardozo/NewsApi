import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsApiService {

  
  constructor(public Http: HttpClient) {
  }

  loadNews() {
    return this.Http.get<RespuestaTopHeadlines>(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-13&sortBy=publishedAt&apiKey="
       + environment.apiKey);
  }
  
}

export interface RespuestaTopHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}
