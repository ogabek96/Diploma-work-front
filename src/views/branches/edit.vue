<template>
  <company-detail :is-edit="true" />
</template>

<script>
import CompanyDetail from './components/CompanyDetail'
export default {
  name: 'EditForm',
  components: { CompanyDetail }
}
</script>
