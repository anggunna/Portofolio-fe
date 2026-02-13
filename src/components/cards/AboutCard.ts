export const AboutCard = (): string => {
  return `
    <div class="card-wrapper snap-center flex-shrink-0 transition-all duration-500" style="scroll-snap-align: center; margin-left: calc(50vw - 170px - 40px);">
      <div class="w-[340px] h-[380px] border border-gray-200 rounded-[32px] p-0 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative" data-page="about">
        <div class="p-8 h-full flex flex-col">
          <h2 class="text-4xl font-bold mb-2 leading-tight">About<br/>Me</h2>
          <p class="text-gray-500 text-sm mb-4">Get to know me better</p>
          <div class="flex-1 relative mt-auto">
            <div class="absolute bottom-0 left-0 w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
          </div>
        </div>
        
        <!-- More Info Button -->
        <button class="more-info-btn absolute bottom-6 right-6 px-3 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-full opacity-0 pointer-events-none transition-all duration-300 hover:bg-gray-700 hover:scale-105 animate-pulse-glow" data-modal="about">
          Learn More
        </button>
      </div>
    </div>
  `
}
