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

	// var testComponent = Vue.extend({
	// 	template:'<button>Ozaki Love</button>'
	// });

	Vue.component('testComponent', {
		template: '#test-component'
	});
	Vue.component('testComponent2', {
		template: '#test-component2'
	});

	var vm = new Vue({
		el: '#app',
		data: {
			name: 'JS内に2種類コンポ定義'
		}
		// components: { 'test-component': testComponent },
		// components: { 'test-component2': testComponent2 },
		// template:'<test-component>'

	});
})();
//# sourceMappingURL=script.js.map