import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';



@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  books={
    title :'',
    author:'',
    genre:'',
    image:'',
    details:''}

  constructor(private booksService:BooksService,private router: Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.booksService.getBook(bookId).subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.booksService.editBook(this.books);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
