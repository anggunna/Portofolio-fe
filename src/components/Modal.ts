export const Modal = (): string => {
  return `
    <div id="modal-overlay" class="fixed inset-0 bg-black bg-opacity-30 z-40 opacity-0 pointer-events-none transition-opacity duration-300 backdrop-blur-sm">
    </div>
    
    <div id="modal-container" class="fixed inset-x-0 bottom-0 z-50 transform translate-y-full transition-transform duration-500 ease-out">
      <div class="bg-white rounded-t-[32px] shadow-2xl h-screen overflow-y-auto">
        <!-- Modal Header -->
        <div class="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 px-8 py-6 flex items-center justify-between z-10 rounded-t-[32px]">
          <h2 id="modal-title" class="text-3xl font-bold text-gray-800"></h2>
          <button id="modal-close" class="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <!-- Modal Content -->
        <div id="modal-content" class="px-8 py-6 pb-12">
          <!-- Content will be injected here -->
        </div>
      </div>
    </div>
    
    <style>
      #modal-container.show {
        transform: translateY(0);
      }
      
      #modal-overlay.show {
        opacity: 1;
        pointer-events: auto;
      }
      
      #modal-container > div {
        scrollbar-width: thin;
        scrollbar-color: #d1d5db #f9fafb;
      }
      
      #modal-container > div::-webkit-scrollbar {
        width: 6px;
      }
      
      #modal-container > div::-webkit-scrollbar-track {
        background: #f9fafb;
      }
      
      #modal-container > div::-webkit-scrollbar-thumb {
        background: #d1d5db;
        border-radius: 3px;
      }
      
      #modal-container > div::-webkit-scrollbar-thumb:hover {
        background: #9ca3af;
      }
    </style>
  `
}
