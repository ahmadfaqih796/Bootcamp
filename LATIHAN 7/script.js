// jumlah bagian = persentase x jumlah keseluruhan
//                  80%          40

// let template = `
//   <table border="1">
//     <tr>
//       <th>Jumlah Angsuran</th>
//       <th>Progress</th>
//       <th>Berjalan</th>
//       <th>Sisa</th>
//     <tr>
//     <tr>
//       <td>${hasil['jumlah angsuran']}</td>
//       <td>${hasil['progress']}</td>
//       <td>${hasil['berjalan']}</td>
//       <td>${hasil['sisa']}</td>
//     </tr>
//   </table>
//   `

function getStepAngsuran(totalAngsuran, persentase) {
    let selesai = (persentase / 100) * totalAngsuran
    return {
        "jumlah angsuran": totalAngsuran,
        "progress": persentase + "%",
        "berjalan": selesai + " bulan",
        "sisa": (totalAngsuran - selesai) + " bulan"
    }
}


document.getElementById("proses").addEventListener("click", function () {
    let totalAngsuran = parseInt(document.getElementById("totalAngsuran").value)
    let persentase = parseInt(document.getElementById("persentase").value)

    let hasil = getStepAngsuran(totalAngsuran, persentase);
    let divData = document.getElementById("data");
    let template = [
        '<table class="table table-bordered">', // 0
        `
      <tr>
        <th>Jumlah Angsuran</th>
        <th>Progress</th>
        <th>Berjalan</th>
        <th>Sisa</th>
      </tr>
    `
    ]

    template.push("<tr>");

    Object.keys(hasil).forEach(key => {
        console.log(key, hasil[key]);
        template.push(`<td>${hasil[key]}</td>`);
    });

    template.push('</tr></table>');

    divData.innerHTML = template.join("");
})


document.getElementById("bersihin").addEventListener("click", function () {
    document.getElementById("totalAngsuran").value = 0;
    document.getElementById("persentase").value = 0;
    document.getElementById("data").innerHTML = "Belum diproses!!!";
})