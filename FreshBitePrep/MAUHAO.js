function openLogin(){
    document.getElementById("loginDrawer").classList.add("open");
}

function closeLogin(){
    document.getElementById("loginDrawer").classList.remove("open");
}

<script>

function openLogin(){
    document.getElementById("loginDrawer").style.right = "0";
}

function closeLogin(){
    document.getElementById("loginDrawer").style.right = "-300px";
}

function login(){
    alert("Successfully logged in!");
}

</script>