var Xpos = -136; 
var Ypos = 333;
var draw = function() {
   
   background(0, 0, 0);

var x = 0;
//road
var road = getImage("cute/PlainBlock");
while(x < 400) {
        image(road, x,323,31,78); 
x += 3;
}

//buildings
fill(168, 102, 59);
rect(0,345,122,-225);
rect(340,108,59,252);

//Apartment Building
fill(82, 78, 72);
rect(57, 5, 288, 361);
 
//windows
for ( var i = 72;i < 321; i +=46){
fill  (255, 242, 0);
rect(i, 38,23,23);
}
for ( var i = 72;i < 321; i +=46){
fill  (255, 242, 0);
rect(i, 80,23,23);
}
for ( var i = 72;i < 321; i +=46){
fill  (255, 242, 0);
rect(i, 120,23,23);
}

for ( var i = 72;i < 321; i +=46){
fill  (255, 242, 0);
rect(i, 160,23,23);
}
for ( var i = 72;i < 321; i +=46){
fill  (255, 242, 0);
rect(i, 200,23,23);
}
for ( var i = 72;i < 321; i +=46){
fill  (255, 242, 0);
rect(i, 240,23,23);
}
//door
fill(148, 0, 0);
rect(169,316,61,48);
line(200, 367, 200, 314);
fill(0, 0, 0);
ellipse(195,342,4,4);
ellipse(206,342,4,4);
    fill(173, 173, 173);
    rect (Xpos,Ypos,80,50); 
    rect(Xpos+80,Ypos + 12,28,38);
    fill(0, 0, 0);
    ellipse(Xpos -3,Ypos +48,23,23);
    ellipse(Xpos +78,Ypos +50,23,23);
    fill(237, 255, 97);
    rect(Xpos +53, Ypos + 5, 18,18);
Xpos +=1;
};
