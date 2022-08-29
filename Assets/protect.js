function reveal(subjectLine){ 
    ga('send', 'event', 'buttons', 'email-button', 'show');
    var provider = "gmail";
    var occupation = "composer";
    var text = document.createElement("a");
    var initial = "cgdl";
    var button = document.getElementById("view");
    button.className += " hide";
    text.appendChild(document.createTextNode(initial + occupation + '@' + provider + ".com")); 
    text.href = "mailto:" + initial + occupation + '@' + provider + ".com";
    if (subjectLine != null)
        text.href += ("?subject=" + subjectLine);
    var email = document.getElementById("email");
    email.appendChild(text);
}
    