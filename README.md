# jquery.i4TableView
iOS4で overflow: scroll とかしてもスクロールできない(2本指スクロールする仕様)のでできるようにするやつ.

## HTML
```html
<div class="foo">
  <div class="bar">1</div>
  <div class="bar">2</div>
  <div class="bar">3</div>
  <div class="bar">4</div>
  <div class="bar">5</div>
  <div class="bar">6</div>
  <div class="bar">7</div>
  <div class="bar">8</div>
  <div class="bar">9</div>
  <div class="bar">10</div>
</div>
```

## CSS
```css
.tableView {
  overflow: hidden;
  height: 100px;
}
.tableViewRow {
  height: 30px;
}
```

## JavaScript
```javascript
$(function() {
  // isiPhone4
  if (/iPhone/i.test(navigator.userAgent) && +window.devicePixelRatio === 2) {
    $('.foo').iScroller({
      tableViewRowClass: 'bar' // 'tableViewRow' by default
    });
  }
});
```
