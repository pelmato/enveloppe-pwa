import { Expense } from '../models/expense.model';

export interface BudgetStats {
  consumed: number;
  remaining: number;
  isExpired: boolean;
  dailyBudget: number | null;
  dailyRemaining: number | null;
  progressPercent: number;
}

export function computeBudgetStats(
  budget: number,
  endDate: Date,
  expenses: Expense[],
): BudgetStats {
  const consumed = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = budget - consumed;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);

  const diffDays = Math.floor((end.getTime() - today.getTime()) / 86_400_000);
  const daysRemaining = diffDays + 1;
  const isExpired = daysRemaining <= 0;

  const dailyBudget = isExpired ? null : remaining / daysRemaining;

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);
  const todayConsumed = expenses
    .filter((e) => {
      const d = new Date(e.date);
      return d >= todayStart && d <= todayEnd;
    })
    .reduce((sum, e) => sum + e.amount, 0);

  const dailyRemaining = dailyBudget === null ? null : dailyBudget - todayConsumed;
  const progressPercent = budget > 0 ? Math.min((consumed / budget) * 100, 100) : 0;

  return { consumed, remaining, isExpired, dailyBudget, dailyRemaining, progressPercent };
}
