import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { EnvelopeService } from '../../core/envelope.service';
import { ExpenseService } from '../../core/expense.service';
import { AmountPipe } from '../../shared/pipes/amount.pipe';
import { BudgetStats, computeBudgetStats } from '../../shared/budget.utils';
import { Envelope } from '../../models/envelope.model';
import { Category } from '../../models/category.model';
import { Expense } from '../../models/expense.model';
import { CATEGORY_COLORS } from '../../shared/colors';
import { ChartSlice } from '../../shared/components/pie-chart/pie-chart';

interface ExpenseRow extends Expense {
  category?: Category;
}

@Component({
  selector: 'app-envelope-detail',
  imports: [
    RouterLink,
    DatePipe,
    MatToolbar,
    MatButton,
    MatIconButton,
    MatFabButton,
    MatIcon,
    MatProgressBar,
    AmountPipe,
  ],
  templateUrl: './envelope-detail.html',
  styleUrl: './envelope-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnvelopeDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private envelopeService = inject(EnvelopeService);
  private expenseService = inject(ExpenseService);
  private dialog = inject(MatDialog);

  readonly categoryColors = CATEGORY_COLORS;

  envelopeId!: number;
  envelope = signal<Envelope | null>(null);
  expenses = signal<ExpenseRow[]>([]);
  categories = signal<Category[]>([]);
  stats = signal<BudgetStats | null>(null);

  async ngOnInit(): Promise<void> {
    this.envelopeId = Number(this.route.snapshot.paramMap.get('id'));
    await this.load();
  }

  async load(): Promise<void> {
    const [envelope, cats, rawExpenses] = await Promise.all([
      this.envelopeService.getById(this.envelopeId),
      this.envelopeService.getCategories(this.envelopeId),
      this.expenseService.getByEnvelope(this.envelopeId),
    ]);

    if (!envelope) {
      this.router.navigate(['/']);
      return;
    }

    this.categories.set(cats);
    const catMap = new Map(cats.map((c) => [c.id!, c]));
    const rows: ExpenseRow[] = rawExpenses.map((e) => ({
      ...e,
      category: e.categoryId != null ? catMap.get(e.categoryId) : undefined,
    }));

    this.envelope.set(envelope);
    this.expenses.set(rows);
    this.stats.set(computeBudgetStats(envelope.budget, envelope.endDate, rawExpenses));
  }

  getCategoryColor(cat: Category): string {
    return CATEGORY_COLORS[cat.colorIndex % CATEGORY_COLORS.length];
  }

  async showPieChart(): Promise<void> {
    const cats = this.categories();
    const exps = this.expenses();
    const slices: ChartSlice[] = cats
      .map((cat) => ({
        label: cat.name,
        amount: exps
          .filter((e) => e.categoryId === cat.id)
          .reduce((sum, e) => sum + e.amount, 0),
        colorIndex: cat.colorIndex,
      }))
      .filter((s) => s.amount > 0);

    const { PieChartDialog } = await import(
      '../../shared/components/pie-chart/pie-chart-dialog'
    );
    this.dialog.open(PieChartDialog, { data: { slices }, width: '340px' });
  }
}
