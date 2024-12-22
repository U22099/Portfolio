const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches ?
  "dark" :
  "light";
export const projects = [
  {
    image: "projects/zephyr-"+systemTheme+".jpg",
    name: "Zephyr",
    description: "Zephyr is a feature-rich chat application built using the Next.js and Firebase.  It offers a comprehensive suite of communication tools, including one-on-one and group chat, video calls, voice calls, status updates, and AI chat interface.  Zephyr is highly customizable, allowing users to personalize their experience",
    github_link: "https://github.com/U22099/Zephyr",
    live_link: "https://zephyr-chat.onrender.com"
  },
  {
    image: "projects/lumina-"+systemTheme+".jpg",
    name: "Lumina",
    description: "Lumina AI is a cutting-edge, multi-modal AI chatbot powered by Gemini API and designed by Swag. Programmed by full-stack web developer Daniel, Lumina combines advanced natural language processing (NLP) with creative and compassionate communication to provide insightful and engaging conversations. Whether you need help with coding, design, brainstorming, or just a friendly chat, Lumina is here to assist you",
    github_link: "https://github.com/U22099/Lumina",
    live_link: "https://u22099.github.io/Lumina"
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
    description: "Melodia is a music streaming application that enables access to musics of different kinds. Built using React.js, JsMediaTags.js, Melodia API, Melodia provides a scalable and reliable solution for accessing a wide range of songs and creating personalized playlists.",
    live_link: "https://u22099.github.io/Melodia",
    github_link: "https://github.com/U22099/Melodia"
  },
  {
    image: "projects/summify.jpg",
    name: "Summify",
    description: "Summify is an AI-powered content summarizer that uses the Gemini API to quickly and easily create summaries of text, PDFs, and images. Generate flash cards, chat with the AI about your content, and save your summaries for later",
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