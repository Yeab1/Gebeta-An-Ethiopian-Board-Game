//Gebeta.js Yeabsira Lemma. July, 2019.
var winner1, gamePlaying, x, pebblesInHand, newPic, scores, activePlayer, arr, arrAll, PonB_sound, PonP_sound, alertAudio;
//make a sound constructor function to make audio objects that can pause and play themselves. 
function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
//initialize important global variables
function init(){
    winner1 = 0;
    winner2 = 0;
    gamePlaying = true;
    x=0;
    pebblesInHand =0;
    scores = [0,0];
    activePlayer = 1;
    arr = [];
    arrAll = [];
    PonB_sound = new sound("Pebble_board_audio.mp3");
    PonP_sound = new sound("pebbles_audio.mp3");
    alertAudio = new sound("alert_audio.mp3");
}init();

//function representing objects that know their picture, picture address, and holeNumber.
var holeClick = function(pic, holeNumber){
    this.owner= 2;
    this.pic = pic;
    this.holeNumber = holeNumber;
    arrAll.push(this);
    this.address = function(newpic){
        document.querySelector('.hole_'+holeNumber+'_pebble').src=newpic;
        this.pic = newpic;
    }
}

//make objects representing every hole and pebbles in hole.
var pebbleDOM = document.querySelector('.hole_1_pebble');
var String = pebbleDOM.src;
var string2 = String.split('/');
var picScore = string2[string2.length-1];
var hole_1_click = new holeClick(picScore,1);

pebbleDOM = document.querySelector('.hole_2_pebble');
var String2 = pebbleDOM.src;
string2 = String2.split('/');
picScore = string2[string2.length-1];
var hole_2_click = new holeClick(picScore, 2);

pebbleDOM = document.querySelector('.hole_3_pebble');
var String3 = pebbleDOM.src;
string2 = String3.split('/');
picScore = string2[string2.length-1];
var hole_3_click = new holeClick(picScore, 3);

pebbleDOM = document.querySelector('.hole_4_pebble');
var String4 = pebbleDOM.src;
string2 = String4.split('/');
picScore = string2[string2.length-1];
var hole_4_click = new holeClick(picScore, 4);

pebbleDOM = document.querySelector('.hole_5_pebble');
var String5 = pebbleDOM.src;
string2 = String5.split('/');
picScore = string2[string2.length-1];
var hole_5_click = new holeClick(picScore, 5);

pebbleDOM = document.querySelector('.hole_6_pebble');
var String6 = pebbleDOM.src;
string2 = String6.split('/');
picScore = string2[string2.length-1];
var hole_6_click = new holeClick(picScore, 6);

pebbleDOM = document.querySelector('.hole_7_pebble');
var String7 = pebbleDOM.src;
string2 = String7.split('/');
picScore = string2[string2.length-1];
var hole_7_click = new holeClick(picScore, 7);

pebbleDOM = document.querySelector('.hole_8_pebble');
var String8 = pebbleDOM.src;
string2 = String8.split('/');
picScore = string2[string2.length-1];
var hole_8_click = new holeClick(picScore, 8);

pebbleDOM = document.querySelector('.hole_9_pebble');
var String9 = pebbleDOM.src;
string2 = String9.split('/');
picScore = string2[string2.length-1];
var hole_9_click = new holeClick(picScore, 9);

pebbleDOM = document.querySelector('.hole_10_pebble');
var String10 = pebbleDOM.src;
string2 = String10.split('/');
picScore = string2[string2.length-1];
var hole_10_click = new holeClick(picScore, 10);

pebbleDOM = document.querySelector('.hole_11_pebble');
var String11 = pebbleDOM.src;
string2 = String11.split('/');
picScore = string2[string2.length-1];
var hole_11_click = new holeClick(picScore, 11);

pebbleDOM = document.querySelector('.hole_12_pebble');
var String12 = pebbleDOM.src;
string2 = String12.split('/');
picScore = string2[string2.length-1];
var hole_12_click = new holeClick(picScore, 12);


//connect event clickers with the objects and call the mainframe function of the game below.
function event(){
    document.querySelector('.hole1').addEventListener('click', function(){
        game(hole_1_click);
        return 'hole_1_click';
    });
    document.querySelector('.hole2').addEventListener('click', function(){
        game(hole_2_click);
        return 'hole_2_click';
    });
    document.querySelector('.hole3').addEventListener('click', function(){
        game(hole_3_click);
        return 'hole_3_click';
    });
    document.querySelector('.hole4').addEventListener('click', function(){
        game(hole_4_click);
        return 'hole_4_click';
    });
    document.querySelector('.hole5').addEventListener('click', function(){
        game(hole_5_click);
        return 'hole_5_click';
    });

    document.querySelector('.hole6').addEventListener('click', function(){
        game(hole_6_click);
        return 'hole_6_click';
    });
    document.querySelector('.hole7').addEventListener('click', function(){
        game(hole_7_click);
        return 'hole_7_click';
    });
    document.querySelector('.hole8').addEventListener('click', function(){
        game(hole_8_click);
        return 'hole_8_click';
    });
    document.querySelector('.hole9').addEventListener('click', function(){
        game(hole_9_click);
        return 'hole_9_click';
    });
    document.querySelector('.hole10').addEventListener('click', function(){
        game(hole_10_click);
        return 'hole_10_click';
    });
    document.querySelector('.hole11').addEventListener('click', function(){
        game(hole_11_click);
        return 'hole_11_click';
    });
    document.querySelector('.hole12').addEventListener('click', function(){
        game(hole_12_click);
        return 'hole_12_click';
    });
    document.querySelector('.hole_1_pebble').addEventListener('click', function(){
        game(hole_1_click);
        return 'hole_1_click';
    });
    document.querySelector('.hole_2_pebble').addEventListener('click', function(){
        game(hole_2_click);
        return 'hole_2_click';
    });
    document.querySelector('.hole_3_pebble').addEventListener('click', function(){
        game(hole_3_click);
        return 'hole_3_click';
    });
    document.querySelector('.hole_4_pebble').addEventListener('click', function(){
        game(hole_4_click);
        return 'hole_4_click';
    });
    document.querySelector('.hole_5_pebble').addEventListener('click', function(){
        game(hole_5_click);
        return 'hole_5_click';
    });

    document.querySelector('.hole_6_pebble').addEventListener('click', function(){
        game(hole_6_click);
        return 'hole_6_click';
    });
    document.querySelector('.hole_7_pebble').addEventListener('click', function(){
        game(hole_7_click);
        return 'hole_7_click';
    });
    document.querySelector('.hole_8_pebble').addEventListener('click', function(){
        game(hole_8_click);
        return 'hole_8_click';
    });
    document.querySelector('.hole_9_pebble').addEventListener('click', function(){
        game(hole_9_click);
        return 'hole_9_click';
    });
    document.querySelector('.hole_10_pebble').addEventListener('click', function(){
        game(hole_10_click);
        return 'hole_10_click';
    });
    document.querySelector('.hole_11_pebble').addEventListener('click', function(){
        game(hole_11_click);
        return 'hole_11_click';
    });
    document.querySelector('.hole_12_pebble').addEventListener('click', function(){
        game(hole_12_click);
        return 'hole_12_click';
    });
    document.querySelector('.replay_btn').addEventListener('click', function(){
        window.location.reload();
    })
}event();

//main game function.
//input: an object of type holeClick.
var game = function(holeclick){
        if(gamePlaying){ 
            hole_7_click.owner = 0;
            arr.push(hole_7_click);
            
            //get the number of pebbles in holeclick from the name of image on it.
            var string = holeclick.pic.split('.');
            var holePic = string[0].split('_');
            var holeValue = holePic[1]*1;
            var notActive;
            activePlayer === 0? notActive = 1:notActive = 0;
            //introduce the main rules of the game.
                if(pebblesInHand === 1 && holeclick.owner === activePlayer){
                    add(holeclick, holeValue);
                    nextPlayer();
                }else if (pebblesInHand ===1 &&holeclick.owner === notActive){
                    scores[activePlayer] += 2;
                    holeValue-=1;
                    newPic = "pebbles_"+holeValue+".png";
                    holeclick.address(newPic);
                    PonP_sound.play();
                    document.querySelector('.side_hole_pebbles_'+activePlayer).src = 'pebbles_'+scores[activePlayer]+'.png';
                    document.querySelector('.hand_pebbles').src = 'pebbles_0.png';
                    pebblesInHand = 0;
                }else if (pebblesInHand ===0){
                    pick(holeclick, holeValue);
                }else{
                    add(holeclick, holeValue);
                }
            
                if ((holeValue)===0&&pebblesInHand === 0){
                    pebblesInHand+=1;
                    newPic = 'pebbles_'+pebblesInHand+'.png';
                    holeclick.address(newPic);
                    nextPlayer();  
                }
            endGame(holeclick);
        }else{
            console.log('Game Over');
        }  
}  

//change active player.
function nextPlayer(){
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    alertAudio.play();
    pebblesInHand = 0;
    document.querySelector('.hand_pebbles').src = 'pebbles_'+pebblesInHand+'.png';

    activePlayer === 0? activePlayer=1: activePlayer = 0;
    x = 0;
}

//take all pebbles in a hole.
function pick(holeclick, holeValue){
    //put the pebbles in hand if hand was empty.
    pebblesInHand = holeValue;
    //update the GUI.
    newPic = 'pebbles_0.png';
    holeclick.address(newPic);
    document.querySelector('.hand_pebbles').src = 'pebbles_'+pebblesInHand+'.png';
    takePebbles(holeValue, holeclick);
    val = holeValue;
    PonP_sound.play();
}

//drop one pebble in the clicked hole.
function add(holeclick, holeValue){
    //update the value of the hole then the GUI with it.
    if(holeValue === 0){
        PonB_sound.play();
    }else{
        PonP_sound.play();
    }
    holeValue+=1;
    newPic = 'pebbles_'+holeValue+'.png';
    holeclick.address(newPic);
    //update the pebbles in hand.
    pebblesInHand-=1;
    document.querySelector('.hand_pebbles').src = 'pebbles_'+pebblesInHand+'.png';
    takePebbles(holeValue, holeclick);
}

//take pebbles into the side holes if necessary. 
function takePebbles(holeValue, holeclick){
    if (holeValue === 4&&x>0&&pebblesInHand === 0){
        PonP_sound.play();        
        holeclick.owner = activePlayer;
        arr.push(holeclick);
        document.querySelector('.hand_pebbles').src = 'pebbles_'+pebblesInHand+'.png';
        nextPlayer();
    }
    x+=1;  
}

//update the GUI to show the end of the game, and stop the game.
function winner(AP){
    if(AP===2){
        document.getElementById('name-0').textContent = 'DRAW';
        document.getElementById('name-1').textContent = 'DRAW';
        gamePlaying = false;
        alertAudio.play();
        document.querySelector('.winner_'+AP).style.display = "block";
        console.log('refresh the page to play again!');
        document.querySelector('.replay_btn').style.display = "block";
        document.querySelector('.reload').style.display = "none";
        
    }else{
        document.getElementById('name-'+AP).textContent = 'WINNER';
        document.querySelector('.player-'+AP+'-panel').classList.remove('active');
        document.querySelector('.player-'+AP+'-panel').classList.add('winner');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.winner_'+AP).style.display = "block";
        gamePlaying = false;
        alertAudio.play();
        console.log('refresh the page to play again!');
        document.querySelector('.replay_btn').style.display = "block";
        document.querySelector('.reload').style.display = "none";

    }
}

//make an obj that has all the objects.
var allClicks = {
    //input: an integer "num" (from 1 to 12) indicating the 12 hole clicks.
    //return: a holeclick object based on num.
    click: function(num){
        if(num === 1){return hole_1_click;}
        else if(num === 2){return hole_2_click;}
        else if(num === 3){return hole_3_click;}
        else if(num === 4){return hole_4_click;}
        else if(num === 5){return hole_5_click;}
        else if(num === 6){return hole_6_click;}
        else if(num === 7){return hole_7_click;}
        else if(num === 8){return hole_8_click;}
        else if(num === 9){return hole_9_click;}
        else if(num === 10){return hole_10_click;}
        else if(num === 11){return hole_11_click;}
        else if(num === 12){return hole_12_click;}
    }
}

//check if the game should end.
function endGame(){
    var y, p, z, hello, hello2, holepic, hole, name, count, P1array, P2array;
    P1array= 0;
    for(var i = 1; i<13; i++){
        y = document.querySelector('.hole_'+i+'_pebble').src;
        p = y.split('/');
        z = p[p.length-1];
        hello = z.split('.');
        holepic = hello[0].split('_');
        hole = holepic[1]*1;
        var truth1 = true;
        truth1 = arr.includes(allClicks.click(i));
        if(truth1){
            P1array+=1;
        }
        if(hole === 0 && !truth1){
            winner1+=1;
        }else if(!truth1){
            
        }
        else if(!truth1 && hole !== 0){
            winner1 = 0;
        }
    }
    //compare the scores if the game should end.
    if (winner1 >= 12-P1array&& pebblesInHand===0){
        compareScores();
    }
    winner1 = 0;
}
//find the winner based on the number of pebbles in their respective holes.
function compareScores(){
    var P1Score = 0;
    var P2Score = 0;
    var holeOwner,y,p,z,hello,holepic,hole;
    
    for(var i = 0; i<arrAll.length; i++){
        holeOwner = arrAll[i].owner;
        if(holeOwner === 0){
            y = arr[i].pic;
            hello = y.split('_');
            holepic = hello[1].split('.');
            hole = holepic[0]*1;
            P1Score += hole;
        }else if(holeOwner === 1){
            y = arr[i].pic;
            hello = y.split('_');
            holepic = hello[1].split('.');
            hole = holepic[0]*1;
            P2Score += hole; 
        }else{}
    }   
    
    var p1s = document.querySelector('.side_hole_pebbles_'+0).src;
    p = p1s.split('/');
    z = p[p.length-1];
    hello = z.split('_');
    holepic = hello[1].split('.');
    hole = holepic[0]*1;
    P1Score+=hole;
    
    var p2s = document.querySelector('.side_hole_pebbles_'+1).src;
    p = p2s.split('/');
    z = p[p.length-1];
    hello = z.split('_');
    holepic = hello[1].split('.');
    hole = holepic[0]*1;
    P2Score+=hole;
        
        console.log('Player one had '+ P1Score+' pebbles.');
        console.log('Player two had '+ P2Score+' pebbles.');
        
        if(P1Score>P2Score){
            winner(0);
        }else if(P2Score>P1Score){
            winner(1);
        }else{
            winner(2);
        }
}