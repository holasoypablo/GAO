import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AliensService } from 'src/app/services/aliens.service';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from '../../aliens/models/comment.model';

@Component({
  selector: 'app-aliens-detail',
  templateUrl: './aliens-detail.component.html',
  styleUrls: ['./aliens-detail.component.scss'],
})
export class AliensDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private aliensService: AliensService,
    private commentsService: CommentsService
  ) {}

  alien: any;
  comments: Comment[] = [];
  newComment = '';
  id: string = '';
  userName: string = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    if (this.id !== null) {
      this.userName = localStorage.getItem('name') || '';
      this.getAlien(this.id);
      this.getComments(this.id);
    } else {
      console.error('ID del alien es nulo.');
    }
  }

  getAlien(id: string) {
    this.aliensService.getAlien(id).subscribe(
      (data: any) => {
        console.log(data);
        this.alien = data;
      },
      (error) => {
        console.error('Error al obtener la lista de aliens:', error);
      }
    );
  }

  saveComment(alienId: string, name: string, comment: string) {
    this.commentsService.saveComment(alienId, name, comment).subscribe(() => {
      this.getComments(this.id);
      this.newComment = '';
    });
  }

  getComments(id: string) {
    this.commentsService.getCommentsByAlien(id).subscribe(
      (data: any) => {
        console.log(data);
        this.comments = data;
      },
      (error) => {
        console.error('Error al obtener los comentarios de un alien:', error);
      }
    );
  }

  commentReaction(id: string, type: string) {
    this.commentsService
      .saveCommentReaction(id, type)
      .subscribe(() => this.getComments(this.id));
  }
}
