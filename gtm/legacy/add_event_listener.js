
// 모든 요소를 가져온 후 'data-ga-page' 속성이 있는지 필터링
var ga_attributes = Array.from(document.getElementsByTagName('*')).filter(function(element) {
  return Array.from(element.attributes).some(function(attr) {
    return attr.name.startsWith('data-ga');
  });
});



// 필터링된 요소들에 클릭 이벤트 리스너 추가
ga_attributes.forEach(function(element) {
    element.addEventListener('click', function(ev) {
        // 클릭된 요소에서 가장 가까운 data-ga-page 요소 찾기
        var closestPage = ev.target.closest('[data-ga-page]');
        var closestEvent = ev.target.closest('[data-ga-event]');

        // closestPage와 closestEvent를 배열로 만든 다음 reduce를 사용해 병합
        var eventParams = [closestPage, closestEvent].reduce(function(acc, elem) {
            if (elem) {
                Object.assign(acc, JSON.parse(elem.getAttribute(elem.hasAttribute('data-ga-page') ? 'data-ga-page' : 'data-ga-event')));
            }
            return acc;
        }, {});

        // 예를 들어, eventParams 객체를 콘솔에 출력
        console.log(eventParams);

        // 이벤트 파라미터를 사용한 추가 작업 수행 (예: GA 이벤트 전송)
    });
});

