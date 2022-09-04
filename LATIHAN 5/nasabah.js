let angsuran = 40;
let progres = 80;
let x = progres/100 * angsuran;
let sisa = angsuran - x
let a = {
    "id" : "1",
    "nama" : "faqih",
    "jumlah angsuran" : angsuran,
    "progress": 80 +"%",
    "angsuran selesai": x,
    "sisa angsuran": sisa,
}
console.table(a);