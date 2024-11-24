<template>
  <div class="flex justify-center space-x-4">
    <a 
      :href="amazonUrl" 
      target="_blank" 
      class="inline-flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
    >
      <img src="/amazon-logo.svg" alt="Amazon" class="w-6 h-6 mr-2" />
      <span class="mr-2">Buy on Amazon</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
    <a 
      :href="aliexpressUrl" 
      target="_blank" 
      class="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
    >
      <img src="/aliexpress-logo.svg" alt="AliExpress" class="w-6 h-6 mr-2" />
      <span class="mr-2">Buy on AliExpress</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </a>
  </div>
</template>

<script setup>
defineProps({
  amazonUrl: {
    type: String,
    required: true
  },
  aliexpressUrl: {
    type: String,
    required: true
  }
})
</script>