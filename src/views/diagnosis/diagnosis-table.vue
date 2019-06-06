<template>
  <div class="patients-table">
    <div class="filter-container">
      <router-link :to="'diagnosis/add'">
        <el-button class="filter-item" style="margin: 15px 10px;" type="primary" icon="el-icon-edit">Добавить данные</el-button>
      </router-link>

    </div>
    <el-table v-loading="loading" :data="tableData" border fit highlight-current-row style="width: 100%;">

      <el-table-column :label="'Сопутствующие заболевания:'" prop="patientId" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.accomanyingIllness }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Аллергостатус'" prop="fullname" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ formatDate(scope.row.allergoStatus) }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Метод подтверждения диагноза:'" prop="gender" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.diagnosisConfirmationMethod }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Число опухолей:'" prop="gender" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.tumorsNumber }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Число опухолей:'" prop="gender" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.diagnosisConfirmationMethod }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Действия'" prop="bloodGroup" sortable="custom" align="center" class-name="small-padding fixed-width" width="400px">
        <template slot-scope="scope">
          <router-link :to="'diagnosis/' + scope.row.id + '/edit'">
            <el-button type="primary" size="small">Редактировать</el-button>
          </router-link>
          <router-link :to="'diagnosis/' + scope.row.id + '/detail'">
            <el-button type="success">Просмотр</el-button>
          </router-link>
          <el-button type="danger" @click="handleDelete(scope.row)">Удалить</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import { getAll, deleteById } from '@/api/diagnosis'
export default {

  data() {
    return {
      loading: true,
      tableData: null,
      currentPatientId: this.$route.params && this.$route.params.id
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.loading = true

      const diagnosisReq = await getAll(this.currentPatientId)
      this.tableData = diagnosisReq.data.payload.diagnosis

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
    handleDelete(diagnosis) {
      this.$confirm(`Вы действительно хотите удалить данные о пациенте`, 'Внимание', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Нет',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.delete(diagnosis)
        })
    },
    delete(diagnosis) {
      this.loading = true
      deleteById(diagnosis.id)
        .then(res => {
          const index = this.tableData.indexOf(diagnosis)
          this.tableData.splice(index, 1)
          if (res.data.code === 200) {
            this.$notify({
              title: 'Успешно',
              message: 'Данные о пациенте успешно удалены.',
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
