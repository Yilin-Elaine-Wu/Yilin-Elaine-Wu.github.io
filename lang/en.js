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
    <p> 
    Hi! I'm Yilin. I'm an undergraduate majoring in psychology in Nanjing University. I'm interested in human cognition and computational modeling of human minds. I am currently a research intern working in China Institute of Brain Research, supervised by Dr. Ni Ji. 
    I am seeking a research assistant position in cognitive science after my graduation in 2026, in preparation for applying to PhD programs in the 2026–27 application cycle. 
    </p>
    <p>
    In my free time, I enjoy singing, cooking and ASMR videos.
    </p>
    <h2 class='title'> Main works </h2>
    <p>
    I work to understand how human attend to and extract useful information from a complex environment, and how they form abstract mental representations in an effective way.
    I try to answer these questions in a way of studying the human innate cognitive toolkits including game-playing, sketches and language, primarily by conducting behavioral experiments and building computational models including normative models like Bayesian model and expectedly also neural networks. 
    </p>
    <p>
    I'm also interested in research in developmental cognition, I hope to investigate how the intricate human minds are built up step by step, by interacting with children in their early stage of development. I'm looking forward to collaborate with researchers experienced in techniques like eye-tracking, real-life video analysis and neuroimaging as well.
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
      title: `Task-space dimensions guide human exploration in complex environments. `,
      abstract: `Humans frequently make decisions in complex, high-dimensional environments, where identifying task-relevant information is critical for rapid behavior optimization. Humans outperform standard reinforcement learning agents in navigating such complexity, yet the cognitive strategies of humans remain unclear. To address this, we developed a novel multi-dimensional learning task in which only a subset of dimensions is reward-related. Crucially, unlike prior studies, subjects are uninformed of the true task dimensionality and have to identify them through exploration. This design closely mimics the ambiguity in real-world tasks. Our results identified two stereotyped choice patterns that reveal “dimension-guided” strategies in exploration and exploitation. Cross-subject analyses suggest that dimension-guided exploration may promote the efficiency of reward-based learning. These findings indicate that humans leverage task dimensionality to guide exploration, and provide inspiration for improving exploration efficiency in AI agents.`,
      date: "2025, Cognitive Computational Neuroscience (CCN)",
      link: "Yilin-Elaine-Wu/files/CCN2025_poster.pdf",
      github:"",
      // writers: "An, J., Hu, J., <b>Wu, Y.E.</b>, Ning, S., Zhu, F., Pan, Y., & Ji, N*",
      writers: [
                "An, J.",
                "Hu, J.",
                "<b>Wu, Y.E.</b>",
                "Ning, S.",
                "Zhu, F.",
                "Pan, Y.",
                "Ji, N*"
              ],
    }
  ],

  type_two_title: "",
  // type_two_items: [
  //   {
  //     title: ``,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: ``,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [""],
  //   },
  // ],

  type_three_title: "",
  // type_three_items: [
  //   {
  //     title: ``,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: ``,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [""],
  //   },
  // ],

  type_four_title: "",
  // type_four_items: [
  //   {
  //     title: ``,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [],
  //   },
  //   {
  //     title: ``,
  //     abstract: ``,
  //     date: "",
  //     link: "",
  //     github: "",
  //     writers: [""],
  //   },
  // ],
};

// ---------- Research page data
const enResearchPageData = {
  title: "Research",
  content: `
    <div class='research_content'>
        <p> projects in my CV and I need a research interests section and a research questions I'm interested in section (like my SOP)
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
};

// // Place the script block OUTSIDE the object definition
// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.getElementById("content_wrapper");
//   if (container) {
//     container.innerHTML = `<iframe src="Yilin-Elaine-Wu/files/CV_Yilin_Wu_25fall.pdf" style="width:100%; height:100vh;" frameborder="0"></iframe>`;
//   }
// });
