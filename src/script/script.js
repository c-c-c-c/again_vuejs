(function() {

	Vue.component('termComponent', {
		template: '#term-component',
		methods: {
			deleteTerm: function() {
				this.$emit('delete-term',(this._uid - 1));//なぜかindexがうまく取れない
			}
		}
	});

	let count = 6;//本当は、初期値は下のtermsの数にした方が良い
	var vm = new Vue({
		el: '#app',
		data: {
			terms:[
				{id:1, content:"term1" },{id:2, content:"term2"},{id:3, content:"term3"},
				{id:4, content:"term4"},{id:5, content:"term5"},{id:6, content:"term6"}
		 	]
	 	},
		methods: {
			addTerm: function() {
				count++;
				this.terms.push(
					{id:count, content:count}
				);
			},
			// deleteTermEmit: function(index) {
			deleteTermEmit: function(index) {
				if(confirm("この条件をほんとうに消しますか")) {
					this.terms.splice(index,1)
				}
			}
		}

	});
})();
