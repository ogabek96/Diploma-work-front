<template>
  <company-edit :is-edit="false" />
</template>

<script>
import CompanyEdit from './components/CompanyEdit'
export default {
  name: 'CreateForm',
  components: { CompanyEdit }
}
</script>
