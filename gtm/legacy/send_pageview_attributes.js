(function () {
    var button_next = document.querySelector('.btn.btn-primary.w-full.text-18.h-14');
    var page_card = document.querySelector('#__nuxt');

    // 버튼 또는 페이지 카드가 없는 경우 함수 종료
    if (!button_next || !page_card) {
        console.warn('카드신청: Required elements not found.');
        return;
    }
    page_card.setAttribute('data-gtm-page', '')
    page_card.setAttribute('data-gtm-body', JSON.stringify({
        title: "카드>신용카드>카드정보>카드유형선택", 
        id: "CD_1_1_1B_2", 
        frame: "SPA", 
        card_name: "카드명", 
        card_code: "가상카드코드", 
        card_new_or_exist: "신규", 
        card_type: "완편", 
        prod_funnel_name: "카드선택",
    }));
    button_next.setAttribute('data-gtm-event', '');
    button_next.setAttribute('data-gtm-body', JSON.stringify({ event_name: 'page_click', text: "다음" }));


    var dataSections = [];
    // get pageInfo
    var pageElement = document.querySelector('[data-gtm-page]');
    if (!pageElement) {
        return null;
    }
    var pageData =  pageElement.dataset.gtmBody ? JSON.parse(pageElement.dataset.gtmBody) : null;

    var keyMapping = {
        title: "page_title",
        id: "ep_cd57_screenid",
        frame: "ep_cd11_native_yn",
        card_name: "ep_card_name",
        card_code: "ep_card_code",
        card_new_or_exist: "ep_cd64_card_apply_code",
        card_type: "ep_cd65_card_apply_kind",
        fin_prod_name: "ep_cd13_fn_pd_nm",
        fin_amount: "ep_cd17_fn_loan_amt",
        revol_rate: "ep_cd19_rvo_egm_stt_rt",
        revol_term: "ep_cd20_rvo_egm_stt_te",
        prod_funnel_name: "ep_cd48_pd_apply_nm"
    };

    var output = {};

    for (var key in pageData) {
        if (keyMapping[key]) {
            output[keyMapping[key]] = pageData[key];
        }
    }

    output.event = "screen_view";    

    console.log(output);
    dataLayer.push(output)
    return output;
})()

