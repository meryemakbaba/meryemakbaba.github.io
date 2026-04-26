
function hesaplaNot() {
    const ad = document.getElementById('studentName').value;
    const vize = parseFloat(document.getElementById('vizeNote').value);
    const final = parseFloat(document.getElementById('finalNote').value);
    const sonucDiv = document.getElementById('notSonuc');

    if(!ad || isNaN(vize) || isNaN(final)) {
        alert("Lütfen tüm alanları doldurun!");
        return;
    }

    const ortalama = (vize * 0.4) + (final * 0.6);
    let harf = "";
    
    if (ortalama >= 90) harf = "AA";
    else if (ortalama >= 85) harf = "BA";
    else if (ortalama >= 80) harf = "BB";
    else if (ortalama >= 75) harf = "CB";
    else if (ortalama >= 70) harf = "CC";
    else if (ortalama >= 60) harf = "DC";
    else if (ortalama >= 50) harf = "DD";
    else harf = "FF";

    let durum = ortalama >= 50 ? "GEÇTİ" : "KALDI";
    
    sonucDiv.innerHTML = `<strong>${ad.toUpperCase()}</strong><br>Ortalama: ${ortalama.toFixed(2)}<br>Harf Notu: ${harf}<br>Durum: ${durum}`;
    sonucDiv.style.display = "block";
}

function donustur() {
    const val = parseFloat(document.getElementById('unitValue').value);
    const type = document.getElementById('convertType').value;
    const sonucDiv = document.getElementById('birimSonuc');
    let res = 0;

    if(isNaN(val)) { 
        alert("Lütfen bir sayı giriniz!"); 
        return; 
    }

    if(type === "c-f") res = (val * 9/5) + 32;
    else if(type === "m-km") res = val / 1000;
    else if(type === "kg-g") res = val * 1000;

    sonucDiv.innerHTML = "<strong>Sonuç:</strong> " + res.toLocaleString('tr-TR');
    sonucDiv.style.display = "block";
}