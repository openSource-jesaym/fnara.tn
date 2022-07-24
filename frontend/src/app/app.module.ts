import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/header/header.component';
import { ProductsGridComponent } from './pages/products-grid/products-grid.component';
import { ProductCardComponent } from './pages/products-grid/product-card/product-card.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AboutComponent } from './pages/footer/about/about.component';
import { ContactComponent } from './pages/footer/contact/contact.component';
import { FaqComponent } from './pages/footer/faq/faq.component';
import { ToggleMenuComponent } from './pages/header/toggle-menu/toggle-menu.component';


// ANGULAR MATERIAL
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsGridComponent,
    ProductCardComponent,
    routingComponents,
    HomeComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ToggleMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
