<template>
  <div class="createItem-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Модуль первичного выявления</span>
      </div>

      <first-evaluation-form v-model="firstEvaluationFormData"/>
      <div class="card-footer">
        <el-button type="primary">Сохранить</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>

import firstEvaluationForm from './components/first-evaluation-form'

export default {
  components: { firstEvaluationForm },
  data() {
    return {
      firstEvaluationFormData: {

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
