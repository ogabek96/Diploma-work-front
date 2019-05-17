<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input :placeholder="'Name'" v-model="listQuery.name" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('table.add') }}</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('table.export') }}</el-button>
    </div>

    <el-table v-loading="listLoading" :key="tableKey" :data="list" border fit highlight-current-row style="width: 100%;">

      <el-table-column :label="'Name'" prop="name" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Email'" prop="email" sortable="custom" align="center" width="250px">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Role'" prop="role" sortable="custom" align="center" width="150px">
        <template slot-scope="scope">
          <span>{{ textMap[scope.row.role] }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.actions')" align="center" width="" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
          <el-button type="danger" @click="handleDelete(scope.row)">{{ $t('table.delete') }}</el-button>
          <el-button v-if="scope.row.role === 'OWNER'" :disabled = "(scope.row.id === selectedOwnerId)" type="success" @click="handleSelect(scope.row)">Select</el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules="getValidateRules()" :model="temp" label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item :label="'Name'" prop="name">
          <el-input v-model="temp.name"/>
        </el-form-item>
        <el-form-item :label="'Email'" prop="email">
          <el-input v-model="temp.email"/>
        </el-form-item>
        <el-form-item :label="'Password'" prop="password">
          <el-input v-model="temp.password" type="password"/>
        </el-form-item>
        <el-form-item :label="'Role'" prop="role">
          <el-select v-model="temp.role" class="filter-item" placeholder="Please select">
            <el-option key="SUPER_ADMIN" label="SUPER ADMIN" value="SUPER_ADMIN"/>
            <el-option key="OWNER" label="OWNER" value="OWNER"/>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { MessageBox } from 'element-ui'
import { getAll as getAllUsers, create as createUser, update as updateUser, deleteById as deleteUserById } from '@/api/user'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { validUsername, validEmail } from '@/utils/validate'
import store from '@/store'
export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      count: 1,
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: '',
        email: '',
        role: ''
      },
      importanceOptions: [1, 2, 3],
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      temp: {
        id: undefined,
        name: '',
        email: '',
        password: '',
        role: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create',
        SUPER_ADMIN: 'SUPER ADMIN',
        OWNER: 'OWNER'
      },
      downloadLoading: false,
      selectedOwnerId: store.getters.ownerId
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getValidateRules() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validateEmail = (rule, value, callback) => {
        if (!validEmail(value)) {
          callback(new Error('Please enter the correct email'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      const rules = {
        name: [{ required: true, trigger: 'blur', validator: validateUsername }],
        email: [{ required: true, trigger: 'blur', validator: validateEmail }],
        role: [{ required: true, message: 'role is required', trigger: 'blur' }],
        password: []
      }
      if (this.dialogStatus === 'create') {
        rules.password = [{ required: true, trigger: 'blur', validator: validatePassword }]
      } else {
        rules.password = []
      }
      return rules
    },
    getList() {
      this.listLoading = true
      getAllUsers().then(response => {
        this.list = response.data.payload.users
        this.total = response.data.payload.users.length
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        name: '',
        email: '',
        password: '',
        role: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          createUser(this.temp)
            .then(res => {
              if (res.data.code === 200) {
                this.$notify({
                  title: 'Success',
                  message: 'User created successfully',
                  type: 'success',
                  duration: 2000
                })
                this.list.unshift(res.data.payload.user)
                this.dialogFormVisible = false
              } else {
                // handle other response codes
              }
            })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          updateUser(tempData).then((res) => {
            if (res.data.code === 200) {
              for (const v of this.list) {
                if (v.id === this.temp.id) {
                  const index = this.list.indexOf(v)
                  this.list.splice(index, 1, this.temp)
                  break
                }
              }
              this.dialogFormVisible = false
              this.$notify({
                title: 'Success',
                message: 'Update completed',
                type: 'success',
                duration: 2000
              })
            } else {
              // handle other response codes
            }
          })
        }
      })
    },
    handleDelete(row) {
      MessageBox.confirm(`Are you sure to delete a user with name ${row.name}`, 'Confirm delete', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.deleteData(row.id)
      }).catch(() => {
        console.log('Cancel')
      })
    },
    deleteData(userId) {
      deleteUserById(userId)
        .then(res => {
          if (res.data.code === 200) {
            this.$notify({
              title: 'Success',
              message: 'Successfully deleted',
              type: 'success',
              duration: 2000
            })
            const index = this.list.indexOf(userId)
            this.list.splice(index, 1)
          } else {
            // handle other response codes
          }
        })
    },
    handleSelect(row) {
      this.selectedOwnerId = row.id
      store.dispatch('SetOwnerId', row.id).then(() => {
        this.$notify({
          title: 'Success',
          message: `Selected owner ${row.name}`,
          type: 'success',
          duration: 2000
        })
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    }
  }
}
</script>
