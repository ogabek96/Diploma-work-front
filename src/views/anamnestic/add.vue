<template>
  <div class="createItem-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Модуль анамнестические данные</span>
      </div>

      <anamnestic-form v-model="anamnesticFormData"/>
      <div class="card-footer">
        <el-button type="primary" @click="add">Добавить</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>

import anamnesticForm from '@/components/AnamnesticForm'
import { create as createData } from '@/api/anamnestic'
export default {
  components: { anamnesticForm },
  data() {
    return {
      anamnesticFormData: {},
      currentPatientId: this.$route.params && this.$route.params.patientId
    }
  },
  methods: {
    add() {
      createData(this.currentPatientId, this.anamnesticFormData)
        .then(res => {
          if (res.data.code === 200) {
            this.$router.push({ name: 'anamnesticTable', params: { id: this.currentPatientId }})
            this.$notify({
              title: 'Успешно',
              message: 'Данные успешно добавлены',
              type: 'success',
              duration: 2000
            })
          }
        })
    }
  }
}
</script>

<style>
.box-card {
  margin: 10px;
}
.card-footer {
  float: right;
  margin: 10px;
  margin: 30px;
}
</style>
