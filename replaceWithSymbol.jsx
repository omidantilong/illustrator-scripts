var docRef=app.activeDocument;
var symbolNum=prompt("Enter the number of the Symbol you want to replace each selected object",1);
for(i=0;i<docRef.selection.length;i++){
     var currObj=docRef.selection[i];
     var obj_name = currObj.name;
     //console.log(currObj.name);

     var currLeft=currObj.left;
     var currTop=currObj.top;
     var currWidth=currObj.width;
     var currHeight=currObj.height;
     var currInstance=docRef.symbolItems.add(docRef.symbols[symbolNum-1]);
     currInstance.width*=currHeight/currInstance.height;
     currInstance.height=currHeight;
     currInstance.left=currLeft;
     currInstance.top=currTop;
     currInstance.selected=true;
     currInstance.name = currObj.name;
     currObj.remove();
     redraw();
}
