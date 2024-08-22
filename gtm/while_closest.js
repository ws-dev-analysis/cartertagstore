// get all data ga section
function onClickGAEvent(element) {
    // event 정보를 가져옴
    let currentElement = element;
    const eventInfo = JSON.parse(currentElement.dataset.gaEvent)
    if (!eventInfo) return
 
    // section 정보를 가져옴
    let section = '';
    const dataName = 'data-ga-section'
    while (currentElement) {
        if (currentElement.hasAttribute(dataName)) {
          const _data = JSON.parse(currentElement.dataset.gaSection)
          section = _data.title + '-' + section
          // sectionInfos.push(JSON.parse(currentElement.dataset.gaSection));
        }
        currentElement = currentElement.closest('['+dataName+']');
 
 
    }
 
    // page 정보를 가져옴
    const pageEl = document.querySelector('[data-ga-page]')
    
    if (!pageEl) return
    const pageInfo = JSON.parse(pageEl.dataset.gaPage)
 
 
    const gaKey = pageInfo.title + section + eventInfo.title
 
}
 
 
 
document.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const dataSections = getParentDataSections(clickedElement);
    console.log(dataSections);
});
 
 