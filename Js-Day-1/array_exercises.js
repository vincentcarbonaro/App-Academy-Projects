var arr = [1,2,1,3,3]

Array.prototype.myUniq = function(){
    var result = [];
    for(var i = 0; i < this.length; i += 1){
        found = false;
        for(var j = 0; j < result.length; j +=1){
            if (result[j] === this[i]){
                found = true;
            }
        }
        if (found === false){
          result[result.length] = this[i];
        }
    }
    return result;
};




var arry = [-1, 0, 2, -2, 1]

Array.prototype.twoSum = function(){
    var result = [];

    for(var i = 0; i < this.length-1; i += 1){

        for(var j = i+1; j < this.length; j += 1){

            if(this[i] + this[j] === 0){
              result[result.length] = [i,j];
            }
        };
    };
    return result;
};

















var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

Array.prototype.myTranspose = function(){

    var result = [];
    for(var i = 0; i < this.length; i += 1){
      result.push([]);
    }


    for(var i = 0; i < this.length; i += 1){
        for(var j = 0; j < this.length; j += 1){
            result[i][j] = this[j][i];
        }
    }

    return result;
};










var plusOne = function(x) {
    console.log(x+1);
};


var arry = [1,2,3];


Array.prototype.myEach = function(func){

  for(var i = 0; i < this.length; i += 1){
      func(this[i]);

  };

};




arry.myEach(plusOne);






var plusOne = function(x) {

    return x+1;
};


var arry = [1,2,3];


Array.prototype.myMap = function(func){

  var result = [];

  var passFunc = function(el){

    result.push(func(el));
    console.log(result);
  };

  this.myEach(passFunc);

  return result;
};


arry.myMap(plusOne);





var func = function(a, b){
  return a + b;
};


Array.prototype.myInject = function(base, func){

  var passFunc = function(el){
    base = func(base, el);
  };

  this.myEach(passFunc);

  return base;

};

arry = [1,2,3];

arry.myInject(0,func);









Array.prototype.bubbleSort = function(){

  sorted = false;

  while(!sorted){

    sorted = true;

    for(var i = 0; i < this.length-1; i += 1)
    {
      if(this[i] > this[i+1])
      {
          first = this[i];
          second = this[i+1];
          this[i] = second;
          this[i+1] = first;
          sorted = false;
      }

    }

  };

  return this;

};


arry = [5,4,3,2,1];
arry.bubbleSort();

String.prototype.substrings = function(){
  results = [];

  for (var i=0; i<this.length; i ++){
    for(var j=1; j<=this.length-i; j++ ){


        results.push(this.substr(i,j));


    }
  }
  return results.myUniq();
};

"catat".substrings();
