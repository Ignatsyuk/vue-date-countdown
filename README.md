# Vue Date Countdown

Simple Vue 3 component for countdown to a specific date.

## Install

### NPM

```bash
npm install vue-date-countdown
```

Register locally in your component
```js
import DateCountdown from 'vue-date-countdown';

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

```html
<DateCountdown 
    :start-date="Date.now()" 
    :end-date="Date.now() + 60000"
/>
``` 

### props
#### - `end-date`
[required] The date on which the countdown will end

```html
<DateCountdown :end-date="Date.now() + 60000" />
```

#### - `start-date`
The date from which the countdown began. By default, it's `new Date()`

```html
<DateCountdown
  :start-date="Date.now()"
  :end-date="Date.now() + 60000"
/>
```

#### - `end-text`
Text that will be shown after the countdown ends. By default, it's `0 sec`

```html
<DateCountdown
  :end-date="Date.now() + 60000"
  end-text="Countdown is over! Happy Birthday!"
/>
```

## Coming soon

* Ability to customize text in countdown
* Styling and more settings

## License

MIT License