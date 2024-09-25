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

//         browser.setValue("#inputName","Sophia Richard");

//         browser.setValue("#address","Bhikaripur");

//         browser.setValue("#city","Varanasi");

//         browser.setValue("#state","Uttar Pradesh");

//         browser.setValue("#zipCode","221005");

//         browser.setValue("#cardType","amex");

//         browser.setValue("#creditCardNumber","1234567890");

//         browser.element.find("#creditCardMonth").clear();
//         browser.pause(2000);

//         browser.setValue("#creditCardMonth","12");

//         browser.element.find("#creditCardYear").clear();
//         browser.pause(2000);

//         browser.setValue("#creditCardYear","2028");

//         browser.setValue("#nameOnCard","Richard");

//         browser.pause(1000);

//         browser.click("#rememberMe");
//         browser.pause(2000);

//         browser.click("body > div.container > form > div:nth-child(12) > div > input");
//         browser.pause(2000);

//         browser.saveScreenshot("./tests/screenshots/ticketPurchase.png");
//         browser.pause(2000);





//     }








// }