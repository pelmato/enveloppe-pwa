import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatSuffix } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnvelopeService } from '../../core/envelope.service';
import { Category } from '../../models/category.model';
import { ConfirmDialog } from '../../shared/components/confirm-dialog/confirm-dialog';
import { CATEGORY_COLORS } from '../../shared/colors';

interface FormCategory {
  id?: number;
  name: string;
  colorIndex: number;
}

@Component({
  selector: 'app-envelope-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatToolbar,
    MatButton,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatError,
    MatSuffix,
    MatInput,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
  ],
  templateUrl: './envelope-form.html',
  styleUrl: './envelope-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnvelopeForm implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private envelopeService = inject(EnvelopeService);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private cdr = inject(ChangeDetectorRef);

  readonly categoryColors = CATEGORY_COLORS;

  form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    budget: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)]),
    endDate: new FormControl<Date | null>(null, [Validators.required]),
  });

  envelopeId: number | null = null;
  isEditMode = false;
  categories: FormCategory[] = [];
  newCategoryName = '';
  editingIndex: number | null = null;
  editingName = '';

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    const fromId = this.route.snapshot.queryParamMap.get('from');

    if (id) {
      this.envelopeId = Number(id);
      this.isEditMode = true;
      const envelope = await this.envelopeService.getById(this.envelopeId);
      if (envelope) {
        this.form.patchValue({
          name: envelope.name,
          budget: envelope.budget,
          endDate: new Date(envelope.endDate),
        });
        this.categories = await this.envelopeService.getCategories(this.envelopeId);
        this.cdr.markForCheck();
      }
    } else if (fromId) {
      const source = await this.envelopeService.getById(Number(fromId));
      if (source) {
        this.form.patchValue({ budget: source.budget });
        const sourceCats = await this.envelopeService.getCategories(Number(fromId));
        this.categories = sourceCats.map((c, i) => ({ name: c.name, colorIndex: i }));
        this.cdr.markForCheck();
      }
    }
  }

  async addCategory(): Promise<void> {
    const name = this.newCategoryName.trim();
    if (!name) return;

    if (this.isEditMode && this.envelopeId) {
      const added = await this.envelopeService.addCategory(this.envelopeId, name);
      this.categories.push(added);
    } else {
      this.categories.push({ name, colorIndex: this.categories.length % 8 });
    }
    this.newCategoryName = '';
  }

  startEdit(index: number): void {
    this.editingIndex = index;
    this.editingName = this.categories[index].name;
  }

  async confirmEdit(index: number): Promise<void> {
    const name = this.editingName.trim();
    if (!name) {
      this.cancelEdit();
      return;
    }
    const cat = this.categories[index];
    if (this.isEditMode && cat.id) {
      await this.envelopeService.renameCategory(cat.id, name);
    }
    this.categories[index] = { ...cat, name };
    this.editingIndex = null;
  }

  cancelEdit(): void {
    this.editingIndex = null;
  }

  async deleteCategory(index: number): Promise<void> {
    const cat = this.categories[index];
    if (this.isEditMode && cat.id) {
      try {
        await this.envelopeService.deleteCategory(cat.id);
      } catch {
        this.snackBar.open('Cette catégorie est utilisée par des dépenses.', 'OK', {
          duration: 3000,
        });
        return;
      }
    }
    this.categories.splice(index, 1);
    this.categories.forEach((c, i) => (c.colorIndex = i % 8));
  }

  getCategoryColor(cat: FormCategory): string {
    return CATEGORY_COLORS[cat.colorIndex % CATEGORY_COLORS.length];
  }

  async save(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, budget, endDate } = this.form.getRawValue();

    if (this.isEditMode && this.envelopeId) {
      await this.envelopeService.update(this.envelopeId, { name, budget: budget!, endDate: endDate! });
      this.router.navigate(['/envelopes', this.envelopeId]);
    } else {
      const id = await this.envelopeService.create({
        name,
        budget: budget!,
        endDate: endDate!,
        createdAt: new Date(),
      });
      for (const cat of this.categories) {
        await this.envelopeService.addCategory(id, cat.name);
      }
      this.router.navigate(['/envelopes', id]);
    }
  }

  async confirmDelete(): Promise<void> {
    const ref = this.dialog.open(ConfirmDialog, {
      data: {
        title: "Supprimer l'enveloppe",
        message: 'Supprimer cette enveloppe et toutes ses dépenses ?',
      },
    });
    const confirmed = await ref.afterClosed().toPromise();
    if (confirmed && this.envelopeId) {
      await this.envelopeService.delete(this.envelopeId);
      this.router.navigate(['/']);
    }
  }

  goBack(): void {
    if (this.isEditMode && this.envelopeId) {
      this.router.navigate(['/envelopes', this.envelopeId]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
