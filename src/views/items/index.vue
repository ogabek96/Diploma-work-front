<template>

  <div class="app-container">
    <div class="filter-container">
      <el-input :placeholder="'Name'" v-model="listQuery.name" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('table.search') }}</el-button>

      <el-button :disabled="breadcrubms.length > 2" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreateCategory" >Add category</el-button>

      <router-link :to="'/items/create/' + getParentId() ">
        <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit">Add Item</el-button>
      </router-link>

      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('table.export') }}</el-button>
    </div>

    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 15px">
      <el-breadcrumb-item v-for = "item in breadcrubms" :key="item.id" ><el-button type="text" @click="handleBreadcrumbClick(item)">{{ item.name }}</el-button></el-breadcrumb-item>
    </el-breadcrumb>

    <el-table v-loading="listLoading" ref="singleTable" :key="tableKey" :data="list" border fit highlight-current-row style="width: 100%" @row-dblclick	="handleClickItem">

      <el-table-column :label="'Position'" prop="type" align="center" width="100px;">
        <template slot-scope="scope" style="width: 30px;">

          <el-button size = "small" style="margin-left: 0px" class="btn-center" @click="handleDelete(scope.row)">Up</el-button>
          <el-button size = "small" style="margin-left: 0px" class="btn-center" @click="handleDelete(scope.row)">Down</el-button>

        </template>
      </el-table-column>

      <el-table-column :label="'Type'" prop="type" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="'Name'" prop="name" sortable="custom" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column :label="$t('table.actions')" align="center" width="" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)">{{ $t('table.edit') }}</el-button>
          <el-button type="danger" @click="handleDelete(scope.row)">{{ $t('table.delete') }}</el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :rules = "rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item :label="'Name'" prop="name">
          <el-input v-model="temp.name"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createCategory():updateCategory()">{{ $t('table.confirm') }}</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import { MessageBox } from 'element-ui'
import waves from '@/directive/waves' // Waves directive
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { create as createItem, getAll as getAllItems, deleteById as deleteItemById } from '@/api/item'
import store from '@/store'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        name: '',
        type: ''
      },
      temp: {
        id: undefined,
        name: '',
        type: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      rules: {
        name: [{ required: true, message: 'Name is required', trigger: 'blur' }]
      },
      downloadLoading: false,
      currentCategory: null,
      breadcrubms: [{
        name: 'Parent',
        id: null
      }]
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
    getParentId() {
      const parentId = this.currentCategory && this.currentCategory.id
      return parentId || null
    },
    getList() {
      this.listLoading = true
      getAllItems().then(response => {
        this.list = response.data.payload.items
        this.total = response.data.payload.items.length
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
        type: ''
      }
    },
    handleCreateCategory() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createCategory() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.type = 'CATEGORY'
          this.temp.parentId = this.getParentId()
          createItem(this.temp)
            .then(res => {
              if (res.data.code === 200) {
                this.$notify({
                  title: 'Success',
                  message: 'Item created successfully',
                  type: 'success',
                  duration: 2000
                })
                this.list.unshift(this.temp)
                this.dialogFormVisible = false
              } else {
                // handle other response codes
              }
            })
        }
      })
    },
    handleCreateItem() {

    },
    createItem() {

    },
    handleUpdate(row) {
      if (row.type === `ITEM`) {
        this.$router.push(`/items/edit/${row.id}`)
      } else if (row.type === `CATEGORY`) {
        this.temp = Object.assign({}, row) // copy obj
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      }
    },
    handleDelete(row) {
      MessageBox.confirm(`Are you sure to delete an item  with name ${row.name}`, 'Confirm delete', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.deleteData(row.id)
      }).catch(() => {
        console.log('Cancel')
      })
    },
    deleteData(companyId) {
      deleteItemById(this.getOwnerId(), companyId)
        .then(res => {
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
    },
    handleClickItem(val) {
      this.currentCategory = val
      if (val.type !== 'ITEM') {
        this.getList()
        this.breadcrubms.push(val)
      }
    },
    handleBreadcrumbClick(val) {
      this.currentCategory = val
      const currentIndex = this.breadcrubms.indexOf(val)
      this.breadcrubms.splice(currentIndex + 1, this.breadcrubms.length - currentIndex)
      this.getList()
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

<style>

.btn-center {
  margin: auto;
  width: 100%;
  padding-top: 10px;
  margin-top: 10px;
}
</style>
