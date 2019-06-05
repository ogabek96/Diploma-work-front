<template>
  <div class="patients-table">
    <el-table v-loading="loading" :data="tableData" border fit highlight-current-row style="width: 100%;">

      <el-table-column :label="'ID больного'" prop="patientId" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.patientId }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Ф.И.О.'" prop="fullname" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.fullName }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Пол'" prop="gender" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.gender }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Дата рождения'" prop="birthDate" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ formatDate(scope.row.birthDate) }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Группа крови'" prop="bloodGroup" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bloodGroup }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Действия'" prop="bloodGroup" sortable="custom" align="center" class-name="small-padding fixed-width" width="400px">
        <template slot-scope="scope">

          <router-link :to="scope.row.id + '/diagnosis'">
            <el-button type="success">Выбрать</el-button>
          </router-link>

        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import { getAll as getAllPatients, deleteById as deletePatientById } from '@/api/patient'
export default {

  data() {
    return {
      loading: true,
      tableData: null
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.loading = true

      const patientsReq = await getAllPatients()
      this.tableData = patientsReq.data.payload.patients

      this.loading = false
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
    },
    handleDelete(patient) {
      this.$confirm(`Вы действительно хотите удалить данные о пациенте ${patient.fullName}`, 'Внимание', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Нет',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.delete(patient)
        })
    },
    delete(patient) {
      this.loading = true
      deletePatientById(patient.id)
        .then(res => {
          const index = this.tableData.indexOf(patient)
          this.tableData.splice(index, 1)
          if (res.data.code === 200) {
            this.$notify({
              title: 'Успешно',
              message: 'Данные о пациенте успешно удален.',
              type: 'success'
            })
          }
          this.loading = false
        })
    }
  }
}
</script>
<style>

</style>
