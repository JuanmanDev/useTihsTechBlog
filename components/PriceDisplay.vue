<template>
  <div 
    class="flex flex-col items-end"
    v-motion
    :initial="{ scale: 1 }"
    :enter="{ scale: [1, 1.1, 1] }"
    :delay="1000"
  >
    <div v-if="oldPrice" class="relative">
      <span 
        ref="oldPriceRef"
        class="text-lg text-gray-500 line-through transition-all duration-500"
        :class="{ 'opacity-0': showNewPrice }"
      >
        ${{ formattedOldPrice }}
      </span>
    </div>
    <span 
      ref="priceRef"
      class="text-3xl font-bold text-green-600"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :delay="1500"
    >
      ${{ formattedPrice }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  price: {
    type: Number,
    required: true
  },
  oldPrice: {
    type: Number,
    default: null
  }
})

const showNewPrice = ref(false)
const formattedPrice = ref(props.price)
const formattedOldPrice = ref(props.oldPrice)

onMounted(() => {
  if (props.oldPrice) {
    formattedPrice.value = props.oldPrice
    setTimeout(() => {
      const duration = 1000
      const steps = 20
      const priceDiff = props.oldPrice - props.price
      const stepValue = priceDiff / steps
      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++
        formattedPrice.value = Math.round((props.oldPrice - (stepValue * currentStep)) * 100) / 100
        
        if (currentStep === steps) {
          clearInterval(interval)
          showNewPrice.value = true
        }
      }, duration / steps)
    }, 500)
  }
})
</script>