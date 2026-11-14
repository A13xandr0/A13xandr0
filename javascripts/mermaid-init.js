document$.subscribe(async () => {
  if (typeof mermaid === "undefined") return;

  try {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "neutral"
    });

    await mermaid.run({
      querySelector: ".mermaid"
    });
  } catch (error) {
    console.error("Mermaid rendering error:", error);
  }
});
