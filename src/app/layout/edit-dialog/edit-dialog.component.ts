import { outputAst } from '@angular/compiler';
import { PostsService } from 'src/app/data/posts.service';
import { Component, OnInit, Inject , Output, EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  @Output() updatePost = new EventEmitter();

  selectedPost = {
    id : 0,
    user: '',
    post: '',
    isAdmin: undefined,
  };
  selectedPostUser = '' ;
  selectedPostPost = '' ;
  selectedPostIsAdmin :any ;


  constructor(
    @Inject(MAT_DIALOG_DATA) public post:any,
    public allPosts : PostsService,
  ) {
    this.selectedPost = post;
    this.selectedPost.user = post.user;
    this.selectedPost.post = post.post;
    this.selectedPost.isAdmin = post.isAdmin;
    this.selectedPost.id = post.id;
   }
   posts : any;
   getPost() {
    this.allPosts.getPosts().subscribe(data => {
      this.posts = data;
    })
  }
  ngOnInit(): void {

  }
  updateTask(){
    const newPost = {
      user : this.selectedPost.user,
      post : this.selectedPost.post,
      isAdmin : this.selectedPost.isAdmin,
      id : this.selectedPost.id,
    }
    this.updatePost.emit(newPost);

    this.allPosts.updatePost(newPost).subscribe(data =>{
      this.getPost();
    });
  }

}
