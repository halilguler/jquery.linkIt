/*
* name: LinkIt
* author: Halil Güler
* version: 0.1.0
* license: MIT
*/

$(function($){

	$.fn.linkIt = function(options){
		//Default Settings
		
		var settings = $.extend({
			whatever: null,
			href: null,
			text: null,
			target: '_self'
		},options);
		//alert(this.html());


		//validation

		if(settings.href==null){
			console.log('you need an href option for LinkIt to work');
			return this;
		}
		return this.each(function(){
			var object = $(this);

			if(settings.text == null){
				settings.text = object.text();
			}
			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
		});


		alert(settings.whatever);

	}

});