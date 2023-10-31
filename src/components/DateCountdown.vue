<template>
  <span class="date-countdown">
    <template v-if="isFinished && endText">{{ endText }}</template>

    <slot
      v-else-if="slots.default"
      :days="entitiesValues.days"
      :hours="entitiesValues.hours"
      :minutes="entitiesValues.minutes"
      :seconds="entitiesValues.seconds"
    ></slot>

    <template v-else>
      <template v-if="alwaysShowDays || Number(entities.days)">{{ entitiesValues.days }}:</template>{{ entitiesValues.hours }}:{{ entitiesValues.minutes }}:{{ entitiesValues.seconds }}
    </template>
  </span>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, useSlots } from 'vue'

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
  },

  alwaysShowDays: {
    type: Boolean,
    default: false,
  },
})

const slots = useSlots()

const progress = ref(100)
const timeInterval = ref(undefined)
const entities = ref({ days: 1, hours: 1, minutes: 1, seconds: 1 })
const entitiesValues = computed(() => {
  const entitieToText = (value) => Number(value) > 9 ? value : `0${value}`

  return {
    days: entitieToText(entities.value.days),
    hours: entitieToText(entities.value.hours),
    minutes: entitieToText(entities.value.minutes),
    seconds: entitieToText(entities.value.seconds),
  }
})

const isFinished = computed(() => {
  const { seconds, minutes, hours, days } = entities.value

  return !(seconds > 0 || minutes > 0 || hours > 0 || days > 0)
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
    entities.value.seconds = Math.floor(time / 1000 % 60)
    entities.value.minutes = Math.floor(time / 1000 / 60 % 60)
    entities.value.hours = Math.floor(time / (1000 * 60 * 60) % 24)
    entities.value.days = Math.floor(time / (1000 * 60 * 60 * 24))
  } else {
    entities.value.seconds = entities.value.minutes = entities.value.hours = entities.value.days = 0
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