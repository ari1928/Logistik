!function(n,r){var t=function(n,r,t){var i;return function(){function e(){t||n.apply(u,a),i=null}var u=this,a=arguments;i?clearTimeout(i):t&&n.apply(u,a),i=setTimeout(e,r||100)}};jQuery.fn[r]=function(n){return n?this.bind("resize",t(n)):this.trigger(r)}}(jQuery,"smartresize");