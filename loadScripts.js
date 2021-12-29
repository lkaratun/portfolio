function appendScript(script) {
  const element = document.createElement("script");
  element.src = this.href;
  document.head.appendChild(element);
  this.onload = null;
  this.rel = "script";
}
