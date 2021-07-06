import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  item={
    name :'',
    nationality:'',
    image:'',
    details:''
  }

  constructor(private http:HttpClient) { }
  getAuthor(id:any){
    return this.http.get("/api/authors/"+id);
  }
  getAuthors(){
    return this.http.get("/api/authors");
  }
  newAuthor(item:any)
  {   
    return this.http.post("/api/authors/add",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {
    return this.http.delete("/api/authors/remove/"+id)
  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("/api/authors/update",author)
    .subscribe(data =>{console.log(data)})
  }
}
