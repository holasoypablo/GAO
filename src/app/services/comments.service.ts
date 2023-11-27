import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiUrl = 'http://localhost:8000/comment/';

  constructor(private http: HttpClient) {}

  getCommentsByAlien(id: string): Observable<any> {
    const url = `${this.apiUrl}getByAlienId/${id}`;
    return this.http.get(url);
  }

  saveComment(alienId: string, userName: string, comment: string) {
    const url = `${this.apiUrl}addComment/${alienId}`;
    const commentDto = { userId: userName, comment: comment };
    return this.http.post(url, commentDto);
  }

  saveCommentReaction(id: string, type: string): Observable<any> {
    const url = `${this.apiUrl}commentReaction/${id}`;
    const reactionDto = { type: type };
    return this.http.post(url, reactionDto);
  }
}
