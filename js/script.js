// Ambil elemen tombol
const btnCtoF = document.querySelectorAll(".button-item")[0];
const btnFtoC = document.querySelectorAll(".button-item")[1];

// Ambil elemen kotak konversi dan formula
const convertBox1 = document.getElementById("convert-box-1");
const formulaBox1 = document.getElementById("formula-box-1");
const convertBox2 = document.getElementById("convert-box-2");
const formulaBox2 = document.getElementById("formula-box-2");

// Saat tombol Celcius ke Fahrenheit diklik
btnCtoF.addEventListener("click", () => {
  convertBox1.style.display = "block";
  formulaBox1.style.display = "block";
  convertBox2.style.display = "none";
  formulaBox2.style.display = "none";
});

// Saat tombol Fahrenheit ke Celcius diklik
btnFtoC.addEventListener("click", () => {
  convertBox1.style.display = "none";
  formulaBox1.style.display = "none";
  convertBox2.style.display = "block";
  formulaBox2.style.display = "block";
});

function konversiC() {
    const celciusInput = document.getElementById('celcius').value;
    const resultInput = document.getElementById('result-input');
    const calculateDetail = document.getElementById('calculate-detail');

    // Validasi input
    if (isNaN(celciusInput) || celciusInput.trim() === '') {
        alert('Silakan masukkan angka yang valid untuk suhu Celcius.');
        return;
    }

    // Konversi ke Fahrenheit
    const celcius = parseFloat(celciusInput);
    const fahrenheit = ((9/5) * celcius) + 32;

    // Menampilkan hasil
    resultInput.value = fahrenheit.toFixed(2); // Membatasi 2 desimal

    // Menampilkan cara kalkulasi
    calculateDetail.value = `Rumus: ((9/5) * ${celcius}) + 32 = ${fahrenheit.toFixed(2)}`;
}

function resetFormC() {
    document.getElementById('celcius').value = '';
    document.getElementById('result-input').value = '';
    document.getElementById('calculate-detail').value = '';
}

function konversiF() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    console.log(fahrenheitInput);  // Cek apakah input terbaca dengan benar
    const resultInputF = document.getElementById('result-input-F');
    const calculateDetailF = document.getElementById('calculate-detail-F');

    // Validasi input
    if (isNaN(fahrenheitInput) || fahrenheitInput.trim() === '') {
        alert('Silakan masukkan angka yang valid untuk suhu fahrenheit.');
        return;
    }

    // Konversi ke Celcius
    const fahrenheit = parseFloat(fahrenheitInput);
    const celcius = (fahrenheit - 32) * (5/9);

    // Menampilkan hasil
    resultInputF.value = celcius.toFixed(2); // Membatasi 2 desimal

    // Menampilkan cara kalkulasi
    calculateDetailF.value = `Rumus: (${fahrenheit} - 32) * (5/9) = ${celcius.toFixed(2)}`;
}

function resetFormF() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('result-input').value = '';
    document.getElementById('calculate-detail').value = '';
}