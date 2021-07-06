import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author={
    name :'',
    nationality:'',
    image:'',
    details:''
  }
  constructor(private authorsService:AuthorsService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("AuthorId");
    this.authorsService.getAuthor(authorId).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
  }

}
