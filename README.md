# Vue Date Countdown

Simple Vue 3 component for countdown to a specific date.

## Install

### NPM

```bash
npm install vue-date-countdown
```

Register locally in your component
```js
import { DateCountdown } from 'vue-date-countdown';

export default {
    components: {
      DateCountdown
    }
};
```

Or register globally
```js
import DateCountdown from 'vue-date-countdown';
import { createApp } from 'vue';

const app = createApp(App);

app.use(DateCountdown);
```

## Usage

Use object from `v-slot` to get access to countdown values `days`, `hours`, `minutes` and `hours`:

```html
<DateCountdown v-slot="date" :end-date="Date.now() + 60000">
  Before Birthday:
  {{ date.days }} days
  {{ date.hours }} hours
  {{ date.minutes }} minutes
  {{ date.seconds }} seconds
</DateCountdown>
``` 

Or get the values directly:

```html
<DateCountdown
  v-slot="{ days, hours, minutes, seconds }"
  :end-date="Date.now() + 60000"
>
  {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }} before Birthday!
</DateCountdown>
``` 

### props
#### - `end-date`
[required] The date on which the countdown will end

```html
<DateCountdown :end-date="Date.now() + 60000" v-slot="date">
  {{ date.minutes }} min
</DateCountdown>
```

#### - `start-date`
The date from which the countdown began. By default, it's `new Date()`

```html
<DateCountdown
  :start-date="Date.now()"
  :end-date="Date.now() + 60000"
  v-slot="date"
>
  {{ date.minutes }} min
</DateCountdown>
```

#### - `end-text`
Text that will be shown after the countdown ends

```html
<DateCountdown
  :end-date="Date.now() + 60000"
  end-text="Countdown is over! Happy Birthday!"
  v-slot="date"
>
  {{ date.days }} days until Birthday...
</DateCountdown>
```

#### - `always-show-days`
Whether to show the `days` parameter if it is equal to `0`. By default, it's `false`

## Coming soon

* More settings and customization

## License

MIT License