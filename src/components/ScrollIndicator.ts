export const ScrollIndicator = (): string => {
  return `
    <div class="flex justify-center mb-6" style="flex: 0.05;">
      <div class="flex gap-1.5 bg-gray-200 bg-opacity-40 px-3 py-1.5 rounded-full backdrop-blur-sm">
        <span class="dot w-1.5 h-1.5 rounded-full bg-gray-800 transition-all"></span>
        <span class="dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-all"></span>
        <span class="dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-all"></span>
        <span class="dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-all"></span>
      </div>
    </div>
  `
}
