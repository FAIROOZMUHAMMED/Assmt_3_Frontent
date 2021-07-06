import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:string="Authors";
  authors=[{
    name :'',
    nationality:'',
    image:'',
    details:''
  }]

  constructor(private authorsService:AuthorsService,private router: Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }
  author(authordata:any)
  {
    localStorage.setItem("AuthorId", authordata._id.toString());
    this.router.navigate(['authors/author']);
  }
  editAuthor(authordata:any)
  {
    localStorage.setItem("editAuthorId", authordata._id.toString());
    this.router.navigate(['authors/update']);
  }
  deleteAuthor(authordata:any)
  {
    this.authorsService.deleteAuthor(authordata._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== authordata);
      })
    }

}
