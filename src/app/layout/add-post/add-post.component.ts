import { Component, OnInit , Output, EventEmitter , Input} from '@angular/core';
import { PostsService } from 'src/app/data/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Input() adder: any;
  @Output() addEvent = new EventEmitter();
  @Output() onAddPost = new EventEmitter();


  username: any;
  post: any;
  isAdmin:boolean= false


  constructor(public allPosts : PostsService) {         this.getPost()}

  ngOnInit(): void {
    this.getPost()
  }

  posts : any;

  getPost() {
    this.allPosts.getPosts().subscribe(data => {
      this.posts = data;
    })
  }
  onSubmit(){
    if(!this.username || !this.post){
      alert("please enter all data");
      
    } else {
      const newPost = {
        user : this.username,
        post : this.post,
        isAdmin : this.isAdmin,
        id : Math.floor(Math.random()*100000000)
      }
  
      this.onAddPost.emit(newPost);
  
      this.allPosts.addPost(newPost).subscribe((data)=> {
        this.getPost()
      })
  
      this.username = '';
      this.post = '';
      this.isAdmin = false;
  
      // console.log(newPost);
      this.addEvent.emit(this.adder); 
      window.location.reload();
    }
  
    }

    

}
