import * as Highcharts from 'highcharts';

const svgElements: Highcharts.SVGElement[] = [];

export const drawSvg = function () {
  const chart: any = this as any;

  svgElements.forEach((element) => element.destroy());
  svgElements.length = 0;
 
  const moveCursorTo = 'M';
  const drawLineTo = 'L';
  const moonPoint = chart.series[0].data[3];
  const moonPointX = moonPoint.plotX + chart.plotLeft;
  const moonPointY = moonPoint.plotY + chart.plotTop;
  const bottomChartY = chart.plotHeight + chart.plotTop;

  const moonLine = chart.renderer
    .path([
      [moveCursorTo, moonPointX, moonPointY],
      [drawLineTo, moonPointX, bottomChartY],
    ])
    .attr({
      'stroke-width': 5,
      stroke: 'orange',
      'stroke-dasharray': 3,
      zIndex: 3,
    });

  const moonCircumference = 50;
  const moonImage = chart.renderer
    .image(
      `https://raw.githubusercontent.com/dfa1234/highcharts-gradients-vite/master/favicon.svg`,
      moonPointX - moonCircumference / 2,
      moonPointY - moonCircumference / 2,
      moonCircumference,
      moonCircumference
    )
    .attr({
      zIndex: 4,
    });

  svgElements.push(moonLine);
  svgElements.push(moonImage);
  svgElements.forEach((element) => element.add());
};
