const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches ?
  "dark" :
  "light";
export const projects = [
  {
    
    image: "projects/schoolctrl.jpg",
    name: "School Control",
    description: "Revolutionize your school management with our comprehensive app designed to connect admins, teachers, parents, and students. This platform offers seamless management of school data, including staff, parents, and students, with full editing capabilities for administrators. Teachers can easily take attendance and access real-time analytics on attendance rates, while students and teachers receive personalized schedule calendars based on the school timetable. Parents can conveniently view the schedules of all their children, ensuring they stay informed. Plus, share important announcements and events school-wide to keep everyone in the loop. Enhance communication, boost efficiency, and elevate your school community with our powerful management tool",
    live_link: "https://schoolctrl.vercel.app",
    github_link: "https://github.com/U22099/School-Management-System"
  
  },
  {
    image: "projects/zephyr-"+systemTheme+".jpg",
    name: "Zephyr",
    description: "Zephyr is a feature-rich chat application built using the Next.js and Firebase.  It offers a comprehensive suite of communication tools, including one-on-one and group chat, video calls, voice calls, status updates, and AI chat interface.  Zephyr is highly customizable, allowing users to personalize their experience",
    github_link: "https://github.com/U22099/Zephyr",
    live_link: "https://zephyr-chat.onrender.com"
  },
  {
    image: "projects/nex-ai-"+systemTheme+".jpg",
    name: "NexAI",
    description: "NexAI is a sophisticated chatbot powered by Google's Gemini model, designed to elevate your user experience through precise and contextually aware responses. Whether you need assistance with inquiries, task management, or professional support, NexAI is here to assist with adaptive learning and a seamless interface",
    github_link: "https://github.com/U22099/NexAI",
    live_link: "https://nex-aix.vercel.app"
  },
  {
    image: "projects/melodia-api.jpg",
    name: "Melodia API",
    description: "Melodia API is a developer-friendly music streaming API that simplifies the integration of music into applications. Built using Node.js, Express.js, MongoDB, Melodia provides a scalable and reliable solution for accessing a wide range of songs and creating personalized playlists.",
    live_link: "https://melodia-server.onrender.com",
    github_link: "https://github.com/U22099/Melodia-Server"
  },
  {
    image: "projects/melodia.jpg",
    name: "Melodia",
    description: "Melodia is a music streaming application that enables access to musics of different kinds. Built using React.js and Melodia API, Melodia provides a scalable and reliable solution for accessing a wide range of songs and creating personalized playlists.",
    live_link: "https://u22099.github.io/Melodia",
    github_link: "https://github.com/U22099/Melodia"
  },
  {
    image: "projects/summify.jpg",
    name: "Summify",
    description: "Summify is an AI-powered content summarizer that uses the Gemini API to quickly and easily create summaries/explanation of text, PDFs, and images. Generate flash cards, chat with the AI about your content, and save your summaries for later",
    github_link: "https://github.com/U22099/Summify",
    live_link: "https://summify-beryl.vercel.app"
  },
  {
    image: "projects/code-editor-"+systemTheme+".jpg",
    name: "Web Code Editor",
    description: "A web code editor powered by monaco editor (same editor powering vscode) with code execution feature for languages ranging from javascript, lua, python, typescript and many more",
    live_link: "https://u22099.github.io/WebCodeEditor",
    github_link: "https://github.com/U22099/WebCodeEditor"
  }
]