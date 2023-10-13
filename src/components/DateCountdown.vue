<template>
  <span class="date-countdown">
    <template v-if="isFinished">{{ endText }}</template>

    <slot
      v-else
      :days="entities.days.value"
      :hours="entities.hours.value"
      :minutes="entities.minutes.value"
      :seconds="entities.seconds.value"
    ></slot>
  </span>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  endDate: {
    type: [Date, Number, String],
    required: true,
  },

  startDate: {
    type: [Date, Number, String],
    default: new Date(),
  },

  endText: {
    type: String,
    default: '0 seconds',
  },
})

const progress = ref(100)
const timeInterval = ref(undefined)
const entities = ref({
  days: { text: 'd', value: 1 },
  hours: { text: 'h', value: 1 },
  minutes: { text: 'm', value: 1 },
  seconds: { text: 's', value: 1 },
})

const isFinished = computed(() => {
  const { seconds, minutes, hours, days } = entities.value

  return !(seconds.value > 0 || minutes.value > 0 || hours.value > 0 || days.value > 0)
})

onMounted(() => {
  updateTimer()
  timeInterval.value = setInterval(updateTimer, 1000)
})

onUnmounted(endCountdown)

function updateTimer() {
  if (isFinished.value) {
    return endCountdown()
  }

  getTimeRemaining()
  updateProgressBar()
}

function getTimeRemaining() {
  const time = Date.parse(new Date(props.endDate).toString()) - Date.parse(new Date().toString())

  if (time >= 0) {
    entities.value.seconds.value = Math.floor(time / 1000 % 60)
    entities.value.minutes.value = Math.floor(time / 1000 / 60 % 60)
    entities.value.hours.value = Math.floor(time / (1000 * 60 * 60) % 24)
    entities.value.days.value = Math.floor(time / (1000 * 60 * 60 * 24))
  } else {
    entities.value.seconds.value = entities.value.minutes.value = entities.value.hours.value = entities.value.days.value = 0
    progress.value = 0
  }
}

function updateProgressBar() {
  let start = Date.parse(new Date(props.startDate).toString())
  let current = Date.parse(new Date().toString())
  let end = Date.parse(new Date(props.endDate).toString())
  let interval = parseFloat((current - start) / (end - start) * 100).toFixed(2)

  progress.value = 100 - interval
}

function endCountdown() {
  clearTimeout(timeInterval.value)
  progress.value = 0
}
</script>