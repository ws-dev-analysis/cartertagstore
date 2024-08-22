
(function (element) {

    console.log(element)
    var dataSections = [];
    // get pageInfo
    var pageElement = document.querySelector('[data-gtm-page]');
    if (!pageElement) {
        return null;
    }
    var pageData =  pageElement.dataset.gtmBody ? JSON.parse(pageElement.dataset.gtmBody) : null;
    console.log(pageData)
    // click event가 실행된 element
    var clickElement = element.closest('[data-gtm-click]');
    if (!clickElement) {
        return null;
    }
    var clickData = clickElement.dataset.gtmBody ? JSON.parse(clickElement.dataset.gtmBody) : null;
    if (!clickData) {
        return null;
    }
    console.log(clickData)
     // impression event가 실행된 element
    var visibilityElement = element.closest('[data-gtm-visibility]');
    if (!visibilityElement) {
        return null;
    }
    var visibilityData = visibilityElement.dataset.gtmBody ? JSON.parse(visibilityElement.dataset.gtmBody) : null;
    if (!visibilityData) {
        return null;
    }
    console.log(visibilityData)
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
    console.log(section)
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
        gtm_apply_metric1: "cm_cm1_apply_step1",
        gtm_apply_metric2: "cm_cm3_apply_step2",
        gtm_apply_metric3: "cm_cm4_apply_step3",
        gtm_apply_metric4: "cm_cm5_apply_step4",
        gtm_apply_metric5: "cm_cm6_apply_step5",
        gtm_apply_metric6: "cm_cm7_apply_step6",
        gtm_apply_metric7: "cm_cm8_apply_step7",
        gtm_apply_metric8: "cm_cm9_apply_step8",
        gtm_apply_metric9: "cm_cm10_apply_step9",
        gtm_apply_metric10: "cm_cm11_apply_step10",
        gtm_apply_metric11: "cm_cm12_apply_step11",
        gtm_apply_metric12: "cm_cm13_apply_step12",
        gtm_apply_metric13: "cm_cm14_apply_step13",
        gtm_apply_metric14: "cm_cm15_apply_step14",
        gtm_apply_metric15: "cm_cm16_apply_step15",
        gtm_apply_metric16: "cm_cm17_apply_step16",
        gtm_apply_metric17: "cm_cm18_apply_step17",
        gtm_apply_metric18: "cm_cm19_apply_step18",
        gtm_apply_metric19: "cm_cm20_apply_step19",
        gtm_apply_metric_complete: "cm_cm2_apply_complete",
        gtm_apply_metric_exit: "cm_cm0_apply_skip",
        gtm_popup_metric_click: "cm_cm22_popup_clk_cta",
        gtm_popup_metric_exit: "cm_cm23_popup_clk_close",
        gtm_cts_name: "ep_cd14_cts_nm",
        gtm_gtm_cts_id: "ep_cd42_cts_id",
        gtm_cts_sub_id: "ep_cd79_sub_cts_id",
        gtm_vertical_index: "ep_vertical_index",
        gtm_horizontal_index: "ep_horizontal_index",
        gtm_extra_index: "extra_index"
    };

    var output = {};
    // 합친 데이터를 변수에 저장
    var combinedData = Object.assign({}, pageData, clickData, visibilityData);
    console.log(combinedData)
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
