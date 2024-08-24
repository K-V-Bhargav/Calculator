import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  display: string = '';

  appendNumber(number: string) {
    this.display += number;
  }

  clear() {
    this.display = '';
  }

  delete() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    this.display = eval(this.display);
  }
}
