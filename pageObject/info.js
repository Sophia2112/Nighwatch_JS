var infoCommand ={
    updatemyinfo : function(firstname,lastname)
    {
        return this.waitForElementVisible("@myinfo")
        .click("@myinfo")
        .clearValue("@firstname")
        .setValue("@firstname",firstname)
        .clearValue("@lastname")
        .setValue("@lastname",lastname)
        .click("@savebutton")
    }
}
module.exports={
   
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    commands: [infoCommand],

    elements:{
        myinfo:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(6) > a"
        },
        firstname:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(1) > div > div > div > div.--name-grouped-field > div:nth-child(1) > div:nth-child(2) > input"
        },
        lastname:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(1) > div > div > div > div.--name-grouped-field > div:nth-child(2) > div:nth-child(2) > input"
        },
        savebutton:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div.oxd-form-actions > button"
        }




    }
}