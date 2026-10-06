import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';

@Component({
  imports: [FormsModule],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {

  private investmentService = inject(InvestmentService);

  public onSubmit(): void {
    console.log("Hio");
    this.investmentService.calculateInvestment();
  };
}
