var loginCommand = {
    login: function()
    {
        return this.navigate()
        .waitForElementVisible("@username")
        .setValue("@username","Admin")
        .waitForElementVisible("@password")
        .setValue("@password","admin123")
        .click("@loginButton")

    }
}
module.exports={

url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
commands: [loginCommand],
elements: {
    username:{
        selector: "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input",
    },
    password: {
        selector: "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input",
    },
    loginButton:{
        selector:"#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button",
    }





}



}