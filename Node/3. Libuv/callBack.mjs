process.nextTick(cb);
Promise.resolve(cb);
setTimeout(cb, 0);

setImmediate(cb);

fs.readFile("./file.txt", cb);
https.get("URL", cb);

/*
--- Sync Code ---
-> nextTick
-> Microtasks (Promises)
-> Timers Phase (setTimeout)
-> Check Phase (setImmediate)
-> I/O Poll Phase (e.g. fs.readFile)
-> Network Phase (https.get)


*/
