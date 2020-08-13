(function (global, factory) {

	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Slides = factory());

}(this, (function () { 'use strict'; 

	return function (itemClass, prevClass, nextClass) {

		this.items   = document.querySelectorAll(itemClass);
		this.prev    = document.querySelectorAll(prevClass);
		this.next    = document.querySelectorAll(nextClass);
		this.current = 0;
		
		this.removeActiveClass = function () {
			var classes    = this.items[this.current].className.split(' ');
			var newClasses = [];
			for ( var i = 0; i < classes.length; i++ ) {
				if ( classes[i] !== 'active' ) {
					newClasses.push(classes[i]);
				}
			}

			this.items[this.current].className = newClasses.join(' ');
		};

		this.addActiveClass = function () {
			if ( this.items[this.current].className.indexOf('active') === -1 ) {
				var classes = this.items[this.current].className + ' active';
				this.items[this.current].className = classes;
			}
		};

		this.goPrev = function () {
			var current = ( this.current === 0 ) ? (this.items.length - 1) : this.current - 1;
			
			this.removeActiveClass();
			this.current = current;
			this.addActiveClass();
		};

		this.goNext = function () {
			var current = ( this.current === (this.items.length - 1) ) ? 0 : this.current + 1;
			
			this.removeActiveClass();
			this.current = current;
			this.addActiveClass();
		};

		var self = this;

		for ( var i = 0; i < this.prev.length; i++ ) {
			this.prev[i].addEventListener('click', function (e) {
				if (e !== undefined) {
					e.preventDefault();
					self.goPrev.call(self);
				}
			}, false);
		}

		for ( var i = 0; i < this.next.length; i++ ) {
			this.next[i].addEventListener('click', function (e) {
				if (e !== undefined) {
					e.preventDefault();	
					self.goNext.call(self);
				}
			}, false);
		}
	};
})));

document.addEventListener('DOMContentLoaded', function () {
	var slides = new Slides('.item', '.prev', '.next');
});