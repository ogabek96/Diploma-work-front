<template>
  <div class="passport-form" >

    <el-form ref="dataForm" :model="postForm" label-position="left" label-width="400px" class="form-container">
      <el-card class="box-card">

        <div slot="header" class="clearfix">
          <span>Модуль первичного выявления</span>
        </div>

        <el-form-item :label="'Медицинское учреждение, установившее диагноз ЗН:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'РОНЦ'" :value="'1'"/>
            <el-option :key="'2'" :label="'Другое лечебное учреждение с онкокойками'" :value="'2'"/>
            <el-option :key="'3'" :label="'Городская больница; '" :value="'3'"/>
            <el-option :key="'4'" :label="'Районная больница;'" :value="'4'"/>
            <el-option :key="'5'" :label="'Лечебное учреждение без онкологи-ческих коек'" :value="'5'"/>
            <el-option :key="'6'" :label="'Городская больница без онкологи-ческих коек'" :value="'6'"/>
            <el-option :key="'7'" :label="'Районная больница без онкологи-ческих коек; '" :value="'7'"/>
            <el-option :key="'8'" :label="'Краевая больница'" :value="'8'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Дата обращения'" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="Дата обращения"/>
        </el-form-item>

        <el-form-item :label="'Дата появления первых признаков заболевания'" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="Дата появления первых признаков заболевания"/>
        </el-form-item>

        <el-form-item :label="'1- е обращение больного за медицинской помощью по поводу заболевания '" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="1- е обращение больного за медицинской помощью по поводу заболевания "/>
        </el-form-item>

        <el-form-item :label="'Условия  выявления заболевания:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Обратился самостоятельно;'" :value="'0'"/>
            <el-option :key="'1'" :label="'Выявлено в смотровом кабинете; '" :value="'1'"/>
            <el-option :key="'2'" :label="'Выявлено при других видах проф-осмотра;'" :value="'2'"/>
            <el-option :key="'3'" :label="'Учтен посмертно с диагнозом, установленным при жизни; '" :value="'3'"/>
            <el-option :key="'4'" :label="'Посмертно без вскрытия; '" :value="'4'"/>
            <el-option :key="'5'" :label="'После вскрытия; '" :value="'5'"/>
            <el-option :key="'6'" :label="'В другом лечебном учреждении;'" :value="'6'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Направительный диагноз'" prop="#">
          <el-input
            :rows="4"
            v-model="textarea"
            type="textarea"
            placeholder=""/>
        </el-form-item>

        <el-form-item :label="'Предварительный диагноз'" prop="#">
          <el-input
            :rows="4"
            v-model="textarea"
            type="textarea"
            placeholder=""/>
        </el-form-item>

        <el-form-item :label="'Ф.И.О. врача поликлиники'" prop="formValues.name">
          <el-input v-model="formValues.name"/>
        </el-form-item>

      </el-card>
    </el-form>

  </div>
</template>

<script>

const defaultFormValues = {
  name: ''
}

export default {
  data() {
    return {
      formValues: defaultFormValues
    }
  },
  watch: {
    formValues() {
      this.emitChanges()
    }
  },
  methods: {
    emitChanges() {
      this.$emit('input', this.formValues)
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
}
</style>
