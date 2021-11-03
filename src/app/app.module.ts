import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { PaymentTypesComponent } from './shared/payment-types/payment-types.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './layout/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardComponent } from './_services/auth-guard/auth-guard.component';
import { MyInterseptorService } from './_services/my-interseptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownComponent,
    PaymentTypesComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthGuardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterseptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
