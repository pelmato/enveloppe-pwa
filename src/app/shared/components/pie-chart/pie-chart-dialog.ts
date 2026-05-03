import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PieChart, ChartSlice } from './pie-chart';

export interface PieChartDialogData {
  slices: ChartSlice[];
}

@Component({
  selector: 'app-pie-chart-dialog',
  imports: [MatDialogModule, MatButtonModule, PieChart],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>Dépenses par catégorie</h2>
    <mat-dialog-content>
      <app-pie-chart [slices]="data.slices" />
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Fermer</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-dialog-content {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class PieChartDialog {
  data: PieChartDialogData = inject(MAT_DIALOG_DATA);
}
