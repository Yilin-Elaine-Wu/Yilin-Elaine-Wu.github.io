// ---------- Navbar titles
const enNavbarData = {
  title: " Yilin Elaine Wu ",
  Home: "Home",
  publications: "Publications",
  Research: "Research",
  Jobs: "CV",
  Contact: "Contact me",
};

// ---------- Home page data
const enHomePageData = {
  name: " Yilin Elaine Wu ",
  jobTitle: " Undergraduate Researcher in Cognitive Science ",
  home_title: "About me",
  home_content: `
  <div>
    <p> Hi! I'm Yilin Wu. I'm an undergraduate majoring in psychology in Nanjing University.
    I'm interested in human cognition and computational modeling of human minds. I am currently a research intern working in China Institute of Brain Research, supervised by Dr. Ni Ji. And I am seeking for a RA position in cognitive science after my graduation in 2026, hoping to apply for PhD candidates in the 26-27 cycle. In my free time, I enjoy singing, cooking and ASMR videos.
    
    </p>
    <h2 class='title'> Main works </h2>
    <p>
    I work to understand how human attend to and extract useful information from a complex environment, and how they form abstract mental representations in an effective way.
    I try to answer these questions in a way of studying the human innate cognitive toolkits including game-playing, sketches and language, primarily by conducting behavioral experiments and building computational models including normative models like Bayesian model and expectedly also neural networks. 
    I also do some research with children in their early stage of development to investigate how the intricate human minds are built up step by step. I'm looking forward to collaborate with researchers experienced in techniques like eye-tracking, real-life video analysis and neuroimaging as well.
    Please check the research page for more details in my projects.
    </p>
    <ul>
      <li> Attention and Learning</li>
      <li> Mental Representations </li>
      <li> Computational modeling of human behaviors </li>
    </ul>
  </div>
  `,
};

// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Conference Contribution",
  subtitle:"Poster Presentation",
  type_one_items: [
    {
      title: `Task-space dimensions guide human exploration in complex environments.`,
      abstract: `Politicians across the political spectrum have taken to TikTok in an attempt to reach young voters by producing original videos. This novel trend has turned TikTok into the new polarizing ring in the political communication battle, deepening the partisan breach around issues such as climate change. However`,
      date: "2025, August",
      link: "http://link.com",
      github: "",
      download: "Yilin-Elaine-Wu/files/CCN2025_poster.pdf",
      writers: "An, J., Hu, J., <b>Wu, Y.E.</b>, Ning, S., Zhu, F., Pan, Y., & Ji, N*",
    },
    // {
    //   title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
    //   abstract: `Politicians across the political spectrum have taken to TikTok in an attempt to reach young voters by producing original videos. This novel trend has turned TikTok into the new polarizing ring in the political communication battle, deepening the partisan breach around issues such as climate change. However`,
    //   date: "1996",
    //   link: "",
    //   github: "http://github.com",
    //   writers: ["Claudio Cioffi-Revilla", ""],
    // },
  ],

  // type_two_title: "Under Review",
  // type_two_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "1996",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla", "masoud Claudio "],
  //   },
  // ],

  // type_three_title: "Book Chapters",
  // type_three_items: [
  //   {
  //     title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
  //     abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
  //     date: "1996",
  //     link: "http://link.com",
  //     github: "http://github.com",
  //     writers: ["Claudio Cioffi-Revilla"],
  //   },
  // ],

  // type_four_title: "",
  // type_four_items: [
  //   {
      title: `Elena Reinaga. 2016. If I were born again I would still be a sex worker. P. Purdy and N. Umansky. OpenDemocracy.`,
      abstract: ``,
      date: "",
      link: "",
      github: "",
      writers: [],
    },
    {
      title: `“Now you are speaking my language” Language-specific transparency and legislative negotiations in the Council of Ministers of the European Union. (with ).`,
      abstract: `we adopt an elite-focused approach to explore the ways in which left and right-leaning American political elites differ in their visual and emotional framing of climate change. Overall, this study provides new insight into how politicians across party lines communicate about critical and polarizing political issues, such as climate change, by adapting to novel online communication channels.`,
      date: "1996",
      link: "http://link.com",
      github: "http://github.com",
      writers: ["Claudio Cioffi-Revilla"],
    },
  ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research
        </p>
    </div>
  `,
};

// ---------- Jobs page data
const enJobsPageData = {
  title: "CV",
  items: [
    {
      // No other content, just an embedded PDF
    }
    ]
  },
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content_wrapper");
    if (container) {
      container.innerHTML = `<iframe src="Yilin-Elaine-Wu/files/CV_Yilin_Wu_25fall.pdf" style="width:100%; height:100vh;" frameborder="0"></iframe>`;
    }
  });
</script>

  ],
};
