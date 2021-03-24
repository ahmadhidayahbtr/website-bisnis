const daftarMenu = document.getElementsByClassName("daftarMenu");
for(let i=0;i<daftarMenu.length;i++) {
    daftarMenu[i].addEventListener("click",function() {
        alert("silahkan tunggu pesanan anda!");
    });
}
