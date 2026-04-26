document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggle');
    const form = document.getElementById('applicationForm');
    const summaryArea = document.getElementById('summaryArea');
    const summaryText = document.getElementById('summaryText');

  
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeBtn.textContent = document.body.classList.contains('light-theme') ? "GECE MODUNA DÖN" : "AYDINLIK MOD";
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const data = {
            ad: document.getElementById('name').value,
            mail: document.getElementById('email').value,
            bolum: document.getElementById('dept').value,
            sinif: document.getElementById('grade').value,
            oturum: document.getElementById('session').value,
            tur: document.getElementById('type').value,
            mesaj: document.getElementById('message').value || "Mesaj yok."
        };

       
        if(!data.ad || !data.mail || !data.bolum || !data.sinif || !data.oturum || !data.tur) {
            alert("Lütfen tüm zorunlu alanları doldurun!");
            return;
        }

        summaryText.innerHTML = `
            <div class="border-start border-warning border-4 ps-3">
                <p class="mb-1"><strong>Ad Soyad:</strong> ${data.ad}</p>
                <p class="mb-1"><strong>E-posta:</strong> ${data.mail}</p>
                <p class="mb-1"><strong>Akademik:</strong> ${data.bolum} / ${data.sinif}</p>
                <p class="mb-1"><strong>Tercih:</strong> ${data.oturum} (${data.tur})</p>
                <p class="mb-0"><strong>Mesaj:</strong> ${data.mesaj}</p>
            </div>
        `;

        summaryArea.style.display = 'block';
        summaryArea.scrollIntoView({ behavior: 'smooth' }); 
    });

    form.addEventListener('reset', () => {
        summaryArea.style.display = 'none';
    });
});