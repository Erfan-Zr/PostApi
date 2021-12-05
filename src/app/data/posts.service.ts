import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  // posts(data: any){
  //   return this.http.get<any>("http://localhost:5000/posts" , data)
  //   .pipe(map((res :any)=>{
  //     return res;
  //   }))
  // }

  getPosts(){
    return this.http.get("http://localhost:5000/posts")
  }
  deletePosts(postId : any) {
    return this.http.delete("http://localhost:5000/posts/"+ postId)
  }
  addPost(task:any){
    return this.http.post("http://localhost:5000/posts", task)
  }
  updatePost(post:any){
    const url = "http://localhost:5000/posts/" + post.id;
    console.log(post)
    return this.http.put(url , post, httpOption);
  }
}
