<template>
  <item-edit :is-edit="false" />
</template>

<script>
import ItemEdit from './components/ItemEdit'
export default {
  name: 'CreateForm',
  components: { ItemEdit }
}
</script>
