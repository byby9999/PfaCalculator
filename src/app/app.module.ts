import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: 'calculator', component: CalculatorComponent }
 ];
@NgModule({
   declarations: [
      AppComponent,
      CalculatorComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      FormsModule,
      TooltipModule.forRoot(),
      AngularFontAwesomeModule,
      RouterModule.forRoot(routes),
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
