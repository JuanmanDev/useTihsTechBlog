<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
      <div class="flex items-center mb-2">
        <div class="flex text-yellow-400">
          <svg v-for="i in Math.floor(product.rating)" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span class="ml-2 text-gray-600">{{ product.rating }}/5</span>
      </div>
      <p class="text-gray-600 mb-4">{{ product.description }}</p>
      <div class="flex justify-between items-center">
        <span class="text-2xl font-bold text-green-600">${{ product.price }}</span>
        <div class="space-x-2">
          <a v-if="product.amazonUrl" :href="product.amazonUrl" target="_blank" class="inline-flex items-center px-3 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500">
            Amazon
          </a>
          <a v-if="product.aliexpressUrl" :href="product.aliexpressUrl" target="_blank" class="inline-flex items-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            AliExpress
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>