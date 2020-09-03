import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions : Array<any> = [];
  constructor(private transService : TransactionService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTransactions();
  }
  
  getTransactions() {
    this.transService.getAll().subscribe(req => {
        this.transactions = req;
    });
}

addTransaction(){
  this.router.navigateByUrl('/add-transaction');
}
}
