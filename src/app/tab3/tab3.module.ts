import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { NoticiaPage } from '../noticia/noticia.page';
import { NoticiaPageModule } from '../noticia/noticia.module';

@NgModule({
  entryComponents:[
    NoticiaPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NoticiaPageModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
