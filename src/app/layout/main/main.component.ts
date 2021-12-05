import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/data/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public allPosts : PostsService,
    public dialog: MatDialog
    ) { };

  posts : any;
  openDialog = false;

  getPost() {
    this.allPosts.getPosts().subscribe(data => {
      this.posts = data;
    })
  }
  ngOnInit(): void {
    this.getPost();
  }
  deletePost(post:any){
    this.allPosts.deletePosts(post.id).subscribe(data =>{
      this.getPost();
    });
    
  } 
  openEditor(post:any) {
    const dialogRef = this.dialog.open(EditDialogComponent,  {
      data:post,
    }
      
    );
    dialogRef.afterClosed().subscribe(res => {
    });
  }
  updatePost(post:any){
    this.allPosts.updatePost(post);
  }
}
