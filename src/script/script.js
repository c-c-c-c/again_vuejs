(function() {
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

	// Vue.component('testComponent', {
  // 	template: '#test-component'
	// });
	// Vue.component('testComponent2', {
	// 	template: '#test-component2'
	// });

	Vue.component('termComponent', {
		template: '#term-component'
				// props:['term-id']

	});

	var vm = new Vue({
		el: '#app',
		data: {
			// name:'JS内にコンポーネント定義',
			// terms:['term1','term2','term3','term4','term5', 'term6']
			terms:[
				{id:1, content:"term1" },{id:2, content:"term2"},{id:3, content:"term3"},
				{id:4, content:"term4"},{id:5, content:"term5"},{id:6, content:"term6"}
		 ]
		}
		// components: { 'test-component': testComponent },
		// components: { 'test-component2': testComponent2 },
		// template:'<test-component>'

	});
})();
