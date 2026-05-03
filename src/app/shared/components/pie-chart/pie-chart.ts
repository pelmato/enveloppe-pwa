import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { Chart, ArcElement, PieController, Tooltip, Legend } from 'chart.js';
import { CATEGORY_COLORS } from '../../colors';

Chart.register(PieController, ArcElement, Tooltip, Legend);

export interface ChartSlice {
  label: string;
  amount: number;
  colorIndex: number;
}

@Component({
  selector: 'app-pie-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<canvas #canvas></canvas>`,
  styles: [
    `
      canvas {
        max-width: 280px;
        max-height: 280px;
      }
    `,
  ],
})
export class PieChart implements AfterViewInit, OnChanges {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input() slices: ChartSlice[] = [];

  private chart?: Chart;
  private ready = false;

  ngAfterViewInit(): void {
    this.ready = true;
    this.render();
  }

  ngOnChanges(): void {
    if (this.ready) this.render();
  }

  private render(): void {
    this.chart?.destroy();
    const ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.slices.map((s) => s.label),
        datasets: [
          {
            data: this.slices.map((s) => s.amount),
            backgroundColor: this.slices.map(
              (s) => CATEGORY_COLORS[s.colorIndex % CATEGORY_COLORS.length],
            ),
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } },
      },
    });
  }
}
