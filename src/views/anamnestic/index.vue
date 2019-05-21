<template>
  <div class="createItem-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Модуль анамнестические данные</span>
      </div>

      <anamnestic-form v-model="anamnesticFormData"/>
      <div class="card-footer">
        <el-button type="primary">Сохранить</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>

import anamnesticForm from './components/anamnestic-form'

export default {
  components: { anamnesticForm },
  data() {
    return {
      anamnesticFormData: {

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
