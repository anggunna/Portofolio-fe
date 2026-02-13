import { createNoise2D } from 'simplex-noise'

export const initLiquidAnimation = () => {
  const canvas = document.getElementById('liquid-canvas') as HTMLCanvasElement
  if (!canvas) return

  const ctx = canvas.getContext('2d')!
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const noise2D = createNoise2D()
  let time = 0

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
      const noiseX = noise2D(this.offset + time * this.speed, 0)
      const noiseY = noise2D(0, this.offset + time * this.speed)
      
      this.x = this.baseX + noiseX * 250
      this.y = this.baseY + noiseY * 250
    }

    draw() {
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
    
    ctx.fillStyle = '#fce7f3'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.filter = 'blur(60px)'

    liquidBlobs.forEach(blob => {
      blob.update(time)
      blob.draw()
    })

    ctx.filter = 'none'

    requestAnimationFrame(animate)
  }

  animate()

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
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
}
