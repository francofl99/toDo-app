<template>
  <div v-if="name == 'complete'">
      <CompleteButton />
  </div>
  <div v-else-if="name == 'delete'">
      <DeleteButton />
  </div>
</template>

<script>
import CompleteButton from './CompleteButton'
import DeleteButton from './DeleteButton'

export default {
    name: 'ButtonsLogic',

    props: {
        name: {
            type: String,
            required: true
        }
    },

    components: {
        CompleteButton,
        DeleteButton
    }

}
</script>

<style>

</style>