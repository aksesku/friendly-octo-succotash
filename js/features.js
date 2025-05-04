// features.js
const features = [
    {
        icon: 'bi bi-play-circle-fill',
        title: '📌NGW S4M4 4Y4NK T14P M4LJUM',
        link: 'https://cdn.videy.co/62FaETIk1.mp4',
        desc: 'Demo video CDN streaming cepat.',
    },
    {
        icon: 'bi bi-bar-chart',
        title: 'Statistik Penduduk',
        link: 'https://example.com/statistik',
        desc: 'Statistik data penduduk terkini.',
    },
    {
        icon: 'bi bi-person-vcard-fill',
        title: 'Kartu Penduduk',
        link: 'https://contoh.com/vcard',
        desc: 'Cetak kartu penduduk digital.',
    },
    // Tambahkan card baru di sini:
    // {
    //     icon: 'bi bi-star',
    //     title: 'Nama Fitur',
    //     link: 'https://alamat-fitur',
    //     desc: 'Deskripsi fitur.',
    // },
];

function renderFeatureCards() {
    const container = document.getElementById('features-container');
    if (!container) return;
    container.innerHTML = '';
    features.forEach(data => {
        container.innerHTML += `
        <div class="feature-card" tabindex="0">
            <span class="feature-icon" aria-label="${data.title}">
                <i class="${data.icon}"></i>
            </span>
            <div class="feature-title">${data.title}</div>
            <div class="feature-desc">
                <a href="${data.link}" target="_blank">${data.link}</a>
                <div style="font-size:.92em;color:#888;margin-top:3px;">${data.desc||''}</div>
            </div>
            <div class="feature-actions">
                <button onclick="previewDesc(this)">Preview</button>
            </div>
            <div class="ad-center">
                <iframe src="adslot.html" class="ad-iframe" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
        `;
    });
}
renderFeatureCards();
