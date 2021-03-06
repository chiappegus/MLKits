const outputs = [];

const k= 3

const predictionsPoint =300;



function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
  //console.log(outputs);
 /*console.log(_.sortBy(outputs, function(row){
          return row[0] }));*/
          
 };

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
     /*console.log(outputs.length);
     console.log(splitDataset(outputs , (outputs.length/2)  ) )*/
  
}

function distance (point) {
  return Math.abs(point -predictionsPoint);
}


function  splitDataset(data , testCount){

  const shuffled =_.shuffle(data); // revuelve los resultados
                                   // _.shuffle([1, 2, 3, 4]);
                                  // => [4, 1, 3, 2]
                                  // 
  const testSet=_.slice(shuffled,0,testCount) // que tomo , desde , hasta
  const trainingSet=_.slice(shuffled,testCount) // que tomo , desde 

   return [testSet , trainingSet]

}

