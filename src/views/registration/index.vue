<template>
  <div class="createItem-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Регистрация пацента</span>
      </div>

      <passport-form v-model="passportFormValues"/>
      {{ passportFormValues.name }}
      <div class="card-footer">
        <el-button type="primary">Сохранить</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>
import waves from '@/directive/waves' // Waves directive
import passportForm from './components/passport-form'

export default {
  components: { passportForm },
  directives: { waves },
  data() {
    return {
      passportFormValues: ''
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
