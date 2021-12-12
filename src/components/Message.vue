<template>
	<span>Message: {{ msg }}</span>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: String
  }
}
</script>