<template>
  <div v-loading="isLoading" class="createItem-container" >
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
          <el-tab-pane v-for="lan in postForm.languages" :key="lan" :label="lan">

            <el-form-item :label="'Name'" prop="name">
              <el-input v-model="postForm.name[lan]"/>
            </el-form-item>

            <el-form-item :label="'Full Name'" prop="fullName">
              <el-input v-model="postForm.fullName[lan]"/>
            </el-form-item>

            <el-form-item :label="'Descriptiom'" prop="description">
              <el-input v-model="postForm.description[lan]" type="textarea"/>
            </el-form-item>
            <el-form-item :label="'Images'" prop="itemImages">
              <draggable-image v-model = "postForm.itemImages"/>
            </el-form-item>
            <el-form-item :label="'Url'" prop="url">
              <el-input v-model="postForm.url">
                <template slot="prepend">http://</template>
              </el-input>
            </el-form-item>

            <el-form-item :label="'Bar code'" prop="barcode">
              <el-input v-model="postForm.barcode"/>
            </el-form-item>

            <el-form-item :label="'Price'" prop="price">
              <el-col :span="2">
                <el-input v-model="postForm.price"/>
              </el-col>
              <el-col :span="2">
                <el-select v-model="postForm.currency" placeholder="Select">
                  <el-option
                    v-for="currency in currenciesList"
                    :key="currency"
                    :label="currency"
                    :value="currency"/>
                </el-select>
              </el-col>
            </el-form-item>

            <el-form-item :label = "'Is new Item'" prop="isNew">
              <el-checkbox v-model="postForm.isNew" label="New item" border/>
            </el-form-item>

          </el-tab-pane>
        </el-tabs>

        <el-form-item :label="'Languages'" prop="languages">
          <el-select v-model="postForm.languages" multiple placeholder="Select">
            <el-option v-for="item in languagesList" :key="item" :label="item" :value="item"/>
          </el-select>
        </el-form-item>

      </el-form>

      <div class="card-footer">
        <router-link :to="'/items/index'">
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
import draggableImage from '@/components/DraggableImage'
import { getById as getItemById, create as createItem, update as updateItem } from '@/api/item'
const defaultForm = {
  name: {
    uzb: ''
  },
  fullName: {
    uzb: ''
  },
  description: {
    uzb: ''
  },
  itemImages: [],
  url: '',
  price: 0,
  currency: 'sum',
  isNew: false,
  languages: ['uzb']
}

export default {
  components: { draggableImage },
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
      const itemId = this.$route.params && this.$route.params.id
      this.fillForm(itemId)
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
      getItemById(this.getOwnerId(), id)
        .then(res => {
          this.postForm = res.data.payload.item
          this.isLoading = false
        })
    },
    updateData() {
      updateItem(this.ownerId, this.postForm)
    },
    createData() {
      createItem(this.getOwnerId(), this.postForm)
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
