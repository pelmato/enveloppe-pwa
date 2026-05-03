import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { EnvelopeService } from '../../core/envelope.service';
import { ExpenseService } from '../../core/expense.service';
import { AmountPipe } from '../../shared/pipes/amount.pipe';
import { BudgetStats, computeBudgetStats } from '../../shared/budget.utils';
import { Envelope } from '../../models/envelope.model';

interface EnvelopeRow extends Envelope, BudgetStats {
  latestExpenseDate: Date | null;
}

@Component({
  selector: 'app-envelope-list',
  imports: [
    DatePipe,
    RouterLink,
    MatToolbar,
    MatFabButton,
    MatIcon,
    MatProgressBar,
    AmountPipe,
  ],
  templateUrl: './envelope-list.html',
  styleUrl: './envelope-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnvelopeList implements OnInit {
  private envelopeService = inject(EnvelopeService);
  private expenseService = inject(ExpenseService);

  rows = signal<EnvelopeRow[]>([]);

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load(): Promise<void> {
    const envelopes = await this.envelopeService.getAll();
    const result: EnvelopeRow[] = await Promise.all(
      envelopes.map(async (env) => {
        const expenses = await this.expenseService.getByEnvelope(env.id!);
        const stats = computeBudgetStats(env.budget, env.endDate, expenses);
        return {
          ...env,
          ...stats,
          latestExpenseDate: expenses.length > 0 ? new Date(expenses[0].date) : null,
        };
      }),
    );
    result.sort((a, b) => {
      if (a.latestExpenseDate && b.latestExpenseDate)
        return b.latestExpenseDate.getTime() - a.latestExpenseDate.getTime();
      if (a.latestExpenseDate) return -1;
      if (b.latestExpenseDate) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    this.rows.set(result);
  }
}
