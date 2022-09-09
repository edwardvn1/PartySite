import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { SiteBodyComponent } from './site-body/site-body.component';
import { HomePanelComponent } from './site-body/tab-panels/home-panel/home-panel.component';
import { ThemePanelComponent } from './site-body/tab-panels/theme-panel/theme-panel.component';
import { GalleryPanelComponent } from './site-body/tab-panels/gallery-panel/gallery-panel.component';
import { ContactPanelComponent } from './site-body/tab-panels/contact-panel/contact-panel.component';
import { FeesPanelComponent } from './site-body/tab-panels/fees-panel/fees-panel.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabPanelsComponent } from './site-body/tab-panels/tab-panels.component';
import { ActivePanelService } from './active-panel.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBannerComponent,
    SiteBodyComponent,
    HomePanelComponent,
    ThemePanelComponent,
    GalleryPanelComponent,
    ContactPanelComponent,
    FeesPanelComponent,
    FooterComponent,
    TabPanelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ActivePanelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
