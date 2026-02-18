# AI Chat Assistant

A modern AI-powered chat application built with React, TanStack Router, and Gemini AI. Features a sleek UI with real-time streaming responses and interactive tools.

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Google Gemini API key
- `components.json` (required for shadcn/ui components)

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ai-chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

To get a Gemini API key:
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy and paste it into your `.env` file

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## How It Works

The application uses:

- **TanStack Router** for file-based routing
- **TanStack AI** for AI integration with streaming support
- **Gemini AI** as the language model provider
- **React** for the UI with hooks for state management
- **Tailwind CSS** for styling
- **Lucide React** for icons

### AI Tools

The chat includes interactive tools that the AI can use:

- **Counter Tool**: The AI can read and update a browser counter value
- **Todos Tool**: Fetches and searches todo items from an external API

Try asking the AI to "set the counter to 50" or "show me some todos"!

## Customization

### Changing the AI Model

Edit `src/routes/api/chat.ts` to change the model:

```typescript
model: 'gemini-2.5-flash', // Change to another Gemini model
```

### Adding New Tools

Define new tools in `src/routes/api/chat.ts`:

```typescript
const myNewTool = toolDefinition({
  name: 'my_tool',
  description: 'What my tool does',
  inputSchema: z.object({ /* ... */ }),
  outputSchema: z.object({ /* ... */ }),
})
```

