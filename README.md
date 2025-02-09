# Netflix Clone Project

A Netflix clone built with Next.js, implementing Clean Architecture principles for maintainable and scalable code.

## 🚀 Features

- Clean Architecture implementation
- Responsive design
- Movie data integration
- Atomic Design System
- Type-safe development with TypeScript

## 🛠 Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Architecture**: Clean Architecture
- **Design Pattern**: Atomic Design

## 🏃‍♂️ Getting Started

1. Clone the repository:
```bash
git clone https://github.com/rattanun00000/Frontend_For_Nextflix_Clone.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```
NEXT_PUBLIC_API_URL=https://backend-for-nextflix-clone.vercel.app/
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## 🏛 Architecture

This project follows Clean Architecture principles with the following layers:

- **Domain Layer** (`core/domain/`): Contains business entities and repository interfaces
- **Use Cases** (`core/usecases/`): Implements application business rules
- **Infrastructure** (`infrastructure/`): External implementations (API clients, repositories)
- **Presentation** (`presentation/`): UI components following Atomic Design

## 🎨 Component Structure

Components are organized following Atomic Design principles:

- **Atoms**: Basic UI elements
- **Molecules**: Simple component combinations
- **Organisms**: Complex UI sections

## 🔐 Environment Variables

Required environment variables:

- `NEXT_PUBLIC_API_URL`: Base URL for the movie API

## 📝 Development Guidelines

1. Follow the established Clean Architecture patterns
2. Use TypeScript for type safety
3. Implement new features in their respective layers
4. Follow Atomic Design principles for new components
5. Maintain responsiveness across all screen sizes

## 📦 Build

To build the project for production:

```bash
npm run build
# or
yarn build
```