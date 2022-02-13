# Ripple directive

```vue
<button v-ripple class="btn-example">
  Normal
</button>
<button v-ripple="'rgba(99, 249, 8, 0.71)'">
  Green
</button>
<button v-ripple.mouseover>
  MouseOver
</button>
<button v-ripple.mouseout>
  MouseOut
</button>
<button v-ripple.dblclick>
  Double Click
</button>
```

<RippleExample />

<script setup>
import RippleExample from './RippleExample.vue'
</script>