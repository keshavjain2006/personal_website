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
    "A motivated high school student, Computer Science enthusiast, machine learning researcher and web developer who wants to harness technology for social impact."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1pqYT0CTgKxb_1Yv6s0NhNH2LoazbyATW/edit?usp=sharing&ouid=103833402836735569234&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/keshavjain2006",
  linkedin: "https://www.linkedin.com/in/keshav-jain-baaa23240",
  gmail: "keshukeshavjain@gmail.com",
  instagram: "https://www.instagram.com/keshavjain90/",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "ClearVision",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developed a project utilizing OpenCV, OCR, and AI technology for text scanning, with audio transformation using Scapy and other libraries",
    ),
    emoji("⚡ Incorporated zoom functionality for enhanced accessibility, aiming to facilitate comprehensive newspaper reading for the visually impaired"),
    emoji(
      "⚡ Completed first prototype; planning for the second version with object recognition"
    )
  ],
  githubLink: "https://github.com/kj12354/ClearVision",

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-opencv"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jayshree Periwal International School",
      logo: require("./assets/images/jpis.jpeg"),
      subHeader: "IGCSE",
      //duration: "September 2017 - April 2019",
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

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "Tweaking Technologies Pvt Ltd",
      companylogo: require("./assets/images/tweaking.jpeg"),
      // date: "June 2018 – Present",
      desc: "I contributed to the development of an antivirus mobile application to defend against virus, malware and ransomware. I collaborated with frontend engineers and contributed in creating an intuitive and user-friendly interface for the mobile app, allowing users to configure settings and view scan results. I implemented a user feedback system for users to report issues and providing feedback, which can inform future updates and improvements to the application. I developed a system for logging scan results and generating reports for users, which can aid in troubleshooting and decision-making.",
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
      // date: "May 2017 – May 2018",
      desc: "During my tenure in the Goldman Sachs Engineering Virtual Program, I immersed myself in the intricacies of cybersecurity. I proactively delved into hacking techniques, scrutinized password security methodologies, and put my skills to the test by attempting to crack 20 passwords with an array of tools. In a notable display of initiative, I drafted an email to my supervisor, proposing specific improvements to existing control measures. This experience not only expanded my knowledge of cyber threats but also honed my problem-solving abilities in the realm of information security.",
      footer: [
        {
          name: "Certificate",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_A3mL2v7YJRQbCMy9R_1655411549649_completion_certificate.pdf",
        }
      ]
    },
  ]
};

// Work experience section

const clubs = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "InnovateX",
      company: "President",
      companylogo: require("./assets/images/innovatex.png"),
      // date: "June 2018 – Present",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "OpenCV and YOLO: Explored advanced techniques in OpenCV and YOLO for computer vision applications; Studied real-time object detection system using YOLOv3. Developed a project which uses object recognition to control laptop's mouse/cursor using hand movements.",
        "Multilanguage Coding Projects: Implemented multiple projects using Python, HTML, CSS, and JavaScript; Developed various small coding projects like calculator, to-do list, daily journal using those languages",
        "Leadership and AI Research: Held discussions on developments in the AI space. Mentored a research group in machine learning research; Published a paper on machine learning in healthcare with my colleagues - published in IOSR journal (see 'Research' section above)"
      ],
      footer: [
        {
          name: "OpenCV Project Github",
          url: "https://github.com/keshavjain2006/VirtualMouse",
        },
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
          url: "https://www.instagram.com/innovatex.jpis/",
        }
      ]
    },
    {
      role: "Knowverse",
      company: "Co-founder",
      companylogo: require("./assets/images/knowverse.png"),
      // date: "May 2017 – May 2018",
      desc: "Knowverse, a venture I co-founded, revolutionizes learning through interactive content. Leading a team of 20 tutors, we produce specialized educational videos covering a diverse range of subjects, tailored for children's enrichment. The platform encourages exploration of concepts, from electrons to galaxies, ensuring a thorough understanding of every nuance. Additionally, we conduct sessions, weekly assignments, and offer intriguing research topics. Knowverse goes beyond conventional learning, providing practical, career-oriented courses as proficiency grows. Internships, research papers, and experiments offer a direct path to career aspirations, eliminating monotony.",
      // descBullets: [
      //   "Knowverse is a platform for students to enhance their learning experience through interactive content and resources",
      //   "Led 20+ tutors in creating educational videos for kids."
      // ],
      footer: [
        {
          name: "Discord Server",
          url: "https://discord.gg/vrWSyXr6",
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
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const research = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Lumiere Research Scholar",
      subtitle:
        "As a Lumiere Research Scholar, I investigated the accuracy and efficiency of Support Vector Machine (SVM) and Decision Tree (DT) algorithms in predicting the probability of cardiovascular diseases. This expanded my understanding of machine learning techniques and the mathematical basis of SVM and DT algorithms. I submitted my research paper to the National High School Journal of Science for publication, and it is currently under review.",
      image: require("./assets/images/lumiere_education_logo.jpeg"),
      imageAlt: "Lumiere Education Logo",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://docs.google.com/document/d/1pAST9aAILgLdOvwcgenZKWhcp5CDsej9/edit?usp=sharing&ouid=103833402836735569234&rtpof=true&sd=true"
        }
      ]
    },
    {
      title: "Published Research",
      subtitle:
      "My research paper, published in the International Organization of Scientific Research - Journal of Computer Engineering, evaluated Naïve-Bayes Algorithm and Multi-Layer Perceptron for predicting heart diseases. This deepened my knowledge of these algorithms and involved advanced machine learning concepts like confusion matrix, entropy, accuracy, and efficiency analysis.",
      image: require("./assets/images/iosr_logo.jpeg"),
      imageAlt: "IOSR Journal Logo",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://www.iosrjournals.org/iosr-jce/papers/Vol25-issue5/Ser-2/J2505025257.pdf"
        },
        {
          name: "IOSR-JCE Series 2, Last Entry",
          url: "https://www.iosrjournals.org/iosr-jce/pages/25(5)Series-2.html"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

const workExperience = {
  title: "Work Experience",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tweaking.jpeg"),
      projectName: "Software Engineering Intern, Tweaking Technologies Pvt Lt",
      projectDesc: "Research question: 'To what extent is the comparative accuracy and efficiency of Support Vector Machine (SVM) and Decision Tree(DT) algorithms in cardiovascular diseases?' Learned 3 different types of machine learning techniques and also the mathematical reasoning behind SVM and DT algorithms. Submitted research paper to the National High School Journal of Science for publication, currently under review",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/goldman.png"),
      projectName: "Engineering Virtual Program, Goldman Sachs ",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      subtitle:
        "-Udemy",
      image: require("./assets/images/python.png"),
      imageAlt: "Python Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "http://ude.my/UC-db55218a-5180-4f4a-9e28-3ae1b24771b1"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "The Complete 2020 Web Development Bootcamp",
      subtitle:
        "-Udemy",
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
      subtitle:
        "-Udemy",
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
  display: true // Set false to hide this section, defaults to true
}

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Bronze Medal, Philippine International Math and Science Olympics",
      subtitle:
        "Ranked Top 5 nationally. PIMSO, by ICE (International Champions in Education), is a prestigious international academic competition designed to promote and celebrate excellence in mathematics and science. This annual event provides a platform for young talents to showcase their problem-solving abilities, critical thinking skills, and scientific knowledge on an international stage.",
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
    },

    {
      title: "2nd Position, SpaceHack",
      subtitle: "National-level hackathon where participants combine aerospace technology and computer science to create applications that demonstrate the best use of research and creativity. Conducted by Aerospace Society of DPS RK Puram. Sponsored by University of Arizona.",
      image: require("./assets/images/spacehack.png"),
      imageAlt: "SpaceHack",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1Tg-QpV5Ptu_GfKl5bN7QKIEb8Q2FCfMT/view?usp=drive_link"
        },
      ]
    }
  ],
  achievementsCards2: [
    {
      title: "2nd Position, Cosmoverse",
      subtitle:
        "National-level research competition where participants design a competent, viable and creative permanent settlement according to given parameters. Conducted by Aerospace Society of DPS RK Puram. Sponsored by University of Arizona.",
      image: require("./assets/images/cosmoverse.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://docs.google.com/document/d/1eaYN_gheQ7QhMQK2hOzXqRoJ4Yvrj21Z66f3yRN68WY/edit"
        }
      ]
    },
    {
      title: "Excellence in Co-Curricular (Top 3% of class)",
      subtitle:
        "The 'Excellence in Co-Curricular' award celebrates the recipient's ability to balance academic excellence with active participation in co-curricular activities, highlighting their capacity to develop essential life skills, including leadership, time management, communication, and social responsibility. This recognition is a testament to their dedication to personal growth and their valuable contributions to the school community.",
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
      subtitle: "With 2000+ high school students participating in this highly competitive competition called Beamline for Schools, I researched on collision between two sub atomic particles using CERN’s hadron collider.",
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
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

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
      subtitle: "Focusing on safety and happiness, I orchestrated the distribution of gifts, eco-crackers, and essential donations. This endeavor aimed to create an environment of positivity and well-being.",
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
      subtitle: "Joining hands with the Aanchal NGO, I rallied volunteers for a tree-planting drive. This initiative not only contributed to environmental conservation but also instilled a sense of responsibility towards our planet.",
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
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Airbnb Property Manager",
      subtitle:
        "I managed a property (my childhooh home) through Airbnb. I created and maintained property listings, interacted with guests before, during and after their stay to answer queries, provide information and address concerns, handle reservation requests and managed the calendar to ensure that the property is effectively rented out and that there are no double bookings. I managed over 500 successful bookings.",
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
        "As a Community Content Creator at Filmora Community Creations, I specialized in crafting dynamic videos for local audiences. These videos were designed to inform and entertain, resonating with our community. In addition, I extended my support by creating professional-grade videos for various community initiatives, amplifying their impact. It was immensely rewarding to see the positive influence these videos had on our community, both in terms of entertainment and the professional image they projected.",
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
      title: "Vice Captain, Jayshree Periwal International School, ISSO National Team & Jayshree Periwal Sports League",
      subtitle: "Vice Captain of the Basketball team at Jayshree Periwal International School and a key member of the ISSO National Team, I demonstrated exceptional leadership and game sense over 7 years. This resulted in our team winning 5 district championships and 2 State titles. Additionally, I earned 8 accolades in JPSL, showcasing my skill and dedication to the sport.",
      image: require("./assets/images/jpis.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Trophies", url: "https://drive.google.com/file/d/1lLyaa1sZDS-5hCmU9qTyCLxohxuQYxO9/view?usp=drive_link" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Media Coverages",
  // subtitle:
  //   "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1Noml9ilNbQ5OIySQyWEhLnL005EPeryG/view?usp=sharing",
      title: "New Plus India, 19th November 2022",
      description:
        "Click to view"
    },
    {
      url: "https://drive.google.com/file/d/1A5sgxngKmz8kNaLs3vASiu2NbOGS0rCs/view?usp=sharing",
      title: "Dainik Bhaskar, 20th November 2022",
      description:
        "Click to view"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  // subtitle: emoji(
  //   "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  // ),

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
  // subtitle:
  // "I would love to connect with you .",
  // number: "+92-0000000000",
  email_address: "keshukeshavjain@gmail.com"
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
