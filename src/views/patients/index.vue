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
          <router-link :to="scope.row.id + '/edit'">
            <el-button type="primary" size="small">Редактировать</el-button>
          </router-link>
          <el-button type="success" @click="handleUpdate(scope.row)">Просмотр</el-button>
          <el-button type="danger" @click="handleUpdate(scope.row)">Удалить</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import { getAll as getAllPatients } from '@/api/patient'
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
    }
  }
}
</script>
<style>

</style>
