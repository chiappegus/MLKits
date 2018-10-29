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


/* 

https://lodash.com/docs/#chain
var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];
 
var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();
// => 'pebbles is 1'

*/