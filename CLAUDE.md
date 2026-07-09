# IES Client — CLAUDE.md

## Project Overview

React SPA for **IES (International Education System)** — a bilingual (vi-VN / en-US) education and vocational training institute website. Handles program showcasing, student registrations, news/events, partnerships, and educational document delivery.

---

## Tech Stack

| Layer | Tool |
|---|---|
| UI Framework | React 19 + TypeScript 5.8 (strict) |
| Build | Vite (dev port `3089`) |
| UI Components | Ant Design 5 |
| Styling | Tailwind CSS v4 + SCSS Modules + custom CSS |
| UI State | Zustand v5 |
| Server State | TanStack React Query v5 |
| HTTP | Axios (JWT interceptor) |
| Routing | React Router v6 (`createBrowserRouter`) |
| i18n | i18next — `vi-VN` (default) / `en-US` |
| Animation | Framer Motion |
| Forms | Formspree (env-based endpoints) |
| Testing | Vitest |

---

## Project Structure

```
src/
├── api/              # React Query mutation/query hooks grouped by domain
│   └── clientRegis/  # Registration mutations (contact, partnership, vocational, short-term)
├── assets/imgs/      # Image assets (use .webp format)
├── components/       # Shared/reusable UI components
│   ├── Base/         # IesButton, etc.
│   ├── AntTypography/
│   ├── AntdModal/
│   ├── Buttons/
│   └── NotifyProvider/
├── constants/        # Route path strings and enums
├── hooks/            # Custom hooks (useDevice, LazySec, etc.)
├── i18n/             # Translation files: en_US/, vi_VN/
├── layouts/          # IesClientLayout (main), IesOffLayout (edu docs)
├── lib/
│   ├── api-client.ts     # Axios instance — single source of truth for HTTP
│   ├── react-query.ts    # QueryClient config + generic hook types
│   └── formspree-api.ts  # Separate Axios instance for form submissions
├── pages/            # Route-level components (all lazy-loaded)
├── routes/           # router.tsx — createBrowserRouter config
├── store/
│   ├── useUserStore.ts   # locale + isDark (persisted)
│   └── useNotifyStore.ts # notification queues (persisted)
├── styles/
│   ├── critical.css  # HTML/body reset
│   ├── tailwind.css  # Tailwind entry
│   └── custom.css    # Ant Design overrides, global tweaks
└── utils/            # logger, storagePkg, encryption, enums, message
```

---

## Architecture Rules

### Routing
- All pages use `React.lazy()` + `Suspense` — never eager import a page component.
- Dashboard uses `LazySec` hook with Intersection Observer (800px margin) for section-level lazy loading.
- Two layouts: `IesClientLayout` (Header + Footer + MegaDrawer) and `IesOffLayout` (educational documents).

### State Management
- **Zustand** for UI/user state only: `useUserStore` (locale, isDark) and `useNotifyStore` (queues).
- **React Query** for all server/async state — do not use `useState` + `useEffect` to fetch data.
- Never put server data into Zustand stores.

### API Layer
- All HTTP goes through `src/lib/api-client.ts` — the Axios instance with JWT and error interceptors.
- Formspree form submissions use `src/lib/formspree-api.ts` — a separate instance.
- API hooks live in `src/api/<domain>/` and use React Query's `useMutation` or `useQuery`.
- Use the project's generic types: `QueryFn<T>`, `MutationFn<T, V>`, `QueryConfig<T>`, `MutationConfig<T>`.

### Theming
- Primary color: `#474669`.
- Dark mode toggled by adding/removing `.dark` class on `document.documentElement` — handled by `useUserStore.setIsDark()`.
- Ant Design `ConfigProvider` wraps the whole app — use its `token` prop for theme customization, not inline styles.

### Internationalization
- Always use `useTranslation('namespace')` — namespace matches the component/page name.
- Never hardcode user-facing strings.
- Locale stored in localStorage via `useUserStore.setLocale()`.

---

## Coding Conventions

### Components
- Functional components + hooks only. No class components.
- Export as named export — not default — unless it's a route-level page.
- Apply `React.memo()` to leaf/reusable components. Use `useMemo`/`useCallback` for derived values and callbacks passed as props.
- Props type: inline interface named `<ComponentName>Props`.
- **Mỗi file chỉ chứa đúng một React component** — không bao giờ định nghĩa 2 component trong cùng một file, kể cả component nhỏ/helper. Tách riêng thành file độc lập.
- **Luôn dùng cú pháp React.FC (typed arrow function component)** khi khai báo component:

```tsx
// ✅ Đúng — React.FC pattern
interface IesButtonProps {
  label: string;
  onClick: () => void;
}

const IesButton: React.FC<IesButtonProps> = (props) => {
  const { label, onClick } = props;
  // ...
};

export default IesButton;

// ❌ Sai — shorthand destructure ở signature
const IesButton = ({ label, onClick }: IesButtonProps) => { ... };

// ❌ Sai — function declaration
function IesButton({ label }: IesButtonProps) { ... }
```

**Tại sao React.FC pattern?**
- Type inference rõ ràng, `children` và `displayName` được handle tự động.
- Dễ đọc hơn khi component có nhiều prop — destructure trong body thay vì ở signature.
- Nhất quán toàn codebase, không phụ thuộc vào suy luận của TypeScript.

### TypeScript
- Strict mode — `noUnusedLocals` and `noUnusedParameters` are on. Fix warnings, don't suppress.
- Use `import type` for type-only imports (`verbatimModuleSyntax: true`).
- Use enums from `src/utils/enum.ts` for constants (language, program type, role, location, etc.).
- Generic API types: `QueryFn<T>`, `MutationFn<T, V>`.

### File Naming
| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `IesButton.tsx` |
| Pages | PascalCase | `HomePage.tsx` |
| Hooks | camelCase, `use` prefix | `useDevice.ts` |
| Stores | camelCase, `use` prefix | `useUserStore.ts` |
| SCSS modules | kebab-case | `iesClLayout.module.scss` |
| Utilities | camelCase | `logger.ts` |

### Typography
- **Never** use raw `<p>`, `<span>`, `<h1>`–`<h6>` for text content. Always use `Text` and `Title` from `@/components/AntTypography`.
- `Text` renders as `<span>` — add `block!` when block/paragraph display is needed.
- `Title` has no `color` prop — set color via `style={{ color: '...' }}`.
- Use `color` prop on `Text` for dynamic colors instead of Tailwind color classes.

```tsx
// ✅ Đúng
<Text color={dark ? '#C5C4DC' : '#374151'} className='text-[16.5px]! leading-[1.9]! mb-5! block!'>
  Nội dung đoạn văn
</Text>

<Title level={3} style={{ color: dark ? '#E8E7F5' : '#1A1A2E' }} className='text-[17px]! font-bold! mt-8! mb-3.5!'>
  Tiêu đề mục
</Title>

// ❌ Sai
<p className={`text-[16.5px] leading-[1.9] ${textCls}`}>...</p>
<h3 className={`text-[17px] font-bold ${headingCls}`}>...</h3>
<span className={`text-sm ${muted}`}>...</span>
```

### Styling
1. **Ant Design** components as the structural base.
2. **Tailwind** utilities for layout, spacing, flexbox, grid.
3. **SCSS Modules** for component-scoped styles — access as `styles['className']`.
4. **`custom.css`** only for global Ant Design overrides and root-level tweaks — keep it minimal.
5. Never write inline style objects unless driven by dynamic runtime values.
6. Responsive breakpoints via `useDevice` hook: `mobile`, `tablet`, `tabletPro`, `desktop`.

### Imports
- ESLint + Prettier enforce import sorting: **external → internal (`@/`) → relative**.
- Use the `@/` path alias for all internal imports — no relative `../../` beyond one level.

### Animations
- Use **Framer Motion** for any animation — no CSS `transition` hacks for enter/exit.
- Lazy-load heavy animated sections using `LazySec`.

### Comments
- Write comments only when the **why** is non-obvious.
- No inline docstrings, no JSDoc on obvious functions.

### Page Sub-Component Conventions

Khi tách một page thành nhiều sub-component file (ví dụ: `BoA` → `BoaMemberCard`, `BoaSpotlight`):

**1. Component signature — dùng `React.FC<Props>` + destructure trong body:**
```tsx
// ✅ Đúng
const BoaMemberCard: React.FC<BoaMemberCardProps> = (props) => {
  const { member, dark } = props;
  ...
};

// ❌ Sai — không dùng shorthand destructure ở signature
const BoaMemberCard = ({ member, dark }: BoaMemberCardProps) => { ... };
```

**2. Props interface — export ra ngoài:**
```tsx
export interface BoaMemberCardProps {
  member: BoaMember;
  dark: boolean;
}
```

**3. Lazy load sub-component trong parent bằng absolute path `@/`:**
```tsx
const BoaMemberCard = lazy(() => import('@/pages/about/components/BoaMemberCard'));
const BoaSpotlight  = lazy(() => import('@/pages/about/components/BoaSpotlight'));
```
Mỗi lazy child bọc `<Suspense fallback={false}>` inline tại nơi dùng. `ContactKey` / `LazySec` dùng `fallback={null}`.

**4. Tailwind v4 important modifier — dùng suffix `class!` không phải prefix `!class`:**
```tsx
// ✅ Đúng (Tailwind v4)
className='text-sm! font-bold! block! m-0!'

// ❌ Sai (Tailwind v3 cũ)
className='!text-sm !font-bold !block !m-0'
```

**5. `Text` component thay cho `<p>` — dùng `color` prop + `block!`:**
```tsx
// ✅ Đúng
<Text color={dark ? 'white' : '#111827'} className='font-semibold! text-sm! block!'>
  {member.name}
</Text>

// ❌ Sai
<p className={`font-semibold text-sm ${dark ? 'text-white' : 'text-gray-900'}`}>
  {member.name}
</p>
```
`Text` render là `<span>` — luôn thêm `block!` khi cần display block.

**6. Array data — luôn khai báo trên `return`, KHÔNG bao giờ inline trong JSX:**
```tsx
// ✅ Đúng — khai báo trên return, dùng useMemo nếu phụ thuộc vào t/state/props
const sectionGo = useMemo(
  () => [
    { label: t('botTitle'), id: 'boa-bot' },
    { label: t('abTitle'),  id: 'boa-ab'  },
  ],
  [t],
);

// ❌ Sai — inline array trong JSX
{[
  { label: t('botTitle'), id: 'boa-bot' },
].map(...)}
```
Nếu array là constant thực sự (không phụ thuộc gì), khai báo ngoài component. Nếu phụ thuộc `t`, `isDark`, hay bất kỳ state/prop nào → dùng `useMemo`.

**7. Page wrapper — dùng `IesClSection layout='simple'` thay `PageContainer`:**
```tsx
<IesClSection id='boa' layout='simple' divider={false}>
  {/* nội dung page */}
</IesClSection>
```

---

## Environment

```
VITE_AXIOS_BASE         # API base URL
VITE_STAD_ENDPOINT      # Formspree — short-term training
VITE_IVAD_ENDPOINT      # Formspree — intermediate vocational
VITE_PSAD_ENDPOINT      # Formspree — partnership
VITE_ADVISE_ENDPOINT    # Formspree — advisory
```

Dev proxy in `vite.config.ts`:
- `/api` → `https://develop-ies-client-api.net`
- `/hubs` → WebSocket (SignalR)

---

## Common Commands

```bash
npm run dev       # Dev server on :3089
npm run build     # Production build
npm run lint      # ESLint check
npm run preview   # Preview production build
```

---

## Key Files Quick Reference

| Purpose | File |
|---|---|
| App entry | [src/main.tsx](src/main.tsx) |
| Root component | [src/App.tsx](src/App.tsx) |
| Routes | [src/routes/router.tsx](src/routes/router.tsx) |
| Axios instance | [src/lib/api-client.ts](src/lib/api-client.ts) |
| React Query setup | [src/lib/react-query.ts](src/lib/react-query.ts) |
| User/theme store | [src/store/useUserStore.ts](src/store/useUserStore.ts) |
| Notify store | [src/store/useNotifyStore.ts](src/store/useNotifyStore.ts) |
| Global enums | [src/utils/enum.ts](src/utils/enum.ts) |
| Translation (vi) | [src/i18n/vi_VN/](src/i18n/vi_VN/) |
| Translation (en) | [src/i18n/en_US/](src/i18n/en_US/) |
