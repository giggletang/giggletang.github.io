/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hannah Zihan Tang",
  description:
    "A passionate and detail-oriented Fullstack software engineer with a Master's degree in Computer Science",
  og: {
    title: "Zihan Tang",
    type: "website",
    url: "https://giggletang.github.io",
  },
};

//Home Page
const greeting = {
  title: "Zihan Tang",
  logo_name: "Hannah Zihan Tang",
  nickname: "Hannah",
  subTitle:
    "A passionate and detail-oriented Fullstack Software Engineer with a Master's degree in Computer Science and more than 3 years of professional experience in developing software solutions and applications in various industries.",
  resumeLink:
    "https://drive.google.com/file/d/1dB7SIKyz6qik7cRKeF_W9VSN69is9vfn/view?usp=sharing",
  portfolio_repository: "https://github.com/giggletang/",
  githubProfile: "https://github.com/giggletang",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/giggletang",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/giggletang",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:hannahtang117@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/giggletang",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Builds web and mobile applications using modern frameworks like React and React Native",
        "⚡ Expertise spans front-end and back-end development, ensuring seamless user experiences and robust functionality",
        "⚡ Specializes in creating scalable, secure, and efficient solutions for various industries",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
    
      ],
    },
    {
      title: "Blockchain Build",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Develops decentralized applications and smart contracts on platforms like Ethereum and Polygon",
        "⚡ Focuses on creating secure, scalable, and transparent blockchain solutions for various industries",
        "⚡ Integrates blockchain technology with user-friendly interfaces for seamless interaction",
      ],
      softwareSkills: [
        
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "cryptocurrency-color:eth",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Polygon",
          fontAwesomeClassname: "cryptocurrency-color:matic",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "cryptocurrency-color:btc",
          style: {
            color: "#47A248",
          },
        },
       
        {
          skillName: "avax",
          fontAwesomeClassname: "cryptocurrency-color:avax",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designs and implements scalable and secure cloud architectures for businesses",
        "⚡ Expertise in optimizing cloud resources to improve performance and cost efficiency",
        "⚡ Ensures seamless integration of cloud services with existing systems for reliable and agile solutions",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        
      ],
    },
    {
      title: "Security & Privacy",
      fileName: "DesignImg",
      skills: [
        "⚡ Enhances security and privacy through robust systems and practices",
        "⚡ Specializes in implementing data protection measures and compliance with privacy regulations",
        "⚡ Develops secure solutions to safeguard information and mitigate risks",
      ],
      softwareSkills: [
        // {
        //   skillName: "Adobe XD",
        //   fontAwesomeClassname: "simple-icons:adobexd",
        //   style: {
        //     color: "#FF2BC2",
        //   },
        // },
        // {
        //   skillName: "Figma",
        //   fontAwesomeClassname: "simple-icons:figma",
        //   style: {
        //     color: "#F24E1E",
        //   },
        // },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "University of New Haven",
      subtitle: "Computer Science, Master of Science",
      logo_path: "unh.png",
      alt_name: "unh",
      duration: "New Haven, CT US",
      descriptions: [
        "⚡ Basic Courses: Algorithm Design & Analysis, Data Structures, Operating Systems, Database Systems, Comp Networks & Data Comm, Wireless Networks",
        "⚡ Programming: Programming:C/C+, Obj-Oriented Prin & Prac/C++, Java Programming, Script Programming/Python",
        "⚡ Advanced Courses: Artificial Intelligence, Distributed Database Systems, Computer Security, Cyber Forensic Science, Cryptography & Data Security ",
      ],
      website_link: "https://www.newhaven.edu",
    },
    {
      title: "University of Chinese Academy of Social Sciences",
      subtitle: "Law, Juris Master",
      logo_path: "ucass.png",
      alt_name: "ucass",
      duration: "Beijing, China",
      descriptions: [
        "⚡ Specialized Courses: Jurisprudence, International Law, Economic Law, Pandect on Civil Law, The Civil Procedure Law, Constitutional Law, Pandect on Criminal Law, Criminal Procedure Law, Administrative Law and Administrative Procedure Law",
        "⚡ Elective Courses: Private International Law, Social Law, Intellectual Property Law, Criminology, Environment and resources law, Theories of Civil Law, Family law and Inheritance Law, Tax Law, Judicial System Studies, Evidence Law",
      ],
      website_link: "https://www.ucass.edu.cn/",
    },
    {
      title: "Shandong University of Finance and Economics",
      subtitle: "Political Science, Bachelor of Science",
      logo_path: "sdcj.png",
      alt_name: "sdcj",
      duration: "Shandong, China",
      descriptions: [
        "⚡ Basic Courses: Calculus, Probability Theory and Mathematical Statistics, Computer Applications, Database Applications, Electronic Commerce, Management, Economics, Insurance,  Administrative Science, Securities Investment Fund Management,  Public Policy, Social Statistics, Municipal Management, Management Psychology, Logic, Sociology,",
        "⚡ Specialty Courses: Principles of Political Science, Western Political Philosophy, Western Administrative Theories, Western Philosophy, International Politics, Comparative Political System, Contemporary Western Political Thought, Political Analysis of Chinese Society, Administrative Law, Case Analysis of Administrative Action, Comparative Party System",
        
      ],
      website_link: "https://www.sdufe.edu.cn",
    },
  ],
};

const certifications = {
  certifications: [
   
    {
      title: "Front-End Development",
      subtitle: "Meta Professional Certificate",
      logo_path: "coursera_logo.png",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Back-End Development",
      subtitle: "Meta Professional Certificate",
      logo_path: "coursera_logo.png",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Cyber Security",
      subtitle: "Google Professional Certificate",
      logo_path: "google_logo.png",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Analytics",
      subtitle: "Google Professional Certificate",
      logo_path: "google_logo.png",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "AI & ML Engineering",
      subtitle: "Microsoft Professional Certificate",
      logo_path: "microsoft_logo.png",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Full-Stack Developer",
      subtitle: "Microsoft Professional Certificate",
      logo_path: "microsoft_logo.png",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteer",
  description:
    "I have extensive experience working as a Full Stack Software Engineer, building innovative applications for a variety of industries. My projects range from designing user-centric solutions to developing robust back-end systems, showcasing my versatility and passion for technology. Beyond my professional work, I am deeply committed to volunteering, organizing events, and actively participating in open-source communities, where I contribute to meaningful projects and foster collaboration among like-minded.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Blockchain Developer",
          company: "Freelancer",
          logo_path: "freelancer.png",
          duration: "Aug 2023 - Present",
          location: "Remote",
          description:
            "As a freelance blockchain developer, expertise includes delivering tailored solutions for decentralized applications (dApps) and smart contracts across various industries. Proficiencies encompass blockchain platforms such as Ethereum, Polygon, and Binance Smart Chain, with a focus on Solidity for smart contract development, utilizing tools like Hardhat and Truffle for testing and deployment. Front-end development leverages React and Web3.js/ethers.js to ensure seamless user experiences, while secure wallet integrations with MetaMask and WalletConnect enhance usability. Robust backend support is provided using Node.js and IPFS for decentralized storage, emphasizing scalability, security, and innovation in every project.",
          color: "#000000",
        },
        {
          title: "Full Stack Engineer",
          company: "Fixcode Tech",
          logo_path: "fixcode.png",
          duration: "Jun 2021 - Jul 2023",
          location: "Atlanta, GA",
          description:
            "As a Full Stack Engineer, experience includes designing and building scalable web and mobile applications using a modern tech stack. Proficiencies include React for dynamic front-end development and React Native for creating cross-platform mobile applications. Backend expertise encompasses Node.js, Express, and MongoDB, delivering robust and efficient server-side solutions. Projects often incorporate RESTful APIs and GraphQL for seamless data communication and utilize tools like Redux for state management. Emphasis is placed on creating user-friendly interfaces, ensuring optimal performance, and integrating secure authentication systems using OAuth and Firebase.",
          color: "#0879bf",
        },
        {
          title: "Mobile Developer",
          company: "Consortium for Health Action",
          logo_path: "consortium.png",
          duration: "Jul 2020 - May 2021",
          location: "New Haven, CT",
          description:
            "As a mobile developer, developed React Native mobile applications tailored for parents of children with autism, focusing on delivering user-friendly tools to support their needs. The applications included features such as activity tracking, behavioral analysis, and communication tools to assist in daily caregiving. The tech stack utilized React Native for cross-platform development, Firebase for real-time database and authentication, and Expo for streamlined app deployment. Integration with APIs allowed access to additional resources and support networks, while a clean and intuitive UI ensured accessibility for users of varying technical proficiency. The projects prioritized usability, security, and meaningful impact for families.",
          color: "#9b1578",
        },
        {
          title: "Software Engineer Intern",
          company: "Yonyou Software Co., Ltd.",
          logo_path: "yongyou.png",
          duration: "Jul 2019 - Aug 2019",
          location: "Work From Home",
          description:
            "As a Software Engineer Intern, contributed to the development of an ERP application designed to streamline business operations across departments. The tech stack included React for building a responsive and dynamic front-end, Node.js and Express for backend development, and PostgreSQL for managing complex relational data. Key responsibilities involved implementing user authentication, designing interactive dashboards, and integrating RESTful APIs for seamless data flow between modules. Worked closely with the team to ensure the application was scalable, secure, and aligned with business requirements, gaining valuable experience in full-stack development and enterprise-level software solutions.",
          color: "#fc1f20",
        },
        {
          title: "Legal Counsel",
          company: "Beijing Teamsun Technology Co., Ltd.",
          logo_path: "teamsun.png",
          duration: "Jul 2016 - Dec 2017",
          location: "Beijing, China",
          description:
            "As a Legal Counsel, contributed to drafting privacy policies for cloud services, ensuring alignment with industry standards and regulatory frameworks such as GDPR and CCPA. Conducted comprehensive legal quality reviews to mitigate compliance risks and uphold data protection requirements. Participated in M&A legal due diligence processes, analyzing contracts, intellectual property rights, and regulatory risks to provide insights that supported informed decision-making. Collaborated with cross-functional teams to deliver precise legal documentation and strategic guidance, ensuring business objectives were achieved within a secure legal framework.",
          color: "#fc1f20",
        },
        {
          title: "Intern Lawyer",
          company: "Beijing Kaiyue Law Firm",
          logo_path: "kaiyue.png",
          duration: "Jul 2015 - Dec 2016",
          location: "Beijing, China",
          description:
            "As an Intern Lawyer, specializing in commercial law, supported legal teams in drafting and reviewing contracts, including service agreements, vendor contracts, and non-disclosure agreements, to ensure compliance with regulatory standards and protect client interests. Conducted legal research on commercial disputes, intellectual property issues, and corporate governance, providing detailed analyses to assist in case preparation and decision-making. Participated in client consultations and negotiations, gaining hands-on experience in resolving commercial disputes and structuring business transactions. Collaborated with senior attorneys to develop legal strategies that aligned with business objectives and minimized potential risks.",
          color: "#fc1f20",
        },
        {
          title: "Judicial Assistant Intern",
          company: "Beijing Chaoyang District Court",
          logo_path: "court.png",
          duration: "Mar 2015 - Jun 2015",
          location: "Beijing, China",
          description:
            "As a Judicial Assistant Intern, handling commercial cases, provided support in reviewing case files, summarizing key legal arguments, and conducting research on relevant commercial laws and precedents. Assisted judges in preparing for hearings by drafting case briefs and organizing legal documents. Observed court proceedings, gaining insights into litigation processes and the resolution of complex commercial disputes, including contract breaches and corporate matters. Worked closely with clerks and legal professionals to ensure the efficient management of case documentation, contributing to the timely progression of commercial cases through the judicial system.",
          color: "#fc1f20",
        },
      ],
    },
   
    {
      title: "Volunteer",
      experiences: [
        {
          title: "Individual Contributor",
          company: "Decentralized Identity Foundation (DIF)",
          company_url: "https://identity.foundation",
          logo_path: "dif.png",
          duration: "Sep 2024 - Present",
          description:
            "Focusing on advancing open standards for secure and privacy-preserving digital identities. Contributed to discussions and documentation related to decentralized identifiers (DIDs) and verifiable credentials to support interoperability and user empowerment in the digital identity ecosystem.",
          color: "#4285F4",
        },
        {
          title: "Volunteer Member",
          company: "Blockchain Industry Group",
          company_url: "https://blockchainindustrygroup.org",
          logo_path: "big.png",
          duration: "Jan 2024 - Present",
          description:
            "Collaborating with professionals to drive innovation and establish best practices within the blockchain ecosystem. Participated in discussions on emerging technologies, regulatory trends, and use cases, contributing insights to promote the adoption and scalability of blockchain solutions.",
          color: "#D83B01",
        },
        {
          title: "Conference Volunteer",
          company: "Bitcoin Conference 2024",
          company_url: "https://b.tc/conference",
          logo_path: "bitcoin.png",
          duration: "Jul 2024",
          description:
            "Assisting in event organization and attendee coordination to ensure a seamless experience for participants. Supported workshops and panel discussions, fostering engagement and knowledge sharing among industry experts and blockchain enthusiasts.",
          color: "#000000",
        },
        {
          title: "KnowledgeNet Chapter Chair",
          company: "International Association of Privacy Professional (IAPP)",
          company_url: "https://iapp.org/",
          logo_path: "iapp.png",
          duration: "Jan 2021 - Dec 2021",
          description:
            "Organizing local events and discussions to promote awareness and best practices in privacy and data protection. Facilitated networking opportunities and knowledge exchange among privacy professionals, fostering a collaborative community dedicated to addressing emerging privacy challenges.",
          color: "#000000",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          logo_path: "github_logo.png",
          duration: "July 2020 - Present",
          description:
            "Collaborating on open-source projects to enhance functionality and resolve issues across diverse codebases. Actively engaged in code reviews, issue tracking, and developing features, fostering innovation and community-driven software development.",
          color: "#181717",
        },
        {
          title: "Club Member",
          company: "AnitaB (Grace Hopper Celebration)",
          company_url:"https://anitab.org/",
          logo_path: "anitab.png",
          duration: "Jul 2020 - Present",
          description:
            "Supporting event logistics and ensuring a welcoming environment for attendees. Assisted in coordinating workshops and networking sessions, empowering women in technology to connect, learn, and advance their careers.",
          color: "#0C9D58",
        },
        {
          title: "Mentor",
          company: "Mentor Collective",
          company_url:"https://www.mentorcollective.org/",
          logo_path: "mentor.png",
          duration: "Jun 2020 - May 2021",
          description:
            "Providing guidance and support to mentees navigating academic and professional challenges. Shared insights, offered resources, and fostered a supportive relationship to help mentees achieve their personal and career goals.",
          color: "#0C9D58",
        },
        {
          title: "Chapter Member",
          company: "Upsilon Pi Epsilon",
          company_url:"https://upe.acm.org/",
          logo_path: "upe.png",
          duration: "May 2020",
          description:
            "The international honor society for computing and information disciplines, recognizing academic excellence and professional achievements. Engaged in activities promoting the advancement of computing education and fostering collaboration among students and professionals in the field.",
          color: "#0C9D58",
        },
        {
          title: "Student Member",
          company: "IEEE",
          company_url:"https://www.ieee.org/",
          logo_path: "ieee.png",
          duration: "Jan 2019 - May 2020",
          description:
            "Participating in events and initiatives to advance knowledge in technology and engineering. Engaged in workshops, conferences, and networking opportunities to collaborate with peers and industry professionals while staying updated on emerging trends in the field.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "As a full-stack developer, I have worked on a variety of projects that showcase my skills in designing and building responsive, user-friendly applications. My portfolio includes e-commerce platforms, interactive dashboards, and scalable web and mobile applications developed using modern frameworks like React, React Native, and Node.js. I excel in creating intuitive user interfaces while ensuring robust back-end functionality to support seamless performance.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  //publications,
  contactPageData,
};
