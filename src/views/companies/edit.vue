<template>
  <company-edit :is-edit="true" />
</template>

<script>
import CompanyEdit from './components/CompanyEdit'
export default {
  name: 'EditForm',
  components: { CompanyEdit }
}
</script>
