# 멋쟁이사자처럼 6기 ReadyAct 팀의 React 팀프로젝트

## 설치

```bash
pnpm add -D tailwindcss postcss autoprefixer postcss-import

pnpm tailwindcss init -p
```

**tailwind.css**

```jsx
/* tailwind.css */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";


```

**vite.config.js**

```js
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {env} from 'node:process';
import {resolve} from 'node:path';

const idDev = env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: idDev
        ? '[name]_[local]__[hash:base64:5]'
        : '[hash:base64:4]',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
```

**tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**postcss.config.js**

```js
export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**package.json**

`"pocketbase": "pocketbase/pocketbase serve"` 추가

```jsx
   "scripts": {
    "dev": "vite --host --port=3000",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "pocketbase": "pocketbase/pocketbase serve"
  },
```

## 설치

```bash
pnpm add @tanstack/react-query
pnpm add @tanstack/react-query-devtools
pnpm add framer-motion
pnpm add immer
pnpm add pocketbase
pnpm add prop-types
pnpm add react-helmet-async
pnpm add react-hot-toast
pnpm add zustand
```

이 모든것을 한번에 하고싶다면 ? pnpm add

```bash
pnpm add framer-motion immer pocketbase prop-types react-helmet-async react-hot-toast zustand
```

**package.json**

```jsx
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "autoprefixer": "^10.4.15",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "postcss": "^8.4.29",
    "postcss-import": "^15.1.0",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.5",
  }
```

`pnpm i`

**jsconfig.json**

```jsx
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**.gitignore**
`pocketbase` 최상단에 추가

```jsx
pocketbase

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

**.eslintrc.cjs**

```jsx
module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', 'pocketbase', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
  },
}
```

## pocketbase 설치

https://pockethost.io

가입후

https://pocketbase.io/

포켓 베이스 설치하여 파일을 최상으로 옮기기
파일 이름은 pocketbase 로 변경하기
