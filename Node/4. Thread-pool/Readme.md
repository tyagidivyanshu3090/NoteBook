# 🧵 Checking That libuv Has 4 Threads by Default

## Purpose

This experiment demonstrates how Node.js (via libuv) handles asynchronous tasks using a thread pool, which is 4 threads by default.

## ⚙️ Concept

- Both fs.readFile and crypto.pbkdf2 are asynchronous operations that utilize libuv’s thread pool.
- The thread pool can process only 4 tasks concurrently.
- Additional tasks are queued and executed when a thread becomes available.

## 📈 Result:

- So, first 4 task will happen and then the 5th and 6th task will be queued.
- the order of execution can be different for different system
- 🌀 Execution order may vary depending on system performance and scheduling.

## 🔧 Bonus Tip

- To increase the number of threads in the pool:

```bash
UV_THREADPOOL_SIZE=6 node app.js
```

- This allows up to 6 concurrent tasks using the thread pool.
