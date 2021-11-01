import Vue from 'vue'
Vue.mixin({
    methods:{
        helperFunc () {
			console.log('axios baseurl => ', this.$axios.defaults.baseURL);
		},
    }
})