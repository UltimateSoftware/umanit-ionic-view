var app=angular.module("umanit-view",[]);app.directive("umanitView",function(){return{restrict:"A",link:function(e,n,o){o.onLoaded&&e.$on("$ionicView.loaded",function(){e.$eval(o.onLoaded)}),o.onEnter&&e.$on("$ionicView.enter",function(){e.$eval(o.onEnter)}),o.onLeave&&e.$on("$ionicView.leave",function(){e.$eval(o.onLeave)}),o.onBeforeEnter&&e.$on("$ionicView.beforeEnter",function(){e.$eval(o.onBeforeEnter)}),o.onBeforeLeave&&e.$on("$ionicView.beforeLeave",function(){e.$eval(o.onBeforeLeave)}),o.onAfterEnter&&e.$on("$ionicView.afterEnter",function(){e.$eval(o.onAfterEnter)}),o.onAfterLeave&&e.$on("$ionicView.afterLeave",function(){e.$eval(o.onAfterLeave)}),o.onUnloaded&&e.$on("$ionicView.unloaded",function(){e.$eval(o.onUnloaded)})}}});