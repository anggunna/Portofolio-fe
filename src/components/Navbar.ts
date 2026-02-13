export const Navbar = (): string => {
  return `
    <nav class="flex justify-center items-end gap-4" style="flex: 0.2;">
      <!-- Left Group: About & Services -->
      <div class="flex flex-col items-center gap-1">
        <div class="bg-gray-800 px-5 py-3 rounded-full flex gap-6">
          <button class="flex items-center justify-center group" data-nav="about">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <button class="flex items-center justify-center group" data-nav="services">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </button>
        </div>
        <div class="flex gap-6 px-2">
          <span class="text-[10px] text-gray-700 text-center font-medium">About</span>
          <span class="text-[10px] text-gray-700 text-center font-medium">Services</span>
        </div>
      </div>

      <!-- Home Button -->
      <div class="flex flex-col items-center gap-1">
        <button class="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-105 transition border-2 border-gray-100 group" data-nav="home">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </button>
        <span class="text-[10px] text-gray-800 font-semibold text-center">Home</span>
      </div>

      <!-- Right Group: Experience & Project -->
      <div class="flex flex-col items-center gap-1">
        <div class="bg-gray-800 px-5 py-3 rounded-full flex gap-6">
          <button class="flex items-center justify-center group" data-nav="experience">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
          </button>
          <button class="flex items-center justify-center group" data-nav="project">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
          </button>
        </div>
        <div class="flex gap-3 px-1">
          <span class="text-[10px] text-gray-700 text-center font-medium">Experience</span>
          <span class="text-[10px] text-gray-700 text-center font-medium">Projects</span>
        </div>
      </div>
    </nav>
  `
}
