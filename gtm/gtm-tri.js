
// 모든 요소를 가져온 후 'data-ep' 속성이 있는지 필터링
var elements = Array.from(document.getElementsByTagName('*')).filter(function(element) {
  return Array.from(element.attributes).some(function(attr) {
    return attr.name.startsWith('data-ga-event');
  });
});

// 필터링된 요소들에 클릭 이벤트 리스너 추가
elements.forEach(function(element) {
  element.addEventListener('click', function(ev) {

    // 클릭된 요소에서 가장 가까운 특정 클래스를 가진 요소 찾기
    var closestElement = ev.target.closest('.ga-page-click, .ga-cts-click, .ga-popup-click');

    if (closestElement) {
      // 콘솔에 가까운 요소 출력
      console.log('addclick_TAG: ');
      console.log(closestElement);

      // 속성들 출력
      var attributes = closestElement.attributes;
      var attrObj = Array.from(attributes).reduce(function(obj, attr) {
        obj[attr.name] = attr.value;
        return obj;
      }, {});
      console.log('addclick_TAG: ');
      console.log(attrObj);

      // 클래스 여부와 속성 출력
      var classesToCheck = ['ga-page-click', 'ga-cts-click', 'ga-popup-click'];
      var classPresence = classesToCheck.reduce(function(obj, cls) {
        obj[cls.replace(/-/g, '_')] = closestElement.classList.contains(cls);
        return obj;
      }, {});
      console.log('addclick_TAG: ');
      console.log(classPresence);

      // classPresence에서 true인 키만 추출하고 'ga_' 부분 제거하여 dataLayer에 추가
      var eventKeys = Object.keys(classPresence).filter(function(key) {
        return classPresence[key];
      }).map(function(key) {
        return key.replace(/^ga_/, '');
      });

      if (eventKeys.length > 0) {
        window.dataLayer.push({
          event: eventKeys.join('_')
        });
      }
    }
  });
});

