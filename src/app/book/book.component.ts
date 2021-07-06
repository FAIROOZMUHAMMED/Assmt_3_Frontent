import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:string="Book";
  book={
    title :'',
    author:'',
    genre:'',
    image:'',
    details:''
  }

  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("BookId");
    this.booksService.getBook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

}
