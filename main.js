// ======================
// AMBIL ELEMENT (GLOBAL)
// ======================
const nameInput = document.getElementById("name");
const serviceInput = document.getElementById("service");
const fiturInput = document.getElementById("fitur");


// ======================
// BUKA FORM
// ======================
function orderProduct(productValue) {
    document.getElementById("overlay").style.display = "flex";
    serviceInput.value = productValue;
}


// ======================
// TUTUP FORM + RESET
// ======================
function closeForm() {
    document.getElementById("overlay").style.display = "none";

    nameInput.value = "";
    document.getElementById("message").value = "";

    serviceInput.selectedIndex = 0;
    fiturInput.selectedIndex = 0;

    nameInput.placeholder = "Nama Lengkap";

    // reset error
    [nameInput, serviceInput, fiturInput].forEach(el => {
        el.classList.remove("input-error");
    });
}


// ======================
// TOAST
// ======================
function showToast(msg) {
    const toast = document.createElement("div");
    toast.innerText = msg;

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "red";
    toast.style.color = "white";
    toast.style.padding = "10px";
    toast.style.borderRadius = "6px";

    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2000);
}


// ======================
// VALIDASI + KIRIM WA
// ======================
function sendToWA() {

    let valid = true;

    // reset error
    [nameInput, serviceInput, fiturInput].forEach(el => {
        el.classList.remove("input-error");
    });

    // VALIDASI
    if(nameInput.value.trim() === "") {
        nameInput.classList.add("input-error");
        valid = false;
    }

    if(serviceInput.value === "") {
        serviceInput.classList.add("input-error");
        valid = false;
    }

    if(fiturInput.value === "") {
        fiturInput.classList.add("input-error");
        valid = false;
    }

    if(!valid) {
        showToast("Lengkapi data dulu!");
        return;
    }

    // KIRIM WA
    let text = encodeURIComponent(
`Halo, saya ingin order website:

Nama: ${nameInput.value}
Paket: ${serviceInput.value}
Layanan: ${fiturInput.value}

Pesan:
${document.getElementById("message").value}`
    );

    window.location.href = `https://wa.me/6289509494475?text=${text}`;
}


// ======================
// HILANGKAN ERROR SAAT DIISI
// ======================
[nameInput, serviceInput, fiturInput].forEach(el => {

    el.addEventListener("input", () => {
        if(el.value.trim() !== "") {
            el.classList.remove("input-error");
        }
    });

    el.addEventListener("change", () => {
        if(el.value !== "") {
            el.classList.remove("input-error");
        }
    });

});


// ======================
// FAQ
// ======================
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const question = faq.querySelector('.faq-question');
    const answer = faq.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        if(faq.classList.contains('active')) {
            answer.style.height = '0';
            faq.classList.remove('active');
        } else {
            answer.style.height = answer.scrollHeight + 'px';
            faq.classList.add('active');
        }
    });
});


// ======================
// HAMBURGER MENU
// ======================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});