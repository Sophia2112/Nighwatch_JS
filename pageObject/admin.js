const { commands } = require("./info")

var adminCommand={
    newAdmin: function(browser){
        return this.navigate()
        .click("@add")
        .click("@admin")
        .setValue("@admin","Admin")
        .click("@status")
        .setValue("status","Enabled")
        .click("@name")
        .setValue("@name","Sophia Richard")
        .setValue("@uname","Sophia21")
        .setValue("@pass","Sophia@123")
        .setValue("@cpass","Sophia@123")
        .click("@save")

    }
}

module.exports={

    url:"https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    commands: [adminCommand],
    elements:{
        add:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button"
        },
        admin:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div"
            
        },
        status:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(3) > div > div:nth-child(2) > div > div"
        },
        name:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input"
        },
        uname:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input"
        },
        pass:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input"
        },
        cpass:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input"
        },
        save:{
            selector:"#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space"
        }

    }






}