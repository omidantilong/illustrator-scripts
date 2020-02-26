function test(search) {

//console.log(app.activeDocument.layers)

  for(var i =0;i<app.activeDocument.pageItems.length;i++) {
    var item = app.activeDocument.pageItems[i]
    item.selected = false
    if(item.name !== '') {
      if(item.name.indexOf(search) > -1) {
        item.selected = true
        //alert(item.name)
        break;

      }
    }
    //console.log()

  }



}

var dialog = new Window("dialog");
    dialog.text = "Layer Name";
    dialog.preferredSize.width = 400;
    dialog.preferredSize.height = 100;
    dialog.orientation = "column";
    dialog.alignChildren = ["center","top"];
    dialog.spacing = 10;
    dialog.margins = 16;

var statictext1 = dialog.add("statictext", undefined, undefined, {name: "statictext1"});
    statictext1.text = "Search for a layer by name:";
    statictext1.justify = "center";

var edittext1 = dialog.add('edittext {properties: {name: "edittext1"}}');
    edittext1.preferredSize.width = 200;
    edittext1.preferredSize.height = 20;

var button1 = dialog.add("button", undefined, undefined, {name: "button1"});
    button1.text = "Search";

button1.onClick = function() {
  test(edittext1.text)
  dialog.hide()
}

dialog.show()
