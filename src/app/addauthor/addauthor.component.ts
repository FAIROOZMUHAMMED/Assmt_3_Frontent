import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  title:string="Authors";
  author={
    name :'',
    nationality:'',
    image:'',
    details:''
  }

  constructor(private authorsService:AuthorsService,private router: Router) { }

  ngOnInit(): void {
  }
  AddAuthor()
  {    
    this.authorsService.newAuthor(this.author);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
