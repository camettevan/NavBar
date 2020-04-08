var j$ = jQuery,
  $nav = j$('#navigation'),
  $slideLine = j$('#slide-line'),
  $currentItem = j$('.current-item');

j$(function () {
  if ($currentItem[0]) {
    $slideLine.css({
      width: $currentItem.width(),
      left: $currentItem.position().left,
    });
  }

  j$($nav)
    .find('li')
    .click(function () {
      $slideLine.css({
        width: j$(this).width(),
        left: j$(this).position().left,
      });
    });
});

$('#navigation a').on('click', function () {
  $('#navigation').find('li.active').removeClass('active');
  $(this).parent('li').addClass('active');
});
