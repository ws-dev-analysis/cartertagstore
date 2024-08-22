// data-section 속성을 가져오는 함수functiongetParentDataSections(element) {
    let dataSections = [];
    let currentElement = element;
     
        while (currentElement) {
    if (currentElement.hasAttribute('data-section')) {
                dataSections.push(currentElement.getAttribute('data-section'));
            }
            currentElement = currentElement.parentElement;
        }
     
        return dataSections;
    }
     
    // 이벤트 리스너를 추가하여 클릭된 엘리먼트를 기준으로 부모 요소의 data-section 속성을 가져오는 예제document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const dataSections = getParentDataSections(clickedElement);
        console.log(dataSections);
    });
     