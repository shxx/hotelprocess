;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-user-" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M1024 870.4c-19.2-51.2-70.4-57.6-121.6-76.8-51.2-19.2-108.8-44.8-160-70.4-12.8-6.4-32-6.4-44.8-12.8-19.2-12.8-32-51.2-44.8-70.4-6.4 0-19.2 0-25.6-6.4 0-32 19.2-32 25.6-57.6 6.4-19.2 0-44.8 12.8-70.4 6.4-12.8 25.6-12.8 32-25.6 6.4-12.8 12.8-25.6 12.8-38.4 6.4-25.6 6.4-57.6 0-76.8-6.4-12.8-12.8-12.8-12.8-32s6.4-83.2 6.4-96c0-38.4 0-38.4-6.4-70.4 0 0-12.8-32-25.6-38.4l-38.4-12.8-19.2-12.8C531.2 51.2 448 83.2 396.8 102.4 332.8 128 288 192 320 332.8c6.4 25.6-12.8 38.4-12.8 51.2 0 32 0 96 32 115.2l19.2 6.4c0 25.6 6.4 57.6 6.4 83.2 6.4 19.2 25.6 19.2 25.6 44.8l-19.2 6.4c-6.4 19.2-25.6 57.6-44.8 70.4-12.8 6.4-32 6.4-44.8 12.8-51.2 19.2-108.8 44.8-160 70.4-44.8 19.2-102.4 25.6-121.6 76.8V1024h448l32-224-25.6-57.6 64-32 57.6 32-32 57.6 51.2 224H1024c6.4-44.8 0-121.6 0-153.6z m0 0"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingdan-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.2 0H236.8c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h569.6c70.4 0 128-57.6 128-128V262.4L691.2 0z m-12.8 102.4L838.4 256h-128s-32-6.4-32-32V102.4z m192 742.4c0 57.6-51.2 108.8-108.8 108.8H281.6c-57.6 0-108.8-51.2-108.8-108.8V179.2c0-57.6 51.2-108.8 108.8-108.8h332.8v128s-25.6 147.2 128 128h128v518.4zM294.4 512h441.6v57.6H294.4V512z m0 185.6h441.6v57.6H294.4v-57.6z m0 0"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidanxuanze-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m262.4 684.8H249.6c-19.2 0-32-12.8-32-32s12.8-32 32-32h524.8c19.2 0 32 12.8 32 32s-12.8 32-32 32z m0-140.8H249.6c-19.2 0-32-12.8-32-32s12.8-32 32-32h524.8c19.2 0 32 12.8 32 32s-12.8 32-32 32z m0-147.2H249.6c-19.2 0-32-12.8-32-32s12.8-32 32-32h524.8c19.2 0 32 12.8 32 32s-12.8 32-32 32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m0 972.8C256 972.8 51.2 768 51.2 512S256 51.2 512 51.2 972.8 256 972.8 512 768 972.8 512 972.8z"  ></path>' +
    '' +
    '<path d="M774.4 332.8H256c-19.2 0-32 12.8-32 32s12.8 32 32 32h524.8c19.2 0 32-12.8 32-32-6.4-19.2-19.2-32-38.4-32zM774.4 480H256c-19.2 0-32 12.8-32 32s12.8 32 32 32h524.8c19.2 0 32-12.8 32-32-6.4-19.2-19.2-32-38.4-32zM774.4 620.8H256c-19.2 0-32 12.8-32 32s12.8 32 32 32h524.8c19.2 0 32-12.8 32-32-6.4-12.8-19.2-32-38.4-32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingdanxuanze-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M691.2 0v204.8s0 51.2 51.2 51.2h185.6l-236.8-256z"  ></path>' +
    '' +
    '<path d="M704 320c-83.2-19.2-83.2-102.4-83.2-102.4V0h-384c-128 12.8-128 128-128 128v768c6.4 121.6 128 128 128 128h569.6c128 0 128-147.2 128-147.2V320H704z m32 435.2H294.4v-76.8h441.6v76.8z m0-179.2H294.4V505.6h441.6V576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingdanwancheng-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M294.4 723.2h377.6v51.2H294.4zM294.4 556.8h377.6v51.2H294.4z"  ></path>' +
    '' +
    '<path d="M793.6 524.8v320c0 51.2-38.4 96-89.6 96H288C236.8 934.4 192 896 192 844.8V275.2c0-51.2 25.6-96 76.8-96h166.4l12.8-57.6H249.6c-57.6 0-108.8 44.8-108.8 108.8v659.2c0 57.6 51.2 108.8 108.8 108.8h492.8c57.6 0 108.8-51.2 108.8-108.8V454.4l-57.6 12.8v57.6z"  ></path>' +
    '' +
    '<path d="M697.6 0C576 0 473.6 96 473.6 217.6S576 441.6 697.6 441.6s224-102.4 224-224S819.2 0 697.6 0z m-32 320L550.4 230.4l51.2-44.8 70.4 57.6 121.6-128 38.4 44.8L665.6 320z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangxing-" viewBox="0 0 1035 1024">' +
    '' +
    '<path d="M601.6 76.8C576 51.2 544 38.4 512 38.4c-32 0-64 12.8-89.6 38.4L32 467.2c-38.4 38.4-32 70.4-25.6 89.6 6.4 12.8 19.2 38.4 64 38.4H128V896c0 64 44.8 128 115.2 128h179.2v-236.8c0-32-6.4-51.2 32-51.2h128c32 0 32 19.2 32 51.2V1024h179.2c70.4 0 115.2-64 115.2-134.4V595.2h57.6c44.8 0 57.6-25.6 64-38.4 6.4-12.8 12.8-51.2-25.6-89.6L601.6 76.8z m390.4 390.4"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jia-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m0 960c-249.6 0-448-204.8-448-448s204.8-448 448-448 448 204.8 448 448-198.4 448-448 448z"  ></path>' +
    '' +
    '<path d="M550.4 243.2H480v230.4H249.6v64h230.4V768h70.4V537.6h230.4v-64H550.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xingbiaoxuanze-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1004.8 396.8c-6.4-25.6-32-44.8-57.6-44.8l-262.4-38.4L576 76.8C563.2 51.2 537.6 38.4 512 38.4s-51.2 12.8-64 38.4L332.8 313.6l-262.4 38.4c-25.6 6.4-44.8 19.2-51.2 44.8s0 51.2 19.2 70.4l185.6 185.6-44.8 262.4c-6.4 25.6 6.4 51.2 25.6 70.4 19.2 12.8 51.2 19.2 70.4 6.4l236.8-128 230.4 121.6c12.8 6.4 19.2 6.4 32 6.4s25.6-6.4 38.4-12.8c19.2-12.8 32-38.4 25.6-70.4l-44.8-262.4 185.6-185.6c25.6-12.8 32-38.4 25.6-64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jian-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m0 966.4c-249.6 0-448-204.8-448-448s204.8-448 448-448 448 204.8 448 448-198.4 448-448 448z"  ></path>' +
    '' +
    '<path d="M230.4 473.6h550.4v70.4H230.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xingbiao-" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M761.8592 998.4c-12.8 0-19.2 0-32-6.4l-230.4-121.6-230.4 121.6c-25.6 12.8-51.2 12.8-70.4-6.4-19.2-12.8-32-44.8-25.6-70.4l44.8-262.4L19.4592 473.6C0.2592 454.4-6.1408 428.8 6.6592 403.2c6.4-25.6 32-44.8 57.6-44.8L320.2592 320l115.2-236.8c12.8-25.6 38.4-38.4 64-38.4s51.2 12.8 64 38.4L678.6592 320l262.4 38.4c25.6 6.4 44.8 19.2 57.6 44.8 6.4 25.6 0 51.2-19.2 70.4l-185.6 185.6 44.8 262.4c6.4 25.6-6.4 51.2-25.6 70.4-19.2 0-38.4 6.4-51.2 6.4z m-262.4-198.4l262.4 134.4h12.8c6.4 0 6.4-6.4 6.4-12.8l-51.2-288 211.2-204.8s6.4-6.4 0-12.8c0-6.4-6.4-6.4-6.4-6.4L640.2592 371.2 512.2592 108.8c-6.4-6.4-12.8-6.4-19.2 0l-128 262.4-294.4 44.8c-6.4 0-12.8 0-12.8 6.4v12.8L269.0592 640l-51.2 288c0 6.4 0 6.4 6.4 12.8s6.4 0 12.8 0l262.4-140.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidanjiedan" viewBox="0 0 1030 1024">' +
    '' +
    '<path d="M582.4 249.6c6.4-12.8 12.8-25.6 12.8-44.8C595.2 166.4 556.8 128 512 128c-44.8 0-83.2 38.4-83.2 83.2 0 12.8 6.4 32 12.8 44.8C192 288 0 499.2 0 761.6v89.6c0 12.8 12.8 25.6 25.6 25.6h979.2c12.8 0 25.6-12.8 25.6-25.6v-89.6c-6.4-262.4-198.4-473.6-448-512zM512 172.8c19.2 0 38.4 19.2 38.4 38.4s-19.2 38.4-38.4 38.4-38.4-19.2-38.4-38.4c0-25.6 19.2-38.4 38.4-38.4z m0 121.6c249.6 0 454.4 198.4 467.2 441.6H44.8C57.6 486.4 262.4 294.4 512 294.4z m467.2 531.2H44.8v-44.8h934.4v44.8zM512 371.2c-102.4 0-198.4 38.4-275.2 115.2-12.8 6.4-12.8 19.2 0 25.6 6.4 6.4 12.8 6.4 19.2 6.4 6.4 0 12.8 0 12.8-6.4 64-64 153.6-102.4 243.2-102.4 12.8 0 25.6-6.4 25.6-25.6-6.4-6.4-12.8-12.8-25.6-12.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-anniu-queren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M416 800c-6.4 0-12.8 0-19.2-6.4l-256-256c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l256 256c12.8 12.8 12.8 32 0 44.8-12.8 0-19.2 6.4-25.6 6.4z"  ></path>' +
    '' +
    '<path d="M422.4 800c-6.4 0-12.8 0-19.2-6.4-12.8-12.8-12.8-32-6.4-44.8l441.6-524.8c12.8-12.8 32-12.8 44.8-6.4 12.8 12.8 12.8 32 6.4 44.8L448 787.2c-6.4 6.4-12.8 12.8-25.6 12.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-anniu-fenpeidingdan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.6 640c-12.8-12.8-32-6.4-38.4 0l-185.6 211.2-121.6-121.6c-12.8-12.8-25.6-12.8-38.4 0s-6.4 38.4 6.4 44.8l134.4 134.4c6.4 6.4 12.8 6.4 19.2 6.4h6.4c6.4 0 12.8-6.4 19.2-12.8l198.4-230.4c12.8-6.4 12.8-19.2 0-32z m-230.4 64l32-44.8c-38.4-44.8-83.2-76.8-134.4-102.4 70.4-38.4 121.6-115.2 121.6-204.8 0-128-108.8-236.8-236.8-236.8S204.8 224 204.8 352c0 89.6 51.2 166.4 121.6 204.8-76.8 32-147.2 96-185.6 179.2-6.4 12.8 0 32 12.8 38.4 12.8 6.4 32 0 38.4-12.8 44.8-102.4 140.8-166.4 249.6-166.4 89.6 0 166.4 38.4 217.6 108.8zM262.4 358.4c0-102.4 83.2-179.2 179.2-179.2 102.4 0 179.2 83.2 179.2 179.2S544 537.6 441.6 537.6c-96 0-179.2-83.2-179.2-179.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidanyijiedingdan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M288 710.4H896c6.4 0 19.2-6.4 19.2-12.8l102.4-409.6v-6.4-6.4s-6.4 0-6.4-6.4l-6.4-6.4H832c-12.8 0-19.2 6.4-19.2 19.2 0 12.8 6.4 19.2 19.2 19.2h147.2l-89.6 364.8h-576L211.2 307.2h147.2c12.8 0 25.6-12.8 25.6-25.6s-6.4-19.2-19.2-19.2H204.8l-32-115.2c0-12.8-12.8-19.2-19.2-19.2H19.2c-12.8 0-19.2 12.8-19.2 19.2 0 12.8 6.4 19.2 19.2 19.2h121.6l32 121.6 96 384-38.4 19.2c-19.2 19.2-25.6 38.4-25.6 64s12.8 51.2 32 70.4l-6.4 6.4c-19.2 19.2-25.6 38.4-25.6 64 0 51.2 38.4 89.6 89.6 89.6 25.6 0 44.8-6.4 64-25.6 19.2-19.2 25.6-38.4 25.6-64 0-19.2-6.4-32-12.8-44.8H832c-6.4 12.8-12.8 32-12.8 44.8 0 51.2 38.4 89.6 89.6 89.6 25.6 0 44.8-6.4 64-25.6 19.2-19.2 25.6-38.4 25.6-64 0-51.2-38.4-89.6-89.6-89.6H288c-25.6 0-44.8-19.2-44.8-44.8 0-12.8 6.4-25.6 12.8-32 6.4-12.8 19.2-19.2 32-19.2z m44.8 185.6c0 12.8-6.4 25.6-12.8 32-6.4 6.4-19.2 12.8-32 12.8-25.6 0-44.8-19.2-44.8-44.8 0-12.8 6.4-25.6 12.8-32 6.4-6.4 19.2-12.8 32-12.8 25.6-6.4 44.8 19.2 44.8 44.8z m620.8 0c0 12.8-6.4 25.6-12.8 32-6.4 6.4-19.2 12.8-32 12.8-25.6 0-44.8-19.2-44.8-44.8 0-12.8 6.4-25.6 12.8-32 6.4-6.4 19.2-12.8 32-12.8 25.6-6.4 44.8 19.2 44.8 44.8z"  ></path>' +
    '' +
    '<path d="M582.4 396.8c6.4 6.4 6.4 6.4 12.8 6.4s12.8 0 12.8-6.4L704 300.8c6.4-6.4 6.4-19.2 0-25.6-6.4-6.4-19.2-6.4-25.6 0l-64 64V185.6c0-12.8-6.4-19.2-19.2-19.2-12.8 0-19.2 12.8-19.2 19.2v140.8l-64-64c-6.4-6.4-19.2-6.4-25.6 0-6.4 6.4-6.4 19.2 0 25.6l96 108.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidanliebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M857.6 966.4H166.4V57.6h684.8v908.8z m-646.4-38.4h608v-832H211.2v832z"  ></path>' +
    '' +
    '<path d="M441.6 256h268.8v38.4H441.6zM441.6 409.6h268.8V448H441.6zM441.6 569.6h268.8v38.4H441.6zM441.6 729.6h268.8v38.4H441.6zM300.8 249.6h38.4v537.6h-38.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidanyuangongguanli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M998.4 736c-32-51.2-76.8-89.6-121.6-108.8 51.2-32 89.6-96 89.6-160 0-108.8-89.6-192-192-192-12.8 0-25.6 12.8-25.6 25.6s12.8 19.2 25.6 19.2c76.8 0 140.8 64 140.8 140.8s-64 140.8-140.8 140.8c-12.8 0-25.6 12.8-25.6 25.6s12.8 25.6 25.6 25.6c76.8 0 140.8 38.4 185.6 102.4 6.4 6.4 12.8 12.8 19.2 12.8 6.4 0 6.4 0 12.8-6.4 12.8 0 12.8-12.8 6.4-25.6zM275.2 640c0-12.8-12.8-25.6-25.6-25.6-76.8 0-140.8-64-140.8-140.8s64-140.8 140.8-140.8c12.8 0 25.6-12.8 25.6-25.6s-12.8-32-25.6-32c-108.8 0-192 89.6-192 192 0 70.4 38.4 128 89.6 160-51.2 19.2-96 57.6-121.6 108.8-6.4 12.8-6.4 25.6 6.4 38.4 6.4 0 6.4 6.4 12.8 6.4s19.2-6.4 19.2-12.8c38.4-64 108.8-102.4 185.6-102.4 12.8 0 25.6-12.8 25.6-25.6z m320-44.8c83.2-32 147.2-115.2 147.2-211.2 0-128-102.4-230.4-230.4-230.4S281.6 256 281.6 384c0 102.4 64 185.6 160 217.6-128 38.4-224 153.6-224 294.4 0 12.8 12.8 25.6 25.6 25.6s25.6-12.8 25.6-25.6c0-140.8 115.2-256 256-256s256 115.2 256 256c0 12.8 12.8 25.6 25.6 25.6s25.6-12.8 25.6-25.6c-6.4-147.2-102.4-268.8-236.8-300.8zM512 563.2C416 563.2 332.8 480 332.8 384c0-96 76.8-179.2 179.2-179.2 96 0 179.2 76.8 179.2 179.2 0 96-83.2 179.2-179.2 179.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pingjiaxingxingdianliang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928 422.4c-6.4-19.2-19.2-38.4-38.4-38.4l-204.8-32-96-185.6c-6.4-19.2-25.6-25.6-44.8-25.6-19.2 0-38.4 12.8-51.2 32L403.2 352 198.4 384c-19.2 0-38.4 19.2-44.8 38.4-6.4 19.2 0 38.4 12.8 57.6L320 620.8l-32 204.8c-6.4 19.2 6.4 38.4 19.2 51.2 19.2 12.8 38.4 12.8 57.6 6.4l185.6-96 185.6 96c6.4 6.4 19.2 6.4 25.6 6.4 12.8 0 25.6-6.4 32-12.8 19.2-12.8 25.6-32 19.2-51.2L768 620.8l147.2-140.8c19.2-19.2 19.2-38.4 12.8-57.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinruxiangqing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M812.8 531.2c6.4 0 6.4 0 0 0 0-6.4 6.4-6.4 6.4-6.4v-6.4V512v-6.4-6.4L300.8 108.8c-12.8-12.8-25.6-12.8-32 0-12.8 12.8-12.8 25.6 0 38.4l480 371.2-454.4 358.4c-12.8 6.4-12.8 25.6-6.4 38.4 6.4 6.4 12.8 12.8 19.2 12.8 6.4 0 12.8 0 12.8-6.4l492.8-390.4c0 6.4 0 6.4 0 0 0 6.4 0 6.4 0 0 0 6.4 0 6.4 0 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dingdan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M876.8 140.8h-153.6C704 96 665.6 64 620.8 64H403.2c-44.8 0-83.2 32-102.4 76.8H147.2c-12.8 0-25.6 12.8-25.6 25.6v723.2c0 12.8 12.8 25.6 25.6 25.6h729.6c12.8 0 25.6-12.8 25.6-25.6V166.4c0-12.8-12.8-25.6-25.6-25.6z m-473.6-25.6h217.6c32 0 57.6 25.6 57.6 57.6s-25.6 57.6-57.6 57.6H403.2c-32 0-57.6-25.6-57.6-57.6s25.6-57.6 57.6-57.6z m448 748.8H172.8V185.6h128c6.4 51.2 51.2 96 108.8 96h217.6c57.6 0 102.4-44.8 108.8-96h128v678.4zM294.4 428.8c-12.8 0-25.6 12.8-25.6 25.6s12.8 25.6 25.6 25.6h428.8c12.8 0 25.6-12.8 25.6-25.6s-12.8-25.6-25.6-25.6H294.4z m435.2 192H294.4c-12.8 0-25.6 12.8-25.6 25.6s12.8 25.6 25.6 25.6h428.8c12.8 0 25.6-12.8 25.6-25.6s-6.4-25.6-19.2-25.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghupingjia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M915.2 800c-38.4-83.2-102.4-147.2-185.6-179.2 70.4-38.4 121.6-115.2 121.6-204.8 0-128-108.8-236.8-236.8-236.8S377.6 288 377.6 416c0 89.6 51.2 166.4 121.6 204.8-76.8 32-147.2 96-185.6 179.2-6.4 12.8 0 32 12.8 38.4 12.8 6.4 32 0 38.4-12.8 44.8-102.4 140.8-166.4 249.6-166.4 108.8 0 204.8 64 249.6 166.4 6.4 12.8 12.8 19.2 25.6 19.2h12.8c12.8-12.8 19.2-25.6 12.8-44.8zM428.8 422.4C428.8 320 512 243.2 614.4 243.2c102.4 0 179.2 83.2 179.2 179.2s-83.2 179.2-179.2 179.2C512 601.6 428.8 518.4 428.8 422.4z m-57.6 185.6c0-12.8-12.8-25.6-25.6-25.6-76.8 0-140.8-64-140.8-140.8s64-140.8 140.8-140.8c12.8 0 25.6-12.8 25.6-25.6s-12.8-25.6-25.6-25.6C236.8 249.6 147.2 339.2 147.2 448c0 70.4 38.4 128 89.6 166.4-51.2 19.2-96 57.6-128 108.8-6.4 12.8-6.4 32 6.4 38.4 6.4 0 6.4 6.4 12.8 6.4s19.2-6.4 25.6-12.8c38.4-64 108.8-108.8 185.6-108.8 25.6-12.8 32-25.6 32-38.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pingjiaxingxingkong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.8 883.2c-6.4 0-19.2 0-25.6-6.4L512 780.8l-185.6 96c-19.2 6.4-38.4 6.4-57.6-6.4-19.2-12.8-25.6-32-19.2-51.2l32-204.8-140.8-140.8c-19.2-12.8-19.2-32-12.8-51.2 6.4-19.2 19.2-38.4 38.4-38.4l204.8-32 89.6-185.6c12.8-19.2 32-25.6 51.2-25.6 19.2 0 38.4 12.8 51.2 32l89.6 185.6 204.8 25.6c19.2 0 38.4 19.2 44.8 38.4 6.4 19.2 0 38.4-12.8 57.6l-147.2 140.8 32 204.8c6.4 19.2-6.4 38.4-19.2 51.2-12.8 6.4-25.6 6.4-38.4 6.4zM512 729.6l204.8 108.8h6.4l6.4-6.4-38.4-224L857.6 448v-6.4l-6.4-6.4-230.4-38.4L518.4 192c0-6.4-12.8-6.4-12.8 0L403.2 396.8l-230.4 32s-6.4 0-6.4 6.4v6.4l166.4 160-38.4 230.4v6.4h6.4L512 729.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 70.4C268.8 70.4 70.4 268.8 70.4 512s198.4 441.6 441.6 441.6 441.6-198.4 441.6-441.6S755.2 70.4 512 70.4z m0 832c-217.6 0-390.4-172.8-390.4-390.4 0-217.6 172.8-390.4 390.4-390.4 217.6 0 390.4 172.8 390.4 390.4 0 217.6-172.8 390.4-390.4 390.4z m307.2-409.6H537.6V166.4c0-12.8-12.8-25.6-25.6-25.6s-25.6 12.8-25.6 25.6v352c0 12.8 12.8 25.6 25.6 25.6h307.2c12.8 0 25.6-12.8 25.6-25.6s-6.4-25.6-25.6-25.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-anniu-liuzhuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 339.2l-153.6-153.6c-6.4-6.4-25.6-6.4-32 0s-6.4 25.6 0 32l115.2 115.2H268.8c-12.8 0-25.6 6.4-25.6 19.2s12.8 25.6 25.6 25.6h556.8L704 492.8c-6.4 6.4-6.4 25.6 0 32s12.8 6.4 19.2 6.4 12.8 0 19.2-6.4L896 371.2c6.4-6.4 6.4-25.6 0-32zM128 697.6l153.6-153.6c6.4-6.4 25.6-6.4 32 0 12.8 6.4 12.8 19.2 6.4 32l-115.2 115.2h556.8c12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6H198.4L320 851.2c6.4 6.4 6.4 25.6 0 32-6.4 6.4-12.8 12.8-19.2 12.8-6.4 0-12.8 0-19.2-6.4L128 729.6c-6.4-6.4-6.4-25.6 0-32z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)