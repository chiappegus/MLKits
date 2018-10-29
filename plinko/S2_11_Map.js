const outputs =[
  [10,.5,16,1],
  [200,.5,16,4],
  [350,.5,16,4],
  [600,.5,16,5]
  ]

const predictionsPoint =300;
function distance (point) {
  return Math.abs(point -predictionsPoint);
}

 _.chain(outputs)
  
  .map(row=> [distance(row[0]),row[3]])
  
  .value();