<template>
  <div class="passport-form" >

    <el-form ref="dataForm" :model="postForm" label-position="left" label-width="400px" class="form-container">
      <el-card class="box-card">

        <div slot="header" class="clearfix">
          <span>Модуль диагностический</span>
        </div>

        <el-form-item :label="'Предварительный диагноз'" prop="#">
          <el-input
            :rows="4"
            v-model="textarea"
            type="textarea"
            placeholder="Предварительный диагноз"/>
        </el-form-item>

        <el-form-item :label="'Дата  установления   предварительного диагноза'" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="Дата  установления   предварительного диагноза"/>
        </el-form-item>

        <el-form-item :label="'Дата поступления в стационар'" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="Дата поступления в стационар"/>
        </el-form-item>

        <el-form-item :label="'Клинический диагноз по МКБ-10:'" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Клинический диагноз по системе TNM: '" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Морфологический диагноз по МКБ-10: '" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Номер морфологического заключения с текстовым описанием подробностей патогистологического заключения. '" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Длительность обследования до установления окончательного диагноза.'" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Дата установления первичного диагноза ЗН'" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="Дата установления первичного диагноза ЗН"/>
        </el-form-item>

        <el-form-item :label="'Расхождение клинического и паталогоанатомического диагнозов по классам  I  II III IV V.'" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Дата постановки окончательного диагноза'" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="Дата постановки окончательного диагноза"/>
        </el-form-item>

        <el-form-item :label="'Заключительный  диагноз.'" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Диагноз после аутопсии.'" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Сопутствующие заболевания:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'нет.'" :value="'0'"/>
            <el-option :key="'1'" :label="'туберкулез'" :value="'1'"/>
            <el-option :key="'0'" :label="'диабет.'" :value="'0'"/>
            <el-option :key="'1'" :label="'эндокринопатия'" :value="'1'"/>
            <el-option :key="'0'" :label="'другие злокачественные опухоли.'" :value="'0'"/>
            <el-option :key="'1'" :label="'артериальная гипертония'" :value="'1'"/>
            <el-option :key="'0'" :label="'ИБС.'" :value="'0'"/>
            <el-option :key="'1'" :label="'инфаркт миокарда'" :value="'1'"/>
            <el-option :key="'0'" :label="'анемия.'" :value="'0'"/>
            <el-option :key="'0'" :label="'СПИД.'" :value="'0'"/>
            <el-option :key="'1'" :label="' гепатит А'" :value="'1'"/>
            <el-option :key="'0'" :label="'гепатит B.'" :value="'0'"/>
            <el-option :key="'0'" :label="'гепатит C.'" :value="'0'"/>
            <el-option :key="'0'" :label="'язвенная болезнь желудка.'" :value="'0'"/>
            <el-option :key="'0'" :label="'бронхиальная астма.'" :value="'0'"/>
            <el-option :key="'0'" :label="'несколько.'" :value="'0'"/>
            <el-option :key="'0'" :label="'другое.'" :value="'0'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Аллергостатус:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'нет.'" :value="'0'"/>
            <el-option :key="'1'" :label="'положительный'" :value="'1'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Метод подтверждения диагноза:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'морфологический'" :value="'1'"/>
            <el-option :key="'0'" :label="'эндоскопический.'" :value="'0'"/>
            <el-option :key="'1'" :label="'цитологический'" :value="'1'"/>
            <el-option :key="'1'" :label="'изотопный'" :value="'1'"/>
            <el-option :key="'1'" :label="'рентгенологический'" :value="'1'"/>
            <el-option :key="'1'" :label="'только клинический'" :value="'1'"/>
            <el-option :key="'1'" :label="'номер морфологического заключения'" :value="'1'"/>
            <el-option :key="'1'" :label="'имуногистохимический'" :value="'1'"/>
            <el-option :key="'1'" :label="'определение уровня онкомаркеров'" :value="'1'"/>
            <el-option :key="'1'" :label="'КТ'" :value="'1'"/>
            <el-option :key="'1'" :label="'МРТ'" :value="'1'"/>
            <el-option :key="'1'" :label="'УЗД'" :value="'1'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Число опухолей:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'метахроная.'" :value="'0'"/>
            <el-option :key="'1'" :label="'синхронно-метахронная'" :value="'1'"/>
            <el-option :key="'1'" :label="'первично-множественные нескольких органов'" :value="'1'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Объем  опухоли (в см).'" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Тип роста опухоли:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'экзофитный (узловатый).'" :value="'0'"/>
            <el-option :key="'1'" :label="'мезофитный (промежуточный, переходный, смешанный)'" :value="'1'"/>
            <el-option :key="'0'" :label="'эндофитный (инфильтративный)'" :value="'0'"/>
            <el-option :key="'1'" :label="'другое'" :value="'1'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Дата возникновения отдаленных метастазов'" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="Дата возникновения отдаленных метастазов"/>
        </el-form-item>

        <el-form-item :label="'Регионарные метастазы::'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'отсутствуют'" :value="'0'"/>
            <el-option :key="'1'" :label="'одиночные'" :value="'1'"/>
            <el-option :key="'0'" :label="'множественные'" :value="'0'"/>
            <el-option :key="'1'" :label="'не исследовались'" :value="'1'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Метод определения регионарных метастазов:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="' нет метастазов'" :value="'0'"/>
            <el-option :key="'1'" :label="'пальпаторный'" :value="'1'"/>
            <el-option :key="'0'" :label="'цитологичесткий'" :value="'0'"/>
            <el-option :key="'1'" :label="'гистологический'" :value="'1'"/>
            <el-option :key="'0'" :label="'УЗД'" :value="'0'"/>
            <el-option :key="'1'" :label="'рентгенологический'" :value="'1'"/>
            <el-option :key="'0'" :label="'КТ'" :value="'0'"/>
            <el-option :key="'1'" :label="'МРТ'" :value="'1'"/>
            <el-option :key="'0'" :label="'эндовидеохирургически'" :value="'0'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Локализация метастазов:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="' нет метастазов'" :value="'0'"/>
            <el-option :key="'1'" :label="'печень'" :value="'1'"/>
            <el-option :key="'0'" :label="'легкие'" :value="'0'"/>
            <el-option :key="'1'" :label="'кости'" :value="'1'"/>
            <el-option :key="'0'" :label="'мозг'" :value="'0'"/>
            <el-option :key="'1'" :label="'забрюшинные лимфоузлы'" :value="'1'"/>
            <el-option :key="'0'" :label="'яичники'" :value="'0'"/>
            <el-option :key="'1'" :label="'почки'" :value="'1'"/>
            <el-option :key="'0'" :label="'брюшина'" :value="'0'"/>
            <el-option :key="'0'" :label="'кожа'" :value="'0'"/>
            <el-option :key="'1'" :label="'другое'" :value="'1'"/>
            <el-option :key="'0'" :label="'множественные'" :value="'0'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Причины поздней   диагностики:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'скрытое течение болезни'" :value="'0'"/>
            <el-option :key="'1'" :label="'несвоевременное обращение'" :value="'1'"/>
            <el-option :key="'0'" :label="'отказ от обследования'" :value="'0'"/>
            <el-option :key="'1'" :label="'неполное обследование'" :value="'1'"/>
            <el-option :key="'0'" :label="'отсутствие диспансеризации'" :value="'0'"/>
            <el-option :key="'1'" :label="'ошибка клиническая'" :value="'1'"/>
            <el-option :key="'0'" :label="'ошибка рентгенологическая;'" :value="'0'"/>
            <el-option :key="'1'" :label="' ошибка морфологическая'" :value="'1'"/>
            <el-option :key="'0'" :label="'ошибка других специалистов'" :value="'0'"/>
            <el-option :key="'0'" :label="'другие причины'" :value="'0'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Дата установления запущенности ЗН'" prop="#">
          <el-date-picker
            v-model="value1"
            placeholder="Дата установления запущенности ЗН"/>
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
        primaryDiagnosis: '',
        primaryDiagnosisDate: '',
        comingDate: '',
        clinicDiagnosisMKB: '',
        clinicDiagnosisTNM: '',
        morfologyDiagnosisMKB: '',
        morfologyNumber: '',
        durationSurvey: '',
        surveyDate: '',
        firstDiagnosisDate: '',
        discrepancy: '',
        finalDiagnosisDate: '',
        finalDiagnosis: '',
        autopsiiDiagnosis: '',
        accomanyingIllness: '',
        allergoStatus: '',
        diagnosisConfirmationMethod: '',
        tumorsNumber: '',
        tumorsVolume: '',
        tumorGrowthType: '',
        metastasesDate: '',
        regionalMetastases: '',
        determinationMetastases: '',
        localizationMetastases: '',
        reasonsDiagnosis: '',
        establishmentDate: ''
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
