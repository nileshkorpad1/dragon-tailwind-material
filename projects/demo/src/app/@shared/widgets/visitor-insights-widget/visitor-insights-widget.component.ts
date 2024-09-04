import { afterNextRender, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ThemeManagerService } from '@elementar/components/core';
import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent, TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

@Component({
  selector: 'app-visitor-insights-widget',
  standalone: true,
  imports: [],
  templateUrl: './visitor-insights-widget.component.html',
  styleUrl: './visitor-insights-widget.component.scss'
})
export class VisitorInsightsWidgetComponent {
  private _elementRef = inject(ElementRef);
  private _themeManager = inject(ThemeManagerService);
  private _observer: ResizeObserver;

  @ViewChild('chartRef', { read: ElementRef, static: true })
  private _chartRef: ElementRef;

  constructor() {
    afterNextRender(() => {
      echarts.use([
        ToolboxComponent,
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        LabelLayout,
        LineChart,
        UniversalTransition,
        CanvasRenderer
      ]);
      const monthNames = [];

      for (let i = 0; i < 12; i++) {
        const date = new Date();
        date.setMonth(i);
        const monthName = date.toLocaleString('default', { month: 'short' });
        monthNames.push(monthName);
      }

      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Loyal Customers', 'New Customers', 'Unique Customers']
        },
        grid: {
          top: '44px',
          left: '30px',
          right: '34px',
          bottom: '30px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: monthNames
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Loyal Customers',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 30, 100, 66, 100]
          },
          {
            name: 'New Customers',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 200, 220, 180, 160]
          },
          {
            name: 'Unique Customers',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 160, 140, 190, 230]
          }
        ]
      };
      const chart = echarts.init(this._chartRef.nativeElement, this._themeManager.getPreferredColorScheme());
      chart.setOption(option);
      this._observer = new ResizeObserver(() => chart.resize());
      this._observer.observe(this._elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    this._observer?.disconnect();
  }
}
