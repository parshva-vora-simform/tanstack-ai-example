# AI Chat Assistant

A modern AI-powered chat application built with React, TanStack Router, and Gemini AI. Features a sleek UI with real-time streaming responses and interactive tools.

## Features

- 🤖 **AI-Powered Chat**: Integrated with Google's Gemini AI for intelligent conversations
- 💬 **Real-time Streaming**: Server-sent events for smooth, streaming responses
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 🛠️ **Interactive Tools**: AI can interact with client-side tools (like the counter)
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast & Efficient**: Built with Vite and TanStack Router for optimal performance

## Prerequisites

- Node.js (v18 or higher)
- npm or pnpm
- Google Gemini API key

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

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── chat.tsx          # Main chat interface
│   │   └── counter.tsx        # Interactive counter component
│   ├── routes/
│   │   ├── __root.tsx         # Root layout
│   │   ├── index.tsx          # Home page
│   │   └── api/
│   │       └── chat.ts        # Chat API endpoint
│   └── styles.css             # Global styles
├── public/                    # Static assets
└── package.json
```

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

## Technologies Used

- React 19
- TanStack Router
- TanStack AI
- Gemini AI
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

If you encounter any issues or have questions, please open an issue on the repository.


One of the many nice features of TanStack Store is the ability to derive state from other state. That derived state will update when the base state updates.

Let's check this out by doubling the count using derived state.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store, Derived } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

const doubledStore = new Derived({
  fn: () => countStore.state * 2,
  deps: [countStore],
});
doubledStore.mount();

function App() {
  const count = useStore(countStore);
  const doubledCount = useStore(doubledStore);

  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
      <div>Doubled - {doubledCount}</div>
    </div>
  );
}

export default App;
```

We use the `Derived` class to create a new store that is derived from another store. The `Derived` class has a `mount` method that will start the derived store updating.

Once we've created the derived store we can use it in the `App` component just like we would any other store using the `useStore` hook.

You can find out everything you need to know on how to use TanStack Store in the [TanStack Store documentation](https://tanstack.com/store/latest).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).
