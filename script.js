// Data statis (dari backend/data.js)
const educationHistory = [
  { id: 1, period: "2022 - Sekarang", institution: "Universitas Amikom Yogyakarta", major: "S1 - Informatika" },
  { id: 2, period: "2019 - 2022", institution: "SMK Negeri 1 Bantul Yogyakarta", major: "Rekayasa Perangkat Lunak" },
];
const skills = [
  { name: "Vue.js", level: "Mahir" },
  { name: "JavaScript", level: "Mahir" },
  { name: "Tailwind CSS", level: "Mahir" },
  { name: "Node.js", level: "Menengah" },
  { name: "Express.js", level: "Menengah" },
  { name: "PostgreSQL", level: "Menengah" },
  { name: "Git & GitHub", level: "Mahir" },
  { name: "HTML5 & CSS3", level: "Mahir" },
];
const projects = [
  { title: "Website Toko Akun Game Online", image: "assets/nexakun-logo.png", description: "Platform e-commerce dengan fitur payment gateway dan escrow system.", tech: ["Laravel", "MySQL", "Tailwind CSS"], link: "https://github.com/Fauzi-Taufiq/nexakun-accountstore.git" },
  { title: "Website Penjualan Tiket Bioskop", image: "assets/movietix.png", description: "Website penjualan tiket bioskop dengan fitur pemesanan dan pembayaran online.", tech: ["PHP", "Mysql", "Bootstrap"], link: "https://github.com/Fauzi-Taufiq/movietix.git" },
];

// Helper untuk skill icon dan progress
function getSkillIcon(skillName) {
  const icons = {
    'HTML5 & CSS3': '🌐',
    'CSS': '🎨',
    'JavaScript': '⚡',
    'Vue.js': '💚',
    'React': '⚛️',
    'Node.js': '🟢',
    'Python': '🐍',
    'Java': '☕',
    'PHP': '🐘',
    'MySQL': '🗄️',
    'MongoDB': '🌳',
    'Git & GitHub': '📝',
    'Docker': '🐳',
    'AWS': '☁️',
    'Figma': '🎨',
    'Adobe XD': '🎯'
  };
  return icons[skillName] || '💻';
}
function getSkillProgress(level) {
  const levels = { 'Pemula': 25, 'Menengah': 50, 'Mahir': 75, 'Expert': 90, 'Advanced': 95 };
  return levels[level] || 50;
}

// Render Education
function renderEducation() {
  const section = document.querySelector('#pendidikan');
  section.innerHTML = `
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Riwayat Pendidikan</h2>
        <div class="w-32 h-1 bg-gradient-to-r from-[#2596be] to-[#145369] mx-auto rounded-full animate-pulse-glow"></div>
        <div class="w-16 h-1 bg-gradient-to-r from-[#145369] to-[#041014] mx-auto mt-2 rounded-full animate-pulse-glow" style="animation-delay: 0.5s;"></div>
      </div>
      <div class="timeline-modern mt-16">
        ${educationHistory.map((edu, idx) => `
          <div class="timeline-item flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}">
            <div class="w-full md:w-5/12 mb-8 md:mb-0">
              <div class="glass rounded-2xl p-6 card-hover relative">
                <div class="absolute top-2 right-2 w-4 h-4 bg-gradient-to-r from-[#2596be]/10 to-[#145369]/10 rounded-full"></div>
                <div class="absolute bottom-2 left-2 w-3 h-3 bg-gradient-to-r from-[#145369]/10 to-[#041014]/10 rounded-full"></div>
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-[#2596be] to-[#145369] rounded-full flex items-center justify-center mr-4">
                    <span class="text-white font-bold text-lg">🎓</span>
                  </div>
                  <div>
                    <p class="font-semibold text-[#2596be] text-sm">${edu.period}</p>
                    <h3 class="text-xl font-bold text-gray-800">${edu.institution}</h3>
                  </div>
                </div>
                <p class="text-gray-100 leading-relaxed font-medium">${edu.major}</p>
              </div>
            </div>
            <div class="hidden md:flex w-2/12 justify-center items-center">
              <div class="timeline-dot"></div>
            </div>
            <div class="md:hidden w-full flex justify-center mb-4">
              <div class="timeline-dot"></div>
            </div>
            <div class="w-full md:w-5/12"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render Skills
function renderSkills() {
  const section = document.querySelector('#skill');
  section.innerHTML = `
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Keahlian & Teknologi</h2>
        <div class="w-32 h-1 bg-gradient-to-r from-[#2596be] to-[#145369] mx-auto rounded-full animate-pulse-glow"></div>
        <div class="w-16 h-1 bg-gradient-to-r from-[#145369] to-[#041014] mx-auto mt-2 rounded-full animate-pulse-glow" style="animation-delay: 0.5s;"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        ${skills.map(skill => `
          <div class="glass rounded-2xl p-8 card-hover group relative">
            <div class="absolute top-3 right-3 w-4 h-4 bg-gradient-to-r from-[#2596be]/10 to-[#145369]/10 rounded-full"></div>
            <div class="absolute bottom-3 left-3 w-3 h-3 bg-gradient-to-r from-[#145369]/10 to-[#041014]/10 rounded-full"></div>
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-gradient-to-r from-[#2596be] to-[#145369] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <span class="text-white font-bold text-2xl">${getSkillIcon(skill.name)}</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-1">${skill.name}</h3>
                <p class="text-gray-500 text-sm">${skill.level}</p>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div class="skill-progress rounded-full h-3 transition-all duration-1000 ease-out" style="width: ${getSkillProgress(skill.level)}%"></div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-600">Kemahiran</span>
              <span class="text-sm font-semibold text-[#2596be]">${getSkillProgress(skill.level)}%</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render Projects
function renderProjects() {
  const section = document.querySelector('#proyek');
  section.innerHTML = `
    <div class="container mx-auto px-6 relative z-10">
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Proyek Unggulan</h2>
        <div class="w-32 h-1 bg-gradient-to-r from-[#2596be] to-[#145369] mx-auto rounded-full animate-pulse-glow"></div>
        <div class="w-16 h-1 bg-gradient-to-r from-[#145369] to-[#041014] mx-auto mt-2 rounded-full animate-pulse-glow" style="animation-delay: 0.5s;"></div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        ${projects.map(project => `
          <div class="glass rounded-2xl overflow-hidden card-hover group relative">
            <div class="absolute top-3 right-3 w-4 h-4 bg-gradient-to-r from-[#2596be]/10 to-[#145369]/10 rounded-full z-20"></div>
            <div class="absolute bottom-3 left-3 w-3 h-3 bg-gradient-to-r from-[#145369]/10 to-[#041014]/10 rounded-full z-20"></div>
            <div class="relative overflow-hidden">
              <img src="${project.image}" alt="Gambar Proyek" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#2596be] transition-colors duration-300">${project.title}</h3>
              <p class="text-gray-100 mb-4 leading-relaxed font-medium">${project.description}</p>
              <div class="mb-6 flex flex-wrap gap-2">
                ${project.tech.map(tech => `<span class="bg-gradient-to-r from-[#2596be]/10 to-[#145369]/10 text-[#2596be] text-xs font-semibold px-3 py-1 rounded-full border border-[#2596be]/20 shadow-sm transition-all duration-300 cursor-pointer hover:bg-[#2596be] hover:text-white hover:scale-110 hover:shadow-2xl hover:border-[#145369] hover:outline hover:outline-2 hover:outline-white/60">${tech}</span>`).join('')}
              </div>
              <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-[#2596be] font-semibold hover:text-[#145369] transition-colors duration-300 group/link">Lihat Detail<span class="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span></a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Render Hero Section
function renderHero() {
  const section = document.querySelector('#profil');
  section.innerHTML = `
    <div class="md:w-1/2 mb-10 md:mb-0 animate-slide-in-left relative z-10">
      <div class="glass rounded-3xl p-8 backdrop-blur-lg">
        <div class="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-[#2596be]/20 to-[#145369]/20 rounded-full"></div>
        <div class="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-[#145369]/20 to-[#041014]/20 rounded-full"></div>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">Halo, Saya <span class="text-[#2596be] block mt-2">Muhammad Taufiq Al Fauzi</span></h1>
        <p class="text-xl text-gray-200 mb-8 leading-relaxed">Mahasiswa Informatika Universitas Amikom Yogyakarta yang antusias dalam pengembangan web, desain antarmuka, dan pengelolaan database.</p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#kontak" class="btn-modern inline-flex items-center justify-center"><span class="mr-2">💬</span>Hubungi Saya</a>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 flex justify-center animate-slide-in-right relative z-10">
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-r from-[#2596be] to-[#145369] rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
        <img src="assets/pp.JPEG" alt="Foto Profil" class="w-80 h-80 rounded-full object-cover shadow-2xl relative z-10 animate-float" />
        <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#2596be] to-[#145369] rounded-full animate-pulse-glow"></div>
        <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#145369] to-[#041014] rounded-full animate-pulse-glow" style="animation-delay: 1s;"></div>
        <div class="absolute -top-8 -left-8 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div class="absolute -bottom-8 -right-8 w-3 h-3 bg-white/30 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-1/2 -left-12 w-2 h-2 bg-white/40 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 -right-12 w-2 h-2 bg-white/40 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
      </div>
    </div>
  `;
}

// Render Contact Section
function renderContact() {
  const section = document.querySelector('#kontak');
  section.innerHTML = `
    <div class="container mx-auto px-6 text-center relative z-10">
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Hubungi Saya</h2>
        <div class="w-32 h-1 bg-gradient-to-r from-[#2596be] to-[#145369] mx-auto rounded-full animate-pulse-glow"></div>
        <div class="w-16 h-1 bg-gradient-to-r from-[#145369] to-[#041014] mx-auto mt-2 rounded-full animate-pulse-glow" style="animation-delay: 0.5s;"></div>
      </div>
      <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
      <a href="mailto:emailanda@example.com" class="btn-modern inline-block mb-12">Kirim Email</a>
      <div class="flex justify-center space-x-6 mb-8">
        <a href="https://github.com/Fauzi-Taufiq/" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
        <a href="#" target="_blank" class="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
      </div>
      <p class="text-gray-500">&copy; ${new Date().getFullYear()} Muhammad Taufiq Al Fauzi. Dibuat dengan HTML, Tailwind, dan Vanilla JS</p>
    </div>
  `;
}

// Animasi on scroll (fade in up)
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-fade-in-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
      } else {
        entry.target.classList.remove('opacity-100', 'translate-y-0');
        entry.target.classList.add('opacity-0', 'translate-y-8');
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
    observer.observe(el);
  });
}

// Inisialisasi render
window.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderEducation();
  renderSkills();
  renderProjects();
  renderContact();
  animateOnScroll();
}); 