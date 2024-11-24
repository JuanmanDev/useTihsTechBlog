<template>
  <div class="min-h-screen bg-gray-100 py-12">
    
      <ContentDoc v-slot="{ doc }">
          <article 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            class="overflow-hidden"
          >
            <ProductGallery :images="doc.images || [doc.image]" />
            
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="mt-8 bg-white rounded-lg shadow-lg p-8">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h1 class="text-4xl font-bold text-gray-900">{{ doc.title }}</h1>
                    <time class="text-sm text-gray-500 block mb-2">{{ formatDate(doc.createdAt) }}</time>
                    <div class="flex items-center">
                      <StarRating :rating="doc.rating" />
                      <span class="ml-2 text-gray-600">{{ doc.rating }}/5</span>
                    </div>
                  </div>
                  <PriceDisplay 
                    :price="doc.price" 
                    :old-price="doc.oldPrice" 
                    class="text-right"
                  />
                </div>

                <BuyButtons 
                  :amazon-url="doc.amazonUrl" 
                  :aliexpress-url="doc.aliexpressUrl" 
                  class="mb-8"
                />
                
                <div class="prose prose-lg max-w-none">
                  <ContentRenderer :value="doc" />
                </div>

                <BuyButtons 
                  :amazon-url="doc.amazonUrl" 
                  :aliexpress-url="doc.aliexpressUrl" 
                  class="my-8"
                />
            </div>
          </div>
          </article>

        <div class="mt-8 overflow-hidden">
          <VideoCarousel 
            :videos="doc.videos || []"
          />
        </div>

        <!-- Comments Section -->
         
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6">Comments</h2>
            <div class="space-y-4">
              <CommentSection :productId="doc._path" />
            </div>
          </div>
        </div>
      </ContentDoc>
    <footer class="bg-white py-6 mt-12">
      <div class="text-center text-gray-600">
        Copyright 2025
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style>
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-800 mt-6 mb-3;
}

.prose ul {
  @apply list-disc list-inside space-y-2 my-4;
}

.prose li {
  @apply text-gray-700;
}

.prose p {
  @apply text-gray-700 leading-relaxed mb-4;
}

.prose p:nth-child(3n) {
  @apply mb-12;
}
</style>