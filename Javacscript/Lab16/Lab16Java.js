function checkEmail()
{
    if (/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(document.getElementById("Email").value)) {
        return (true)
    }
    else {
        alert("het e-mailadres is onjuist");
        return (false)
    }
}