const data = [
  {
    topic: "Executive Branch",
    files: [
      {
        title: "Official Gazette",
        ar_source: "http://google.fr/",
        description: "Gazette stuff description goes here",
      },
      {
        title: "Council of Representatives",
        en_source: "http://google.com/",
        ar_source: "http://google.fr/",
      },
      {
        topic: "Council of Ministers",
        files: [
          {
            title: "Council of Representatives",
            en_source: "http://google.com/",
            ar_source: "http://google.fr/",
          },
          {
            title: "Council of Representatives",
            en_source: "http://google.com/",
            ar_source: "http://google.fr/",
          },
        ],
      },
    ],
  },
];

export default data;
