let panjangAlas = document.getElementById("panjang-alas").value
let tinggi = document.getElementById("tinggi").value

function validasi(){
    if(panjangAlas == "1" || panjangAlas == "2" || panjangAlas == "3" || panjangAlas == "4" || panjangAlas == "5" || panjangAlas == "6" || panjangAlas == "7" || panjangAlas == "8" || panjangAlas == "9" || panjangAlas == "0" ){
        hitungHasil()
    }
    else{
        document.getElementById("pesan").innerHTML = "harus di isi dengan angka"
    }
}

function hitungHasil(){
    let hasil = parseInt(panjangAlas) * parseInt(tinggi)
    console.log(hasil)
    document.getElementById("result").innerHTML = hasil
}
