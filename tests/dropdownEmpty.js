// module.exports={

//     "Purchase_Ticket": function(browser)
//     {
//         browser.url("https://blazedemo.com/");
//         browser.windowMaximize();
//         browser.pause(2000);

//         browser.setValue("body > div.container > form > select:nth-child(1)","Portland");
//         browser.pause(2000);

//         browser.click("body > div.container > form > select:nth-child(4) > option:nth-child(2)");
//         browser.pause(2000);

//         browser.click("body > div.container > form > div > input");
//         browser.pause(2000);

//         browser.click("body > div.container > table > tbody > tr:nth-child(1) > td:nth-child(2) > input");
//         browser.pause(2000);

//         browser.setValue("#inputName","");

//         browser.setValue("#address","");

//         browser.setValue("#city","");

//         browser.setValue("#state","");

//         browser.setValue("#zipCode","");

//         browser.setValue("#cardType","");

//         browser.setValue("#creditCardNumber","");

//         browser.element.find("#creditCardMonth").clear();
//         browser.pause(2000);

//         browser.setValue("#creditCardMonth","");

//         browser.element.find("#creditCardYear").clear();
//         browser.pause(2000);

//         browser.setValue("#creditCardYear","");

//         browser.setValue("#nameOnCard","");

//         browser.pause(1000);

//         browser.click("#rememberMe");
//         browser.pause(2000);

//         browser.assert.not.visible("#inputName");
//         browser.assert.not.visible("#address");
//         browser.assert.not.visible("#city");
//         browser.assert.not.visible("#state");
//         browser.assert.not.visible("#zipCode");
//         browser.assert.not.visible("#cardType");

//         browser.click("body > div.container > form > div:nth-child(12) > div > input");
//         browser.pause(2000);





//     }








// }