<template>
  <div v-loading="isLoading" class="detailCompany-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Company detail</span>
      </div>
      <p>ID: {{ pageData.id }}</p>
      <p>Name: </p>
    </el-card>
  </div>
</template>

<script>
import store from '@/store'
import { getById as getCompanyById } from '@/api/company'
export default {
  data() {
    return {
      pageData: {},
      isLoading: true
    }
  },
  created() {
    const companyId = this.$route.params && this.$route.params.id
    this.fillPage(companyId)
  },
  methods: {
    getOwnerId() {
      return store.getters.ownerId
    },
    fillPage(id) {
      getCompanyById(this.getOwnerId(), id)
        .then(res => {
          this.pageData = res.data.payload.company
          this.isLoading = false
        })
    }
  }
}
</script>

<style>

</style>
