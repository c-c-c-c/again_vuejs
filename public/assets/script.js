'use strict';

var _test = require('./components/test.vue');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {

	// Vue.component('my-component', {
	// 	template: '<div>A custom component!</div>'
	// })

	// var Child = {
	// 	template: '<div>カスタムコンポーネント</div>'
	// }


	var vm = new Vue({
		el: '#app',
		data: {
			name: '外部ファイル取得！'
		},
		components: { TestComponent: _test2.default },
		template: '<test-component>'

	});
})();
//# sourceMappingURL=script.js.map