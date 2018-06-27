import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { AuthInterceptor } from './services/auth-interceptor';
import { LoggerInterceptor } from './services/logger-interceptor';
import { APP_ROUTES } from './app.routing';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { AnimatedComponent } from './animated/animated.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObsDemoComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    AnimatedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, 
    AuthService, 
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }, {
      provide : HTTP_INTERCEPTORS,
      useClass : LoggerInterceptor,
      multi : true
    }, 
    LoginGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
