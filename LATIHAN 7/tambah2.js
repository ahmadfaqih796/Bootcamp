var btnAdd = document.getElementById("add")
var btnClear = document.getElementById("clear")
var inputTugas = document.getElementById("inputTugas")
var ulDaftarTugas = document.getElementById("daftarTugas")
var daftarTugas ="";
var counterID = 0;

btnAdd.addEventListener('click', function (event) {
  let hasil = inputTugas.value;
  inputTugas.value = ""
  let li = document.createElement("li");
  let text = document.createTextNode(hasil);
  li.appendChild(text);
  li.setAttribute("class", "list-group-item");
  li.setAttribute("onclick", "apus(this)");
  ulDaftarTugas.appendChild(li);
})

btnClear.addEventListener('click', function (event) {
  daftarTugas = []
  inputTugas.value = ""
  ulDaftarTugas.innerHTML = daftarTugas.join("")
})

function apus(element) {
  ulDaftarTugas.removeChild(element);
}