const outputs = [];



function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
  //console.log(outputs);
 console.log(_.sortBy(outputs, function(row){
          return row[0] })
 ); _.sortBy(outputs, function(row){
          return row[0] });
}

function runAnalysis() {
  // Write code here to analyze stuff
}

