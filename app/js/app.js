var Vue = require('vue');
var moment = require('moment');

new Vue({
	el:"#app",
	data: {
		header: "Browsersync Browserify Example",
		included: [
			{body:"Vuejs"},
			{body:"Moment"},
			{body:"Materil Design Lite"}
		],
		created:moment("20160622", "YYYYMMDD").fromNow()
	}
})