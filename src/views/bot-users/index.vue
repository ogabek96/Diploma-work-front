<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        :placeholder="'Name'"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >{{ $t('table.search') }}</el-button>
      <router-link :to="'/companies/create'">
        <el-button
          class="filter-item"
          style="margin-left: 10px;"
          type="primary"
          icon="el-icon-edit"
        >{{ $t('table.add') }}</el-button>
      </router-link>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('table.export') }}</el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :key="tableKey"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column :label="'Name'" prop="name" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ Object.values(scope.row.name)[0] }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="'Bot name'" prop="bot.name" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bot.firstName }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="'Username'" prop="bot.username" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bot.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.actions')"
        align="center"
        width
        class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link :to="'/companies/edit/'+scope.row.id">
            <el-button type="primary">{{ $t('table.edit') }}</el-button>
          </router-link>
          <el-button type="danger" @click="handleDelete(scope.row)">{{ $t('table.delete') }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />

  </div>
</template>

<script>

import { MessageBox } from 'element-ui'
import waves from '@/directive/waves' // Waves directive
import store from '@/store'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import botLanguages from '@/mixins/bot-languages'
import botCurrencies from '@/mixins/bot-currencies'
import {
  getAll as getAllCompanies,
  deleteById as deleteCompanyById
} from '@/api/company'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  mixins: [botLanguages, botCurrencies],
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: this.getLanguagesObject(),
        currency: '',
        bot: {
          token: ''
        }
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      rules: {
        name: [{ required: true, message: 'Name is required', trigger: 'blur' }],
        currency: [{ required: true, message: 'Name is required', trigger: 'blur' }],
        bot: {
          token: [
            { required: true, message: 'Bot token is required', trigger: 'blur' }
          ]
        }
      },
      downloadLoading: false,
      languages: this.getLanguagesArray(),
      currencies: this.getCurrenciesArray()
    }
  },
  created() {
    if (!this.getOwnerId()) {
      this.listLoading = false
      this.$router.push('/users/index')
      this.$message({
        showClose: true,
        message: 'Please select owner first',
        type: 'error'
      })
      return
    }
    this.getList()
  },
  methods: {
    getOwnerId() {
      return store.getters.ownerId
    },
    getList() {
      this.listLoading = true
      getAllCompanies(this.getOwnerId()).then(response => {
        this.list = response.data.payload.companies
        this.total = response.data.payload.companies.length
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleDelete(row) {
      MessageBox.confirm(
        `Are you sure to delete a company with name ${row.name}`,
        'Confirm delete',
        {
          confirmButtonText: 'Yes',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(() => {
          this.deleteData(row.id)
        })
        .catch(() => {
          console.log('Cancel')
        })
    },
    deleteData(companyId) {
      deleteCompanyById(this.getOwnerId(), companyId).then(res => {
        if (res.data.code === 200) {
          this.$notify({
            title: 'Success',
            message: 'Successfully deleted',
            type: 'success',
            duration: 2000
          })
          const index = this.list.indexOf(companyId)
          this.list.splice(index, 1)
        } else {
          // handle other response codes
        }
      })
    }
  }
}
</script>
