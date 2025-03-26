import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  nombreDelHijo: string = "Pedro";

  @Input() nombreDeMiPapa: string = ""
}
