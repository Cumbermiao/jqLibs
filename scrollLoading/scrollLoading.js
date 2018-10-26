(function ($) {
    $.fn.scrollLoading = function (settings) {
        return this.each(function () {
            $.scrollLoading.init($(this), settings);
        });
    };
    
    $.scrollLoading = {
        init: function (outer, settings) {
            this.outer = outer;
            this.container = settings.container;
            this.judgeBy = settings.container || this.container;
            this.distance = settings.distance;
            this.loadEvent = settings.loadEvent;
            this.stopMore = settings.stopMore || true;
            this.outer.on('scroll', this.scrollHandle.bind(this));
            this.checkGetMore();
        },

        checkGetMore: function () {
            var judgeDistance = this.outer.scrollTop() + $(window).height();
            if ((true === this.more) && (judgeDistance + this.distance >= this.outer.height())) {
                this.more = false;
                this.loadEvent();
            }
        },

        scrollHandle: function () {
            var judgeDistance = this.outer.scrollTop() + $(window).height();
            if ((true === this.more) && (judgeDistance + this.distance >= this.outer.height())) {
                this.stopMore = false;
                this.loadEvent();
            }
        },

        off: function () {
            this.stopMore = true;
            this.outer.unbind('scroll');
        },
    };
})(jQuery);