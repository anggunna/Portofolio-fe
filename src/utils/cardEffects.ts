export const initCardEffects = () => {
  const container = document.getElementById('cards-container')
  const dots = document.querySelectorAll('.dot')
  const cardWrappers = document.querySelectorAll('.card-wrapper')

  const updateCardEffects = () => {
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
      if (closestIndex === 0) {
        verticalTextLeft.style.opacity = '1'
      } else {
        verticalTextLeft.style.opacity = '0'
      }
      
      if (closestIndex === cardWrappers.length - 1) {
        verticalTextRight.style.opacity = '1'
      } else {
        verticalTextRight.style.opacity = '0'
      }
    }
  }

  setTimeout(updateCardEffects, 100)

  if (container) {
    container.addEventListener('scroll', updateCardEffects)
  }

  return { container, updateCardEffects }
}
