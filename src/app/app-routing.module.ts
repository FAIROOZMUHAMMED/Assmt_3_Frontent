import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"books",
    component:BooksComponent},
  {
    path:"books/update",
    component:UpdateBookComponent
},
  {
    path:"books/add",
    canActivate: [AuthGuard],
    component:AddbookComponent},
  {
    path:"books/book",
    component:BookComponent
  },
  {
    path:"authors",
    component:AuthorsComponent
  },
  {
    path:"authors/add",
    canActivate: [AuthGuard],
    component:AddauthorComponent
  },
  {
    path:"authors/author",
    component:AuthorComponent},
  {
    path:"authors/update",
    component:UpdateAuthorComponent},

  {
    path:"login",
    component:LoginComponent},
  {
    path:"signup",
    component:SignupComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
