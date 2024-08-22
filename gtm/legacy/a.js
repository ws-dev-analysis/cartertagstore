
  (function() {
  
   var e = temp1;
   var el = e.closest('[data-ga-event]')
   console.log(el)
    // event 정보를 가져옴
    var currentElement = el;
    var eventInfo = JSON.parse(currentElement.dataset.gaEvent)
    if (!eventInfo) return
 
    console.log('1')
 /*
    // section 정보를 가져옴
    var section = '';
    var dataName = 'data-ga-section'
    while (currentElement) {
        if (currentElement.hasAttribute(dataName)) {
          var _data = JSON.parse(currentElement.dataset.gaSection)
          section = _data.title + '-' + section
          // sectionInfos.push(JSON.parse(currentElement.dataset.gaSection));
        }
        currentElement = currentElement.closest('['+dataName+']');
 
 
    }
 
    // page 정보를 가져옴
    var pageEl = document.querySelector('[data-ga-page]')
    
    if (!pageEl) return
    var pageInfo = JSON.parse(pageEl.dataset.gaPage)
 
 
    var gaKey = pageInfo.title + section + eventInfo.title
  
   console.log(gakey)
   window.dataLayer.push({
     // event: 'test_data-ga-event-trigger-click'
   })
   */
  })()
  