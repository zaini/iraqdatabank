const data = [
  {
    topic: "Executive Branch",
    description: "Includes important government decisions, policy priorities, and national strategies.",
    files: [
      {
        title: "Council of Ministers resolutions",
        en_source: "https://www.cabinet.iq/en/category/decisions",
        ar_source: "https://www.cabinet.iq/ar/category/decisions",
        description: "",
      },
      {
        title: "Prime Minister’s Office statements",
        en_source: "http://pmo.iq/pme/ipresse.htm/",
        ar_source: "https://pmo.iq/press.htm/",
      },
      {
        title: "Government daily activities report",
        description: "Detailed overview of activities across state institutions.",
        ar_source: "https://www.cabinet.iq/ar/category/activities",
      },
      {
        title: "Sudani government mandate",
        description: "Outlines the government's formal policy priorities, known as al-minhaj al-wizari.",
        ar_source: "https://pmo.iq/?page=6",
      },
      {
        title: "Ur Government Digial Services Portal",
        description: "Online government portal for digital services.",
        en_source: "https://ur.gov.iq/#",
        ar_source: "https://ur.gov.iq/",
      },
      {
        topic: "Local government",
        files: [
          {
            title: "Law of Provinces Not Associated to Regions (2008)",
            description: "Law that defines provincial powers, local government formation, and decentralization",
            en_source: "http://gjpi.org/wp-content/uploads/2009/01/cor_law_governorates_not_part_regions_en.pdf/",
            ar_source:
              "https://arb.parliament.iq/archive/2008/11/03/%D9%82%D8%A7%D9%86%D9%88%D9%86-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A7%D8%AA-%D8%BA%D9%8A%D8%B1-%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%B8%D9%85%D8%A9-%D9%81%D9%8A-%D8%A7%D9%82%D9%84%D9%8A%D9%85/",
          },
        ],
      },
      {
        topic: "Previous governments archive",
        files: [
          {
            title: "Abdul Mahdi government annual performance report 2019",
            en_source: "https://iraqdatabank.org",
            ar_source: "https://iraqdatabank.org",
          },
          {
            title: "Kadhimi government annual performance report 2021",
            en_source: "https://iraqdatabank.org",
            ar_source: "https://iraqdatabank.org",
          },
        ],
      },
    ],
  },
  {
    topic: "Legislative Branch",
    files: [
      {
        title: "Council of Representatives website",
        ar_source: "http://parliament.iq",
      },
      {
        title: "Official Gazette",
        ar_source: "http://www.moj.gov.iq/iraqmag/",
      },
      {
        title: "Iraqi Constitution",
        en_source:
          "http://zaidalali.bookswarm.co.uk/wp-content/uploads/2014/03/Iraqs-constitution-unofficial-translation.docx",
        ar_source:
          "http://parliament.iq/wp-content/uploads/2017/01/%D8%AF%D8%B3%D8%AA%D9%88%D8%B1-%D8%AC%D9%85%D9%87%D9%88%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82.pdf",
      },
      {
        title: "Legal Glossary of Terms",
        en_source:
          "http://gjpi.org/wp-content/uploads/gjpi-legal-terms-eng-ara.htm",
        ar_source:
          "http://gjpi.org/wp-content/uploads/gjpi-legal-terms-eng-ara.htm",
      },
    ],
  },
  {
    topic: "Judicial and Legal Oversight",
    files: [
      {
        title: "Higher Judicial Council",
        ar_source: "http://www.iraqja.iq/",
      },
      {
        title: "Federal Supreme Court",
        ar_source: "https://www.iraqfsc.iq/ethadai.php",
      },
      {
        topic: "Federal Board of Supreme Audit",
        files: [
          {
            title: "FBSA Homepage",
            en_source: "http://www.fbsa.gov.iq/en",
            ar_source: "http://www.fbsa.gov.iq/",
          },
        ],
      },
      {
        topic: "Commission of Integrity",
        files: [
          {
            title: "Anti-Corruption Strategy 2016-2020",
            ar_source: "http://www.nazaha.iq/pdf_up/3940/strat_2016-2020.pdf",
          },
          {
            topic: "Annual Reports",
            files: [
              {
                title: "Summary of Annual Report 2020",
                ar_source: "https://nazaha.iq/pdf_up/6265/MRep2020.pdf",
              },
              {
                title: "Annual Report 2019",
                ar_source: "https://nazaha.iq/pdf_up/5778/f_report_2019.pdf",
              },
              {
                title: "Annual Report 2016",
                ar_source: "http://www.nazaha.iq/pdf_up/3951/mlreportF2016.pdf",
              },
              {
                title: "Annual Report 2015",
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
    topic: "Budgets and Finance",
    files: [
      {
        topic: "Annual Federal Budget Laws",
        description:
          "Note that federal budgets were not approved in 2014, 2020, and 2022.",
        files: [
          {
            title: "Federal Budget 2023-25 (with Annexes)",
            ar_source: "https://moj.gov.iq/upload/pdf/4726_72.pdf",
          },
          {
            title: "Federal Budget 2021 (with Annexes)",
            ar_source: "https://moj.gov.iq/uploaded/4625.pdf",
          },
          {
            title: "Federal Budget 2019 (with Annexes)",
            ar_source: "https://moj.gov.iq/upload/pdf/4529.pdf",
          },
          {
            title: "Federal Budget 2018 (with Annexes)",
            ar_source: "https://moj.gov.iq/upload/pdf/4485.pdf",
          },
          {
            title: "Federal Budget 2017 (with Annexes)",
            ar_source: "http://moj.gov.iq/wqam/4430.pdf",
          },
          {
            title: "Federal Budget 2016 (with Annexes)",
            ar_source: "http://www.moj.gov.iq/uploaded/4394.pdf",
          },
          {
            title: "Federal Budget 2015 (with Annexes)",
            ar_source: "http://www.moj.gov.iq/uploaded/4352.pdf",
          },
          {
            title: "Federal Budget 2013 (with Annexes)",
            ar_source: "http://www.moj.gov.iq/uploaded/4272.pdf",
          },
          {
            title: "Federal Budget 2012 (with Annexes)",
            ar_source: "http://www.moj.gov.iq/uploaded/4233.pdf",
          },
          {
            title: "Federal Budget 2011 (with Annexes)",
            ar_source: "http://www.moj.gov.iq/uploaded/4180.pdf",
          },
          {
            title: "Federal Budget 2010 (with Annexes)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%85%D8%B5%D9%88%D8%AA%20%D8%B9%D9%84%D9%8A%D9%87%D8%A7.pdf",
          },
          {
            title: "Federal Budget 2009 (with Annexes)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B2%D9%86%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D9%84%D9%84%D8%B3%D9%86%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%202009.pdf",
          },
          {
            title: "Federal Budget 2008 (with Annexes)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B2%D9%86%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D9%84%D8%B3%D9%86%D8%A9%202008.pdf",
          },
          {
            title: "Federal Budget 2007 (with Annexes)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B2%D9%86%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D9%84%D9%84%D8%B3%D9%86%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%202007.pdf",
          },
          {
            title: "Federal Budget 2006 (with Annexes)",
            ar_source:
              "http://www.mof.gov.iq/Documents/%D9%82%D8%A7%D9%86%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B2%D9%86%D8%A9%20%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9%20%20%D9%84%D9%84%D8%B3%D9%86%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D9%84%D9%8A%D8%A9%202006.pdf",
          },
        ],
      },
    ],
  },
  {
    topic: "Monetary Policy",
    files: [
      {
        topic: "Central Bank of Iraq",
        files: [
          {
            title: "Key financial indicators",
            en_source: "https://cbi.iq/news/view/94",
            ar_source: "https://cbi.iq/news/view/94",
          },
          {
            topic: "Statements of Financial Position",
            files: [
              {
                title: "Statement of Financial Position (March 2021)",
                en_source:
                  "https://cbi.iq/static/uploads/up/file-16193397474110.pdf",
              },
              {
                title: "Statement of Financial Position (February 2021)",
                en_source:
                  "https://cbi.iq/static/uploads/up/file-161692948015696.pdf",
              },
              {
                title: "Statement of Financial Position (January 2021)",
                en_source:
                  "https://cbi.iq/static/uploads/up/file-161545360093508.pdf",
              },
            ],
          },
        ],
      },
      {
        topic: "Financial Statements (Ernst & Young)",
        files: [
          {
            title: "Financial Statement 2019",
            ar_source:
              "https://cbi.iq/static/uploads/up/file-159851680953542.pdf",
          },
          {
            title: "Financial Statement 2018",
            ar_source:
              "https://cbi.iq/static/uploads/up/file-156040785775959.pdf",
          },
          {
            title: "Financial Statement 2017",
            ar_source:
              "https://cbi.iq/static/uploads/up/file-152499442357779.pdf",
          },
        ],
      },
      {
        topic: "International Monetary Fund",
        files: [
          {
            title: "2020 Article IV Consultation",
            en_source:
              "https://www.imf.org/-/media/Files/Publications/CR/2021/English/1IRQEA2021002.ashx",
          },
        ],
      },
    ],
  },
  {
    topic: "Energy",
    files: [
      {
        title: "Monthly Iraq crude exports",
        description: "Figures to not include KRG independent exports.",
        en_source: "https://somooil.gov.iq/exports",
        ar_source: "https://somooil.gov.iq/exports",
      },
      {
        topic: "Extractive Industries Transparency Initiative",
        files: [
          {
            title: "Iraq EITI Report 2018 (published March 2021)",
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
    topic: "Economic and Social Development",
    files: [
      {
        topic: "White Paper on Financial Reforms 2020/21",
        files: [
          {
            title: "White Paper Report 2020",
            en_source:
              "https://drive.google.com/file/d/1mdnNi5Arf_7j_pbmPdVc2hO2Z-AOOmdw/view?usp=sharing",
            ar_source:
              "https://drive.google.com/file/d/1wDseusYfMRYW6b3sBHyv5uY4GanHXNGK/view?usp=sharing",
          },
          {
            title: "White Paper Implementation Plan 2021",
            en_source:
              "https://drive.google.com/file/d/1RVb-h8r6iBWM7bIPBgAD1rOygGG_8P0m/view?usp=sharing",
            ar_source:
              "https://drive.google.com/file/d/19FrToYtdZBojxZaebEFjedJwC26L0LRn/view?usp=sharing",
          },
          {
            title: "White Paper 2020 Summary",
            en_source:
              "https://drive.google.com/file/d/1ZhSRiM3BC-6HqQtVKNjIPnWg8WL7Qkx_/view?usp=sharing",
          },
        ],
      },
      {
        topic: "Public Sector Administrative Reform",
        files: [
          {
            title: "Administrative Reform Strategy 2021",
            ar_source:
              "https://drive.google.com/file/d/102GpzsDihhuFcR8xvvjewfXIEOKb9RDq/view?usp=sharing",
          },
        ],
      },
      {
        topic: "Private Sector Development",
        files: [
          {
            title: "Private Sector Development Strategy 2014-2030",
            en_source:
              "http://www.iq.undp.org/content/dam/iraq/docs/povred/UNDP-IQ-PrivateSectorDevelopment2014%20-2030.pdf",
            ar_source:
              "http://www.iq.undp.org/content/dam/iraq/docs/povred/%D8%A5%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%202014-2030.pdf",
          },
          {
            title: "A Diagnostic of the Informal Economy of Iraq (2021)",
            en_source: "https://iraq.un.org/en/download/89966/160607",
            ar_source: "https://iraq.un.org/en/download/89967/160607",
            description: "Jointly published by UNDP, EU, ILO, UN Women",
         },
         {
            title: "Iraq MSME Survey in Baghdad, Basra, Ninewa (2020)",
            en_source: "https://www.iq.undp.org/content/dam/iraq/docs/UNDP_IQ_MSME_Survey_Final_Report_EN.pdf",
            ar_source: "https://www.iq.undp.org/content/dam/iraq/docs/UNDP_IQ_MSME_Survey_Final_Report_AR.pdf",
            description: "Published by Ministry of Planning’s Central Statistical Organization (CSO) in partnership with UNDP",
         },
        ],
      },
      {
        topic: "National Investment Commission",
        files: [
          {
            title: "Legal Guide to Investing in Iraq (2016)",
            en_source:
              "http://investpromo.gov.iq/wp-content/uploads/2016/10/legel-guide%20-final.pdf",
            ar_source:
              "http://investpromo.gov.iq/wp-content/uploads/2016/10/legel-guide%20-final.pdf",
          },
          {
            title: "Investor’s Guide to Iraq (2016)",
            en_source:
              "http://investpromo.gov.iq/wp-content/uploads/2013/07/Investor-Guide-2016-english.pdf",
            ar_source:
              "http://investpromo.gov.iq/wp-content/uploads/2013/07/Investor-Guide-2016-arabic.pdf",
          },
          {
            title: "Investment Map of Iraq (2016)",
            en_source:
              "http://investpromo.gov.iq/nic_flash/refrence_materials/investment%20map%202016%20english.pdf",
            ar_source:
              "http://investpromo.gov.iq/nic_flash/refrence_materials/investment%20map%202016%20-%20arabic%20.pdf",
          },
        ],
      },
      {
        title: "IOM Displacement Tracking Matrix",
        en_source: "http://iraqdtm.iom.int/",
        ar_source: "http://iraqdtm.iom.int/Arabic,",
      },
      {
        topic: "World Bank reports",
        files: [
          {
            title:
              "A Public Expenditure Review for Human Development Sectors in Iraq (June 2021)",
            en_source:
              "https://documents1.worldbank.org/curated/en/568141622306648034/pdf/Addressing-the-Human-Capital-Crisis-A-Public-Expenditure-Review-for-Human-Development-Sectors-in-Iraq.pdf",
          },
        ],
      },
      {
        title: "ILO: Building Iraq's Social Protection Floor",
        en_source: "https://iraq.un.org/sites/default/files/2022-08/Building%20Iraq%E2%80%99s%20Social%20Protection%20Floor.pdf",
        ar_source: "https://iraq.un.org/sites/default/files/2022-08/Building%20Iraq%E2%80%99s%20Social%20Protection%20Floor%20Arbaic.pdf",
      },
    ],
  },
  {
    topic: "Elections",
    files: [
      {
        title: "Independent High Electoral Commission (IHEC)",
        ar_source: "http://www.ihec.iq/",
      },
    ],
  },
  {
    topic: "Civil Society",
    files: [
      {
        title: "List of registered NGOs in Iraq",
        ar_source: "https://www.ngoao.gov.iq/uploads/articles/2024/1/ngo%20list%20till%2014.01.2024.pdf",
      },
    ],
  },
  {
    topic: "Statistics and Indicators",
    files: [
      {
        title: "Annual Statistical Abstract 2018-19",
        en_source: "http://cosit.gov.iq/ar/2018-2019",
        ar_source: "http://cosit.gov.iq/ar/2018-2019",
      },
      {
        title: "Demographic and Housing Indicators",
        ar_source: "http://cosit.gov.iq/ar/2013-01-31-08-43-38",
      },
      {
        title: "Health and Environmental Indicators",
        ar_source: "http://cosit.gov.iq/ar/env-ind",
      },
    ],
  },
];

export default data;
