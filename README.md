# Jamin - Fast, Helpful AI Chat

<div align="center">

![Jamin AI Frontend](img/jaminFrontPage.png)

🤖 A powerful LLM Aggregator for intelligent document processing and AI interactions

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)

</div>

## Overview

Jamin AI is a comprehensive LLM Aggregator built with Node.js and Express backend, paired with a React (Vite) frontend. It seamlessly integrates multiple Large Language Models to help users process and analyze text files, YouTube videos, and handle complex question-answering tasks.

## Features

- 🤖 **Multi-LLM Integration**: Seamless access to OpenAI, Cohere, and Anthropic AI models
- 📄 **PDF Intelligence**: Smart document analysis with AI-powered Q&A capabilities
- 🎥 **Video Analysis**: Intelligent YouTube video summarization
- 📚 **Research Assistant**: Extract key insights from academic papers and journals
- 🎨 **Image Generation**: Create images on demand using Flux.1
- 🔑 **API Management**: Simple integration of pre-existing API keys

<!-- ![Jamin AI Architecture](img/architecture.png) -->

## Project Structure

```
jamin/
├── backend/                # Backend server implementation
│   ├── src/                
│   ├── drizzle/            # Database migrations & seed data
│   ├── node_modules/       
│   ├── Dockerfile         
│   ├── drizzle.config.ts   # Drizzle configuration
│   ├── package.json        # Backend dependencies
│   └── tsconfig.json       # TypeScript configuration
│
├── frontend/               # React frontend application
│   ├── src/               
│   ├── public/             # Static assets
│   ├── tests/             
│   ├── node_modules/      
│   ├── .eslintrc.js       
│   ├── index.html         
│   ├── package.json        # Frontend dependencies
│   ├── postcss.config.js  
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── vite.config.js      # Vite configuration
│
├── img/
|                   
├── .gitignore            
├── docker-compose.yml      # Docker compose configuration
├── Dockerfile.frontend     # Frontend Dockerfile
├── Dockerfile.backend      # Backend Dockerfile
├── kubernetes.yml          # Kubernetes configuration
└── README.md             
```

## Tech Stack

### Frontend
- ⚛️ React with Vite for fast development and building
- 🎨 Tailwind CSS with Daisy UI for styling
- 🎭 Framer Motion for smooth animations
- 📱 TanStack React Query for efficient data fetching
- 🛣️ React Router for navigation
- 🔧 TypeScript for type safety

### Backend
- 📦 Node.js runtime environment
- 🚀 Express.js framework
- 🔐 Passport for authentication
- 📝 TypeScript for type safety
- 🔗 Langchain for LLM interactions
- 🗃️ Drizzle for database operations

<!-- ![Jamin AI Dashboard](img/dashboard.png) -->

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- API keys for desired LLM services (OpenAI, Cohere, Anthropic)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jamin.git
cd jamin
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### Development

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

### Docker Deployment

Build and run using Docker Compose:
```bash
docker-compose up --build
```

## License

[MIT License](LICENSE)

<!-- ## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

## Contact

Email: [shashwatmain@gmail.com](mailto:shashwatmain@gmail.com)