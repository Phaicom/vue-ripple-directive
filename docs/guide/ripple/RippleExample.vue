<script setup>
import { Ripple as vRipple } from '../../../src'
</script>

<template>
  <div class="button__container">
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
  </div>
</template>
<style scoped>
button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.button__container{
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.button__container > button{
  width: 100px;
  height: 50px;
  color: black;
  border: 2px solid #e0e0e0e0;
  border-radius: 10px;
}

.button__container > button:focus{
  border: 2px solid gray;
}
</style>
