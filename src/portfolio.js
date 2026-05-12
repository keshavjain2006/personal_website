/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Keshav Jain",
  title: "Hey, I'm Keshav",
  subTitle: emoji(
    "A Computer Science and Data Science student at UW-Madison 🎓 Passionate about building intelligent systems, ML pipelines, and impactful software."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1s49G_g2eobZY8vZi7X-8iRbGJv-dWPMz?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/keshavjain2006",
  linkedin: "https://www.linkedin.com/in/keshav-jain-baaa23240",
  gmail: "kjain45@wisc.edu",
  instagram: "https://www.instagram.com/keshavjain90/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Technical Skills",
  subTitle: "",
  skills: [
    emoji("💻 Languages: Java, Python, C/C++, JavaScript, SQL, HTML/CSS, R"),
    emoji(
      "🌐 Infra & Web: AWS, Docker, Prometheus, Grafana, React, Flask, Node.js, Express.js, Git, Bash"
    ),
    emoji("🤖 Data & ML: PyTorch, NumPy, OpenCV, Vector DBs, LLM APIs")
  ],
  githubLink: "https://github.com/keshavjain2006",

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "r-language",
      fontAwesomeClassname: "fab fa-r-project"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Wisconsin-Madison",
      subHeader: "Bachelor of Science in Computer Science and Data Science",
      duration: "September 2024 – May 2027",
      desc: "GPA: 3.74",
      descBullets: [
        "Relevant Coursework: Object-Oriented Programming, Data Structures and Algorithms, Linear Algebra, Data Science Modeling, Discrete Mathematics, Introduction to Computer Engineering"
      ]
    },
    {
      schoolName: "Jayshree Periwal International School",
      logo: require("./assets/images/jpis.jpeg"),
      subHeader: "IGCSE",
      desc: "Grade X Board Exam Results:",
      descBullets: [
        "Economics- A*",
        "International Mathematics- A*",
        "Additional Mathematics- A*",
        "Computer Science- A*",
        "Accounts- A*",
        "Physics- A",
        "English Language- A",
        "Hindi- A",
        "Overall- 5 A*, 3 A"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work Experience Section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Tweaking Technologies",
      companylogo: require("./assets/images/tweaking.jpeg"),
      date: "May 2025 – Aug 2025",
      descBullets: [
        "Collaborated with 5 frontend engineers to create an intuitive and user-friendly interface for the mobile app, resulting in a 20% increase in user satisfaction based on post-release surveys.",
        "Implemented a feedback system for users to report issues, collecting over 300 user responses within the first month, which directly informed 3 key feature updates.",
        "Developed a logging system to record scan results and generate reports, reducing troubleshooting time by 35% and increasing decision-making accuracy by 40% based on internal metrics."
      ],
      footer: [
        {
          name: "Antivirus Software",
          url: "https://www.t9apps.com/antivirus/"
        }
      ]
    },
    {
      role: "Engineering Virtual Program",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/goldman.png"),
      desc: "During my tenure in the Goldman Sachs Engineering Virtual Program, I immersed myself in the intricacies of cybersecurity. I proactively delved into hacking techniques, scrutinized password security methodologies, and put my skills to the test by attempting to crack 20 passwords with an array of tools. In a notable display of initiative, I drafted an email to my supervisor, proposing specific improvements to existing control measures.",
      footer: [
        {
          name: "Certificate",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_A3mL2v7YJRQbCMy9R_1655411549649_completion_certificate.pdf"
        }
      ]
    }
  ]
};

// Clubs section

const clubs = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "InnovateX",
      company: "President",
      companylogo: require("./assets/images/innovatex.png"),
      descBullets: [
        "Programming Techniques: (i) Deep Learning and AI: Learned utilising Pytorch framework for building deep learning models; (ii) Full-Stack Web Development: Developing skills in React, Pycharm, Flask, Javascript for programming",
        "Multilanguage Coding Projects: Implemented multiple projects using Python, HTML, CSS, and JavaScript; Developed various small coding projects like calculator, to-do list, daily journal using those languages",
        "Leadership and AI Research: Held discussions on developments in the AI space. Mentored a research group in machine learning research; Published a paper on machine learning in healthcare with my colleagues - published in IOSR journal (see 'Research' section above)"
      ],
      footer: [
        {
          name: "Physics Calculator Github",
          url: "https://github.com/keshavjain2006/PhysicsCalculator"
        },
        {
          name: "To-Do List Github",
          url: "https://github.com/keshavjain2006/ToDoList"
        },
        {
          name: "Daily Journal Github",
          url: "https://github.com/keshavjain2006/DailyJournal"
        },
        {
          name: "Instagram Handle",
          url: "https://www.instagram.com/innovatex.jpis/"
        }
      ]
    },
    {
      role: "Knowverse",
      company: "Co-founder",
      companylogo: require("./assets/images/knowverse.png"),
      desc: "Knowverse, a venture I co-founded, revolutionizes learning through interactive content. Leading a team of 20 tutors, we produce specialized educational videos covering a diverse range of subjects, tailored for children's enrichment. The platform encourages exploration of concepts, from electrons to galaxies, ensuring a thorough understanding of every nuance. Additionally, we conduct sessions, weekly assignments, and offer intriguing research topics.",
      footer: [
        {
          name: "Discord Server",
          url: "https://discord.gg/vrWSyXr6"
        },
        {
          name: "Instagram Handle",
          url: "https://www.instagram.com/knowverse_official/"
        },
        {
          name: "Presentation",
          url: "https://docs.google.com/presentation/d/1gA48pUEPsIz4V4HBfHad_B1uGxhYa3a7ldp9V_eSrwk/edit?usp=sharing"
        }
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Research Experience Section

const research = {
  display: true,
  experience: [
    {
      role: "Undergraduate Research Assistant",
      company: "University of Wisconsin-Madison",
      date: "Sep 2025 – Dec 2025",
      descBullets: [
        "Analyzed LLM reasoning behavior using Graph-of-Thought (GoT) and Tree-of-Thought (ToT) frameworks to study strategy formation and generalization.",
        "Co-developed a trajectory-based framework to map reasoning paths and built an interactive visualization tool to render trajectory trees.",
        "Researched strategy collapse in RL-trained LLMs, focusing on the trade-off between exploratory and transformative generalization, in Wisconsin Institute For Discovery's Nowak Group."
      ]
    },
    {
      role: "Lumiere Research Scholar & Researcher",
      company: "Lumiere Education | IOSR Journal Publication",
      companylogo: require("./assets/images/lumiere_education_logo.jpeg"),
      date: "May 2024 – Aug 2024",
      descBullets: [
        "Conducted research comparing SVM and Decision Tree algorithms; achieved accuracy of 85% (SVM) and 80% (DT) evaluating 5,000 patient records.",
        "Published: \"Accuracy of Naive-Bayes and MLP in Predicting Heart Diseases,\" achieving 82% accuracy using Multi-Layer Perceptron on 6,500 records."
      ],
      footer: [
        {
          name: "Research Paper",
          url: "https://www.iosrjournals.org/iosr-jce/papers/Vol25-issue5/Ser-2/J2505025257.pdf"
        },
        {
          name: "IOSR-JCE Series 2",
          url: "https://www.iosrjournals.org/iosr-jce/pages/25(5)Series-2.html"
        }
      ]
    }
  ]
};

// Projects Section

const projectsSection = {
  display: true,
  projects: [
    {
      role: "Brain To Text Decoder",
      company: "Python · NumPy · Pandas · Matplotlib",
      descBullets: [
        "Developed a brain–computer interface model to decode attempted speech from 512-channel neural signals into phoneme sequences.",
        "Analyzed and preprocessed 512-channel neural recordings; applied PCA to reduce dimensionality by 25% while retaining 95% variance, improving model training throughput and stability.",
        "Designed and evaluated a CNN–RNN hybrid architecture for neural time-series to phoneme decoding, implementing an end-to-end experimental pipeline.",
        "Demonstrates real-world applicability of machine learning for assistive communication technologies for individuals with speech or motor impairments."
      ]
    },
    {
      role: "Gear Motor Selection & Control Optimization",
      company: "ODrive Robotics · PID Control · Motor Testing",
      descBullets: [
        "Researched 100+ DC brushless motors and selected the most cost-effective option meeting torque, RPM, mass & volume constraints.",
        "Validated motor performance using ODrive Robotics; fixed wiring issues causing 15% failures in early testing.",
        "Optimized mechanical and electrical integration to improve torque/RPM efficiency by 20%.",
        "Tuned PID control loops to improve robotic arm response time by 18%."
      ]
    }
  ]
};

// Legacy work experience object (kept for export compatibility)

const workExperience = {
  title: "Work Experience",
  projects: [],
  display: false
};

// Education Section
// Include certificates, talks etc

const onlineCoursesSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  onlineCoursesCards: [
    {
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      subtitle: "-Udemy",
      image: require("./assets/images/python.png"),
      imageAlt: "Python Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "http://ude.my/UC-db55218a-5180-4f4a-9e28-3ae1b24771b1"
        }
      ]
    },
    {
      title: "The Complete 2020 Web Development Bootcamp",
      subtitle: "-Udemy",
      image: require("./assets/images/web-development.png"),
      imageAlt: "Web Development Icon",
      footerLink: [
        {
          name: "Certificate",
          url: "http://ude.my/UC-b1420402-f279-47dd-9200-d104381822a3"
        }
      ]
    },
    {
      title: "The Complete Android Oreo Developer Course",
      subtitle: "-Udemy",
      image: require("./assets/images/android.png"),
      imageAlt: "Android Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "http://ude.my/UC-632285e5-b896-410d-83fd-3c0958bc23d7"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Top 5 nationally, Philippine International Math and Science Olympics",
      subtitle:
        "Ranked Top 5 in India and received a bronze medal. PIMSO, by ICE (International Champions in Education), is a prestigious international academic competition designed to promote and celebrate excellence in mathematics and science. This annual event provides a platform for young talents to showcase their problem-solving abilities, critical thinking skills, and scientific knowledge on an international stage.",
      image: require("./assets/images/pimso.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "National Round Results",
          url: "https://drive.google.com/drive/folders/1OteUR3ykg0tXgUc1qROyeB712BmRq3aT?usp=sharing"
        }
      ]
    },
    {
      title: "Top 12 nationally, Thailand International Mathematical Olympiad",
      subtitle:
        "Ranked Top 12 in India and received a silver medal, Thailand International Mathematics Olympiad is an annual Mathematical Olympiad competition organised by the Thailand Mathematics Society. TIMO consists of 5 main topics: Logical Thinking, Arithmetic / Algebra, Number Theory, Geometry & Combinatorics.",
      image: require("./assets/images/TIMO_Logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "National Round Results",
          url: "https://drive.google.com/drive/folders/19UGhs9dmQg3lDVjAmu91Q5cfi2PI4lin?usp=sharing"
        }
      ]
    },
    {
      title: "Top 10, Thomas Jefferson Physics Olympiad",
      subtitle:
        "The TJ Physics Olympiad (TJPhO) is an annual international high school competition focusing on applied physics. Participants work in teams of three, exploring various physics topics through free response questions. Communication is limited to team members, and no external resources are allowed. The exam spans three days, with problems sent via email. The goal is to develop problem-solving skills and teamwork.",
      image: require("./assets/images/tjpho.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Website",
          url: "https://activities.tjhsst.edu/physics/olympiad/"
        }
      ]
    }
  ],
  achievementsCards2: [
    {
      title: "2nd Position, SpaceHack",
      subtitle:
        "National-level hackathon where participants combine aerospace technology and computer science to create applications that demonstrate the best use of research and creativity. Conducted by Aerospace Society of DPS RK Puram. Sponsored by University of Arizona.",
      image: require("./assets/images/spacehack.png"),
      imageAlt: "SpaceHack",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1Tg-QpV5Ptu_GfKl5bN7QKIEb8Q2FCfMT/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Excellence in Co-Curricular (Top 3% of class)",
      subtitle:
        "The 'Excellence in Co-Curricular' award celebrates the recipient's ability to balance academic excellence with active participation in co-curricular activities, highlighting their capacity to develop essential life skills, including leadership, time management, communication, and social responsibility.",
      image: require("./assets/images/jpis.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Medal",
          url: "https://drive.google.com/file/d/1SOJCDxxJqTakP8w8GNO7xG_g91SPZyhM/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Participant, International Competition organized by CERN",
      subtitle:
        "With 2000+ high school students participating in this highly competitive competition called Beamline for Schools, I researched on collision between two sub atomic particles using CERN's hadron collider.",
      image: require("./assets/images/beamlineforschools.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Participation Certificate",
          url: "https://drive.google.com/file/d/1SVDh6bwJsdoUZ7apiVhPPUvY_x0RGgMj/view?usp=sharing"
        },
        {
          name: "Proposal Video",
          url: "https://drive.google.com/drive/folders/1aXO4pv_ULIKycGZ0fLdmKXoHs0nIsWMh?usp=sharing"
        },
        {
          name: "Written Experiment Proposal",
          url: "https://drive.google.com/file/d/1dqPxpPtFYifjY2hynoLrcoP5Y0CyJV6U/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const communityServiceSection = {
  title: emoji("Community Service"),

  achievementsCards1: [
    {
      title: "Co-founder, The Rescue Society",
      subtitle:
        "In TRS, I took the lead in organizing cleanliness drives along Jaipur railways to combat land pollution. Through engaging street plays, I effectively communicated the message and initiated measures to curb this issue. Furthermore, I orchestrated a campaign focused on the conservation of soil, involving painting a public park and advocating positive environmental change.",
      image: require("./assets/images/trs.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Website",
          url: "https://the1rescuesociety.wixsite.com/officialsite"
        },
        {
          name: "LinkedIn",
          url: "https://the1rescuesociety.wixsite.com/officialsite"
        },
        {
          name: "Photos",
          url: "https://drive.google.com/drive/folders/1K39VSucLjNKjnvW-xx8db2gYx5uYTasY?usp=drive_link"
        },
        {
          name: "Instagram Handle",
          url: " https://www.instagram.com/the_rescue_society/?hl=en"
        }
      ]
    },
    {
      title: "Head Volunteer, Blossom NGO",
      subtitle:
        "I spearheaded efforts to uplift underprivileged girls by providing them with thoughtful gifts and facilitating literacy programs. The highlight was organizing a heartwarming Rakshabandhan event, spreading joy and a sense of belonging with the underprivileged girls.",
      image: require("./assets/images/blossom.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Marketing Poster- Rakshbandhan Event",
          url: "https://drive.google.com/file/d/1iCBuCN5X7o9H9YnbX2nZS6QrA-toR2Xl/view?usp=sharing"
        },
        {
          name: "Photos",
          url: "https://drive.google.com/drive/folders/1K39VSucLjNKjnvW-xx8db2gYx5uYTasY?usp=drive_link"
        }
      ]
    },
    {
      title: "Head Volunteer, Caring Hands By Pink",
      subtitle:
        "Focusing on safety and happiness, I orchestrated the distribution of gifts, eco-crackers, and essential donations. This endeavor aimed to create an environment of positivity and well-being.",
      image: require("./assets/images/caring_hands.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1kF5819JVTyeO-731EbdQICz3YR5f0_Tp/view?usp=drive_link"
        },
        {
          name: "Photos",
          url: "https://drive.google.com/drive/folders/1K39VSucLjNKjnvW-xx8db2gYx5uYTasY?usp=drive_link"
        }
      ]
    }
  ],
  achievementsCards2: [
    {
      title: "Member, School Nukkad Natak Team",
      subtitle:
        "At JPIS, I led a passionate team in performing dynamic street plays at a government school. These plays ingeniously conveyed crucial messages, leaving a lasting impact on both the young audience and the wider community.",
      image: require("./assets/images/jpis.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Photos",
          url: "https://drive.google.com/drive/folders/1K39VSucLjNKjnvW-xx8db2gYx5uYTasY?usp=drive_link"
        }
      ]
    },
    {
      title: "Volunteer, Do Muthi Kah Dum",
      subtitle:
        "I committed myself as a volunteer, collecting surplus supplies and ensuring that underprivileged children had access to essential resources for their educational journey.",
      image: require("./assets/images/dmkd.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Photos",
          url: "https://drive.google.com/drive/folders/1K39VSucLjNKjnvW-xx8db2gYx5uYTasY?usp=drive_link"
        }
      ]
    },
    {
      title: "Volunteer, Aanchal",
      subtitle:
        "Joining hands with the Aanchal NGO, I rallied volunteers for a tree-planting drive. This initiative not only contributed to environmental conservation but also instilled a sense of responsibility towards our planet.",
      image: require("./assets/images/aanchal.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Photos",
          url: "https://drive.google.com/drive/folders/1K39VSucLjNKjnvW-xx8db2gYx5uYTasY?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const otherActivitiesSection = {
  title: emoji("Other Activities"),

  achievementsCards: [
    {
      title: "Airbnb Property Manager",
      subtitle:
        "I managed a property (my childhood home) through Airbnb. I created and maintained property listings, interacted with guests before, during and after their stay to answer queries, provide information and address concerns, handle reservation requests and managed the calendar to ensure that the property is effectively rented out. I managed over 500 successful bookings.",
      image: require("./assets/images/airbnb.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Airbnb Listing",
          url: "https://www.airbnb.com.sg/rooms/37846700?source_impression_id=p3_1698601628_GBLYokqoF%2FQnhib7"
        }
      ]
    },
    {
      title: "Community Content Creator",
      subtitle:
        "As a Community Content Creator at Filmora Community Creations, I specialized in crafting dynamic videos for local audiences. These videos were designed to inform and entertain, resonating with our community. In addition, I extended my support by creating professional-grade videos for various community initiatives, amplifying their impact.",
      image: require("./assets/images/filmora.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Community Video",
          url: "https://drive.google.com/file/d/1CT9FuK-ZdJLdk-guz20ThSHA0p6UcPPn/view?usp=drive_link"
        }
      ]
    },
    {
      title:
        "Vice Captain, Jayshree Periwal International School, ISSO National Team & Jayshree Periwal Sports League",
      subtitle:
        "Vice Captain of the Basketball team at Jayshree Periwal International School and a key member of the ISSO National Team, I demonstrated exceptional leadership and game sense over 7 years. This resulted in our team winning 5 district championships and 2 State titles. Additionally, I earned 8 accolades in JPSL, showcasing my skill and dedication to the sport.",
      image: require("./assets/images/jpis.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Trophies",
          url: "https://drive.google.com/file/d/1lLyaa1sZDS-5hCmU9qTyCLxohxuQYxO9/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Media Coverages",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1Noml9ilNbQ5OIySQyWEhLnL005EPeryG/view?usp=sharing",
      title: "New Plus India, 19th November 2022",
      description: "Click to view"
    },
    {
      url: "https://drive.google.com/file/d/1A5sgxngKmz8kNaLs3vASiu2NbOGS0rCs/view?usp=sharing",
      title: "Dainik Bhaskar, 20th November 2022",
      description: "Click to view"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image: "../../assets/images/jpis.jpeg"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  email_address: "kjain45@wisc.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  clubs,
  openSource,
  research,
  workExperience,
  projectsSection,
  onlineCoursesSection,
  achievementSection,
  communityServiceSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  otherActivitiesSection
};
