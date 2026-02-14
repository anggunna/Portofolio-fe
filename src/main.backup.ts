import './style.css'
import { createNoise2D } from 'simplex-noise'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="liquid-canvas"></canvas>
  <div class="min-h-screen flex flex-col p-10 pb-12" style="position: relative; z-index: 1;">
    <!-- Header -->
    <header class="flex justify-between items-center mb-4">
      <div class="h-8"></div>
    </header>

    <!-- Cards Grid -->
    <main class="flex items-center mb-2 relative" style="flex: 0.75; overflow: visible;">
      <!-- Horizontal Text Left (for first card) with Download CV Button -->
      <div id="vertical-text-left" class="absolute left-8 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 pointer-events-auto" style="z-index: 10;">
        <a href="/Document/CV_ANGGUN DEWANTI.pdf" download="CV_Anggun_Dewanti.pdf" class="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition mb-4">
          Download CV
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
        <h2 class="text-6xl font-bold text-gray-800">Anggun<br/>Dewanti</h2>
      </div>
      
      <!-- Horizontal Text Right (for last card) -->
      <div id="vertical-text-right" class="absolute right-8 top-1/2 transform -translate-y-1/2 transition-opacity duration-500 pointer-events-none opacity-0" style="z-index: 10;">
        <h2 class="text-6xl font-bold text-gray-800 text-right">More<br/>Coming<br/>Soon</h2>
      </div>
      
      <div id="cards-container" class="flex gap-5 overflow-x-auto w-full snap-x snap-mandatory" style="scrollbar-width: none; -ms-overflow-style: none; scroll-behavior: smooth; padding: 30px 0; overflow-y: visible;">
        <!-- About Card - CENTER DEFAULT -->
        <div class="card-wrapper snap-center flex-shrink-0 transition-all duration-500" style="scroll-snap-align: center; margin-left: calc(50vw - 170px - 40px);">
          <div class="w-[340px] h-[380px] border border-gray-200 rounded-[32px] p-0 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden" data-page="about">
            <div class="p-8 h-full flex flex-col">
              <h2 class="text-4xl font-bold mb-2 leading-tight">About<br/>Me</h2>
              <p class="text-gray-500 text-sm mb-4">Get to know me better</p>
              <div class="flex-1 relative mt-auto">
                <div class="absolute bottom-0 left-0 w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Services & Experience Column -->
        <div class="card-wrapper snap-center flex-shrink-0 transition-all duration-500" style="overflow: visible;">
          <div class="w-[200px] h-[380px] flex flex-col gap-5">
            <div class="flex-1 border border-gray-200 rounded-[28px] p-5 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden" data-page="services">
              <span class="absolute top-3 left-3 text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-full">What I Do</span>
              <h2 class="text-lg font-bold mt-8">Services</h2>
              <div class="absolute bottom-4 right-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
            </div>
            <div class="flex-1 border border-gray-200 rounded-[28px] p-5 bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden" data-page="experience">
              <span class="absolute top-3 left-3 text-[10px] text-gray-400 bg-gray-100 px-2 py-1 rounded-full">My Journey</span>
              <h2 class="text-lg font-bold mt-8">Experience</h2>
              <div class="absolute bottom-4 right-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Project Card -->
        <div class="card-wrapper snap-center flex-shrink-0 transition-all duration-500">
          <div class="w-[280px] h-[380px] rounded-[32px] p-6 bg-gray-900 text-white hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden" data-page="project">
            <span class="absolute top-4 left-4 text-[10px] text-gray-400">Recent Work</span>
            <div class="absolute top-4 right-4 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
            </div>
            <h2 class="text-2xl font-bold mt-12">Projects</h2>
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
          </div>
        </div>
        
        <!-- Other Card - Empty State -->
        <div class="card-wrapper snap-center flex-shrink-0 transition-all duration-500" style="margin-right: calc(50vw - 140px - 40px);">
          <div class="w-[280px] h-[380px] border-2 border-gray-300 border-dashed rounded-[32px] p-8 bg-white/50 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-500" data-page="other">
            <div class="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
            </div>
            <p class="text-gray-400 text-center text-sm">More content<br/>coming soon</p>
          </div>
        </div>
      </div>
    </main>

    <style>
      #cards-container::-webkit-scrollbar {
        display: none;
      }
      
      /* Card effects - default blur for non-centered cards */
      .card-wrapper {
        opacity: 0.4;
        filter: blur(2px);
        transform: scale(0.95);
      }
      
      /* Active wrapper - clear by default */
      .card-wrapper.active {
        opacity: 1;
        filter: blur(0);
        transform: scale(1.05);
      }
      
      /* For stacked cards wrapper - blur all cards inside first */
      .card-wrapper.active.has-stacked [data-page] {
        opacity: 0.4;
        filter: blur(2px);
        transform: scale(0.95);
        transition: all 0.5s;
      }
      
      /* Then highlight only the target card */
      .card-wrapper.active.has-stacked [data-page].card-highlight {
        opacity: 1;
        filter: blur(0);
        transform: scale(1.05);
      }
    </style>

    <!-- Dots -->
    <div class="flex justify-center mb-6" style="flex: 0.05;">
      <div class="flex gap-1.5 bg-gray-200 bg-opacity-40 px-3 py-1.5 rounded-full backdrop-blur-sm">
        <span class="dot w-1.5 h-1.5 rounded-full bg-gray-800 transition-all"></span>
        <span class="dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-all"></span>
        <span class="dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-all"></span>
        <span class="dot w-1.5 h-1.5 rounded-full bg-gray-400 transition-all"></span>
      </div>
    </div>

    <!-- Bottom Navigation -->
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
  </div>
`

// Liquid Animation with Canvas and Simplex Noise
const canvas = document.getElementById('liquid-canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')!

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const noise2D = createNoise2D()
let time = 0

// Liquid blob with noise-based movement
class LiquidBlob {
  x: number
  y: number
  baseX: number
  baseY: number
  radius: number
  color: string
  speed: number
  offset: number

  constructor(x: number, y: number, radius: number, color: string, speed: number) {
    this.baseX = x
    this.baseY = y
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.speed = speed
    this.offset = Math.random() * 1000
  }

  update(time: number) {
    // Use simplex noise for smooth organic movement
    const noiseX = noise2D(this.offset + time * this.speed, 0)
    const noiseY = noise2D(0, this.offset + time * this.speed)
    
    this.x = this.baseX + noiseX * 250
    this.y = this.baseY + noiseY * 250
  }

  draw() {
    // Draw with radial gradient for smooth blending
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
    gradient.addColorStop(0, this.color)
    gradient.addColorStop(0.5, this.color.replace('1)', '0.5)'))
    gradient.addColorStop(1, 'transparent')
    
    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}

// Create liquid blobs with pink colors
const liquidBlobs: LiquidBlob[] = [
  new LiquidBlob(canvas.width * 0.2, canvas.height * 0.3, 300, 'rgba(249, 168, 212, 1)', 0.5),
  new LiquidBlob(canvas.width * 0.8, canvas.height * 0.7, 320, 'rgba(251, 207, 232, 1)', 0.45),
  new LiquidBlob(canvas.width * 0.5, canvas.height * 0.5, 280, 'rgba(255, 255, 255, 1)', 0.55),
  new LiquidBlob(canvas.width * 0.7, canvas.height * 0.2, 310, 'rgba(252, 231, 243, 1)', 0.48),
  new LiquidBlob(canvas.width * 0.3, canvas.height * 0.8, 290, 'rgba(249, 168, 212, 1)', 0.52),
  new LiquidBlob(canvas.width * 0.6, canvas.height * 0.4, 300, 'rgba(255, 255, 255, 1)', 0.47),
  new LiquidBlob(canvas.width * 0.4, canvas.height * 0.6, 270, 'rgba(251, 207, 232, 1)', 0.53),
  new LiquidBlob(canvas.width * 0.9, canvas.height * 0.4, 260, 'rgba(249, 168, 212, 1)', 0.49),
  new LiquidBlob(canvas.width * 0.15, canvas.height * 0.6, 285, 'rgba(252, 231, 243, 1)', 0.51),
  new LiquidBlob(canvas.width * 0.85, canvas.height * 0.3, 295, 'rgba(251, 207, 232, 1)', 0.46)
]

function animate() {
  time += 0.02
  
  // Clear with base pink color
  ctx.fillStyle = '#fce7f3'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Apply blur for smooth liquid effect
  ctx.filter = 'blur(60px)'

  // Draw all blobs
  liquidBlobs.forEach(blob => {
    blob.update(time)
    blob.draw()
  })

  ctx.filter = 'none'

  requestAnimationFrame(animate)
}

animate()

// Resize handler
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  // Reposition blobs on resize
  liquidBlobs[0].baseX = canvas.width * 0.2
  liquidBlobs[0].baseY = canvas.height * 0.3
  liquidBlobs[1].baseX = canvas.width * 0.8
  liquidBlobs[1].baseY = canvas.height * 0.7
  liquidBlobs[2].baseX = canvas.width * 0.5
  liquidBlobs[2].baseY = canvas.height * 0.5
  liquidBlobs[3].baseX = canvas.width * 0.7
  liquidBlobs[3].baseY = canvas.height * 0.2
  liquidBlobs[4].baseX = canvas.width * 0.3
  liquidBlobs[4].baseY = canvas.height * 0.8
  liquidBlobs[5].baseX = canvas.width * 0.6
  liquidBlobs[5].baseY = canvas.height * 0.4
  liquidBlobs[6].baseX = canvas.width * 0.4
  liquidBlobs[6].baseY = canvas.height * 0.6
  liquidBlobs[7].baseX = canvas.width * 0.9
  liquidBlobs[7].baseY = canvas.height * 0.4
  liquidBlobs[8].baseX = canvas.width * 0.15
  liquidBlobs[8].baseY = canvas.height * 0.6
  liquidBlobs[9].baseX = canvas.width * 0.85
  liquidBlobs[9].baseY = canvas.height * 0.3
})

// Update card effects based on scroll position
const container = document.getElementById('cards-container')
const dots = document.querySelectorAll('.dot')
const cardWrappers = document.querySelectorAll('.card-wrapper')

function updateCardEffects() {
  if (!container) return
  
  const containerRect = container.getBoundingClientRect()
  const containerCenter = containerRect.left + containerRect.width / 2
  
  let closestIndex = 0
  let closestDistance = Infinity
  
  cardWrappers.forEach((wrapper, index) => {
    const rect = wrapper.getBoundingClientRect()
    const cardCenter = rect.left + rect.width / 2
    const distance = Math.abs(containerCenter - cardCenter)
    
    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
    
    // Apply active class to centered card
    if (distance < 100) {
      wrapper.classList.add('active')
    } else {
      wrapper.classList.remove('active')
    }
  })
  
  // Update dots
  dots.forEach((dot, index) => {
    if (index === closestIndex) {
      dot.classList.remove('bg-gray-400')
      dot.classList.add('bg-gray-800')
    } else {
      dot.classList.remove('bg-gray-800')
      dot.classList.add('bg-gray-400')
    }
  })
  
  // Update vertical text visibility
  const verticalTextLeft = document.getElementById('vertical-text-left')
  const verticalTextRight = document.getElementById('vertical-text-right')
  
  if (verticalTextLeft && verticalTextRight) {
    // Show left text only when first card (About Me) is centered
    if (closestIndex === 0) {
      verticalTextLeft.style.opacity = '1'
    } else {
      verticalTextLeft.style.opacity = '0'
    }
    
    // Show right text only when last card (Empty State) is centered
    if (closestIndex === cardWrappers.length - 1) {
      verticalTextRight.style.opacity = '1'
    } else {
      verticalTextRight.style.opacity = '0'
    }
  }
}

// Initialize on load
setTimeout(updateCardEffects, 100)

if (container) {
  container.addEventListener('scroll', updateCardEffects)
}

// Add click handlers for cards - auto scroll to center when clicked
document.querySelectorAll('[data-page]').forEach(card => {
  card.addEventListener('click', () => {
    const page = card.getAttribute('data-page')
    console.log(`Navigating to ${page} page`)
    
    // Auto scroll card to center
    if (container) {
      const wrapper = card.closest('.card-wrapper')
      if (wrapper) {
        const containerRect = container.getBoundingClientRect()
        const wrapperRect = wrapper.getBoundingClientRect()
        const scrollLeft = (wrapper as HTMLElement).offsetLeft - (containerRect.width / 2) + (wrapperRect.width / 2)
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
        
        // For stacked cards, highlight only the clicked card
        setTimeout(() => {
          document.querySelectorAll('.card-wrapper').forEach(w => {
            w.classList.remove('active', 'has-stacked')
          })
          document.querySelectorAll('[data-page]').forEach(c => {
            c.classList.remove('card-highlight')
          })
          
          wrapper.classList.add('active')
          
          // Check if this is a stacked card
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

// Add click handlers for navbar - auto scroll to specific card
document.querySelectorAll('[data-nav]').forEach(btn => {
  btn.addEventListener('click', () => {
    const nav = btn.getAttribute('data-nav')
    
    if (nav === 'home') {
      // Scroll to first card (About)
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
      // Scroll to specific card
      const targetCard = document.querySelector(`[data-page="${nav}"]`)
      if (targetCard && container) {
        const wrapper = targetCard.closest('.card-wrapper')
        if (wrapper) {
          const containerRect = container.getBoundingClientRect()
          const wrapperRect = wrapper.getBoundingClientRect()
          const scrollLeft = (wrapper as HTMLElement).offsetLeft - (containerRect.width / 2) + (wrapperRect.width / 2)
          container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
          
          // For stacked cards (services/experience), highlight only the target
          setTimeout(() => {
            // Remove active and stacked classes from all
            document.querySelectorAll('.card-wrapper').forEach(w => {
              w.classList.remove('active', 'has-stacked')
            })
            document.querySelectorAll('[data-page]').forEach(c => {
              c.classList.remove('card-highlight')
            })
            
            // Add active to wrapper
            wrapper.classList.add('active')
            
            // Special handling for stacked cards
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
