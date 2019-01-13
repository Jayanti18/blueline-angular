import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusService } from './services/bus.services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BusinfoComponent } from './businfo/businfo.component';
import { FormComponent } from './form/form.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    FormComponent,
    AboutComponent,
    HomeComponent,
    BusinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    BusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
