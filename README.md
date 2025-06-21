# smartops-web

SmartOps Web is a Vue 3 management console template featuring a login page and a complete asset management module.

## Features
- Switchable Local and LDAP authentication
- CRUD pages for Customers, Sites, Remote Access and Host Assets
- Dynamic routing via Vue Router
- State management with Pinia and data fetching through @tanstack/vue-query
- Element Plus UI components with optional Tailwind CSS
- Automatic redirect to login when unauthenticated and a sidebar menu after login

## Getting Started
1. Install Node.js (v18 recommended).
2. Run `npm install` to install dependencies.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:5173` in your browser.

## Building for Production
```bash
npm run build
```

---

## \u4E2D\u6587\u8BF4\u660E (Chinese)

SmartOps Web \u662F\u4E00\u4E2A Vue 3 \u9879\u76EE\uFF0C\u5305\u542B\u767B\u5F55\u9875\u9762\u548C\u8D44\u4EA7\u7BA1\u7406\u6A21\u5757\u3002

### \u529F\u80FD
- \u652F\u6301\u672C\u5730\u548C LDAP \u767B\u5F55\u5207\u6362
- \u5BA2\u6237\u3001\u573A\u5730\u3001\u8FDC\u7A0B\u8BBF\u95EE\u548C\u4E3B\u673A\u8D44\u4EA7\u7684 CRUD \u64CD\u4F5C
- Vue Router \u52A8\u6001\u8DEF\u7531
- Pinia \u72B6\u6001\u7BA1\u7406\u548C vue-query \u6570\u636E\u83B7\u53D6
- Element Plus UI \u914D\u5408 Tailwind CSS
- \u672A\u767B\u5F55\u65F6\u81EA\u52A8\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u767B\u5F55\u540E\u5DE6\u4FA7\u83DC\u5355\u663E\u793A\u6A21\u5757

### \u5F00\u53D1
1. \u5B89\u88C5 Node.js (\u5EFA\u8BAE v18)
2. \u6267\u884C `npm install` \u5B89\u88C5\u4F9D\u8D56
3. \u542F\u52A8\u5F00\u53D1\u670D\u52A1:
   ```bash
   npm run dev
   ```
4. \u5728\u6D4F\u89C8\u5668\u8BBF\u95EE `http://localhost:5173`

### \u6784\u5EFA
```bash
npm run build
```
