import TestComponent from './components/test.vue';

(function() {

	// Vue.component('my-component', {
	// 	template: '<div>A custom component!</div>'
	// })

	// var Child = {
	// 	template: '<div>カスタムコンポーネント</div>'
	// }



	var vm = new Vue({
		el: '#app',
		data: {
			name:'外部ファイル取得！'
		},
		components: { TestComponent },
		template:'<test-component>'

	});
})();
