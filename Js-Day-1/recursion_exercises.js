
var range = function(first, last){

  if (last < first){
    return [];
  }
  else if (first === last){
    return [first];
  }

  var result = [];


  result = range(first, last-1);
  result.push(last);
  return result;
};

range(1,10);

var sumIt = function(arr){

  if (arr.length === 0){
    return 0;

  }else if( arr.length === 1){
    return arr[0];
  }

  var i = 0;
  var sum = 0;
  while( i < arr.length){
    sum += arr[i];
    i++;
  }
  return sum;
}

sumIt([10,20,30]);

var sumRec = function(arr){

  if (arr.length === 0){
    return 0;

  }else if( arr.length === 1){
    return arr[0];
  }
  var sum = 0;
  var value = arr.pop();
  sum = sumRec(arr);
  sum += value;

  return sum;

}

sumRec([10,20,30]);

var exp= function(val,power){
  if (power === 0){
    return 1;
  }else if (power === 1){
    return val;
  }

  var result = exp(val, power-1);
  return result*val;

}

exp(2,5);

var expSpecial= function(val,power){
  if (power === 0){
    return 1;
  }else if (power === 1){
    return val;
  }
  var result = 1;
  if (power % 2 === 0){
    result = Math.pow(exp(val, power/2), 2);
  }else{
    result = val*Math.pow(exp(val, (power-1)/2), 2)
  }
  return result;

}

expSpecial(2,5);













var iterFib = function(num){

  if (num === 1){
    return [0];
  }
  else if (num === 2){
    return [0,1];
  }

  var count = 2;
  var result = [0,1];
  while (count < num){
    result.push(result[count-1] + result[count-2]);
    count += 1;
  };
  return result;
};


iterFib(1);
iterFib(2);
iterFib(3);
iterFib(8);


var recFib = function(num){

  if (num === 1){
    return [0];
  }
  else if (num === 2){
    return [0,1];
  }

  var fib = recFib(num-1);
  fib.push(fib[fib.length-1] + fib[fib.length-2]);

  return fib;
};

recFib(8);


var binarySearch = function(array, target){

  if (array.length === 1){
    if (array[0] === target){
      return 0;
    }
    else{
      return NaN;
    }
  }
  var position = 0;
  var mid = Math.floor(array.length/2)

  if (target < array[mid]){
    position = binarySearch(array.slice(0,mid), target)
  }else{
    position = mid + binarySearch(array.slice(mid,array.length), target)
  }

  return position;

};








var makeChange = function(num, denom){

  if(num === 0 ){
    return null;
  }
  else if(num === denom[denom.length-1]){
    return [num];
  }

  var result = [];

  if(num >= denom[0]){
    num -= denom[0];
    result.push(denom[0]);

      if(num < denom[0]){
        denom.shift();
        result = result.concat( makeChange(num, denom) );
      }else{
        result = result.concat(makeChange(num, denom));
      }

  }else{
    denom.shift();
    result = result.concat(makeChange(num, denom));
  }
  return result;
};





















var makeChangeAgain = function(num, denom){
'use strict';
  if(num === 0 ){
    return [];
  }

  var best;
  var result;
  var remainder;
  var coin;

  for(var i = 0; i < denom.length; i++)
  {
    coin = denom[i];

    if (coin > num){continue}

    remainder = num - coin;

    result = [coin];

    result = result.concat(makeChangeAgain(remainder, denom.slice(i)));

    if(!best || best.length > result.length)
    {
      best = result;
    }

  }
  console.log(best);
  return best;

};

makeChangeAgain(14, [10,7,1]);
