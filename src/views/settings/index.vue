<template>
  <div v-loading="isLoading" class="createItem-container" >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Settings</span>
      </div>
      <el-form ref="dataForm" :model="postForm" label-position="left" label-width="100px" style="margin-right:50px; margin-left:50px;" class="form-container">

        <el-form-item :label="'Name'" prop="name">
          <el-input v-model="postForm.name[lan]"/>
        </el-form-item>

        <el-form-item :label="'Languages'" prop="languages">
          <el-select v-model="postForm.languages" multiple placeholder="Select">
            <el-option v-for="item in languagesList" :key="item" :label="item" :value="item"/>
          </el-select>
        </el-form-item>

      </el-form>

      <div class="card-footer">
        <el-button type="primary">Save</el-button>
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
