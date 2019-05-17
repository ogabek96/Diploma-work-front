<template>
  <company-detail :is-edit="false" />
</template>

<script>
import CompanyDetail from './components/CompanyDetail'
export default {
  name: 'CreateForm',
  components: { CompanyDetail }
}
</script>
