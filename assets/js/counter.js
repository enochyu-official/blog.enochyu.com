document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".view-count").forEach(async (span) => {
    const blogName = span.getAttribute("data-blog");
    try {
      const response = await fetch(`https://blog-view-count-db.enochyu.workers.dev/?name=${blogName}`);
      const text = await response.text();
      
      span.textContent = text.match(/\d+$/)?.[0] || "0";
    } catch {
      span.textContent = "—";
    }
  });
});

