<template>
  <div v-loading="loading" class="createItem-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Редактирования данных о пациенте</span>
      </div>

      <passport-form v-model="passportFormData"/>
      <div class="card-footer">
        <el-button type="primary" @click="save">Сохранить</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>
import waves from '@/directive/waves' // Waves directive
import passportForm from '@/components/PassportForm'

import { update as updatePatient, getById as getPatientById } from '@/api/patient'

export default {
  components: { passportForm },
  directives: { waves },
  data() {
    return {
      loading: false,
      passportFormData: {},
      currentPatientId: this.$route.params && this.$route.params.id
    }
  },
  created() {
    this.fillForm()
  },
  methods: {
    async fillForm() {
      this.loading = true
      getPatientById(this.currentPatientId)
        .then(patientReq => {
          this.passportFormData = patientReq.data.payload.patient
        })
      this.loading = false
    },
    save() {
      this.loading = true
      updatePatient(this.passportFormData)
        .then(res => {
          if (res.data.code === 200) {
            this.loading = false
            this.$router.push('/patients/index')
            this.$notify({
              title: 'Успешно',
              message: 'Данные о пациенте успешно редактирован.',
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
