const Graph2d = require('vis/lib/timeline/Graph2d');
import 'vis/dist/vis-timeline-graph2d.min.css';
const DataSet = require('vis/lib/DataSet');

const container = document.getElementById('visualization');
const items = [
  {x: '2014-06-11', y: 10},
  {x: '2014-06-12', y: 25},
  {x: '2014-06-13', y: 30},
  {x: '2014-06-14', y: 10},
  {x: '2014-06-15', y: 15},
  {x: '2014-06-16', y: 30}
];

const dataset = new DataSet(items);
const options = {
  start: '2014-06-10',
  end: '2014-06-18'
};

const graph2d = new Graph2d(container, dataset, options);
