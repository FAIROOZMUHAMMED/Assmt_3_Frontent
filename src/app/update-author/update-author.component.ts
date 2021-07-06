import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  authorItem={
    name :'',
    nationality:'',
    image:'',
    details:''
  }

  constructor(private authorsService:AuthorsService,private router: Router) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorsService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorsService.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }


}
