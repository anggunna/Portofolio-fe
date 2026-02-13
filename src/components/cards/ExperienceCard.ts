export const ExperienceCard = (): string => {
  return `
    <div class="flex-1 border border-gray-200 rounded-[28px] p-5 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden" data-page="experience">
      <span class="absolute top-3 left-3 text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-full">My Journey</span>
      <h2 class="text-lg font-bold mt-8">Experience</h2>
      <div class="absolute bottom-4 right-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
      </div>
      
      <!-- More Info Button -->
      <button class="more-info-btn absolute top-3 right-3 px-2.5 py-1 bg-gray-800 text-white text-[10px] font-medium rounded-full opacity-0 pointer-events-none transition-all duration-300 hover:bg-gray-700 hover:scale-105 animate-pulse-glow" data-modal="experience">
        See More
      </button>
    </div>
  `
}
