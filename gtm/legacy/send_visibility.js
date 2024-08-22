
(function (element) {
    console.log(element)
    var dataSections = [];
    // get pageInfo
    var pageElement = document.querySelector('[data-gtm-page]');
    if (!pageElement) {
        return null;
    }
    var pageData =  pageElement.dataset.gtmBody ? JSON.parse(pageElement.dataset.gtmBody) : null;

 
    if (!pageData) {
        return null;
    }


    // impression event가 실행된 element
    var visibilityElement = element.closest('[data-gtm-visibility]');
    if (!visibilityElement) {
        return null;
    }
    var visibilityData = visibilityElement.dataset.gtmBody ? JSON.parse(visibilityElement.dataset.gtmBody) : null;

    if (!visibilityData) {
        return null;
    }
    
    // visibilityData 에서 event_name 찾고 그 값 뒤에 _view 붙이기


    // GET SECTION NAME
    var currentElement = visibilityElement;

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
        gtm_title: "page_title",   
        gtm_id: "ep_cd57_screenid", 
        gtm_frame: "ep_cd11_native_yn", // "SPA" 고정값
        gtm_card_name: "ep_card_name",
        gtm_card_code: "ep_card_code",
        gtm_card_new_or_exist: "ep_cd64_card_apply_code",
        gtm_card_type: "ep_cd65_card_apply_kind",
        gtm_fin_prod_name: "ep_cd13_fn_pd_nm",
        gtm_fin_amount: "ep_cd17_fn_loan_amt",
        gtm_revol_rate: "ep_cd19_rvo_egm_stt_rt",
        gtm_revol_term: "ep_cd20_rvo_egm_stt_te",
        gtm_prod_funnel_name: "ep_cd48_pd_apply_nm",
        
        // data-gtm-section - data-gtm-body
        gtm_section: "ep_event_area",

        //data-gtm-click & data-gtm-visiblity - data-gtm-body
        gtm_event_name: "event_name",
        gtm_text: "gtm_text",
        gtm_frame: "ep_cd11_native_yn",
        gtm_search_keyword: "ep_cd25_srch_keyword",
        gtm_search_type: "ep_srch_keyword_type",
        gtm_search_result: "ep_cd26_srch_result",
        gtm_search_result_click: "ep_cd27_srch_res_clk_nm",
        gtm_card_name: "ep_card_name",
        gtm_card_code: "ep_card_code",
        gtm_card_new_or_exist: "ep_cd64_card_apply_code",
        gtm_card_type: "ep_cd65_card_apply_kind",
        gtm_fin_prod_name: "ep_cd13_fn_pd_nm",
        gtm_fin_amount: "ep_cd17_fn_loan_amt",
        gtm_revol_rate: "ep_cd19_rvo_egm_stt_rt",
        gtm_revol_term: "ep_cd20_rvo_egm_stt_te",
        gtm_prod_funnel_name: "ep_cd48_pd_apply_nm",
        gtm_cts_name: "ep_cd14_cts_nm",
        gtm_gtm_cts_id: "ep_cd42_cts_id",
        gtm_cts_sub_id: "ep_cd79_sub_cts_id",
        gtm_vertical_index: "ep_vertical_index",
        gtm_horizontal_index: "ep_horizontal_index",
        gtm_extra_index: "extra_index",

        //gtm 정제 값
        gtm_depth1: 'ep_cd15_page_depth1',
        gtm_depth2: 'ep_cd16_page_depth2',
        gtm_depth3: 'ep_cd52_page_depth3',

        // gtm_depth 갯수에 따라 유동적으로 
        gtm_depth4: '', // ep_page_depth4 
        gtm_depth5: '', // ep_page_depth5 ..

    };

    var output = {};
    // 합친 데이터를 변수에 저장
    var combinedData = Object.assign({}, pageData, clickData, visibilityData);

    // combinedData를 사용하여 output 객체 생성
    for (var key in combinedData) {
        if (keyMapping[key]) {
            output[keyMapping[key]] = combinedData[key];
        }
    }
    console.log(output);
    dataLayer.push(output);

    return output;

})({{Click Element}})
