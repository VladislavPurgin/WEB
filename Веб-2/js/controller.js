let ip
var path = window.location.pathname;
let page = path.split("/").pop();
console.log( page );

// USES Jquery
$.getJSON('https://api.ipify.org?format=json', function(data){
    ip=data.ip;
    console.log(data.ip);
});
//

class user{
    constructor(name,ip,pass)
    {
        this.name = String(name)
        this.ip   = String(ip)
        this.pass = String(pass)
        this.text = String(name)
    }

    clear()
    {
        this.name = ''
        this.ip   = ''
        this.pass = ''
    }
}

var users = []

users[0] = new user("d@c.c",'0.0.0.0','1111')
window.addEventListener('load', function () 
{

if(page == "profile.html")
{
    console.log(sessionStorage.getItem("logged"))
    if(sessionStorage.getItem("logged")==1)
    {
        console.log(sessionStorage.getItem("mail"))

        document.getElementById("text").value = String(users[sessionStorage.getItem("id")].text)
    }
    else
        document.getElementById("text").value = 'ERROR'
}

if(page == "desc.html")
{
    console.log(sessionStorage.getItem("logged"))
    if(sessionStorage.getItem("logged")==1)
    {
        console.log(sessionStorage.getItem("mail"))
        
        document.getElementById("nav_register_line").innerHTML = ''
        document.getElementById("nav_register").innerHTML = ''
        
        document.getElementById("nav_login_line").innerHTML = ''
        document.getElementById("nav_login").innerHTML = ''
    }
    else
    {
    document.getElementById("nav_profile").innerHTML = ''
    document.getElementById("nav_profile_line").innerHTML = ''

    document.getElementById("nav_logout").innerHTML = ''
    document.getElementById("nav_logout_line").innerHTML = ''
    }
}

if(page == "calculator.html")
{
    console.log(sessionStorage.getItem("logged"))
    if(sessionStorage.getItem("logged")==1)
    {
        console.log(sessionStorage.getItem("mail"))
        
        document.getElementById("nav_register_line").innerHTML = ''
        document.getElementById("nav_register").innerHTML = ''
        
        document.getElementById("nav_login_line").innerHTML = ''
        document.getElementById("nav_login").innerHTML = ''
    }
    else
    {
    document.getElementById("nav_profile").innerHTML = ''
    document.getElementById("nav_profile_line").innerHTML = ''

    document.getElementById("nav_logout").innerHTML = ''
    document.getElementById("nav_logout_line").innerHTML = ''
    }
}
})

function logout()
{
    sessionStorage.setItem("logged",0)
    sessionStorage.setItem("mail",'')
}

function login()
{
    let mail = document.getElementById('mail').value
    let pass = document.getElementById('pass').value
    console.log(mail)
    console.log(pass)

    var id = 0

    var re = /\S+@\S+\.\S+/;
    validation = re.test(mail);
    if (validation == false)
    window.location.reload();
    else
    {
        var check = false
        for(var i = 0; i < users.length; i ++)
        {
            if(users[i].name==mail)
            {
                if(users[i].pass==pass)
                    check = true
            }
            if(check)
            {
                id = i
                break
            }
        }
        if (check)
        {
            sessionStorage.setItem("logged",1)
            sessionStorage.setItem("mail",mail)
            sessionStorage.setItem("text",users[id].text)
            sessionStorage.setItem("id",id)
            window.location.href='../html/desc.html'
        }
    }
}

function register()
{
    let pass = document.getElementById('pass').value
    let pass_check = document.getElementById('pass_2').value
    if (pass!=pass_check)
    window.location.reload();

    let mail = document.getElementById('mail').value
    
    console.log(mail)
    console.log(pass)
    console.log(pass_check)
    
    var re = /\S+@\S+\.\S+/;
    validation = re.test(mail);
    if (validation == false)
    window.location.reload();

    else
    {
        var check = true
        for(var i = 0; i < users.length; i ++)
        {
            if(users[i].name==mail)
            check = false
            if(users[i].ip  ==ip)
            check = false
        }
        if (check)
        {
            users.push(new user(mail,ip,pass))
            sessionStorage.setItem("logged",1)
            sessionStorage.setItem("mail",mail)
            sessionStorage.setItem("text",mail)
            sessionStorage.setItem("id",users.length-1)
            window.location.href='../html/desc.html'
        }
    }
}

function change_profile()
{
    let text = document.getElementById("text").value
    sessionStorage.setItem("text",text)
    users[sessionStorage.getItem("id")].text = text
    console.log(text)
}