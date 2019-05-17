<template>
  <div v-loading="isLoading" class="createCompany-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ isEdit?'Edit':'Create' }}</span>
      </div>
      <el-form
        ref="dataForm"
        :model="postForm"
        label-position="left"
        label-width="100px"
        style="margin-right:50px; margin-left:50px;"
        class="form-container">

        <el-tabs type="card">
          <el-tab-pane v-for="ln in postForm.bot.languages" :key="ln" :label="ln">
            <el-form-item :label="'Name'" prop="name">
              <el-input v-model="postForm.name[ln]"/>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>

        <el-form-item :label="'Languages'" prop="languages">
          <el-select v-model="postForm.bot.languages" multiple placeholder="Select">
            <el-option v-for="item in languagesList" :key="item" :label="item" :value="item"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Currency'" prop="currency">
          <el-select v-model="postForm.currency" placeholder="Select">
            <el-option
              v-for="currency in currenciesList"
              :key="currency"
              :label="currency"
              :value="currency"/>
          </el-select>
        </el-form-item>

        <el-form-item :label="'Bot token'" prop="bot.token">
          <el-input v-model="postForm.bot.token"/>
        </el-form-item>

        <el-divider content-position="left">Information</el-divider>

        <el-form-item :label="'Address'" prop="address">
          <el-input v-model="postForm.address"/>
        </el-form-item>
        <el-form-item :label="'District'" prop="district">
          <el-input v-model="postForm.district"/>
        </el-form-item>
        <el-form-item :label="'State'" prop="state">
          <el-input v-model="postForm.state"/>
        </el-form-item>
        <el-form-item :label="'Country'" prop="country">
          <el-input v-model="postForm.country"/>
        </el-form-item>
        <el-form-item :label="'Phone'" prop="phone">
          <el-input v-model="postForm.phone"/>
        </el-form-item>
        <el-form-item :label="'Email'" prop="email">
          <el-input v-model="postForm.email"/>
        </el-form-item>
        <el-form-item :label="'Post code'" prop="postcode">
          <el-input v-model="postForm.postcode"/>
        </el-form-item>

      </el-form>

      <div class="card-footer">
        <router-link :to="'/companies/index'">
          <el-button
            type="defaulf"
          >{{ $t('table.cancel') }}</el-button>
        </router-link>
        <el-button
          type="primary"
          @click="isEdit?updateData():createData()"
        >{{ $t('table.confirm') }}</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import waves from '@/directive/waves' // Waves directive
import store from '@/store'
import botLanguages from '@/mixins/bot-languages'
import botCurrencies from '@/mixins/bot-currencies'
import { getById as getCompanyById, create as createCompany, update as updateCompany } from '@/api/company'
const defaultForm = {
  name: {
    uzb: ''
  },
  currency: '',
  bot: {
    token: '',
    languages: ['uzb']
  }
}

export default {
  directives: { waves },
  mixins: [botLanguages, botCurrencies],
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      postForm: defaultForm,
      languagesList: this.getLanguagesArray(),
      currenciesList: this.getCurrenciesArray(),
      isLoading: true
    }
  },
  created() {
    if (this.isEdit) {
      const companyId = this.$route.params && this.$route.params.id
      this.fillForm(companyId)
    } else {
      this.postForm = Object.assign({}, defaultForm)
      this.isLoading = false
    }
  },
  destroyed() {
    this.postForm = Object.assign({}, defaultForm)
  },
  methods: {
    getOwnerId() {
      return store.getters.ownerId
    },
    fillForm(id) {
      getCompanyById(this.getOwnerId(), id)
        .then(res => {
          this.postForm = res.data.payload.company
          this.isLoading = false
        })
    },
    updateData() {
      updateCompany(this.ownerId, this.postForm)
    },
    createData() {
      createCompany(this.getOwnerId(), this.postForm)
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
