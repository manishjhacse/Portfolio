const projectData = [
  {
    id: 6,
    name: "Campus Connect (College Social & Collaboration Platform)",
    poster:
      "https://res.cloudinary.com/dfrcswf0n/image/upload/v1730803846/Screenshot_2024-11-05_162028_cw8xlo.png",
    points: [
      `Led the development of a student-centric platform integrating social networking, collaborative learning, 
      and essential campus utilities, enhancing communication and engagement for 500+ registered users.`,
      `Created a real-time collaborative space with a whiteboard and live code editor, helping students study and 
      code together easily. `,
      `Built a Roommate Finder & Marketplace, allowing students to find compatible roommates and exchange 
      items, making campus life more convenient.`,
    ],
    technologies: ["ReactJs", "ExpressJS", "NodeJS", "TailwindCSS", "MongoDB","Socket.io"],
    github: "https://campusconnect-bpmce.vercel.app/home",
    live: "https://campusconnect-bpmce.vercel.app/home",
  },
  {
    id: 1,
    name: "OJAS’X (Event Management Platform for College)",
    poster:
      "https://res.cloudinary.com/dfrcswf0n/image/upload/v1730803846/Screenshot_2024-11-05_162028_cw8xlo.png",
    points: [
      `Developed a full-stack event management platform with React, Node.js, Express, and MongoDB, serving 
            1000+ registered students and processing 700+ secure transactions through Razorpay.`,
      `Enhanced platform security with private routes and Redux for state management, enabling seamless 
            navigation and secure user interactions.`,
      `Designed invoice and event tracking features, reducing administrative workload by 30% and allowing users 
            to track registrations and download invoices directly. `,
    ],
    technologies: ["ReactJs", "ExpressJS", "NodeJS", "TailwindCSS", "MongoDB"],
    github: "https://github.com/manishjhacse/ojasx",
    live: "https://ojasxislive.vercel.app/",
  },
  {
    id: 2,
    name: "Daily Diary (Personal Journaling Web App)",
    poster:
      "https://res.cloudinary.com/dfrcswf0n/image/upload/v1730811790/Screenshot_2024-11-05_183256_gbwrto.png",
    points: [
      `Developed a MERN stack journaling app with secure access, allowing users to create, edit, and delete daily 
      or past entries.`,
      `Implemented JWT-based authentication, password hashing, and OTP recovery to enhance data security.`,
      `Restricted users to one entry per day, with options to modify or access past entries.`,
      `Designed a responsive UI with Tailwind CSS and integrated MongoDB for flexible, schema-less data 
      storage.`,
    ],
    technologies: ["ReactJs", "ExpressJS", "NodeJS", "TailwindCSS", "MongoDB"],
    github: "https://github.com/manishjhacse/Daily-Diary-a-MERN-project",
    live: "https://daily-diary-a-mern-project.vercel.app/",
  },
  {
    id: 3,
    name: "Live Chat Application(Real-Time Messaging Platform) ",
    poster:
      "https://res.cloudinary.com/dfrcswf0n/image/upload/v1730815584/Screenshot_2024-11-05_193600_hs3wjg.png",
    points: [
      `Built a full-stack chat platform using React, Node.js, and Socket.IO, allowing users to create and join chat 
      rooms with unique IDs for seamless, low-latency messaging.`,
      `Leveraged Socket.IO for real-time, dynamic room management, supporting simultaneous user interactions 
      with under 200ms latency.`,
      `Designed a responsive UI with Tailwind CSS, optimizing user experience across desktop and mobile 
      devices.`,
    ],
    technologies: [
      "ReactJs",
      "ExpressJS",
      "NodeJS",
      "TailwindCSS",
      "Socket.IO",
    ],
    github: "https://github.com/manishjhacse/Live-Chat-Application",
    live: "https://live-chat-application-manishjha.vercel.app/",
  },
  {
    id: 4,
    name: "Manish Store(E-commerce Frontend) ",
    poster:
      "https://res.cloudinary.com/dfrcswf0n/image/upload/v1730815801/Screenshot_2024-11-05_193952_w8vous.png",
    points: [
      `Built a responsive eCommerce frontend with React and Tailwind CSS, featuring a modern and engaging user interface optimized for various devices.`,
      `Implemented core shopping features, including product listings, category filtering, and a powerful search functionality for a seamless shopping experience.`,
      `Integrated cart and wishlist management with persistent data storage using local storage, allowing users to save their selections across sessions.`,
      `Enhanced user navigation and state management using React Router DOM and Redux Toolkit, ensuring smooth interactions and predictable state handling throughout the app.`,
    ],
    technologies: ["ReactJs", "Redux", "TailwindCSS"],
    github:
      "https://github.com/manishjhacse/manish-store-React-Ecommerce-Project",
    live: "https://manish-store.vercel.app/",
  },
  {
    id: 5,
    name: "Blog Page",
    poster:
      "https://res.cloudinary.com/dfrcswf0n/image/upload/v1730816026/Screenshot_2024-11-05_194334_wiuyu8.png",
    points: [
      `Developed a dynamic blog platform with React, allowing users to explore various blog posts and discover related content by tags and categories.`,
      `Implemented tag-based filtering and category organization, providing a seamless and structured reading experience.`,
      `Styled with Tailwind CSS for a responsive and visually appealing user interface across devices.`,
    ],
    technologies: ["ReactJs", "Redux", "React-Router", "axios", "TailwindCSS"],
    github: "https://github.com/manishjhacse/Blogs",
    live: "https://blog-project-contextapi.netlify.app/",
  },
];
export default projectData;
