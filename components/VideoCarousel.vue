<template>
  <div class="bg-white rounded-lg shadow-lg p-8">
    <h2 class="text-2xl font-bold mb-6">Product Videos</h2>
    <div class="relative">
      <!-- Gradient Overlays -->
      <div class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

      <!-- Navigation Buttons -->
      <button 
        @click="scroll('left')" 
        class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        @click="scroll('right')" 
        class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Videos Container -->
      <div 
        ref="container"
        class="flex overflow-x-auto space-x-4 pb-4  justify-evenly"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
      >
        <div 
          v-for="video in videos" 
          :key="video.id" 
          class="flex-none w-96 snap-start video-child"
        >
          <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              v-if="video.platform === 'youtube'"
              class="w-full h-full"
              :src="'https://www.youtube.com/embed/' + video.id"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              v-else-if="video.platform === 'tiktok'"
              class="w-full h-full"
              :src="'https://www.tiktok.com/embed/' + video.id"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p class="mt-2 text-sm text-gray-600">{{ video.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videos: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return value.every(video => 
        video.platform && 
        video.id && 
        video.title && 
        ['youtube', 'tiktok'].includes(video.platform)
      )
    }
  }
})

const container = ref(null)
let touchStartX = 0

const scroll = (direction) => {
  if (!container.value) return
  const scrollAmount = container.value.clientWidth * 0.8
  container.value.scrollBy({
    left: direction === 'right' ? scrollAmount : -scrollAmount,
    behavior: 'smooth'
  })
}

const touchStart = (e) => {
  touchStartX = e.touches[0].clientX
}

const touchMove = (e) => {
  if (!touchStartX) return
  const touchEndX = e.touches[0].clientX
  const diff = touchStartX - touchEndX
  container.value.scrollLeft += diff / 5
  touchStartX = touchEndX
}

const touchEnd = () => {
  touchStartX = 0
}
</script>

<style scoped>
.snap-start {
  scroll-snap-align: start;
}
.video-child:first-child {
  margin-left: 100px;
}
.video-child:last-child {
  margin-right: 100px;
}
</style>