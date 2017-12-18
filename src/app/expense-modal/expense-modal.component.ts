import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AppService, IMessage } from '../app.service';
import { Expenses } from '../expense-form/expense';

declare var $: any;

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.scss']
})
export class ExpenseModalComponent implements OnInit, OnChanges {
  @Input() showModal = false;
  @Input() expenseList: Expenses[];
  @Output() hideModal = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (this.showModal === true) {
      $('.ui.modal').modal('show');
    }
  }

  onHideModal() {
    this.hideModal.emit();
    $('.ui.modal').modal('hide');
  }

  sendEmail(name, fromEmail, toEmail) {
    const message = {
      name: name,
      from_email: fromEmail,
      to_email: toEmail,
      message: JSON.stringify(this.expenseList)
    };
    this.appService.sendEmail(message).subscribe(res => {
      alert('Successfully sent email.');
    }, error => {
      alert('There is an error trying to send the email. Please try again.');
    });

    this.onHideModal();
  }

}
