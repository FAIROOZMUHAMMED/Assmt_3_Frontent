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
    return this.http.post("http://localhost:3300/signup",{"user":useritem})
    .subscribe(data =>{console.log(data)})
  }
  getBook(id:any){
    return this.http.get("http://localhost:3300/books/"+id);
  }
  getBooks(){
    return this.http.get("http://localhost:3300/books");
  }
  newBook(item:any)
  {   
    return this.http.post("http://localhost:3300/books/add",{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {
    return this.http.delete("http://localhost:3300/books/remove/"+id)
  }
  editBook(bookdata:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3300/books/update",bookdata)
    .subscribe(data =>{console.log(data)})
  }
}
