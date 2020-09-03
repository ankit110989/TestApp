import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Transaction } from './../models/transaction';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  transactionForm: FormGroup;
  submitted = false;
  constructor(private transService: TransactionService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.transactionForm = this.formBuilder.group({
      amount: ['', Validators.required],
      description: ['', Validators.required],
      transactionType: ['', [Validators.required]]
    });
  }
   // convenience getter for easy access to form fields
   get f() { return this.transactionForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.transactionForm.invalid) {
      return;
    }
    let transaction: Transaction = {
      Amount :  this.transactionForm.value.amount,
      TransactionType : +(this.transactionForm.value.transactionType),
      Description : this.transactionForm.value.description
    };
    
      this.transService.add(transaction).subscribe(req => {
        if (req > 0) {
          alert("transaction added scuccessfully");
          this.router.navigateByUrl('/');
        }
        else {
          alert("Customer addition failed");
        }
      });
    


  }

  onReset() {
      this.router.navigateByUrl('/')
  }

}
