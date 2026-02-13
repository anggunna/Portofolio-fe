export const EmptyCard = (): string => {
  return `
    <div class="card-wrapper snap-center flex-shrink-0 transition-all duration-500" style="margin-right: calc(50vw - 140px - 40px);">
      <div class="w-[280px] h-[380px] border-2 border-gray-300 border-dashed rounded-[32px] p-8 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500" data-page="other">
        <div class="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
        </div>
        <p class="text-gray-400 text-center text-sm">More content<br/>coming soon</p>
      </div>
    </div>
  `
}
