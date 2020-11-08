boxL=createSprite(300,600,20,100);
boxR=createSprite(500,600,20,100);
boxB=createSprite(400,640,200,20);
boxL.shapeColor="red"
boxR.shapeColor="red"
boxB.shapeColor="red"

boxLeftBody=Bodies.rectangle(300,600,20,100,{isStatic:true})
World.add(world, boxLeftBody);

boxRightBody=Bodies.rectangle(500,600,20,100,{isStatic:true})
World.add(world, boxRightBody);

boxBottomBody=Bodies.rectangle(400,640,200,20,{isStatic:true})
World.add(world, boxBottomBody);