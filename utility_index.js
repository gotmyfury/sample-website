document.addEventListener('DOMContentLoaded', function() { buttonMenuOptions_MainMenu(); }, false);

function buttonMenuOptions_Refresh() {
    // idMenuOptionsN
    document.getElementById("buttonMenuOptions0").innerHTML = "";
    document.getElementById("imageMenuBullet0a").src = "./assets/bullet_Empty.png";
    document.getElementById("imageMenuBullet0b").src = "./assets/bullet_Empty.png";
    var arrayButtonMenuOptions = ["buttonMenuOptions1","buttonMenuOptions2","buttonMenuOptions3","buttonMenuOptions4","buttonMenuOptions5","buttonMenuOptions6","buttonMenuOptions7","buttonMenuOptions8","buttonMenuOptions9","buttonMenuOptions10","buttonMenuOptions11","buttonMenuOptions12","buttonMenuOptions13","buttonMenuOptions14","buttonMenuOptions15","buttonMenuOptions16"];
    arrayButtonMenuOptions.forEach(Element => {document.getElementById(Element).innerHTML = "";})
    arrayButtonMenuOptions.forEach(Element => {document.getElementById(Element).onclick = null;})
    var arrayImageMenuOptions = ["imageMenuBullet1","imageMenuBullet2","imageMenuBullet3","imageMenuBullet4","imageMenuBullet5","imageMenuBullet6","imageMenuBullet7","imageMenuBullet8","imageMenuBullet9","imageMenuBullet10","imageMenuBullet11","imageMenuBullet12","imageMenuBullet13","imageMenuBullet14","imageMenuBullet15","imageMenuBullet16"];
    arrayImageMenuOptions.forEach(Element => {document.getElementById(Element).src = "./assets/bullet_Empty.png";})
}

function buttonMenuOptions_MainMenu() {
    buttonMenuOptions_Refresh();

    // buttonMenuOptions0
    document.getElementById("buttonMenuOptions0").innerHTML = "Main Menu";
    document.getElementById("imageMenuBullet0a").src = "./assets/bullet_Tilde.png";
    document.getElementById("imageMenuBullet0b").src = "./assets/bullet_Tilde.png";

    // buttonMenuOptions1
    document.getElementById("imageMenuBullet1").src = "./assets/bullet_Square.png";
    document.getElementById("buttonMenuOptions1").innerHTML = "Biography";
    document.getElementById("buttonMenuOptions1").onclick = buttonMenuOptions_Biography;
    // buttonMenuOptions2
    document.getElementById("imageMenuBullet2").src = "./assets/bullet_Rows.png";
    document.getElementById("buttonMenuOptions2").innerHTML = "Projects";
    document.getElementById("buttonMenuOptions2").onclick = buttonMenuOptions_Projects;
    // buttonMenuOptions3
    document.getElementById("imageMenuBullet3").src = "./assets/bullet_Rows.png";
    document.getElementById("buttonMenuOptions3").innerHTML = "Other Stuff";
    document.getElementById("buttonMenuOptions3").onclick = buttonMenuOptions_OtherStuff;

    //hide everything but main menu
    document.getElementById("divBiography").style.marginTop = "200%";
    document.getElementById("divMainMenu").style.marginTop = "0%";

}

document.getElementById("buttonMenuBiographyExit").onclick = buttonMenuOptions_MainMenu;
function buttonMenuOptions_Biography() {
    buttonMenuOptions_Refresh();

    // buttonMenuOptions0
    document.getElementById("buttonMenuOptions0").innerHTML = "Biography";
    document.getElementById("imageMenuBullet0a").src = "./assets/bullet_Tilde.png";
    document.getElementById("imageMenuBullet0b").src = "./assets/bullet_Tilde.png";

    // idMenuOptions1
    document.getElementById("imageMenuBullet1").src = "./assets/bullet_Square.png";
    document.getElementById("buttonMenuOptions1").innerHTML = "Yay...";
    document.getElementById("buttonMenuOptions1").onclick = buttonMenuOptions_MainMenu;
    // hide the main menu
    document.getElementById("divMainMenu").style.marginTop = "200%";
    document.getElementById("divBiography").style.marginTop = "0%";
    
}

function buttonMenuOptions_Projects() {
    buttonMenuOptions_Refresh();

    // buttonMenuOptions0
    document.getElementById("buttonMenuOptions0").innerHTML = "Projects";
    document.getElementById("imageMenuBullet0a").src = "./assets/bullet_Tilde.png";
    document.getElementById("imageMenuBullet0b").src = "./assets/bullet_Tilde.png";

    // idMenuOptions1
    document.getElementById("imageMenuBullet1").src = "./assets/bullet_Diamond.png";
    document.getElementById("buttonMenuOptions1").innerHTML = "Songs";
    document.getElementById("buttonMenuOptions1").onclick = optionsProjects_Songs;
    // idMenuOptions2
    document.getElementById("imageMenuBullet2").src = "./assets/bullet_Diamond.png";
    document.getElementById("buttonMenuOptions2").innerHTML = "Literatures";
    document.getElementById("buttonMenuOptions2").onclick = optionsProjects_Literatures;
    // idMenuOptions3
    document.getElementById("imageMenuBullet3").src = "./assets/bullet_Diamond.png";
    document.getElementById("buttonMenuOptions3").innerHTML = "Arts";
    document.getElementById("buttonMenuOptions3").onclick = null;
    // idMenuOptions9
    document.getElementById("imageMenuBullet9").src = "./assets/bullet_Rows.png";
    document.getElementById("buttonMenuOptions9").innerHTML = "School Projects";
    document.getElementById("buttonMenuOptions9").onclick = buttonMenuOptions_SchoolProjects;

    // idMenuOptions16
    document.getElementById("imageMenuBullet16").src = "./assets/bullet_Cross.png";
    document.getElementById("buttonMenuOptions16").innerHTML = "Back";
    document.getElementById("buttonMenuOptions16").onclick = buttonMenuOptions_MainMenu;
}

function buttonMenuOptions_SchoolProjects() {
    buttonMenuOptions_Refresh();

    // buttonMenuOptions0
    document.getElementById("buttonMenuOptions0").innerHTML = "School Projects";
    document.getElementById("imageMenuBullet0a").src = "./assets/bullet_Tilde.png";
    document.getElementById("imageMenuBullet0b").src = "./assets/bullet_Tilde.png";

    // idMenuOptions1
    document.getElementById("imageMenuBullet1").src = "./assets/bullet_Diamond.png";
    document.getElementById("buttonMenuOptions1").innerHTML = "History of Malware";
    document.getElementById("buttonMenuOptions1").onclick = function () { location.href = "./history_of_malware.html"};

    // idMenuOptions16
    document.getElementById("imageMenuBullet16").src = "./assets/bullet_Cross.png";
    document.getElementById("buttonMenuOptions16").innerHTML = "Back";
    document.getElementById("buttonMenuOptions16").onclick = buttonMenuOptions_Projects;
}

function optionsProjects_Songs() {
    window.open("https://gotmyfury.newgrounds.com/audio");
}
function optionsProjects_Literatures() {
    window.open("https://www.wattpad.com/user/gotmyfury");
}

function buttonMenuOptions_OtherStuff() {
    buttonMenuOptions_Refresh();

    // buttonMenuOptions0
    document.getElementById("buttonMenuOptions0").innerHTML = "Meow";
    document.getElementById("imageMenuBullet0a").src = "./assets/bullet_Tilde.png";
    document.getElementById("imageMenuBullet0b").src = "./assets/bullet_Tilde.png";

    // idMenuOptions1
    document.getElementById("imageMenuBullet1").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions1").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions1").onclick = null;
    // idMenuOptions2
    document.getElementById("imageMenuBullet2").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions2").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions2").onclick = null;
    // idMenuOptions3
    document.getElementById("imageMenuBullet3").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions3").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions3").onclick = null;
    // idMenuOptions4
    document.getElementById("imageMenuBullet4").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions4").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions4").onclick = null;
    // idMenuOptions5
    document.getElementById("imageMenuBullet5").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions5").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions5").onclick = null;
    // idMenuOptions6
    document.getElementById("imageMenuBullet6").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions6").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions6").onclick = null;
    // idMenuOptions7
    document.getElementById("imageMenuBullet7").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions7").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions7").onclick = null;
    // idMenuOptions8
    document.getElementById("imageMenuBullet8").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions8").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions8").onclick = null;
    // idMenuOptions9
    document.getElementById("imageMenuBullet9").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions9").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions9").onclick = null;
    // idMenuOptions10
    document.getElementById("imageMenuBullet10").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions10").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions10").onclick = null;
    // idMenuOptions11
    document.getElementById("imageMenuBullet11").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions11").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions11").onclick = null;
    // idMenuOptions12
    document.getElementById("imageMenuBullet12").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions12").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions12").onclick = null;
    // idMenuOptions13
    document.getElementById("imageMenuBullet13").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions13").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions13").onclick = null;
    // idMenuOptions14
    document.getElementById("imageMenuBullet14").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions14").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions14").onclick = null;
    // idMenuOptions15
    document.getElementById("imageMenuBullet15").src = "./assets/bullet_CircleA.png";
    document.getElementById("buttonMenuOptions15").innerHTML = "Meow";
    document.getElementById("buttonMenuOptions15").onclick = null;

    // idMenuOptions16
    document.getElementById("imageMenuBullet16").src = "./assets/bullet_Cross.png";
    document.getElementById("buttonMenuOptions16").innerHTML = "Back";
    document.getElementById("buttonMenuOptions16").onclick = buttonMenuOptions_MainMenu;
}

function buttonMenuOptions_Sample() {
    buttonMenuOptions_Refresh();

    // buttonMenuOptions0
    document.getElementById("buttonMenuOptions0").innerHTML = "Sample";
    document.getElementById("imageMenuBullet0a").src = "./assets/bullet_Tilde.png";
    document.getElementById("imageMenuBullet0b").src = "./assets/bullet_Tilde.png";

    // idMenuOptions1
    document.getElementById("imageMenuBullet1").src = "./assets/bullet_CircleB.png";
    document.getElementById("buttonMenuOptions1").innerHTML = "Sample";
    document.getElementById("buttonMenuOptions1").onclick = null;

    // idMenuOptions16
    document.getElementById("imageMenuBullet16").src = "./assets/bullet_Cross.png";
    document.getElementById("buttonMenuOptions16").innerHTML = "Back";
    document.getElementById("buttonMenuOptions16").onclick = buttonMenuOptions_MainMenu;
}
