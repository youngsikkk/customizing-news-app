# 맞춤형 뉴스 피드 웹사이트

이 프로젝트는 사용자의 관심사에 기반한 맞춤형 뉴스 피드를 제공하는 웹 애플리케이션입니다. Next.js를 프론트엔드 프레임워크로 사용하고, Tailwind CSS로 스타일링하며, Zustand로 상태 관리를 합니다. 백엔드는 Express.js를 사용하여 API를 제공하고 MongoDB를 데이터베이스로 활용합니다.

## 기술 스택

- **프론트엔드**:
  - [Next.js](https://nextjs.org/): React 기반의 프레임워크
  - [Tailwind CSS](https://tailwindcss.com/): 유틸리티 기반 CSS 프레임워크
  - [Zustand](https://github.com/pmndrs/zustand): 간단한 상태 관리 라이브러리

- **백엔드**:
  - [Express.js](https://expressjs.com/): Node.js 웹 애플리케이션 프레임워크
  - [MongoDB](https://www.mongodb.com/): NoSQL 데이터베이스

## 설치 및 실행

### 프론트엔드 설정

1. **프론트엔드 디렉토리로 이동**:

   ```bash
   cd my-news-feed
   ```

2. **의존성 설치**:

   ```bash
   npm install
   ```

3. **개발 서버 실행**:

   ```bash
   npm run dev
   ```

### 백엔드 설정

1. **백엔드 디렉토리로 이동**:

   ```bash
   cd server
   ```

2. **의존성 설치**:

   ```bash
   npm install
   ```

3. **서버 실행**:

   ```bash
   node index.js
   ```

### 전체 애플리케이션 동시 실행

1. **루트 디렉토리에서 `concurrently` 설치**:

   ```bash
   npm install concurrently --save-dev
   ```

2. **`package.json`에 스크립트 추가**:

   ```json
   "scripts": {
     "dev": "next dev",
     "start": "next start",
     "build": "next build",
     "server": "node server/index.js",
     "dev:full": "concurrently \"npm run dev\" \"npm run server\""
   }
   ```

3. **전체 애플리케이션 실행**:

   ```bash
   npm run dev
   ```

## 기능

- **사용자 맞춤 뉴스 피드**: 관심 있는 주제에 따라 필터링된 뉴스 기사 제공.
- **기사 상세 보기**: 각 기사의 상세 내용 확인.
- **로그인 및 회원가입**: 사용자 계정 관리 및 로그인 기능.
- **소셜 미디어 공유**: 기사 공유 기능.

## 디렉토리 구조

- `my-news-feed/`:
  - `pages/`: Next.js 페이지
  - `components/`: 재사용 가능한 React 컴포넌트
  - `styles/`: Tailwind CSS 및 기타 스타일
  - `public/`: 정적 파일 (이미지 등)

- `server/`:
  - `routes/`: Express.js 라우트
  - `models/`: Mongoose 모델
  - `index.js`: Express 서버 설정

## 기여

기여는 언제든지 환영합니다! 문제를 발견하거나 기능을 추가하고 싶다면, 이 저장소에 문제를 보고하거나 풀 리퀘스트를 제출해 주세요.

## 라이센스

이 프로젝트는 [MIT 라이센스](LICENSE) 하에 라이센스가 부여됩니다.

## 연락처

- 이메일: [hys7309.dev@gmail.com](mailto:hys7309.dev@gmail.com)
- GitHub: [github.com/youngsikkk/customizing-news-app](https://github.com/youngsikkk/customizing-news-app)


# Custom News Feed Website

This project is a web application that provides a personalized news feed based on user interests. It uses Next.js for the frontend framework, Tailwind CSS for styling, and Zustand for state management. The backend is built with Express.js to provide APIs and MongoDB is used as the database.

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/): React-based framework
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework
  - [Zustand](https://github.com/pmndrs/zustand): Simple state management library

- **Backend**:
  - [Express.js](https://expressjs.com/): Node.js web application framework
  - [MongoDB](https://www.mongodb.com/): NoSQL database

## Installation and Running

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd my-news-feed
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

### Backend Setup

1. **Navigate to the backend directory**:

   ```bash
   cd server
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the server**:

   ```bash
   node index.js
   ```

### Running Both Frontend and Backend Simultaneously

1. **Install `concurrently` in the root directory**:

   ```bash
   npm install concurrently --save-dev
   ```

2. **Add scripts to `package.json`**:

   ```json
   "scripts": {
     "dev": "next dev",
     "start": "next start",
     "build": "next build",
     "server": "node server/index.js",
     "dev:full": "concurrently \"npm run dev\" \"npm run server\""
   }
   ```

3. **Run the full application**:

   ```bash
   npm run dev:full
   ```

## Features

- **Personalized News Feed**: Provides news articles filtered by user interests.
- **Article Details**: View detailed information for each news article.
- **Login and Signup**: User account management and login functionality.
- **Social Media Sharing**: Ability to share articles on social media.

## Directory Structure

- `my-news-feed/`:
  - `pages/`: Next.js pages
  - `components/`: Reusable React components
  - `styles/`: Tailwind CSS and other styles
  - `public/`: Static files (images, etc.)

- `server/`:
  - `routes/`: Express.js routes
  - `models/`: Mongoose models
  - `index.js`: Express server setup

## Contributing

Contributions are always welcome! If you find any issues or want to add new features, please report them or submit a pull request to this repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- Email: [hys7309.dev@gmail.com](mailto:hys7309.dev@gmail.com)
- GitHub: [github.com/youngsikkk/customizing-news-app](https://github.com/youngsikkk/customizing-news-app)
