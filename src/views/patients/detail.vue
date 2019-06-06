<template>
  <div class="details-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>О пациенте</span>
      </div>
      <div id="printData">
        <div>Ф.И.О: {{ formData.fullName }}</div>
        <div>Пол: {{ formData.gender }}</div>
        <div>Дата рождения: {{ formData.birthDate }}</div>
        <div>Группа крови по системе АВО: {{ formData.bloodGroup }}</div>
        <div>Резус-фактор: {{ formData.resusFactor }}</div>
        <div>Национальность: {{ formData.nationality }}</div>
        <div>ID больного:  {{ formData.patientId }}</div>
        <div>Наименование отделения: {{ formData.branchName }}</div>
        <div>Последний известный статус больного: {{ formData.patientStatus }}</div>
        <div>Тип больного: {{ formData.patientType }}</div>
        <div>№ амбулаторной карты: {{ formData.ambulatoryCardNumber }}</div>
        <div>№ истории болезни: {{ formData.patientHistoryNumber }}</div>
        <h5>Адрес больного:</h5>
        <div>Страна: {{ formData.country }}</div>
        <div>Область: {{ formData.province }}</div>
        <div>Адрес: {{ formData.address }}</div>
        <div>Телефон: {{ formData.phone }}</div>
        <div>Серия паспорта: {{ formData.passportSerialNumber }}</div>
      </div>
      <div class="card-footer">
        <el-button v-print="'#printData'" type="primary" icon="el-icon-printer">Печать</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getById } from '@/api/patient'
export default {
  data() {
    return {
      currentPatientId: this.$route.params && this.$route.params.id,
      formData: {}
    }
  },
  async created() {
    await this.init()
  },
  methods: {
    async init() {
      const apiReq = await getById(this.currentPatientId)
      this.formData = apiReq.data.payload.patient
    }
  }
}
</script>

<style>
.card-footer {
  float: right;
  padding: 15px;
}
</style>
