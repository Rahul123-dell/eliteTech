function increaseProgress() {
  const progressBar = document.getElementById("progress");
  let current = parseInt(progressBar.value);
  if (current < 100) {
    current += 20;
    progressBar.value = current;
    document.getElementById("progress-percent").textContent = current + "%";
  }
}
