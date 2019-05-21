<template>
  <div class="passport-form" >

    <el-form ref="dataForm" :model="postForm" label-position="left" label-width="400px" class="form-container">
      <el-card class="box-card">

        <div slot="header" class="clearfix">
          <span>Модуль анамнестические данные</span>
        </div>

        <el-form-item :label="'Наличие онкологических заболеваний у ближайших родственников:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'у одного родителя; '" :value="'1'"/>
            <el-option :key="'2'" :label="'у обоих родителей'" :value="'2'"/>
            <el-option :key="'3'" :label="'у родственников 2 поколения;'" :value="'3'"/>
            <el-option :key="'4'" :label="' родственный брак.'" :value="'4'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Возраст родителей на момент постановки им онкологического диагноза: '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="' 30-40 лет'" :value="'1'"/>
            <el-option :key="'2'" :label="' 41-50 лет'" :value="'2'"/>
            <el-option :key="'3'" :label="'51-60 лет'" :value="'3'"/>
            <el-option :key="'4'" :label="'61-70 лет'" :value="'4'"/>
            <el-option :key="'5'" :label="'более 70 лет'" :value="'5'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Продолжительность жизни родителей после постановки диагноза: '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="' 5 лет'" :value="'1'"/>
            <el-option :key="'2'" :label="' 6 до 10 лет'" :value="'2'"/>
            <el-option :key="'3'" :label="'11 до 20 лет'" :value="'3'"/>
            <el-option :key="'4'" :label="'более 20 лет'" :value="'4'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Возраст родителей на момент смерти:  '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="' 50-60 дет'" :value="'1'"/>
            <el-option :key="'2'" :label="' 61-70 лет'" :value="'2'"/>
            <el-option :key="'3'" :label="'71 и более лет.'" :value="'3'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Менструально-овариальная функция: '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="' нет (для мужчин);'" :value="'1'"/>
            <el-option :key="'2'" :label="' репродуктивный период'" :value="'2'"/>
            <el-option :key="'3'" :label="'климакс'" :value="'3'"/>
            <el-option :key="'3'" :label="'менопауза до 3 лет;'" :value="'3'"/>
            <el-option :key="'3'" :label="'менопауза более 3х лет'" :value="'3'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Возраст начала менструальной функции  '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'  до 12 лет'" :value="'1'"/>
            <el-option :key="'2'" :label="' с 13 до 16 лет'" :value="'2'"/>
            <el-option :key="'3'" :label="'более 17 лет.'" :value="'3'"/>
            <el-option :key="'3'" :label="'отсутствуют.'" :value="'3'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Возраст начала менструальной функции  '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'до 14 лет;'" :value="'1'"/>
            <el-option :key="'2'" :label="'с 19 до 25'" :value="'2'"/>
            <el-option :key="'3'" :label="'с 26 до 35.'" :value="'3'"/>
            <el-option :key="'3'" :label="'после 36.'" :value="'3'"/>
            <el-option :key="'3'" :label="'virgo '" :value="'3'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Репродуктивная функция:  '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'нет (для мужчин)'" :value="'1'"/>
            <el-option :key="'2'" :label="'половой жизнью не жила'" :value="'2'"/>
            <el-option :key="'3'" :label="'не беременела (предохранялась).'" :value="'3'"/>
            <el-option :key="'3'" :label="'первичное бесплодие.'" :value="'3'"/>
            <el-option :key="'3'" :label="'беременела, но не рожала'" :value="'3'"/>
            <el-option :key="'3'" :label="'трое родов и больше;'" :value="'3'"/>
            <el-option :key="'3'" :label="'выкидыши;'" :value="'3'"/>
            <el-option :key="'3'" :label="'аборты;'" :value="'3'"/>
            <el-option :key="'3'" :label="'мертворождение;'" :value="'3'"/>
            <el-option :key="'3'" :label="'патология плода'" :value="'3'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Методы контрацепции:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'Механические (барьерные)'" :value="'1'"/>
            <el-option :key="'2'" :label="'Медикаментозные'" :value="'2'"/>
            <el-option :key="'2'" :label="'ВМС'" :value="'2'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Методы контрацепции:'" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'Механические (барьерные)'" :value="'1'"/>
            <el-option :key="'2'" :label="'Медикаментозные'" :value="'2'"/>
            <el-option :key="'2'" :label="'ВМС'" :value="'2'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Возраст последней беременности: '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="' до 30 лет'" :value="'1'"/>
            <el-option :key="'2'" :label="'после 30 лет'" :value="'2'"/>
            <el-option :key="'2'" :label="'после 40 лет'" :value="'2'"/>
            <el-option :key="'2'" :label="'после 50 лет'" :value="'2'"/>
            <el-option :key="'2'" :label="'не рожала'" :value="'2'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Возраст последних родов:  '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="' до 30 лет'" :value="'1'"/>
            <el-option :key="'2'" :label="'после 30 лет'" :value="'2'"/>
            <el-option :key="'2'" :label="'после 40 лет'" :value="'2'"/>
            <el-option :key="'2'" :label="'после 50 лет'" :value="'2'"/>
            <el-option :key="'2'" :label="'не рожала'" :value="'2'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Предшествующие заболевания пораженного органа:  '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'отсутствуют; '" :value="'1'"/>
            <el-option :key="'2'" :label="'имеются.'" :value="'2'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Профессия:'" prop="#">
          <el-input v-model="name"/>
        </el-form-item>

        <el-form-item :label="'Проф. вредности: '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'нет; '" :value="'1'"/>
            <el-option :key="'2'" :label="'имеется.'" :value="'2'"/>
            <el-option :key="'2'" :label="'химические.'" :value="'2'"/>
            <el-option :key="'2'" :label="'физические.'" :value="'2'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Курение '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="'1-3 сигарет в день; '" :value="'1'"/>
            <el-option :key="'2'" :label="'4-6 сигарет в день.'" :value="'2'"/>
            <el-option :key="'2'" :label="'10сигарет в день.'" :value="'2'"/>
            <el-option :key="'2'" :label="'1,5 пачки в день;'" :value="'2'"/>
            <el-option :key="'2'" :label="'2 пачки в день'" :value="'2'"/>
            <el-option :key="'2'" :label="'сигареты с высоким содержанием смол и никотина'" :value="'2'"/>
            <el-option :key="'2'" :label="'сигареты с низким содержанием смол и никотина'" :value="'2'"/>
            <el-option :key="'2'" :label="'ментоловые'" :value="'2'"/>
            <el-option :key="'2'" :label="' сигары'" :value="'2'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Алкоголь '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="' крепкие алкогольные напитки, '" :value="'1'"/>
            <el-option :key="'2'" :label="'слабые алкогольные напитки'" :value="'2'"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Длительность симптомов заболевания (в месяцах): '" prop="#">
          <el-select v-model="pol" placeholder="Выберите">
            <el-option :key="'0'" :label="'Нет данных'" :value="'0'"/>
            <el-option :key="'1'" :label="' бессимптомное '" :value="'1'"/>
            <el-option :key="'2'" :label="'до 1 месяца'" :value="'2'"/>
            <el-option :key="'1'" :label="' от 2 до 3 месяцев '" :value="'1'"/>
            <el-option :key="'2'" :label="'от 4 до 6 месяца'" :value="'2'"/>
            <el-option :key="'1'" :label="'более 6 месяцев. '" :value="'1'"/>
          </el-select>
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
