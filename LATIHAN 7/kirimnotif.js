document.getElementById("kirim").addEventListener('click', function (e) {

    let value1 = document.getElementById("inputNama").value
    let value2 = document.getElementById("inputPesan").value

    let url = ` https://maker.ifttt.com/trigger/kirimnotif/with/key/nkNtX3kp6qB59yo7klhEZzj1dn4GLlE2nNvjK0Ucy8J?value1=${value1}&value2=${value2}`;

    fetch(url, {
        method: 'GET',
        mode: 'no-cors',
    }).then(response => alert("data ke kirim"))
})