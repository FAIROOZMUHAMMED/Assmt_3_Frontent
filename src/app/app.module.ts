import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http' ;
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { HomeComponent } from './home/home.component';
import {BooksService} from './books.service';
import { AuthorsService } from './authors.service';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component'; 
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    LoginComponent,
    SignupComponent,
    AuthorsComponent,
    AuthorComponent,
    AddbookComponent,
    AddauthorComponent,
    HomeComponent,
    UpdateBookComponent,
    UpdateAuthorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BooksService,AuthorsService,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
