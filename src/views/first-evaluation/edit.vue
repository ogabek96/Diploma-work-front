<template>
  <div class="createItem-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Модуль первичного выявления</span>
      </div>

      <first-evaluation-form v-model="firstEvaluationFormData"/>
      <div class="card-footer">
        <el-button type="primary" @click="add">Добавить</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>

import firstEvaluationForm from '@/components/FirstEvaluationForm'
import { getById, update as updateData } from '@/api/first-evaluation'
export default {
  components: { firstEvaluationForm },
  data() {
    return {
      firstEvaluationFormData: {},
      currentPatientId: this.$route.params && this.$route.params.patientId,
      firstEvaluationId: this.$route.params && this.$route.params.id
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const firstEvaluationReq = await getById(this.firstEvaluationId)
      this.firstEvaluationFormData = firstEvaluationReq.data.payload.firstEvaluation
    },
    add() {
      updateData(this.firstEvaluationFormData)
        .then(res => {
          if (res.data.code === 200) {
            this.$router.push({ name: 'firstEvaluationTable', params: { id: this.currentPatientId }})
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
