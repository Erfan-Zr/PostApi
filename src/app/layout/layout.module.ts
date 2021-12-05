import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    AddPostComponent,
    EditDialogComponent,
  ],
  imports: [
    CommonModule,
    MatListModule, 
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    FormsModule,
    MatDialogModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    AddPostComponent,
    EditDialogComponent

  ]
})
export class LayoutModule { }
