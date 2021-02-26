// Animation On Skills Progess When Reaching 

// Select Skills Selector
let mySkills = document.querySelector('.skills');
// Select Content Ele
let contact = document.querySelector('.contact');
// When Window Scrolling
window.onscroll = function(element) {

    // Gei Offset Top
    let skillsOffsetTop = mySkills.offsetTop;

    // Git Outer Height
    let skillsOuterHeight = mySkills.offsetHeight;

    // Gei Offset Top
    const contactOffsetTop = contact.offsetTop;

    // Git Outer Height
    let contactOuterHeight = contact.offsetHeight;

    // Git Window Height
    let windowHeight = this.innerHeight;

    // Git Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    // If You Reaching To Element
    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight - 100)){
        // Slect The All Skills Progress Spans
        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
        // Loop On All Skills Spans
        allSkills.forEach(skill => {
            // Here We Say The Skill Span Element Is Equal Data Set Of The Paernt Span
            skill.style.width = skill.dataset.progress;
        });

    // Animation On Conatcu When Scolling Reaching  
    // If You Reaching To Element
    if(windowScrollTop > (contactOffsetTop + contactOuterHeight - windowHeight - 250)){
        document.querySelector('.contact form .contact-info input').focus();
        document.querySelector('.contact form .contact-info').classList.add("active");
    };
        
    };

};

// Create Popup With The Image

// Slect All Images In The Gallary [ Div ]
let gallaryImgs = document.querySelectorAll('.gallary img');

// Loop On All Gallary Images
gallaryImgs.forEach(img => {

    // Make SomeThing When The User CliCK On The Image
    img.addEventListener('click', (e) => {
        
        // Craete Overlay
        let overlayEle = document.createElement('div');

        // Add Class On Overlay Element (div)
        overlayEle.className = 'popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(overlayEle);

        // Create The Popup Box
        let popupBox = document.createElement('div');

        // Add Class On The Popup Box
        popupBox.className = 'popup-box';

        // Create The Image Popup Box
        let popupImage = document.createElement('img');

        // Set The Image Source
        popupImage.src = img.src;

        // Add Image To PopupBox
        popupBox.appendChild(popupImage);

        // Append The PopupBox To The Overlay
        document.body.appendChild(popupBox);

        // Check If The Alt Image Attribute Is existed
        if(img.alt !== null){

            // Carete Image Heading
            let imageHeading = document.createElement('h3');

            // Add Text For Heading 
            imageHeading.innerHTML = img.alt; 

            // Append The Heading To The PopupBox
            popupBox.appendChild(imageHeading);
        };

        // Create Close Span
        let closeBtn = document.createElement('span');

        // Add The Text (icon close), On The Close Span
        closeBtn.innerHTML = '<i class="fa fa-window-close"></i>';

        // Add Class To Close Button
        closeBtn.className = 'close-button';

        // Append The Close Button To The PopupBox
        popupBox.appendChild(closeBtn);

    });

});

// Close PopupBox
document.addEventListener('click', function(e) {

    if(e.target.className === 'close-button'){

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Popup Overlay
        document.querySelector('.popup-overlay').remove();

    }else if(e.target.className === 'popup-overlay'){

        // Remove The Current Popup
        document.querySelector('.popup-box').remove();

        // Remove Popup Overlay
        document.querySelector('.popup-overlay').remove();

    };

});


// # # # # # # # # # # # # # # # # 
// Toggle Menu Logic
let toggleBtn = document.querySelector('.toggle-menu'),
    theLinks = document.querySelector('.links');

// When I Clikc On The Toggle Button
toggleBtn.addEventListener('click', function() {

    // Toggle Class (menu-active) on the ToggleBtn
    this.classList.toggle('menu-active');

    // Toggle Class (open) on theLiks
    theLinks.classList.toggle('open');

});

// Close The Menu When I Click On The Document 
// Outside The ( ToggleButton And Menu )
document.addEventListener('click', (e) => {
    
    if (e.target !== toggleBtn && e.target !== theLinks) {
        
        // Chekc If The Menu Is Open
        if (theLinks.classList.contains('open')) {

            // Remove Class (menu-active) From the ToggleBtn
            toggleBtn.classList.remove('menu-active');

            // Remove Class (open) From theLiks
            theLinks.classList.remove('open');

        };

    };

});

// Stop The Propagation On The Mneu
theLinks.onclick = function(e) {
    e.stopPropagation();
}