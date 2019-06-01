<template>
  <div class="passport-form" >

    <el-form v-loading = "formLoading" ref="dataForm" :model="formData" label-position="left" label-width="150px" class="form-container">
      <el-card class="box-card">

        <div slot="header" class="clearfix">
          <span>Паспортные данные</span>
        </div>
        <el-form-item :label="'Ф.И.О.'" prop="#">
          <el-input v-model="formData.fullName"/>
        </el-form-item>

        <el-form-item :label="'Пол'" prop="#">
          <el-select v-model="formData.gender" placeholder="Выберите">
            <el-option :key="1" :label="'Муж.'" :value="1"/>
            <el-option :key="2" :label="'Жен.'" :value="2"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Дата рождения'" prop="#">
          <el-date-picker
            v-model="formData.birthDate"
            placeholder="Дата рождения"/>
        </el-form-item>

        <el-form-item :label="'Группа крови по системе АВО:'" prop="#">
          <el-select v-model="formData.bloodGroup" placeholder="Выберите">
            <el-option :key="0" :label="'нет данных'" :value="0"/>
            <el-option :key="1" :label="'0(I)'" :value="1"/>
            <el-option :key="2" :label="'А(II) '" :value="2"/>
            <el-option :key="3" :label="'В(III) '" :value="3"/>
            <el-option :key="4" :label="'AВ(IV)'" :value="4"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Резус-фактор:'" prop="#">
          <el-select v-model="formData.resusFactor" placeholder="Выберите">
            <el-option :key="0" :label="'нет данных'" :value="0"/>
            <el-option :key="1" :label="'положительный'" :value="1"/>
            <el-option :key="2" :label="'отрицательный'" :value="2"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Национальность: '" prop="#">
          <el-select v-model="formData.nationality" placeholder="Выберите">
            <el-option
              v-for="nationality in common.nationalities"
              :key="nationality.code"
              :label="nationality.name"
              :value="nationality.code"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'ID больного  '" prop="#">
          <el-input v-model="formData.patientId"/>
        </el-form-item>

        <el-form-item :label="'Наименование отделения '" prop="#">
          <el-input v-model="formData.branchName"/>
        </el-form-item>

        <el-form-item :label="'Последний известный статус больного: '" prop="#">
          <el-select v-model="formData.patientStatus" placeholder="Выберите">
            <el-option :key="0" :label="'нет данных'" :value="0"/>
            <el-option :key="1" :label="'жив; '" :value="1"/>
            <el-option :key="2" :label="'выбыл из-под наблюдения по причине эмиграции'" :value="2"/>
            <el-option :key="3" :label="'выбыл из-под наблюдения по причине снятия диагноза'" :value="3"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Тип больного'" prop="#">
          <el-select v-model="formData.patientType" placeholder="Выберите">
            <el-option :key="1" :label="'Первичный больной'" :value="1"/>
            <el-option :key="2" :label="'Вторичный больной'" :value="2"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'№ амбулаторной карты'" prop="#">
          <el-input v-model="formData.ambulatoryCardNumber"/>
        </el-form-item>

        <el-form-item :label="'№ истории болезни'" prop="#">
          <el-input v-model="formData.patientHistoryNumber"/>
        </el-form-item>

        <el-card class="box-card" style="margin: 0">

          <div slot="header" style="font-size: 15px;">
            <span>Адрес больного</span>
          </div>

          <el-form-item :label="'Страна'" prop="#">
            <el-select v-model="formData.country" placeholder="Выберите">
              <el-option :key="1" :label="'Узбекистан'" :value="1"/>
              <el-option :key="2" :label="'другая'" :value="2"/>
            </el-select>
          </el-form-item>

          <el-form-item :label="'Область'" prop="#">
            <el-select v-model="formData.province" placeholder="Выберите">
              <el-option
                v-for="province in common.provinces"
                :key="province.code"
                :label="province.name"
                :value="province.code"/>
            </el-select>
          </el-form-item>

          <el-form-item :label="'Адрес'" prop="#">
            <el-input
              :rows="4"
              v-model="formData.address"
              type="textarea"
              placeholder="Город Район/село Улица Дом Квартира"/>
          </el-form-item>

          <el-form-item :label="'Телефон'" prop="#">
            <el-input v-model="formData.phone"/>
          </el-form-item>

          <el-form-item :label="'Серия паспорта'" prop="#">
            <el-input v-model="formData.passportSerialNumber"/>
          </el-form-item>

        </el-card>

      </el-card>
    </el-form>

  </div>
</template>

<script>
import waves from '@/directive/waves' // Waves directive
import { getAllProvinces, getAllNationalities } from '@/api/common'
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
        fullName: null,
        gender: null,
        birthDate: null,
        bloodGroup: null,
        resusFactor: null,
        nationality: null,
        patientId: null,
        branchName: null,
        patientStatus: null,
        patientType: null,
        ambulatoryCardNumber: null,
        patientHistoryNumber: null,
        country: null,
        province: null,
        address: null,
        phone: null,
        passportSerialNumber: null
      },
      formLoading: true,
      common: {
        provinces: null,
        nationalities: null
      }
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

      const nationalitiesReq = await getAllNationalities()
      this.common.nationalities = nationalitiesReq.data.payload.nationalities
      const provincesReq = await getAllProvinces()
      this.common.provinces = provincesReq.data.payload.provinces

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
