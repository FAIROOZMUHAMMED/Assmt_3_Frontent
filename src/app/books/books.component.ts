import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:string="Books";
  books=[{
    title :'',
    author:'',
    genre:'',
    image:'',
    details:''
  }]
  constructor(private booksService:BooksService,private router: Router,public _auth:AuthService) { }

  ngOnInit(): void {
    // calling getProducts() and loading the products to product array
 
    this.booksService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
  book(bookdata:any)
  {
    localStorage.setItem("BookId", bookdata._id.toString());
    this.router.navigate(['books/book']);
  }
  editBook(bookdata:any)
  {
    localStorage.setItem("editBookId", bookdata._id.toString());
    this.router.navigate(['books/update']);
  }
  deleteBook(bookdata:any)
  {
    this.booksService.deleteBook(bookdata._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== bookdata);
      })
    }
}
