const setUp = () => {
  g.clear();
  g.setFontAlign(0,0);
  g.setFont("6x8",3);
  g.setColor("#ffffff");
};

const makeBox = () => {
  Bangle.beep();
  Bangle.buzz();
  g.drawString('PUSH BUTTON 1', g.getWidth()/2, g.getHeight()/2);
  g.drawString('THEN', g.getWidth()/2, g.getHeight()/2+30);
  g.drawString('PUSH AGAIN', g.getWidth()/2, g.getHeight()/2+60);
  g.drawString('OR TAP', g.getWidth()/2, g.getHeight()/2+90);
  setWatch(() => {
    drawAsset();
  }, BTN1, {repeat:true});
};

const getRandomSize = () => {
  return Math.floor(Math.random()*200)+50;
};

const getRandomColor = () => {
  return `#${(Math.floor(Math.random()*15777215)+1000000).toString(16)}`;
};

const drawAsset = () => {
  var randomSize = getRandomSize();
  var screenWidth = g.getWidth();
  var screenHeight = g.getHeight();

  var x1 = (screenWidth/2) - (randomSize/2);
  var y1 = (screenHeight/2) + (randomSize/2);
  var x2 = (screenWidth/2) + (randomSize/2);
  var y2 = (screenHeight/2) - (randomSize/2);

  g.clear();
  g.setFontAlign(0,0);
  g.setFont("6x8",3);
  g.setColor(getRandomColor());
  g.fillRect(x1, y1, x2, y2);
  Bangle.on('touch', function(button) { 
    g.clear();
    g.setColor(getRandomColor());
    g.fillRect(x1, y1, x2, y2);
  });
};

setUp();
makeBox();