<template>
  <div class="dashboard-container">
    <component :is="currentRole"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import superAdminDashboard from './super-admin'
import ownerDashboard from './owner'

export default {
  name: 'Dashboard',
  components: { superAdminDashboard, ownerDashboard },
  data() {
    return {
      currentRole: 'superAdminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('SUPER_ADMIN')) {
      this.currentRole = 'ownerDashboard'
    }
  }
}
</script>
