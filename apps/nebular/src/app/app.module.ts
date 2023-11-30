import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import {NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule} from "@nebular/theme";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
