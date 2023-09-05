import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input()
  variant?: 'primary' | 'secondary';

  ngOnInit(): void {}
}
