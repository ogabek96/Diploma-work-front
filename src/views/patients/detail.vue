<template>
  <div class="details-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>О пациенте</span>
      </div>
      <div id="printData">
        <table>

          <tr> <td>{{ $t('patients.fullName.label') }}:</td> <td>{{ formData.fullName }}</td></tr>
          <tr> <td>{{ $t('patients.gender.label') }}:</td>  <td>{{ $t(`patients.gender.${formData.gender}`) }}</td></tr>
          <tr> <td>{{ $t('patients.birthDate.label') }}:</td>  <td>{{ formatDate(formData.birthDate) }}</td></tr>
          <tr> <td>{{ $t('patients.bloodGroup.label') }}: </td> <td>{{ $t(`patients.bloodGroup.${formData.bloodGroup}`) }}</td></tr>
          <tr> <td>{{ $t('patients.resusFactor.label') }}:</td> <td> {{ $t(`patients.resusFactor.${formData.resusFactor}`) }}</td></tr>
          <tr> <td>{{ $t('patients.nationality.label') }}:</td> <td> {{ formData.nationality }}</td></tr>
          <tr> <td> {{ $t('patients.patientId.label') }}: </td> <td>{{ formData.patientId }}</td></tr>
          <tr> <td>{{ $t('patients.branchName.label') }}:</td>  <td>{{ formData.branchName }}</td></tr>
          <tr> <td>{{ $t('patients.patientStatus.label') }}:</td>  <td>{{ $t(`patients.patientStatus.${formData.patientStatus}`) }}</td></tr>
          <tr> <td>{{ $t('patients.patientType.label') }}:</td> <td> {{ $t(`patients.patientType.${formData.patientType}`) }}</td></tr>
          <tr> <td> {{ $t('patients.ambulatoryCardNumber.label') }}:</td> <td> {{ formData.ambulatoryCardNumber }}</td></tr>
          <tr> <td>{{ $t('patients.patientHistoryNumber.label') }}:</td><td>  {{ formData.patientHistoryNumber }}</td></tr>
          <tr v-if="formData.country"> <td>{{ $t('patients.country.label') }}:</td>  <td>{{ formData.country }}</td></tr>
          <tr v-if="formData.province"> <td>{{ $t('patients.province.label') }}: </td><td> {{ formData.province }}</td></tr>
          <tr> <td> {{ $t('patients.address.label') }}: </td> <td>{{ formData.address }}</td></tr>
          <tr> <td>{{ $t('patients.phone.label') }}:</td> <td> {{ formData.phone }} </td></tr>
          <tr> <td>{{ $t('patients.passportSerialNumber.label') }}:</td> <td> {{ formData.passportSerialNumber }}</td></tr>

        </table>

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
    },
    formatDate(date) {
      function appendLeadingZeroes(n) {
        if (n <= 9) {
          return '0' + n
        }
        return n
      }
      const currentDate = new Date(date)
      return `${appendLeadingZeroes(currentDate.getDate())}-${appendLeadingZeroes(currentDate.getMonth() + 1)}-${currentDate.getFullYear()}`
    }
  }
}
</script>

<style scoped>
.card-footer {
  float: right;
  padding: 15px;
}
table {
    margin: auto;
    line-height: 1.5em;
    border: solid 1px black;
    border-collapse: collapse;
}
tr, td {
  border: solid 1px black;
  margin: 0;
}
</style>
