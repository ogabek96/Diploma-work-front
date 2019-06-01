<template>
  <div v-loading="loading" class="createItem-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Регистрация пациента</span>
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

import { create as createPatient } from '@/api/patient'

export default {
  components: { passportForm },
  directives: { waves },
  data() {
    return {
      loading: false,
      passportFormData: {}
    }
  },
  methods: {
    save() {
      this.loading = true
      createPatient(this.passportFormData)
        .then(res => {
          if (res.data.code === 200) {
            this.loading = false
            this.$notify({
              title: 'Успешно',
              message: 'Пациент успешно зарегистрирован.',
              type: 'success',
              duration: 2000
            })

            this.$router.push('/patients/index')
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
