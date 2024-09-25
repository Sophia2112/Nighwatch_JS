

module.exports={
    before :function(browser){

        // declraing global timeout
        browser.globals.waitForConditionalTimeout=10000
    },
    "Login": function(browser){
        var login = browser.page.LoginPage();
    //this variable will help in execution of browser
    login                   
    .login()
    .assert.urlContains("/index.php/dashboard")
    },

    "Info": function(browser){
        var Info = browser.page.info();
        Info
        .updatemyinfo("Sophia","Richard")
        .assert.value("@firstname","Sophia")
        
    },
    "Admin":function(browser){
        var Admin =browser.page.admin();
        Admin
        .newAdmin()
        .expect.element("@pass").to.be.qual("@cpass")
    },
    after: function(browser)
    {
        browser.end()
    }
    




}





