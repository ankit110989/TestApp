import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './../models/transaction'
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

getAll() {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/transaction`);
}

add(transaction : Transaction){
  return this.http.post<number>(`${environment.apiUrl}/transaction`,transaction);
}
}
