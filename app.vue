<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <NuxtLink to="/" class="text-2xl font-bold text-gray-900 hover:text-gray-700 transition">
            Use this Tech 👇🏻
          </NuxtLink>
          <div class="w-1/2">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search products..."
              class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              @input="handleSearch"
            />
          </div>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
const searchQuery = ref('')
const router = useRouter()

const handleSearch = () => {
  if (router.currentRoute.value.path !== '/') {
    router.push({
      path: '/',
      query: { search: searchQuery.value }
    })
  }
}

// Watch for route changes to update search
watch(() => router.currentRoute.value.query.search, (newSearch) => {
  if (newSearch !== searchQuery.value) {
    searchQuery.value = newSearch || ''
  }
}, { immediate: true })

// Provide search query to all components
provide('searchQuery', searchQuery)
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>