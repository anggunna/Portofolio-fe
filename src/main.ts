import './style.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { ScrollIndicator } from './components/ScrollIndicator'
import { Modal } from './components/Modal'
import { AboutCard } from './components/cards/AboutCard'
import { ServicesCard } from './components/cards/ServicesCard'
import { ExperienceCard } from './components/cards/ExperienceCard'
import { ProjectsCard } from './components/cards/ProjectsCard'
import { EmptyCard } from './components/cards/EmptyCard'
import { initCardEffects } from './utils/cardEffects'
import { initLiquidAnimation } from './utils/liquidAnimation'
import { openModal, initModalHandlers } from './utils/modalManager'

// Render App
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="liquid-canvas"></canvas>
  <div class="min-h-screen flex flex-col p-10 pb-12" style="position: relative; z-index: 1;">
    ${Header()}

    <main class="flex items-center mb-2 relative" style="flex: 0.75; overflow: visible;">
      <!-- Horizontal Text Left (for first card) with Download CV Button -->
      <div id="vertical-text-left" class="absolute left-8 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 pointer-events-auto" style="z-index: 10;">
        <a href="/Document/CV_ANGGUN DEWANTI.pdf" download="CV_Anggun_Dewanti.pdf" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition mb-4 animate-pulse-slow">
          Download CV
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-arrow-move"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
        <h2 class="text-6xl font-bold text-gray-800">Anggun<br/>Dewanti</h2>
      </div>
      
      <!-- Horizontal Text Right (for last card) -->
      <div id="vertical-text-right" class="absolute right-8 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 pointer-events-none opacity-0" style="z-index: 10;">
        <h2 class="text-6xl font-bold text-gray-800 text-right">More<br/>Coming<br/>Soon</h2>
      </div>
      
      <div id="cards-container" class="flex gap-5 overflow-x-auto w-full snap-x snap-mandatory" style="scrollbar-width: none; -ms-overflow-style: none; scroll-behavior: smooth; padding: 30px 0; overflow-y: visible;">
        ${AboutCard()}
        
        <div class="card-wrapper snap-center flex-shrink-0 transition-all duration-500" style="overflow: visible;">
          <div class="w-[200px] h-[380px] flex flex-col gap-5">
            ${ServicesCard()}
            ${ExperienceCard()}
          </div>
        </div>
        
        ${ProjectsCard()}
        ${EmptyCard()}
      </div>
    </main>

    <style>
      #cards-container::-webkit-scrollbar {
        display: none;
      }
      
      .card-wrapper {
        opacity: 0.4;
        filter: blur(2px);
        transform: scale(0.95);
      }
      
      .card-wrapper.active {
        opacity: 1;
        filter: blur(0);
        transform: scale(1.05);
      }
      
      /* Show more info button only when card is active */
      .card-wrapper.active .more-info-btn {
        opacity: 1;
        pointer-events: auto;
      }
      
      .card-wrapper.active.has-stacked [data-page] {
        opacity: 0.4;
        filter: blur(2px);
        transform: scale(0.95);
        transition: all 0.5s;
      }
      
      .card-wrapper.active.has-stacked [data-page].card-highlight {
        opacity: 1;
        filter: blur(0);
        transform: scale(1.05);
      }
      
      /* Show more info button only when stacked card is highlighted */
      .card-wrapper.active.has-stacked [data-page] .more-info-btn {
        opacity: 0;
        pointer-events: none;
      }
      
      .card-wrapper.active.has-stacked [data-page].card-highlight .more-info-btn {
        opacity: 1;
        pointer-events: auto;
      }
      
      @keyframes pulse-slow {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(31, 41, 55, 0.4);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 0 8px rgba(31, 41, 55, 0);
        }
      }
      
      @keyframes arrow-move {
        0%, 100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(4px);
        }
      }
      
      .animate-pulse-slow {
        animation: pulse-slow 2s ease-in-out infinite;
      }
      
      .animate-arrow-move {
        animation: arrow-move 1.5s ease-in-out infinite;
      }
      
      .animate-pulse-slow:hover {
        animation: none;
      }
      
      /* Pulse glow animation for buttons */
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(31, 41, 55, 0.7);
        }
        50% {
          box-shadow: 0 0 0 6px rgba(31, 41, 55, 0);
        }
      }
      
      @keyframes pulse-glow-white {
        0%, 100% {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
        }
        50% {
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
        }
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      .animate-pulse-glow-white {
        animation: pulse-glow-white 2s ease-in-out infinite;
      }
      
      .more-info-btn:hover {
        animation: none !important;
      }
    </style>

    ${ScrollIndicator()}
    ${Navbar()}
  </div>
  
  ${Modal()}
`

// Initialize liquid animation
initLiquidAnimation()

// Initialize card effects
const { container } = initCardEffects()

// Initialize modal handlers
initModalHandlers()

// More Info Button click handlers (open modal)
document.querySelectorAll('.more-info-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation() // Prevent card click event
    const modalType = btn.getAttribute('data-modal')
    if (modalType) {
      console.log(`Opening ${modalType} modal`)
      openModal(modalType)
    }
  })
})

// Card click handlers (scroll and highlight only)
document.querySelectorAll('[data-page]').forEach(card => {
  card.addEventListener('click', () => {
    const page = card.getAttribute('data-page')
    console.log(`Highlighting ${page} card`)
    
    if (container) {
      const wrapper = card.closest('.card-wrapper')
      if (wrapper) {
        const containerRect = container.getBoundingClientRect()
        const wrapperRect = wrapper.getBoundingClientRect()
        const scrollLeft = (wrapper as HTMLElement).offsetLeft - (containerRect.width / 2) + (wrapperRect.width / 2)
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
        
        setTimeout(() => {
          document.querySelectorAll('.card-wrapper').forEach(w => {
            w.classList.remove('active', 'has-stacked')
          })
          document.querySelectorAll('[data-page]').forEach(c => {
            c.classList.remove('card-highlight')
          })
          
          wrapper.classList.add('active')
          
          const stackedWrapper = wrapper.querySelector('[data-page="services"]') || wrapper.querySelector('[data-page="experience"]')
          if (stackedWrapper) {
            wrapper.classList.add('has-stacked')
            card.classList.add('card-highlight')
          }
        }, 100)
      }
    }
  })
})

// Navbar click handlers
document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.getAttribute('data-nav')
    
    if (nav === 'home') {
      const firstCard = document.querySelector('[data-page="about"]')
      if (firstCard) {
        const wrapper = firstCard.closest('.card-wrapper')
        if (wrapper && container) {
          const containerRect = container.getBoundingClientRect()
          const wrapperRect = wrapper.getBoundingClientRect()
          const scrollLeft = (wrapper as HTMLElement).offsetLeft - (containerRect.width / 2) + (wrapperRect.width / 2)
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
        }
      }
    } else {
      const targetCard = document.querySelector(`[data-page="${nav}"]`)
      if (targetCard && container) {
        const wrapper = targetCard.closest('.card-wrapper')
        if (wrapper) {
          const containerRect = container.getBoundingClientRect()
          const wrapperRect = wrapper.getBoundingClientRect()
          const scrollLeft = (wrapper as HTMLElement).offsetLeft - (containerRect.width / 2) + (wrapperRect.width / 2)
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
          
          setTimeout(() => {
            document.querySelectorAll('.card-wrapper').forEach(w => {
              w.classList.remove('active', 'has-stacked')
            })
            document.querySelectorAll('[data-page]').forEach(c => {
              c.classList.remove('card-highlight')
            })
            
            wrapper.classList.add('active')
            
            if (nav === 'services' || nav === 'experience') {
              wrapper.classList.add('has-stacked')
              targetCard.classList.add('card-highlight')
            }
          }, 100)
        }
      }
    }
  })
})
