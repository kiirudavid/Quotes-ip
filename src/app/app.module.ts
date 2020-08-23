// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { TheQuoteComponent } from './the-quote/the-quote.component';
// import { DateCountPipe } from './date-count.pipe';
// import { HighlightDirective } from './highlight.directive';
// import { DetailsComponent } from './details/details.component';
// import { FormComponent } from './form/form.component';
// import { QuoteComponent } from './quote/quote.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     TheQuoteComponent,
//     DateCountPipe,
//     HighlightDirective,
//     DetailsComponent,
//     FormComponent,
//     QuoteComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlightDirective } from './highlight.directive';
import { DetailsComponent } from './details/details.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    QuoteComponent,
    HighlightDirective,
    DetailsComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }