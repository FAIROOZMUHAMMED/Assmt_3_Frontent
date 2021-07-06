import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  item= {
    title :'',
    author:'',
    genre:'',
    image:'',
    details:''
    }
    useritem={
        name:'',
        email:'',
        password:''
    }

  constructor(private http:HttpClient) { }
  newUser(useritem:any)
  {   
    return this.http.post("/api/signup",{"user":useritem})
    // http://localhost:3300/signup
    
    .subscribe(data =>{console.log(data)})
  }
  getBook(id:any){
    return this.http.get("/api/books/"+id);
  }
  getBooks(){
    return this.http.get("/api/books");
  }
  newBook(item:any)
  {   
    return this.http.post("/api/books/add",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {
    return this.http.delete("/api/books/remove/"+id)
  }
  editBook(bookdata:any)
  {
    console.log('client update')
    return this.http.put("/api/books/update",bookdata)
    .subscribe(data =>{console.log(data)})
  }
}
