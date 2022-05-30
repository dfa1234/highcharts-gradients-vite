import * as Highcharts from 'highcharts';
import { drawSvg } from './draw-svg';

const configuration1: Highcharts.Options = {
  chart: {
    type: 'area',
    events: {
      render: drawSvg,
    },
  },
  title: null,
  credits: {
    enabled: false,
  },
  accessibility: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  xAxis: {
    categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  },
  yAxis: {
    title: null,
    min: -20,
  },
  plotOptions: {
    area: {
      color: 'blue',
      threshold: -15,
      fillColor: {
        stops: [
          [0, 'gray'],
          [1, 'lightblue'],
        ],
        linearGradient: {
          x1: 0, // LEFT
          y1: 1, // TOP
          x2: 0, // RIGHT
          y2: 0, // BOTTOM
        },
      },
    },
  },
  series: [
    {
      name: 'Serie 1',
      zoneAxis: 'x',
      data: [5, 5, 6, 7, 6, 5, 5, 4],
      zones: [
        {
          value: 6,
          color: 'black',
          fillColor: {
            stops: [
              [0, 'yellow'],
              [1, 'red'],
            ],
            linearGradient: {
              x1: 0, // LEFT
              y1: 1, // TOP
              x2: 0, // RIGHT
              y2: 0, // BOTTOM
            },
          },
        },
      ],
    },
  ],
};

const chart: Highcharts.Chart = Highcharts.chart('container1', configuration1);
