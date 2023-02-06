/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.onload = function(){
		
    var oMessageBox = document.getElementById("messageBox");
    var oInput = document.getElementById("myInput");
    var oPostBtn = document.getElementById("doPost");
    
    oPostBtn.onclick = function(){
        if(oInput.value){
            //寫入發表留言的時間
            var oTime = document.createElement("div");
            oTime.className = "time";
            var myDate = new  Date();
            oTime.innerHTML = myDate.toLocaleString();
            oMessageBox.appendChild(oTime);
            
            //寫入留言內容
            var oMessageContent = document.createElement("div");
            oMessageContent.className = "message_content";
            oMessageContent.innerHTML = oInput.value;
            oInput.value = "";
            oMessageBox.appendChild(oMessageContent);
        }
        
    }
    
}