function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(Boolean);
  return filtered;
}

bouncer([7, "ate", "", false, 9]);