function Passenger(myname, mypclass, mysex, myage, mysibsp, myparch, myfare, myembarked, mysurvived){
  this.name = myname;
  this.pclass = mypclass;
  this.sex = mysex;
  this.age = myage;
  this.sibsp = mysibsp;
  this.parch = myparch;
  this.fare = myfare;
  this.embarked = myembarked;
  this.survived = mysurvived;
  ourPrediction = 0;
}
var passArr = [];
for (obj in titanictrain){
  passArr.push(new Passenger(titanictrain[obj].name, titanictrain[obj].pclass, titanictrain[obj].sex, titanictrain[obj].age, titanictrain[obj].sibsp, titanictrain[obj].parch, titanictrain[obj].fare, titanictrain[obj].embarked, titanictrain[obj].survived))
}
console.log(passArr);

function twovar(pass){
  if (pass.sex == 0 & (pass.pclass == 1 || pass.pclass == 2)){
    pass.ourPrediction = 1;
  }
  else{
    pass.ourPrediction = 0;
  }
}

function onevar(pass){
  if (pass.sex == 1){
    pass.ourPrediction = 0;
  }
  else{
    pass.ourPrediction = 1;
  }
}


function threevar(pass){
  if (pass.sex == 0 && pass.pclass == 1){
    var random = Math.random();
    if (random < 0.048){
      pass.ourPrediction = 0;
    }
    else{
      pass.ourPrediction = 1;
    }
  }
  else if(pass.sex == 0 && pass.pclass == 2){
    var random = Math.random();
    if (random < 0.093){
      pass.ourPrediction = 0;
    }
    else{
      pass.ourPrediction = 1;
    }
  }
  else if(pass.sex == 0 && pass.pclass == 3){
    var random = Math.random();
    if (random < 0.514){
      pass.ourPrediction = 0;
    }
    else{
      pass.ourPrediction = 1;
    }
  }
  else if(pass.sex == 1 && pass.pclass == 1){
      pass.ourPrediction = 1;
    }
    else{
      pass.ourPrediction = 0;
    }
}
function myGuess(pass){
  if (pass.sibsp + pass.parch > 1 && pass.sibsp + pass.parch < 5){
    pass.ourPrediction = 1;
  }
  else if (pass.sex == 0){
    pass.ourPrediction = 1;
  }
  else pass.ourPrediction = 0;
}
function test(titanictrain){
  var score = 0;
  for (obj in titanictrain){
    myGuess(titanictrain[obj]);
    }
  for (obj in titanictrain){
    if (titanictrain[obj].ourPrediction == titanictrain[obj].survived)
      score++;
  }
  console.log("score = " + score);
  console.log("accuracy = " + score / (titanictrain.length));
}
