<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="life-block" style="width: 500px;">
        <div class="q-py-md q-gutter-sm">
          <q-btn color="white" text-color="black" label="Years" v-on:click="setType('years')" />
          <q-btn color="white" text-color="black" label="Months" v-on:click="setType('months')" />
          <q-btn color="white" text-color="black" label="Weeks" v-on:click="setType('weeks')" />
        </div>
        <div v-for="n in totalWeeks" v-bind:key="n" class="month-block" :class="{'month-block_active': n < weeksFromBirthday, 'month-block_retire': [retire, adults, youth].includes(n)}"></div>
      </div>
      <div class="col-6 q-px-md"><router-view /></div>
    </div>
  </q-page>
</template>

<script>
import moment from 'moment'
export default {
  name: 'PageIndex',
  data: function () {
    return {
      type: 'months'
    }
  },
  methods: {
    setType (type) {
      this.type = type
    }
  },
  computed: {
    birthday: function () { return this.$store.state.user.birthday },
    weeksFromBirthday: function () {
      return moment().diff(moment(this.birthday, 'YYYY-MM-DD'), this.type)
    },
    totalWeeks: function () {
      return moment(this.birthday, 'YYYY-MM-DD').add(90, 'years').diff(moment(this.birthday, 'YYYY-MM-DD'), this.type)
    },
    retire: function () {
      return moment(this.birthday, 'YYYY-MM-DD').add(65, 'years').diff(moment(this.birthday, 'YYYY-MM-DD'), this.type)
    },
    adults: function () {
      return moment(this.birthday, 'YYYY-MM-DD').add(18, 'years').diff(moment(this.birthday, 'YYYY-MM-DD'), this.type)
    },
    youth: function () {
      return moment(this.birthday, 'YYYY-MM-DD').add(30, 'years').diff(moment(this.birthday, 'YYYY-MM-DD'), this.type)
    }
  }
}
</script>
