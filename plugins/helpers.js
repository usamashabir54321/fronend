import Vue from 'vue'
Vue.mixin({
    methods:{
        helperFunc () {
			console.log('This is my global vue js helperFunc');
		},
    }
})