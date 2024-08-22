(function (element) {
    var dataSections = [];
    // get pageInfo
    var pageElement = document.querySelector('[data-gtm-page]');
    if (!pageElement) {
        return null;
    }
    var pageData =  pageElement.dataset.gtmBody ? JSON.parse(pageElement.dataset.gtmBody) : null;

    // click event가 실행된 element
    var eventElement = element.closest('[data-gtm-event]');
    if (!eventElement) {
        return null;
    }
    var eventData = eventElement.dataset.gtmBody ? JSON.parse(eventElement.dataset.gtmBody) : null;
    if (!eventData) {
        return null;
    }

    // GET SECTION NAME
    var currentElement = eventElement;

    while (currentElement) {
        if (currentElement.dataset.gtmPage) {
        break;
        }
        var _section = currentElement.dataset.gtmSection;
        if (_section) {
        dataSections.push(_section);
        }
        currentElement = currentElement.parentElement;
    }

    var section = dataSections.reverse().join('-');

    var keyMapping = {
        // data-gtm-page - data-gtm-body
        gtm_page_title: "{{page title}}",   
        gtm_screen_id: "{{page id}}", 
        gtm_frame: "SPA", // "SPA" 고정값
        gtm_card_name: "{{카드 신청 단계 - 카드명}}",
        gtm_card_code: "{{카드 신청 단계 - 카드코드}}",
        gtm_card_new_or_exist: "{{카드 신청 단계 = 신규신청 구분}}",
        gtm_card_type: "{{카드 신청 단계 - 완편, 중편, 간편}}",
        gtm_fin_prod_name: "{{대출명 - 단기카드대출_일반, 단기카드대출_카드대금}}",
        gtm_fin_amount: "{{대출 - 신청 금액}}",
        gtm_revol_rate: "{{리볼빙 - 리볼빙 결제 비율}}",
        gtm_revol_term: "{{리볼빙 - 신청 기간}}",
        gtm_prod_funnel_name: "{{신청단계}}",
        
        // data-gtm-section - data-gtm-body
        gtm_section: "{{섹션 값}}",

        //data-gtm-click & data-gtm-visibility - data-gtm-body 
        gtm_event_name: "{{이벤트명 - cts / popup / page}}",
        gtm_text: "{{클릭 텍스트}}",
        gtm_frame: "{{SPA}}", // "SPA" 고정값
        gtm_search_keyword: "{{검색 완료 페이지에서 인풋 키워드}}",
        gtm_search_result: "{{검색 결과 메뉴 및 결과 갯수}}",
        gtm_search_result_click: "{{검색 결과 메뉴 및 결과 갯수}}",
        gtm_card_name: "{{카드 신청 단계 - 카드명}}",
        gtm_card_code: "{{카드 신청 단계 - 카드코드}}",
        gtm_card_new_or_exist: "{{카드 신청 단계 = 신규신청 구분}}",
        gtm_card_type: "{{카드 신청 단계 - 완편, 중편, 간편}}",
        gtm_fin_prod_name: "{{대출명 - 단기카드대출_일반, 단기카드대출_카드대금}}",
        gtm_fin_amount: "{{대출 - 신청 금액}}",
        gtm_revol_rate: "{{리볼빙 - 리볼빙 결제 비율}}",
        gtm_revol_term: "{{리볼빙 - 신청 기간}}",
        gtm_prod_funnel_name: "{{신청단계}}",
        gtm_apply_metric1: "{{카드 신청 STEP1}}", // 값은 integer 1 로 고정
        gtm_apply_metric2: "{{카드 신청 STEP2}}", // 값은 integer 1 로 고정
        gtm_apply_metric3: "{{카드 신청 STEP3}}", // 값은 integer 1 로 고정
        gtm_apply_metric4: "{{카드 신청 STEP4}}", // 값은 integer 1 로 고정
        gtm_apply_metric5: "{{카드 신청 STEP5}}", // 값은 integer 1 로 고정
        gtm_apply_metric6: "{{카드 신청 STEP6}}", // 값은 integer 1 로 고정
        gtm_apply_metric7: "{{카드 신청 STEP7}}", // 값은 integer 1 로 고정
        gtm_apply_metric8: "{{카드 신청 STEP8}}", // 값은 integer 1 로 고정
        gtm_apply_metric9: "{{카드 신청 STEP9}}", // 값은 integer 1 로 고정
        gtm_apply_metric10: "{{카드 신청 STEP10}}", // 값은 integer 1 로 고정
        gtm_apply_metric11: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric12: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric13: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric14: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric15: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric16: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric17: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric18: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric19: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric_complete: "{{카드 신청 STEP}}", // 값은 integer 1 로 고정
        gtm_apply_metric_exit: "{{카드 신청 이탈}}", // 값은 integer 1 로 고정
        gtm_popup_metric_click: "{{팝업 클릭}}", // 값은 integer 1 로 고정
        gtm_popup_metric_exit: "{{팝업 닫기}}", // 값은 integer 1 로 고정
        gtm_cts_name: "{{LADM 컨텐츠명 - 부담없이 환승에서 만나요}}",
        gtm_gtm_cts_id: "{{LADM 컨텐츠ID - LTS0000063451}}",
        gtm_cts_sub_id: "{{LADM 서브컨텐츠ID - 0000063451ABC}}",
        gtm_vertical_index: "{{컨텐츠 세로 인덱스 - 1 , 2, 3 ...}}",
        gtm_horizontal_index: "{{컨텐츠 가로 인덱스 - 1 , 2, 3 ...}}",
        gtm_extra_index: "{{컨텐츠 인덱스 (여분용)}}"
    };

    var output = {};

    for (var key in pageData) {
        if (keyMapping[key]) {
            output[keyMapping[key]] = pageData[key];
        }
    }
    console.log(output)
    dataLayer.push(output)

    return output;
})({{Click Element}})

