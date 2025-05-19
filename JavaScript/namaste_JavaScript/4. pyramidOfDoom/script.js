function onDone() {
  console.log("All done!");
}

// You hand over control to setTimeout:
setTimeout(onDone, 1000);
// You no longer decide *when* onDone() runs—setTimeout does.
