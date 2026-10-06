import { Injectable, signal } from "@angular/core";
import { InvestmentData } from "../model/investment.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0);
  data = signal<InvestmentData[] | []>([]);

  public calculateInvestment(): void {
    const annualData: InvestmentData[] = [];
    let investmentValue = this.initialInvestment();
    for(let i = 0; i < this.duration(); i++){
      const year = i + 1;
      const randomId = Math.floor(Math.random() * 1000) + 1;
      const interestEarnedInYear = investmentValue * (this.expectedReturn()/100);
      investmentValue += interestEarnedInYear + this.annualInvestment();
      const totalInterest = investmentValue - this.annualInvestment() * year - this.initialInvestment();
      annualData.push({
        id: randomId,
        year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment(),
        totalInterest,
        totalAmountInvested: this.initialInvestment() + this.annualInvestment() * year
      });
    };

    this.data.set(annualData);
  };
};
