;(function($) {
  $.fn.i4TableView = function(options) {
    var options = $.extend({}, $.fn.i4TableView.defaults, options),
        $tableView = $(this),
        // support jQuery 1.6 or lower.
        bindEvent = $().on ? 'on' : 'live'
    $.fn.i4TableView.startY = 0
    $.fn.i4TableView.maxY =
      $tableView.get(0).scrollHeight - 
      (+$tableView.css('height').replace('px', ''))
    $.fn.i4TableView.movedY = 0
    $.fn.i4TableView.movedCount = 0

    $tableView[bindEvent]('touchstart', function(e) {
      $.fn.i4TableView.startY = e.originalEvent.changedTouches[0].pageY
      return false
    });

    $tableView[bindEvent]('touchmove', function(e) {
      if ($.fn.i4TableView.movedCount < 3) {
        $.fn.i4TableView.movedCount += 1
        return;
      } else {
        $.fn.i4TableView.movedCount = 0
      }
      var currentY = e.originalEvent.changedTouches[0].pageY,
          moveY = -($.fn.i4TableView.startY - currentY),
          toY = $.fn.i4TableView.movedY + moveY
      if ($.fn.i4TableView.movedY < 0 || moveY < 0 &&
          $.fn.i4TableView.movedY > -$.fn.i4TableView.maxY || moveY > 0) {
        if (toY > 0) toY = 0
        if (toY < -$.fn.i4TableView.maxY) toY = -$.fn.i4TableView.maxY
        $.fn.i4TableView.movedY = toY
        $('.'+options.tableViewRowClass, $tableView).css(
          '-webkit-transform',
          'translate(0, ' + toY + 'px)'
        )
      }
      return false
    })
  }
  $.fn.i4TableView.defaults = {
    tableViewRowClass: 'tableViewRow'
  }
}(jQuery));