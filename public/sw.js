// Service Worker for aggressive image caching
const CACHE_NAME = 'portfolio-images-v1'
const IMAGE_CACHE_NAME = 'portfolio-images-cache-v1'

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
}

// Images to precache (critical images)
const PRECACHE_IMAGES = [
  '/aperture-landscape-1.jpg',
  '/aperture-landscape-2.jpg',
  '/aperture-landscape-3.jpg',
  '/Checkit Login.png',
  '/LockIn.png'
]

// Install event - precache critical images
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME).then((cache) => {
      console.log('Precaching critical images')
      return cache.addAll(PRECACHE_IMAGES)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Handle image requests with cache-first strategy
  if (request.destination === 'image' || /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('Serving image from cache:', url.pathname)
            return cachedResponse
          }

          // Not in cache, fetch from network
          return fetch(request).then((response) => {
            // Cache successful responses
            if (response.status === 200) {
              console.log('Caching image:', url.pathname)
              cache.put(request, response.clone())
            }
            return response
          }).catch(() => {
            // Return a fallback image if network fails
            return new Response(
              '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#1a1a1a"/><text x="50%" y="50%" text-anchor="middle" fill="#dc2626">Image unavailable</text></svg>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            )
          })
        })
      })
    )
  }
  
  // Handle other requests with network-first strategy
  else {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match(request)
      })
    )
  }
})
