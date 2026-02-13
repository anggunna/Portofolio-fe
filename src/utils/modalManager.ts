// Fetch CV data from JSON
let cvData: any = null;

const fetchCVData = async () => {
  if (!cvData) {
    try {
      const response = await fetch('/Document/cv_data.json');
      cvData = await response.json();
    } catch (error) {
      console.error('Failed to load CV data:', error);
    }
  }
  return cvData;
}

// Modal content templates
const aboutMeContent = async (): Promise<string> => {
  const data = await fetchCVData();
  if (!data) return '<p class="text-gray-600">Failed to load data</p>';
  
  const { personal_info, education, skills } = data;
  
  return `
    <div class="max-w-4xl mx-auto space-y-6">
      <!-- Profile Section -->
      <div class="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-gray-100">
        <div class="flex items-start gap-6">
          <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-gray-800 mb-1">${personal_info.name}</h3>
            <p class="text-base text-gray-600 mb-4">Mahasiswa S1 Sains Data</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1.5 bg-white/80 backdrop-blur rounded-full text-xs text-gray-700 border border-gray-200">📧 ${personal_info.email}</span>
              <span class="px-3 py-1.5 bg-white/80 backdrop-blur rounded-full text-xs text-gray-700 border border-gray-200">📱 ${personal_info.phone}</span>
              <span class="px-3 py-1.5 bg-white/80 backdrop-blur rounded-full text-xs text-gray-700 border border-gray-200">📍 ${personal_info.location}</span>
            </div>
            <div class="flex gap-2">
              <a href="https://linkedin.com/in/${personal_info.linkedin}" target="_blank" class="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110 shadow-md" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://instagram.com/${personal_info.instagram}" target="_blank" class="w-9 h-9 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110 shadow-md" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- About Section -->
      <div class="space-y-3">
        <h4 class="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span class="text-xl">✨</span>
          About Me
        </h4>
        <p class="text-sm text-gray-600 leading-relaxed">
          ${personal_info.summary}
        </p>
      </div>

      <!-- Skills Section -->
      <div class="space-y-3">
        <h4 class="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span class="text-xl">🎨</span>
          Skills & Expertise
        </h4>
        
        <div class="space-y-3">
          <div>
            <h5 class="font-semibold text-gray-700 text-sm mb-2">Programming Languages</h5>
            <div class="flex flex-wrap gap-2">
              ${skills.hard_skills.programming_languages.map((skill: string) => `
                <span class="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700 hover:bg-gray-100 transition-colors">${skill}</span>
              `).join('')}
            </div>
          </div>
          
          <div>
            <h5 class="font-semibold text-gray-700 text-sm mb-2">Data Analysis & Visualization</h5>
            <div class="flex flex-wrap gap-2">
              ${[...skills.hard_skills.data_analysis, ...skills.hard_skills.data_visualization].map((skill: string) => `
                <span class="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700 hover:bg-gray-100 transition-colors">${skill}</span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="space-y-3">
        <h4 class="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span class="text-xl">🎓</span>
          Education
        </h4>
        <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <h5 class="font-bold text-gray-800 text-sm mb-1">${education.program}</h5>
          <p class="text-gray-600 text-xs mb-1">${education.institution} • ${education.period}</p>
          <p class="text-gray-600 text-xs mb-1">${education.faculty}</p>
          <p class="text-gray-600 text-xs">GPA: ${education.gpa}/4.0</p>
        </div>
      </div>

      <!-- Soft Skills Section -->
      <div class="space-y-3">
        <h4 class="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span class="text-xl">💡</span>
          Soft Skills
        </h4>
        <div class="grid gap-2">
          ${skills.soft_skills.map((item: any) => `
            <div class="bg-gray-50 border border-gray-200 rounded-2xl p-4">
              <h5 class="font-semibold text-gray-800 text-sm mb-1">${item.skill}</h5>
              <p class="text-xs text-gray-600 leading-relaxed">${item.description}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Download CV Button -->
      <div class="pt-2">
        <a href="/Document/CV_ANGGUN DEWANTI.pdf" download="CV_Anggun_Dewanti.pdf" 
           class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-all hover:scale-105 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Full CV
        </a>
      </div>
    </div>
  `
}

// Modal manager functions
export const openModal = async (type: string): Promise<void> => {
  const overlay = document.getElementById('modal-overlay')
  const container = document.getElementById('modal-container')
  const title = document.getElementById('modal-title')
  const content = document.getElementById('modal-content')
  
  if (!overlay || !container || !title || !content) return
  
  // Set content based on type
  switch(type) {
    case 'about':
      title.textContent = 'About Me'
      content.innerHTML = await aboutMeContent()
      break
    case 'services':
      title.textContent = 'Services'
      content.innerHTML = '<p class="text-gray-600">Services content coming soon...</p>'
      break
    case 'experience':
      title.textContent = 'Experience'
      content.innerHTML = '<p class="text-gray-600">Experience content coming soon...</p>'
      break
    case 'projects':
      title.textContent = 'Projects'
      content.innerHTML = '<p class="text-gray-600">Projects content coming soon...</p>'
      break
    default:
      content.innerHTML = '<p class="text-gray-600">Content not found</p>'
  }
  
  // Show modal with animation
  overlay.classList.add('show')
  setTimeout(() => {
    container.classList.add('show')
  }, 10)
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden'
}

export const closeModal = (): void => {
  const overlay = document.getElementById('modal-overlay')
  const container = document.getElementById('modal-container')
  
  if (!overlay || !container) return
  
  // Hide modal with animation
  container.classList.remove('show')
  setTimeout(() => {
    overlay.classList.remove('show')
    document.body.style.overflow = ''
  }, 300)
}

export const initModalHandlers = (): void => {
  // Close button handler
  const closeBtn = document.getElementById('modal-close')
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal)
  }
  
  // Overlay click handler
  const overlay = document.getElementById('modal-overlay')
  if (overlay) {
    overlay.addEventListener('click', closeModal)
  }
  
  // ESC key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  })
}
