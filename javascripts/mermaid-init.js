document$.subscribe(() => {
  if (typeof mermaid === "undefined") return;
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "neutral"
  });
  mermaid.run({ querySelector: ".mermaid" });
});
