<template>
  <div class="createItem-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Модуль диагностический</span>
      </div>

      <diagnosis-form v-model="diagnosisFormData"/>
      <div class="card-footer">
        <el-button type="primary" @click="add">Добавить</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>

import diagnosisForm from '@/components/DiagnosisForm'
import { getById, update as updateData } from '@/api/first-evaluation'
export default {
  components: { diagnosisForm },
  data() {
    return {
      diagnosisFormData: {},
      currentPatientId: this.$route.params && this.$route.params.patientId,
      diagnosisId: this.$route.params && this.$route.params.id
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const diagnosisReq = await getById(this.diagnosisId)
      this.diagnosisFormData = diagnosisReq.data.payload.diagnosis
    },
    add() {
      updateData(this.diagnosisFormData)
        .then(res => {
          if (res.data.code === 200) {
            this.$router.push({ name: 'diagnosisTable', params: { id: this.currentPatientId }})
            this.$notify({
              title: 'Успешно',
              message: 'Данные успешно редактированы.',
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
