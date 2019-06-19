import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { NoticiaPageModule } from '../noticia/noticia.module';
import { NoticiaPage } from '../noticia/noticia.page';

@NgModule({
  entryComponents:[
    NoticiaPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NoticiaPageModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
