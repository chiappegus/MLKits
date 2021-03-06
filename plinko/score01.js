const outputs = [];

const k= 3

const predictionsPoint =300;



function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
  //console.log(outputs);
 console.log(_.sortBy(outputs, function(row){
          return row[0] })
 );

function runAnalysis() {
  // Write code here to analyze stuff
  const bucket= _.chain(outputs)
  
    .map(row=> [distance(row[0]),row[3]])

    .sortBy(row=>row[0])

    .slice(0,k)

    .countBy(row=>row[1])

    .toPairs()

    .sortBy(row => row[1] )

    .last()

    .first()
    
    .parseInt()
    
    .value();

    console.log('your point will probably fall into ',bucket);    
  
}

function distance (point) {
  return Math.abs(point -predictionsPoint);
}

