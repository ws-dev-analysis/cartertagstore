// 모든 요소를 가져온 후 'data-ep' 속성이 있는지 필터링
var elements = Array.from(document.getElementsByTagName('*')).filter(function(element) {
  return Array.from(element.attributes).some(function(attr) {
    return attr.name.startsWith('data-ep');
  });
});

// 필터링된 요소들에 클릭 이벤트 리스너 추가
elements.forEach(function(element) {
  element.addEventListener('click', function(ev) {

    // 클릭된 요소에서 가장 가까운 특정 클래스를 가진 요소 찾기
    var closestElement = ev.target.closest('.ga-page-click, .ga-cts-click, .ga-popup-click');

    if (closestElement) {
      // 콘솔에 가까운 요소 출력
      console.log(closestElement);

      // 속성들 출력
      var attributes = closestElement.attributes;
      var attrObj = {};

      for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i];
        attrObj[attr.name] = attr.value;
      }

      console.log(attrObj);

      // 클래스 여부와 속성 출력
      var classesToCheck = ['ga-page-click', 'ga-cts-click', 'ga-popup-click'];
      var classPresence = {};

      classesToCheck.forEach(function(cls) {
        classPresence[cls] = closestElement.classList.contains(cls);
      });

      console.log(classPresence);
    }
  });
});


function getAttributes() {
  // 현재 클릭된 요소
  var element = {{Click Target}};

  // 결과를 저장할 객체
  var attributes = {};

  // data-screen-info를 가진 요소를 찾을 때까지 타고 올라감
  while (element && !element.hasAttribute('data-screen-info')) {
    // 모든 attribute를 확인
    Array.from(element.attributes).forEach(function(attr) {
      if (attr.name.startsWith('data-ep') || attr.name.startsWith('data-section')) {
        attributes[attr.name] = attr.value;
      }
    });
    element = element.parentElement;
  }

  // data-screen-info를 가진 요소의 attribute도 확인
  if (element && element.hasAttribute('data-screen-info')) {
    Array.from(element.attributes).forEach(function(attr) {
      if (attr.name.startsWith('data-ep') || attr.name.startsWith('data-section')) {
        attributes[attr.name] = attr.value;
      }
    });
  }

  return attributes;
}