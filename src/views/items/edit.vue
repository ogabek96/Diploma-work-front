<template>
  <item-edit :is-edit="true" />
</template>

<script>
import ItemEdit from './components/ItemEdit'
export default {
  name: 'EditForm',
  components: { ItemEdit }
}
</script>
