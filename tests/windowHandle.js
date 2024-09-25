module.exports={
   
    before :function(browser){

        // declraing global timeout
        browser.globals.waitForCondtionalTimeout=7000
    },

    "Validate Url in New Window" : function(browser){

        browser
        .url("https://the-internet.herokuapp.com/windows")
        .windowMaximize()
        .waitForElementVisible("#content > div > a")
        .click("#content > div > a")
        .pause(2000)
        .windowHandles(function(result) {
            var handle=result.value[1];
            browser.switchWindow(handle);
            
          })
          .assert.urlContains("windows/new")
    },

    "Come back to the new Window" : function(browser){
        browser
        .windowHandles(function(result) {
            var handle=result.value[0];
            browser.switchWindow(handle);
            
          })
          .assert.urlContains("windows")
          .assert.ContainsText("h3","Opening a new window")
    },
    after : function(browser){
        browser.end();
    }

}