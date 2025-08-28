# Project General Coding Guidelines

## Code Style

- Use **semantic HTML5 elements** (`header`, `main`, `section`, `article`, `footer`) for structure.
- Follow **React + TypeScript best practices**:
  - Use functional components with hooks.
  - Enable and respect **TypeScript strict mode**.
  - Avoid `any`; prefer precise types or generics.
- Prefer **modern JavaScript (ES6+)** features:
  - `const` / `let` instead of `var`.
  - Arrow functions and template literals.
  - Optional chaining and nullish coalescing for safe lookups.
- Use **TailwindCSS utility classes** for styling.
  - Extract reusable patterns into components or `clsx` helpers when readability drops.
- Keep components **small and focused**; extract logic into hooks or utilities where possible.

## Naming Conventions

- **PascalCase** → React components, interfaces, type aliases (`UploadButton`, `ImagePreview`, `GenerationResult`).
- **camelCase** → Variables, functions, hooks, and methods (`downscaleImage`, `useHistory`).
- **snake_case** → Never use (unless mirroring backend payloads).
- **ALL_CAPS** → Constants and environment variables (`MAX_HISTORY = 5`).
- **File Names**:
  - Components: `ComponentName.tsx`
  - Hooks: `useSomething.ts`
  - Utilities: `somethingUtil.ts`

## Code Quality

- Use **meaningful names**: avoid abbreviations (`img` → `imageUrl`).
- Add **inline comments** only for complex or non-obvious logic (e.g. retry algorithm, canvas downscale).
- Apply **error handling**:
  - Gracefully handle failed uploads, invalid inputs, and API errors.
  - Show user-friendly error messages with retry options.
- Use **ESLint + Prettier** to enforce style consistency.
- Write **pure, testable functions** for core logic (backoff, storage, downscale).

## Accessibility

- Ensure the app is **fully keyboard navigable** with visible focus styles.
- Provide **ARIA roles/labels** for inputs, dropdowns, and interactive elements.
- Use `<label>` linked to inputs for better screen reader support.
- Test accessibility using `@testing-library/jest-dom` assertions.

## Testing

- Write **unit tests** with **Vitest + React Testing Library**:
  - Retry logic with exponential backoff.
  - Abort behavior.
  - LocalStorage history management.
- Write at least one **end-to-end test** with **Playwright or Cypress**:
  - Upload → Enter Prompt → Select Style → Generate → Preview.
- Prefer **fake timers/mocks** over real async delays in unit tests.
- Keep tests deterministic and isolated.

## Git Workflow

- Use **feature branches** (`feat/upload`, `fix/retry-logic`, `test/history`).
- At least **2 Pull Requests**:
  - Each with a meaningful description, test steps, and AI usage notes.
- Follow **Conventional Commit** style:
  - `feat: add upload component with preview`
  - `fix: retry logic capped at 3 attempts`
  - `test: add unit tests for history queue`

## Documentation

- **README.md** → Setup, run, test instructions, design notes.
- **AI_USAGE.md** → Short notes on Copilot/ChatGPT usage (with examples).
- (Optional) **evidence/** → Screenshots of AI suggestions, test runs, PRs.

## Performance & Extras

- Downscale images client-side before sending (≤1920px).
- Use `React.memo` or `useMemo` for expensive operations.
- Consider **code splitting** if bundle grows.
- Add **error boundaries** for unexpected failures.
- Bonus: Add **PWA manifest** and offline caching for history images.
- Always use the latest stable versions of libraries.
- Prefer official documentation patterns.
- Do not suggest deprecated methods.
- For React, always use latest version.
- For TailwindCSS, use latest version.
- For TypeScript, assume strict mode enabled.
