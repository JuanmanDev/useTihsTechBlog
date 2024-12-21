<template>
  <div class="relative max-h-96">
    <div class="max-h-96">
      <img 
        :src="currentImage" 
        :alt="'Product image ' + (currentIndex + 1)" 
        class="w-full h-full object-cover overflow-hidden max-h-96"
      />
    </div>
    
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button 
        v-for="(image, index) in images" 
        :key="index"
        @click="currentIndex = index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'"
      ></button>
    </div>

    <button 
      @click="prev" 
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="next" 
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const currentImage = computed(() => props.images[currentIndex.value])

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1
}
</script>