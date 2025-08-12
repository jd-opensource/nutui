// Mock Canvas API for Vitest
import { vi } from 'vitest'

// Mock HTMLCanvasElement.getContext
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: vi.fn(() => ({
    fillRect: vi.fn(),
    clearRect: vi.fn(),
    getImageData: vi.fn(() => ({
      data: new Array(4)
    })),
    putImageData: vi.fn(),
    createImageData: vi.fn(() => []),
    setTransform: vi.fn(),
    drawImage: vi.fn(),
    save: vi.fn(),
    fillText: vi.fn(),
    restore: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    closePath: vi.fn(),
    stroke: vi.fn(),
    translate: vi.fn(),
    scale: vi.fn(),
    rotate: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    measureText: vi.fn(() => ({ width: 0 })),
    transform: vi.fn(),
    rect: vi.fn(),
    clip: vi.fn()
  })),
  writable: true,
  configurable: true
})

// Mock HTMLCanvasElement.toDataURL
Object.defineProperty(HTMLCanvasElement.prototype, 'toDataURL', {
  value: vi.fn(() => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='),
  writable: true,
  configurable: true
})

// Mock HTMLCanvasElement.toBlob
Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
  value: vi.fn((callback) => {
    const blob = new Blob([''], { type: 'image/png' })
    callback(blob)
  }),
  writable: true,
  configurable: true
})

// Mock window.devicePixelRatio
Object.defineProperty(window, 'devicePixelRatio', {
  value: 1,
  writable: true,
  configurable: true
})

// Mock Image constructor
global.Image = class MockImage {
  onload: (() => void) | null = null
  onerror: (() => void) | null = null
  src = ''
  crossOrigin = ''
  referrerPolicy = ''
  width = 0
  height = 0

  constructor() {
    setTimeout(() => {
      if (this.onload) {
        this.onload()
      }
    }, 0)
  }
} as any

// Mock createImageBitmap
global.createImageBitmap = vi.fn(() => Promise.resolve({
  width: 100,
  height: 100,
  close: vi.fn()
}))

// Mock OffscreenCanvas
global.OffscreenCanvas = class MockOffscreenCanvas {
  width: number
  height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  getContext() {
    return {
      fillRect: vi.fn(),
      clearRect: vi.fn(),
      drawImage: vi.fn(),
      getImageData: vi.fn(() => ({ data: new Array(4) })),
      putImageData: vi.fn()
    }
  }

  convertToBlob() {
    return Promise.resolve(new Blob([''], { type: 'image/png' }))
  }
} as any
