<template>
  <div>
    <h3 class="history-title">
      Payments history
    </h3>
    <VueGrid
      align="stretch"
      justify="start"
      class="fixed-form"
    >
      <VueCell
        width="6of12"
        class="left-side"
      >
        <span>{{ moment().format("YYYY MM DD - h:mm:ss") }}</span>
      </VueCell>
      <VueCell
        width="6of12"
        class="right-side"
      >
        <span>How mutch was paid</span>
      </VueCell>
    </VueGrid>
    <ul v-for="singleLine in singlePayment">
      <li>
        <span>{{ singleLine.id }}</span>
        <span>{{ singleLine.name }}</span>
        <span>{{ singleLine.rate }}</span>
        <span>{{ singleLine.pay }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { VueGrid, VueCell } from 'vue-grd'
import { mapGetters } from 'vuex'
const moment = require('moment')
export default {
	name: 'HistoryView',
	components: {
		VueGrid,
		VueCell
	},
	data () {
		return {
			moment: moment
		}
	},
	computed: {
		...mapGetters('Payments', {
			singlePayment: 'singlePayment'

		})
	}

}
</script>

<style scope lang="scss">
	span {
		padding: 10px;
	}
	.history-title {
		text-align: center;
		padding-bottom: 30px;
	}
	.left-side {
		color: darkgreen;
	}
	.right-side {
		text-align: right;
		padding-right: 20px;
	}
</style>
