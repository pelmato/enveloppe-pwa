import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnvelopeService } from '../../core/envelope.service';
import { ExpenseService } from '../../core/expense.service';
import { Envelope } from '../../models/envelope.model';
import { Category } from '../../models/category.model';
import { ConfirmDialog } from '../../shared/components/confirm-dialog/confirm-dialog';
import { CATEGORY_COLORS } from '../../shared/colors';

@Component({
  selector: 'app-expense-form',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatToolbar,
    MatButton,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatError,
    MatInput,
    MatDatepickerModule,
    MatSelectModule,
  ],
  templateUrl: './expense-form.html',
  styleUrl: './expense-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseForm implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private envelopeService = inject(EnvelopeService);
  private expenseService = inject(ExpenseService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  readonly categoryColors = CATEGORY_COLORS;

  envelopeId!: number;
  expenseId: number | null = null;
  isEditMode = false;

  envelope = signal<Envelope | null>(null);
  categories = signal<Category[]>([]);
  hasCategories = computed(() => this.categories().length > 0);
  dateError = signal<string | null>(null);

  form = new FormGroup({
    amount: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)]),
    date: new FormControl<Date | null>(null, [Validators.required]),
    time: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    categoryId: new FormControl<number | null>(null),
    name: new FormControl('', { nonNullable: true }),
  });

  async ngOnInit(): Promise<void> {
    this.envelopeId = Number(this.route.snapshot.paramMap.get('id'));
    const expenseIdStr = this.route.snapshot.paramMap.get('expenseId');
    if (expenseIdStr) {
      this.expenseId = Number(expenseIdStr);
      this.isEditMode = true;
    }

    const [envelope, cats] = await Promise.all([
      this.envelopeService.getById(this.envelopeId),
      this.envelopeService.getCategories(this.envelopeId),
    ]);

    if (!envelope) {
      this.router.navigate(['/']);
      return;
    }

    this.envelope.set(envelope);
    this.categories.set(cats);

    if (cats.length > 0) {
      this.form.controls.categoryId.setValidators([Validators.required]);
    } else {
      this.form.controls.name.setValidators([Validators.required]);
    }
    this.form.controls.categoryId.updateValueAndValidity();
    this.form.controls.name.updateValueAndValidity();

    if (this.isEditMode && this.expenseId) {
      const expense = await this.expenseService.getById(this.expenseId);
      if (expense) {
        const d = new Date(expense.date);
        this.form.patchValue({
          amount: expense.amount,
          date: d,
          time: `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`,
          categoryId: expense.categoryId ?? null,
          name: expense.name ?? '',
        });
      }
    } else {
      const now = new Date();
      this.form.patchValue({
        date: now,
        time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
      });
    }
  }

  getCategoryColor(cat: Category): string {
    return CATEGORY_COLORS[cat.colorIndex % CATEGORY_COLORS.length];
  }

  private combineDateTime(date: Date, time: string): Date {
    const [hours, minutes] = time.split(':').map(Number);
    const result = new Date(date);
    result.setHours(hours, minutes, 0, 0);
    return result;
  }

  async save(): Promise<void> {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const { amount, date, time, categoryId, name } = this.form.getRawValue();
    const combined = this.combineDateTime(date!, time);
    const envelope = this.envelope()!;

    const now = new Date();
    if (combined > now) {
      this.dateError.set('La date ne peut pas être dans le futur.');
      return;
    }

    const endDate = new Date(envelope.endDate);
    endDate.setHours(23, 59, 59, 999);
    if (combined > endDate) {
      this.dateError.set("La date ne peut pas dépasser la date de fin de l'enveloppe.");
      return;
    }

    this.dateError.set(null);

    const data = {
      envelopeId: this.envelopeId,
      amount: amount!,
      date: combined,
      categoryId: categoryId ?? undefined,
      name: name || undefined,
    };

    if (this.isEditMode && this.expenseId) {
      await this.expenseService.update(this.expenseId, data);
    } else {
      await this.expenseService.create(data);
    }
    this.router.navigate(['/envelopes', this.envelopeId]);
  }

  async confirmDelete(): Promise<void> {
    const ref = this.dialog.open(ConfirmDialog, {
      data: {
        title: 'Supprimer la dépense',
        message: 'Supprimer cette dépense ?',
      },
    });
    const confirmed = await ref.afterClosed().toPromise();
    if (confirmed && this.expenseId) {
      await this.expenseService.delete(this.expenseId);
      this.router.navigate(['/envelopes', this.envelopeId]);
    }
  }
}
