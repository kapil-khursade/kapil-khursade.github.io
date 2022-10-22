let runs = [ 1, 2, 3,"WIDE BALL", 4, 6, "CAUGHT", "BOWLED"];

let score = 0;
let wcikets = 0;
let target = null;
let balls = 10;

// Genrating target
function genrateTarget(x){
    target = Math.ceil(Math.random()*100);
    if(target<20){
        genrateTarget(x) 
    }else{
    x.innerText ="Target is "+ target;
    }
    document.getElementById("shot").style.display="block";
    document.getElementById("balls").innerText=10;
    document.getElementById("score").innerText=00;
    document.getElementById("wk").innerText=0;
}

// playing shot
function playShot(){
    let shot = runs[Math.ceil(Math.random()*10000)%8];
    document.getElementById("curShot").innerText=shot;
    if(shot=="WIDE BALL"){
      score++;
      document.getElementById("score").innerText=score;
    }else if(shot=="CAUGHT"||shot=="BOWLED"){
      wcikets++;
      balls--;
      document.getElementById("wk").innerText=wcikets;
      document.getElementById("balls").innerText=balls;
      if(wcikets==5){
        // game over
        document.getElementById("wk").innerText="Lost";
        document.getElementById("balls").innerText="Lost";
        document.getElementById("curShot").innerText=`Lost By ${target-score} Runs`;
        document.getElementById('target').innerText="Play Again"
        document.getElementById("shot").style.display="none";
        score=0;
        wcikets=0;
        balls=10;
      }
    }else{
        score+=shot;
        document.getElementById("score").innerText=score;
        if(score>target){
            // game won
            document.getElementById("score").innerText="Won";
            document.getElementById("shot").style.display="none";
            document.getElementById("curShot").innerText=`Won By ${5-wcikets} Wickets`;
            document.getElementById('target').innerText="Play Again";
            score=0;
            wcikets=0;
            balls=10;
        }else if(shot==4||shot==6){
            balls++;
            document.getElementById("balls").innerText=balls
        }else{
            balls--;
            if(balls<0){
                document.getElementById("balls").innerText="Lost";
                document.getElementById("shot").style.display="none";
                document.getElementById("curShot").innerText=`Lost By ${target-score} Runs`;
                document.getElementById('target').innerText="Play Again";
                score=0;
                wcikets=0;
                balls=10;
            }else{
                document.getElementById("balls").innerText=balls
            }
        }
    }
}

//playagin
