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
            v-model="formData.primaryDiagnosis"
            type="textarea"
            placeholder="Предварительный диагноз"/>
        </el-form-item>

        <el-form-item :label="'Дата  установления   предварительного диагноза'" prop="#">
          <el-date-picker
            v-model="formData.primaryDiagnosisDate"
            placeholder="Дата  установления   предварительного диагноза"/>
        </el-form-item>

        <el-form-item :label="'Дата поступления в стационар'" prop="#">
          <el-date-picker
            v-model="formData.comingDate"
            placeholder="Дата поступления в стационар"/>
        </el-form-item>

        <el-form-item :label="'Клинический диагноз по МКБ-10:'" prop="#">
          <el-input v-model="formData.clinicDiagnosisMKB"/>
        </el-form-item>

        <el-form-item :label="'Клинический диагноз по системе TNM: '" prop="#">
          <el-input v-model="formData.clinicDiagnosisTNM"/>
        </el-form-item>

        <el-form-item :label="'Морфологический диагноз по МКБ-10: '" prop="#">
          <el-input v-model="formData.morfologyDiagnosisMKB"/>
        </el-form-item>

        <el-form-item :label="'Номер морфологического заключения с текстовым описанием подробностей патогистологического заключения. '" prop="#">
          <el-input v-model="formData.morfologyNumber"/>
        </el-form-item>

        <el-form-item :label="'Длительность обследования до установления окончательного диагноза.'" prop="#">
          <el-input v-model="formData.durationSurvey"/>
        </el-form-item>

        <el-form-item :label="'Дата установления первичного диагноза ЗН'" prop="#">
          <el-date-picker
            v-model="formData.firstDiagnosisDate"
            placeholder="Дата установления первичного диагноза ЗН"/>
        </el-form-item>

        <el-form-item :label="'Расхождение клинического и паталогоанатомического диагнозов по классам  I  II III IV V.'" prop="#">
          <el-input v-model="formData.discrepancy"/>
        </el-form-item>

        <el-form-item :label="'Дата постановки окончательного диагноза'" prop="#">
          <el-date-picker
            v-model="formData.finalDiagnosisDate"
            placeholder="Дата постановки окончательного диагноза"/>
        </el-form-item>

        <el-form-item :label="'Заключительный  диагноз.'" prop="#">
          <el-input v-model="formData.finalDiagnosis"/>
        </el-form-item>

        <el-form-item :label="'Диагноз после аутопсии.'" prop="#">
          <el-input v-model="formData.autopsiiDiagnosis"/>
        </el-form-item>

        <el-form-item :label="'Сопутствующие заболевания:'" prop="#">
          <el-select v-model="formData.accomanyingIllness" placeholder="Выберите">
            <el-option :key="0" :label="'нет данных'" :value="0"/>
            <el-option :key="1" :label="'нет.'" :value="1"/>
            <el-option :key="2" :label="'туберкулез'" :value="2"/>
            <el-option :key="3" :label="'диабет.'" :value="3"/>
            <el-option :key="4" :label="'эндокринопатия'" :value="4"/>
            <el-option :key="5" :label="'другие злокачественные опухоли.'" :value="5"/>
            <el-option :key="6" :label="'артериальная гипертония'" :value="6"/>
            <el-option :key="7" :label="'ИБС.'" :value="7"/>
            <el-option :key="8" :label="'инфаркт миокарда'" :value="8"/>
            <el-option :key="9" :label="'анемия.'" :value="9"/>
            <el-option :key="10" :label="'СПИД.'" :value="10"/>
            <el-option :key="11" :label="' гепатит А'" :value="11"/>
            <el-option :key="12" :label="'гепатит B.'" :value="12"/>
            <el-option :key="13" :label="'гепатит C.'" :value="13"/>
            <el-option :key="14" :label="'язвенная болезнь желудка.'" :value="14"/>
            <el-option :key="15" :label="'бронхиальная астма.'" :value="15"/>
            <el-option :key="16" :label="'несколько.'" :value="16"/>
            <el-option :key="17" :label="'другое.'" :value="17"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Аллергостатус:'" prop="#">
          <el-select v-model="formData.allergoStatus" placeholder="Выберите">
            <el-option :key="0" :label="'нет данных'" :value="0"/>
            <el-option :key="1" :label="'нет.'" :value="1"/>
            <el-option :key="2" :label="'положительный'" :value="2"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Метод подтверждения диагноза:'" prop="#">
          <el-select v-model="formData.diagnosisConfirmationMethod" placeholder="Выберите">
            <el-option :key="0" :label="'морфологический'" :value="0"/>
            <el-option :key="1" :label="'эндоскопический.'" :value="1"/>
            <el-option :key="2" :label="'цитологический'" :value="2"/>
            <el-option :key="3" :label="'изотопный'" :value="3"/>
            <el-option :key="4" :label="'рентгенологический'" :value="4"/>
            <el-option :key="5" :label="'только клинический'" :value="5"/>
            <el-option :key="6" :label="'номер морфологического заключения'" :value="6"/>
            <el-option :key="7" :label="'имуногистохимический'" :value="7"/>
            <el-option :key="8" :label="'определение уровня онкомаркеров'" :value="8"/>
            <el-option :key="9" :label="'КТ'" :value="9"/>
            <el-option :key="10" :label="'МРТ'" :value="10"/>
            <el-option :key="11" :label="'УЗД'" :value="11"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Число опухолей:'" prop="#">
          <el-select v-model="formData.tumorsNumber" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'метахроная.'" :value="'0'"/>
            <el-option :key="'1'" :label="'синхронно-метахронная'" :value="'1'"/>
            <el-option :key="'1'" :label="'первично-множественные нескольких органов'" :value="'1'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Объем  опухоли (в см).'" prop="#">
          <el-input v-model="formData.tumorsVolume"/>
        </el-form-item>

        <el-form-item :label="'Тип роста опухоли:'" prop="#">
          <el-select v-model="formData.tumorGrowthType" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'экзофитный (узловатый).'" :value="'0'"/>
            <el-option :key="'1'" :label="'мезофитный (промежуточный, переходный, смешанный)'" :value="'1'"/>
            <el-option :key="'0'" :label="'эндофитный (инфильтративный)'" :value="'0'"/>
            <el-option :key="'1'" :label="'другое'" :value="'1'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Дата возникновения отдаленных метастазов'" prop="#">
          <el-date-picker
            v-model="formData.metastasesDate"
            placeholder="Дата возникновения отдаленных метастазов"/>
        </el-form-item>

        <el-form-item :label="'Регионарные метастазы::'" prop="#">
          <el-select v-model="formData.regionalMetastases" placeholder="Выберите">
            <el-option :key="'1'" :label="'нет данных'" :value="'1'"/>
            <el-option :key="'0'" :label="'отсутствуют'" :value="'0'"/>
            <el-option :key="'1'" :label="'одиночные'" :value="'1'"/>
            <el-option :key="'0'" :label="'множественные'" :value="'0'"/>
            <el-option :key="'1'" :label="'не исследовались'" :value="'1'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Метод определения регионарных метастазов:'" prop="#">
          <el-select v-model="formData.determinationMetastases" placeholder="Выберите">
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
          <el-select v-model="formData.localizationMetastases" placeholder="Выберите">
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
          <el-select v-model="formData.reasonsDiagnosis" placeholder="Выберите">
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
            v-model="formData.establishmentDate"
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
