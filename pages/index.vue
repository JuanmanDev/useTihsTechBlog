<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-12"
      >
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Essential Tech for Modern Life</h1>
        <p class="text-xl text-gray-600 mb-8">Discover the best devices that will transform your daily experience</p>
        
        <div class="max-w-xl mx-auto">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ContentList path="/products" v-slot="{ list }" :limit="searchQuery ? undefined : 10">
          <div
            v-for="product in filteredProducts(list)"
            :key="product._path"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="200"
            class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <NuxtLink :to="product._path">
              <img :src="product.image" :alt="product.title" class="w-full h-64 object-cover">
              <div class="p-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ product.title }}</h2>
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
                  <div class="flex flex-col">
                    <span v-if="product.oldPrice" class="text-sm text-gray-500 line-through">${{ product.oldPrice }}</span>
                    <span class="text-2xl font-bold text-green-600">${{ product.price }}</span>
                  </div>
                  <div class="space-x-2">
                    <a :href="product.amazonUrl" target="_blank" class="inline-flex items-center px-3 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transform hover:scale-105 active:scale-95 transition">
                      Amazon
                    </a>
                    <a :href="product.aliexpressUrl" target="_blank" class="inline-flex items-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transform hover:scale-105 active:scale-95 transition">
                      AliExpress
                    </a>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </ContentList>
      </div>
    </div>
    <footer class="bg-white py-6 mt-12">
      <div class="text-center text-gray-600">
        Copyright 2025
      </div>
    </footer>
  </div>
</template>

<script setup>
const searchQuery = ref('')

const filteredProducts = (list) => {
  if (!searchQuery.value) return list
  const query = searchQuery.value.toLowerCase()
  return list.filter(product => 
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  )
}
</script>