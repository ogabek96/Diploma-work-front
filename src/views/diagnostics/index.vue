<template>
  <div class="createItem-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Модуль диагностический</span>
      </div>

      <diagnostics-form v-model="diagnosticsFormData"/>
      <div class="card-footer">
        <el-button type="primary">Сохранить</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>

import diagnosticsForm from './components/diagnostics-form'

export default {
  components: { diagnosticsForm },
  data() {
    return {
      diagnosticsFormData: {

      }
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
