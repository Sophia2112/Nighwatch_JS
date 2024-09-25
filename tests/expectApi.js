module.exports={
    "Expect": function(browser)
    {
        browser.url("https://www.saucedemo.com/");
        browser.windowMaximize();
        browser.pause(5000);
        browser.setValue("#user-name","standard_user");
        
        browser.expect.element("#user-name").to.have.value.that.equals("standard_user");
        browser.pause(2000);
        
        browser.setValue("#password","secret_sauce");
        browser.expect.element("#password").to.have.value.that.equals("secret_sauce");
        browser.pause(2000);
        
        browser.click("#login-button");
        browser.pause(5000);

        browser.expect.element("#header_container > div.primary_header > div.header_label > div").text.to.contains("Swag Labs");
        browser.pause(2000);

        // browser.expect.element("#header_container > div.header_secondary_container > span").to.have.value.that.equals("Products");
        // browser.pause(2000);
        
        browser.saveScreenshot("./tests/screenshots/Login.png");
        browser.pause(5000);

        browser.click("#add-to-cart-sauce-labs-backpack");
       // browser.expect.element("#shopping_cart_container > a").to.be.visible
        browser.click("#shopping_cart_container > a");
        browser.expect.title().to.contain("Cart");
        browser.pause(5000);

        // browser.saveScreenshot("./tests/screenshots/Cart.png");
        // browser.pause(2000);


        // // browser.expect.element("#header_container > div.header_secondary_container > span").to.have.value.which.not.contains("Products");
        // browser.expect.element("#header_container > div.header_secondary_container > span").text.to.contain("Your Cart");
        // browser.pause("5000");

        // browser.click("#checkout");

        // browser.pause(5000);

        // browser.expect.element("#header_container > div.header_secondary_container > span").text.to.endWith("Your Information");

        // browser.pause(2000);

        // browser.setValue("#first-name","sophia");
        // browser.setValue("#last-name","richard");
        // browser.setValue("#postal-code","221002");
        // browser.click("#continue");
        // browser.pause(10000);


        // browser.expect.element("#header_container > div.header_secondary_container > span").text.to.contain("Overview");
        // browser.pause(10000);

        // browser.saveScreenshot("./tests/screenshots/Order.png");
        // browser.pause(10000); 


        // browser.click("#finish");
        // browser.expect.element("#header_container > div.header_secondary_container > span").to.be.visible

        // browser.pause(10000);

        // browser.saveScreenshot("./tests/screenshots/Complete.png");
        // browser.pause(10000);


    }   

}