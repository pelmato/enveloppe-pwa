import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/envelope-list/envelope-list').then((m) => m.EnvelopeList),
  },
  {
    path: 'envelopes/new',
    loadComponent: () =>
      import('./pages/envelope-form/envelope-form').then((m) => m.EnvelopeForm),
  },
  {
    path: 'envelopes/:id/edit',
    loadComponent: () =>
      import('./pages/envelope-form/envelope-form').then((m) => m.EnvelopeForm),
  },
  {
    path: 'envelopes/:id',
    loadComponent: () =>
      import('./pages/envelope-detail/envelope-detail').then((m) => m.EnvelopeDetail),
  },
  {
    path: 'envelopes/:id/expenses/new',
    loadComponent: () =>
      import('./pages/expense-form/expense-form').then((m) => m.ExpenseForm),
  },
  {
    path: 'envelopes/:id/expenses/:expenseId',
    loadComponent: () =>
      import('./pages/expense-form/expense-form').then((m) => m.ExpenseForm),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings').then((m) => m.Settings),
  },
  { path: '**', redirectTo: '' },
];
