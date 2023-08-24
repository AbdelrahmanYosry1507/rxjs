import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer/footer.component';
import { HeadercomComponent } from './core/header/headercom/headercom.component';
import { ProductComponent } from './featuers/products/product/product.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { KhloudModule } from './khloud/khloud.module';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadercomComponent,
    ProductComponent,
    ProductCardComponent,
    AboutUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KhloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
