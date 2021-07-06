import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private booksService:BooksService,private router: Router) { }
  title:string="Add Book";
  books={
    title :'',
    author:'',
    genre:'',
    image:'',
    details:''
  }

  ngOnInit(): void {
  }
  AddBook()
  {    
    this.booksService.newBook(this.books);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }

}
