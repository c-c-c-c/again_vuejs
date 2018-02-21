'use strict';

(function () {

	// Vue.component('my-component', {
	// 	template: '<div>A custom component!</div>'
	// })

	// var Child = {
	// 	template: '<div>カスタムコンポーネント</div>'
	// }
	// Vue.component("hello-compo", {
	// 		template:"#test_component_id",
	// });

	var testComponent = Vue.extend({
		template: '<button>Ozaki Love</button>'
	});

	var vm = new Vue({
		el: '#app',
		data: {
			name: 'JS内にコンポーネント定義'
		},
		components: { 'test-component': testComponent }
		// template:'<test-component>'

	});
})();
//# sourceMappingURL=script.js.map