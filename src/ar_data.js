const data = [
  {
    topic: "السلطة التنفيذية",
    files: [
      {
        title: "قرارات مجلس الوزراء",
        ar_source: "http://www.cabinet.iq/ArticlesBrowse.aspx?CatID=6/",
      },
      {
        title: "بيانات مكتب رئيس وزراء",
        en_source: "http://pmo.iq/pme/ipresse.htm/",
        ar_source: "https://pmo.iq/press.htm/",
      },
      {
        title: "برنامج الحكومة ٢٠٢٠",
        ar_source: "https://pmo.iq/press2020/6-5-202002.htm/",
      },
      {
        title: "تقرير الاداء الحكومي ٢٠٢١",
        ar_source:
          "https://drive.google.com/file/d/1idNnbPPv_3dii0re-khDZHNlFDuck6C5/view",
      },
      {
        topic: "الحكم المحلي",
        files: [
          {
            title: "قانون المحافظات غير المنتظمة في إقليم (٢٠٠٨)",
            en_source:
              "http://gjpi.org/wp-content/uploads/2009/01/cor_law_governorates_not_part_regions_en.pdf/",
            ar_source:
              "https://arb.parliament.iq/archive/2008/11/03/%D9%82%D8%A7%D9%86%D9%88%D9%86-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A7%D8%AA-%D8%BA%D9%8A%D8%B1-%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%B8%D9%85%D8%A9-%D9%81%D9%8A-%D8%A7%D9%82%D9%84%D9%8A%D9%85/",
          },
        ],
      },
      {
        topic: "أرشيف",
        files: [
          {
            title: "الإطار العام لخطة الحكومة للفترة ٢٠١٤-٢٠١٨",
            en_source: "http://google.com/",
            ar_source: "http://google.fr/",
          },
          {
            title: "برنامج الحكومة للفترة ٢٠١٤-٢٠١٨",
            ar_source: "http://pmo.iq/pdf/3.pdf",
          },
          {
            title: "وثيقة الاتفاق السياسي بين الكتل السياسية ٢٠١٤",
            ar_source: "http://pmo.iq/pdf/4.pdf",
          },
        ],
      },
    ],
  },
  {
    topic: "السلطة التشريعية",
    files: [
      {
        title: "مجلس النواب",
        ar_source: "http://parliament.iq",
      },
      {
        title: "الجريدة الرسمية",
        ar_source: "http://www.moj.gov.iq/iraqmag/",
      },
      {
        title: "الدستور العراقي",
        en_source:
          "http://zaidalali.bookswarm.co.uk/wp-content/uploads/2014/03/Iraqs-constitution-unofficial-translation.docx",
        ar_source:
          "http://parliament.iq/wp-content/uploads/2017/01/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1-%D8%AC%D9%85%D9%87%D9%88%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82.pdf",
      },
      {
        title: "دليل للمصطلحات القانونية",
        en_source:
          "http://gjpi.org/wp-content/uploads/gjpi-legal-terms-eng-ara.htm",
        ar_source:
          "http://gjpi.org/wp-content/uploads/gjpi-legal-terms-eng-ara.htm",
      },
    ],
  },
  {
    topic: "السلطة القضائية والرقابة",
    files: [
      {
        title: "مجلس القضاء الاعلى",
        ar_source: "http://www.iraqja.iq/",
      },
      {
        title: "المحكمة الاتحادية العليا",
        ar_source: "https://www.iraqfsc.iq/ethadai.php",
      },
      {
        topic: "ديوان الرقابة المالية",
        files: [
          {
            title: "موقع ديوان الرقابة المالية",
            en_source: "http://www.fbsa.gov.iq/en",
            ar_source: "http://www.fbsa.gov.iq/",
          },
        ],
      },
      {
        topic: "هيئة النزاهة",
        files: [
          {
            title: "استراتيجية مكافحة الفساد للفترة ٢٠١٦-٢٠٢٠",
            ar_source: "http://www.nazaha.iq/pdf_up/3940/strat_2016-2020.pdf",
          },
          {
            topic: "التقارير السنوية",
            files: [
              {
                title: "ملخص التقرير السنوي لعام ٢٠٢٠",
                ar_source: "https://nazaha.iq/pdf_up/6265/MRep2020.pdf",
              },
              {
                title: "التقرير السنوي لعام ٢٠١٩",
                ar_source: "https://nazaha.iq/pdf_up/5778/f_report_2019.pdf",
              },
              {
                title: "التقرير السنوي لعام ٢٠١٦",
                ar_source: "http://www.nazaha.iq/pdf_up/3951/mlreportF2016.pdf",
              },
              {
                title: "التقرير السنوي لعام ٢٠١٥",
                ar_source:
                  "http://www.nazaha.iq/body.asp?field=news_arabic&id=3563",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    topic: "الموازنات والمالية",
    files: [
      {
        topic: "قوانين الموازنة الاتحادية السنوية",
        files: [
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠٢١ (مع المرفقات)",
            ar_source: "https://moj.gov.iq/uploaded/4625.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١٩ (مع المرفقات)",
            ar_source: "https://moj.gov.iq/upload/pdf/4529.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١٨ (مع المرفقات)",
            ar_source: "https://moj.gov.iq/upload/pdf/4485.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١٧ (مع المرفقات)",
            ar_source: "http://moj.gov.iq/wqam/4430.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١٦ (مع المرفقات)",
            ar_source: "http://www.moj.gov.iq/uploaded/4394.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١٥ (مع المرفقات)",
            ar_source: "http://www.moj.gov.iq/uploaded/4352.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١٣ (مع المرفقات)",
            ar_source: "http://www.moj.gov.iq/uploaded/4272.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١٢ (مع المرفقات)",
            ar_source: "http://www.moj.gov.iq/uploaded/4233.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١١ (مع المرفقات)",
            ar_source: "http://www.moj.gov.iq/uploaded/4180.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠١٠ (مع المرفقات)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%85%D8%B5%D9%88%D8%AA%20%D8%B9%D9%84%D9%8A%D9%87%D8%A7.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠٠٩ (مع المرفقات)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B2%D9%86%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D9%84%D9%84%D8%B3%D9%86%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%202009.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠٠٨ (مع المرفقات)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B2%D9%86%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D9%84%D8%B3%D9%86%D8%A9%202008.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠٠٧ (مع المرفقات)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B2%D9%86%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D9%84%D9%84%D8%B3%D9%86%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%202007.pdf",
          },
          {
            title: "قانون الموازنة الاتحادية لعام ٢٠٠٦ (مع المرفقات)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B2%D9%86%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%20%20%D9%84%D9%84%D8%B3%D9%86%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%202006.pdf",
          },
        ],
      },
    ],
  },
  {
    topic: "السياسة النقدية",
    files: [
      {
        topic: "البنك المركزي العراقي",
        files: [
          {
            topic: "جداول الوضع المالي للبنك المركزي",
            files: [
              {
                title: "جداول الوضع المالي (آذار ٢٠٢١)",
                en_source:
                  "https://cbi.iq/static/uploads/up/file-16193397474110.pdf",
              },
              {
                title: "جداول الوضع المالي (شباظ ٢٠٢١)",
                en_source:
                  "https://cbi.iq/static/uploads/up/file-161692948015696.pdf",
              },
              {
                title: "جداول الوضع المالي (كانون الثاني ٢٠٢١)",
                en_source:
                  "https://cbi.iq/static/uploads/up/file-161545360093508.pdf",
              },
            ],
          },
        ],
      },
      {
        topic: "البيانات المالية (إرنست ويونغ)",
        files: [
          {
            title: "البيان المالي لعام ٢٠١٩",
            ar_source:
              "https://cbi.iq/static/uploads/up/file-159851680953542.pdf",
          },
          {
            title: "البيان المالي لعام ٢٠١٨",
            ar_source:
              "https://cbi.iq/static/uploads/up/file-156040785775959.pdf",
          },
          {
            title: "البيان المالي لعام ٢٠١٧",
            ar_source:
              "https://cbi.iq/static/uploads/up/file-152499442357779.pdf",
          },
        ],
      },
      {
        topic: "صندوق النقد الدولي",
        files: [
          {
            title: "مشاورات المادة الرابعة لعام ٢٠٢٠",
            en_source:
              "https://www.imf.org/-/media/Files/Publications/CR/2021/English/1IRQEA2021002.ashx",
            ar_source:
              "https://www.imf.org/ar/News/Articles/2021/02/11/pr2137-iraq-imf-executive-board-concludes-2020-article-iv-consultation",
          },
        ],
      },
    ],
  },
  {
    topic: "الطاقة",
    files: [
      {
        title: "صادرات النفط الخام الشهرية",
        en_source: "https://somooil.gov.iq/exports",
        ar_source: "https://somooil.gov.iq/exports",
      },
      {
        topic: "مبادرة الشفافية للصناعات الاستخراجية",
        files: [
          {
            title: "تقرير المبادرة للعراق لعام ٢٠١٨ (آذار عام ٢٠٢١)",
            en_source:
              "https://eiti.org/files/documents/iraq_2018_eiti_report_en.pdf",
            ar_source:
              "https://eiti.org/files/documents/iraq_2018_eiti_report_ar.pdf",
          },
        ],
      },
    ],
  },
  {
    topic: "التنمية الاقتصادية والاجتماعية",
    files: [
      {
        topic: "الورقة البيضاء للاصلاحات المالية",
        files: [
          {
            title: "تقرير الورقة البيضاء ٢٠٢٠",
            en_source:
              "https://drive.google.com/file/d/1mdnNi5Arf_7j_pbmPdVc2hO2Z-AOOmdw/view?usp=sharing",
            ar_source:
              "https://drive.google.com/file/d/1wDseusYfMRYW6b3sBHyv5uY4GanHXNGK/view?usp=sharing",
          },
          {
            title: "خطة تنفيذ الورقة البيضاء ٢٠٢١",
            en_source:
              "https://drive.google.com/file/d/1RVb-h8r6iBWM7bIPBgAD1rOygGG_8P0m/view?usp=sharing",
            ar_source:
              "https://drive.google.com/file/d/19FrToYtdZBojxZaebEFjedJwC26L0LRn/view?usp=sharing",
          },     
        ],
      },
      {
        topic: "الاصلاح الاداري في القطاع العام",
        files: [
          {
            title: "استراتيجية الاصلاح الاداري في الدوائر الحكومية في العراق ٢٠٢١",
            ar_source:
              "https://drive.google.com/file/d/102GpzsDihhuFcR8xvvjewfXIEOKb9RDq/view?usp=sharing",
          },
        ],
      },
      {
        topic: "تطوير القطاع الخاص",
        files: [
          {
            title: "استراتيجية تنمية القطاع الخاص للفترة ٢٠١٤-٢٠٢٠",
            en_source:
              "http://www.iq.undp.org/content/dam/iraq/docs/povred/UNDP-IQ-PrivateSectorDevelopment2014%20-2030.pdf",
            ar_source:
              "http://www.iq.undp.org/content/dam/iraq/docs/povred/%D8%A5%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%202014-2030.pdf",
          },
        ],
      },
      {
        topic: "هيئة الاستثمار الوطنية",
        files: [
          {
            title: "الدليل القانوني لإلستثمار في العراق لعام ٢٠١٦",
            en_source:
              "http://investpromo.gov.iq/wp-content/uploads/2016/10/legel-guide%20-final.pdf",
            ar_source:
              "http://investpromo.gov.iq/wp-content/uploads/2016/10/legel-guide%20-final.pdf",
          },
          {
            title: "دليل المستثمر في العراق لعام ۲۰۱٦",
            en_source:
              "http://investpromo.gov.iq/wp-content/uploads/2013/07/Investor-Guide-2016-english.pdf",
            ar_source:
              "http://investpromo.gov.iq/wp-content/uploads/2013/07/Investor-Guide-2016-arabic.pdf",
          },
          {
            title: "الخارطة الاستثمارية للعراق لعام ٢٠١٦",
            en_source:
              "http://investpromo.gov.iq/nic_flash/refrence_materials/investment%20map%202016%20english.pdf",
            ar_source:
              "http://investpromo.gov.iq/nic_flash/refrence_materials/investment%20map%202016%20-%20arabic%20.pdf",
          },
        ],
      },
      {
        title: "المنظمة الدولية للهجرة - مصفوفة تتبع المهجرين العراقيين",
        en_source: "http://iraqdtm.iom.int/",
        ar_source: "http://iraqdtm.iom.int/Arabic,",
      },
      {
        topic: "تقارير البنك الدولي",
        files: [
          {
            title:
              "مراجعة الانفاق العام لقطاعات التنمية البشرية في العراق (حزيران ٢٠٢١)",
            en_source:
              "https://documents1.worldbank.org/curated/en/568141622306648034/pdf/Addressing-the-Human-Capital-Crisis-A-Public-Expenditure-Review-for-Human-Development-Sectors-in-Iraq.pdf",
          },
        ],
      },
      {
        title: "تشخيص االقتصاد غير المنظم في العراق ٢٠٢١",
        en_source: "https://iraq.un.org/en/download/89966/160607",
        ar_source: "https://iraq.un.org/en/download/89967/160607",
        description: "شـارك فـي إصـدار هـذا المنشـور كل ًُ مـن منظمـة العمـل الدوليـة، وبرنامـج األمـم المتحـدة اإلنمائـي، وهيئـة األمـم المتحـدة للمـرأة، والمنظمـة الدوليـة للهجـرة",
      },
    ],
  },
  {
    topic: "الانتخابات",
    files: [
      {
        title: "المفوضية العليا المستقلة للانتخابات",
        ar_source: "http://www.ihec.iq/ar/",
      },
    ],
  },
  {
    topic: "إحصاءات ومؤشرات",
    files: [
      {
        title: "المجموعة الاحصائية لعام ٢٠١٨-٢٠١٩",
        en_source: "http://cosit.gov.iq/ar/2018-2019",
        ar_source: "http://cosit.gov.iq/ar/2018-2019",
      },
      {
        title: "مؤشرات الإسكان والديموغرافية",
        ar_source: "http://cosit.gov.iq/ar/2013-01-31-08-43-38",
      },
      {
        title: "الصحة والمؤشرات البيئية",
        ar_source: "http://cosit.gov.iq/ar/env-ind",
      },
    ],
  },
];

export default data;
