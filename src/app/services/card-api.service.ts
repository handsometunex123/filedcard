import { Card } from 'src/app/models/cards.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {
  private baseUrl = 'http://localhost:8000/cards';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Card[]> {
    return this.http.get<any>(this.baseUrl);
  }
  get(id: string): Observable<Card> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }
  create(card: Card): Observable<Card> {
    return this.http.post<any>(this.baseUrl, card)
  }
  update(id: string, country: Card): Observable<Card> {
    return this.http.put<any>(this.baseUrl + '/' + id, country);
  }
  delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
