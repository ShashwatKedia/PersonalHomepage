
let divider_home = document.getElementById('divider_home');
let divider_about = document.getElementById('divider_about');
let divider_projects = document.getElementById('divider_projects');

let nav = document.getElementById('nav');

setInterval(boxShadowAdd, 0.01);    
setInterval(isElementVisible, 0.01, divider_home);
setInterval(isElementVisible, 0.01, divider_about);
setInterval(isElementVisible, 0.01, divider_projects);


function isElementVisible(element){
    const rect = element.getBoundingClientRect();
    if(rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth))
        {
            element.style.animation = 'divide 3s 1 ease-in-out';
            element.style.height = '2px';
            nav.style.boxShadow = '0px 10px 100px orange';
        }
}

function boxShadowAdd(){
    if (document.documentElement.scrollTop > 0) {
        nav.style.boxShadow = '0px 10px 100px orange';
    }
    else {
        nav.style.boxShadow = '';
    }
}




function validateForm(){
    let name = document.forms["contact_form"]["name"].value;
    let email = document.forms["contact_form"]["email"].value;
    let sub = document.forms["contact_form"]["subject"].value;
    let msg = document.forms["contact_form"]["message"].value;
    if (name == "") 
    {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") 
    {
    alert("Email must be filled out");
    return false;
  }if (sub == "") 
  {
  alert("Subject must be filled out");
  return false;
}
if (msg == "") 
{
alert("Message must be filled out");
return false;
}
else{
    alert("Your form was submitted succesfully!");
    return true;
}

}


