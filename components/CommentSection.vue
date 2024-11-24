<template>
  <div class="space-y-6">
    <!-- Add Comment Form -->
    <form @submit.prevent="addComment" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          v-model="newComment.name"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label for="comment" class="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          id="comment"
          v-model="newComment.content"
          rows="4"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Comment
      </button>
    </form>

    <!-- Comments List -->
    <div class="space-y-4">
      <div v-if="comments.length === 0" class="text-gray-500 text-center py-4">
        Be the first to comment!
      </div>
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="bg-gray-50 rounded-lg p-4"
      >
        <div class="flex justify-between items-start">
          <div class="font-medium text-gray-900">{{ comment.name }}</div>
          <div class="text-sm text-gray-500">{{ formatDate(comment.date) }}</div>
        </div>
        <p class="mt-2 text-gray-700">{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  productId: {
    type: String,
    required: true
  }
})

const comments = ref([])
const newComment = ref({
  name: '',
  content: '',
})

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function addComment() {
  const comment = {
    id: Date.now(),
    ...newComment.value,
    date: new Date().toISOString(),
  }
  
  comments.value.unshift(comment)
  newComment.value = {
    name: '',
    content: ''
  }
}
</script>