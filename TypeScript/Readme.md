# 📌 Takeaways

## 🚀 How TypeScript Code Executes

- To execute TypeScript code, **TypeScript is first compiled (or transpiled) into JavaScript** using the TypeScript compiler (`tsc`).
- The generated JavaScript code is then executed by the **browser or Node.js**, since they do not understand TypeScript directly.

## 🛠 Installing the TypeScript Compiler

To install TypeScript globally on your system, run:

```sh
npm install -g typescript
```

## 🔥 Setting up TypeScript Configuration

To create a `tsconfig.json` file, run:

```sh
tsc --init
```

## 🙋🏻 `tsc --watch` Command

### What is `tsc --watch`?

The `tsc --watch` command is used to **compile TypeScript code into JavaScript** and **continuously watch for changes**. Whenever a TypeScript file is modified, it automatically recompiles only the updated files.

### Usage:

```sh
tsc --watch
```
