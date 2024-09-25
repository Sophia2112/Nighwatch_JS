var drag_and_drop=require("html-dnd").codeForSelectors;
module.exports={
    "DragDrop": function(browser){
        browser
        .url("https://the-internet.herokuapp.com/drag_and_drop")
        .windowMaximize()
        .pause(2000)
        .assert.visible("#content > div > h3")
        .execute(drag_and_drop,["#column-a","#column-b"])
        .assert.containsText("#column-a","B")
        .assert.containsText("#column-b","A")
        .pause(5000)
        .saveScreenshot("./tests/screenshots/dragged.png")
        .pause(5000)



        
    }
}