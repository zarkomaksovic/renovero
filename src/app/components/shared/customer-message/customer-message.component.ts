import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-message',
  templateUrl: './customer-message.component.html',
  styleUrls: ['./customer-message.component.scss'],
})
export class CustomerMessageComponent implements OnInit {
  @Input() showCustomMessageContainer: boolean;
  @Input() isSuccess: boolean;
  @Input() message: string;

  constructor() {}

  ngOnInit(): void {}
}
