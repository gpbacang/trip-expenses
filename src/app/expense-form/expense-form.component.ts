import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Expenses } from './expense';

declare var $: any;


@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  expenseList: Expenses[] = [];
  showModal = false;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  addExpenseForm(expenseName, amount, details) {
    const data = {
      expenseName: expenseName,
      amount: amount,
      details: details
    };

    this.expenseList.push(data);

    $('#expenseName').val('');
    $('#amount').val('');
    $('#details').val('');
  }

  hideModal(event) {
    this.showModal = false;
  }

  emailExpenses() {
    this.showModal = true;
  }

}
