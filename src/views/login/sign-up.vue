<template>
  <div class="login-container">
    <el-form ref="signUpForm" :model="signUpForm" :rules="signUpRules" class="login-form" auto-complete="on" label-position="left">
      <div class="text-center">
        <img class="pic-404__parent" src="@/assets/custom-theme/images/logoLight.png">
      </div>
      <div class="title-container">
        <h3 class="title">
          Registration form
        </h3>
        <lang-select class="set-language" />
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="signUpForm.username"
          :placeholder="$t('login.username')"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="email">
        <span class="svg-container">
          <svg-icon icon-class="email" />
        </span>
        <el-input
          v-model="signUpForm.email"
          placeholder="Email"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model="signUpForm.password"
          :type="passwordType"
          :placeholder="$t('login.password')"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleSignUp"
        />
      </el-form-item>

      <el-form-item prop="retypePassword">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          v-model="signUpForm.retypePassword"
          :type="passwordType"
          placeholder="Retype password"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleSignUp"
        />
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleSignUp">
        Registration
      </el-button>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;margin-left:0" @click="$parent.selectedComponent='sign-in'">
        Login
      </el-button>
    </el-form>
  </div>
</template>
<script>

import { validUsername, validEmail } from '@/utils/validate'
import LangSelect from '@/components/LangSelect'

export default {
  name: 'SignUp',
  components: { LangSelect },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validateEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Please enter the correct email'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      signUpForm: {
        username: '',
        email: '',
        password: '',
        retypePassword: ''
      },
      signUpRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        email: [{ required: true, trigger: 'blur', validator: validateEmail }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        retypePassword: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  },
  methods: {
    handleSignUp() {
      this.$refs.signUpForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('SignUpUser', this.signUpForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

