var app = new Vue({
    el: '#app',
    data: {
      camera_data: [
        {
          name: 'Canon EOS R10 + RF-S18-45mm F4.5-6.3 IS STM',
          price: 28000,
          brand: 'Canon',
          discount: 0.85,
          info: "約 2,420萬像素高速APS-C CMOS 影像感測器,最高約 23 FPS,拍速度並支援自動對焦及自動曝光追蹤無裁切 4K UHD 30P短片 (6K超取樣)"
        },
        {
          name: 'EOS R8 (RF24-50mm f/4.5-6.3 IS STM)',
          price: 49000,
          discount: 0.85,
          brand: 'Canon',
          info: "2,420萬像素全片幅 CMOS 影像感測器,6K超取樣4K 60p及FHD 180p 與Canon Log 3,電子快門40FPS連拍"
        },
        {
          name: 'RICOH GRIII',
          price: 34000,
          discount: 0.85,
          brand: 'RICOH',
          info: "採用特殊防滑高質感金屬灰機身塗裝搭配海神藍鏡頭環新增「3.5m」快拍距離設定"
        }
      ]
    },
    components: {
      'room': {
        template: '#cam',
        props: ['camera_data']
      }
    }
  });