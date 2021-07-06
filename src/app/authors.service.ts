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
    return this.http.get("http://localhost:3300/authors/"+id);
  }
  getAuthors(){
    return this.http.get("http://localhost:3300/authors");
  }
  newAuthor(item:any)
  {   
    return this.http.post("http://localhost:3300/authors/add",{"author":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteAuthor(id:any)
  {
    return this.http.delete("http://localhost:3300/authors/remove/"+id)
  }
  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3300/authors/update",author)
    .subscribe(data =>{console.log(data)})
  }
}
