export const ProjectsCard = (): string => {
  return `
    <div class="card-wrapper snap-center flex-shrink-0 transition-all duration-500">
      <div class="w-[280px] h-[380px] rounded-[32px] p-6 bg-gray-900 text-white hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden" data-page="project">
        <span class="absolute top-4 left-4 text-[10px] text-gray-400">Recent Work</span>
        <div class="absolute top-4 right-4 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
        </div>
        <h2 class="text-2xl font-bold mt-12">Projects</h2>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        
        <!-- More Info Button -->
        <button class="more-info-btn absolute bottom-6 right-6 px-3 py-1.5 bg-white text-gray-900 text-xs font-medium rounded-full opacity-0 pointer-events-none transition-all duration-300 hover:bg-gray-100 hover:scale-105 animate-pulse-glow-white" data-modal="projects">
          Learn More
        </button>
      </div>
    </div>
  `
}
