<template>
  <div class="passport-form" >

    <el-form ref="dataForm" :model="formData" label-position="left" label-width="400px" class="form-container">
      <el-card class="box-card">

        <div slot="header" class="clearfix">
          <span>Модуль первичного выявления</span>
        </div>

        <el-form-item :label="'Медицинское учреждение, установившее диагноз ЗН:'" prop="#">
          <el-select v-model="formData.nameInstitution" placeholder="Выберите">
            <el-option :key="0" :label="'Нет данных'" :value="0"/>
            <el-option :key="1" :label="'РОНЦ'" :value="1"/>
            <el-option :key="2" :label="'Другое лечебное учреждение с онкокойками'" :value="2"/>
            <el-option :key="3" :label="'Городская больница; '" :value="3"/>
            <el-option :key="4" :label="'Районная больница;'" :value="4"/>
            <el-option :key="5" :label="'Лечебное учреждение без онкологи-ческих коек'" :value="5"/>
            <el-option :key="6" :label="'Городская больница без онкологи-ческих коек'" :value="6"/>
            <el-option :key="7" :label="'Районная больница без онкологи-ческих коек; '" :value="7"/>
            <el-option :key="8" :label="'Краевая больница'" :value="8"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Дата обращения'" prop="#">
          <el-date-picker
            v-model="formData.comingDate"
            placeholder="Дата обращения"/>
        </el-form-item>

        <el-form-item :label="'Дата появления первых признаков заболевания'" prop="#">
          <el-date-picker
            v-model="formData.evaluationDate"
            placeholder="Дата появления первых признаков заболевания"/>
        </el-form-item>

        <el-form-item :label="'1- е обращение больного за медицинской помощью по поводу заболевания '" prop="#">
          <el-date-picker
            v-model="formData.firstComingDate"
            placeholder="1- е обращение больного за медицинской помощью по поводу заболевания "/>
        </el-form-item>

        <el-form-item :label="'Условия  выявления заболевания:'" prop="#">
          <el-select v-model="formData.circsDisease" placeholder="Выберите">
            <el-option :key="0" :label="'Обратился самостоятельно;'" :value="0"/>
            <el-option :key="1" :label="'Выявлено в смотровом кабинете; '" :value="1"/>
            <el-option :key="2" :label="'Выявлено при других видах проф-осмотра;'" :value="2"/>
            <el-option :key="3" :label="'Учтен посмертно с диагнозом, установленным при жизни; '" :value="3"/>
            <el-option :key="4" :label="'Посмертно без вскрытия; '" :value="4"/>
            <el-option :key="5" :label="'После вскрытия; '" :value="5"/>
            <el-option :key="6" :label="'В другом лечебном учреждении;'" :value="6"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Направительный диагноз'" prop="#">
          <el-input
            :rows="4"
            v-model="formData.guidingDiagnosis"
            type="textarea"
            placeholder=""/>
        </el-form-item>

        <el-form-item :label="'Предварительный диагноз'" prop="#">
          <el-input
            :rows="4"
            v-model="formData.firstDiagnosis"
            type="textarea"
            placeholder=""/>
        </el-form-item>

        <el-form-item :label="'Ф.И.О. врача поликлиники'" prop="formValues.name">
          <el-input v-model="formData.fullNameDoctor"/>
        </el-form-item>

      </el-card>
    </el-form>

  </div>
</template>

<script>
import waves from '@/directive/waves' // Waves directive

export default {
  directives: { waves },
  model: {
    prop: 'formData',
    event: 'input'
  },
  props: {
    formData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      defaultFormData: {
        nameInstitution: '',
        comingDate: '',
        evaluationDate: '',
        firstComingDate: '',
        circsDisease: '',
        guidingDiagnosis: '',
        firstDiagnosis: '',
        fullNameDoctor: ''
      },
      formLoading: true
    }
  },
  watch: {
    formData() {
      this.$emit('input', this.formData)
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      this.formLoading = true

      this.formLoading = false
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
