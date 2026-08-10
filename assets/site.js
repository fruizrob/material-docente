(() => {
  "use strict";

  const body = document.body;
  const siteRoot = new URL(body.dataset.siteRoot || "./", document.baseURI);
  const courseFilter = body.dataset.course || null;
  const termFilter = body.dataset.term || null;
  const lists = [...document.querySelectorAll("[data-material-list]")];

  const normalizeTopic = (topic) => topic.replaceAll("-", " ");

  const isSafePath = (path) =>
    typeof path === "string" &&
    !path.startsWith("/") &&
    !path.includes("..") &&
    !path.includes(":");

  const makeMaterialCard = (material) => {
    const article = document.createElement("article");
    article.className = "material-card";

    const meta = document.createElement("p");
    meta.className = "material-meta";
    const variant = material.variant === "pauta" ? " · PAUTA" : "";
    meta.textContent = `${material.course} · ${material.term} · ${material.format.toUpperCase()}${variant}`;

    const title = document.createElement("h3");
    const link = document.createElement("a");
    link.href = new URL(material.path, siteRoot).href;
    link.textContent = material.title;
    link.setAttribute("download", "");
    title.append(link);

    article.append(meta, title);

    if (Array.isArray(material.topics) && material.topics.length > 0) {
      const topics = document.createElement("p");
      topics.className = "material-topics";
      topics.textContent = material.topics.map(normalizeTopic).join(" · ");
      article.append(topics);
    }

    return article;
  };

  const showEmpty = (container) => {
    const message = document.createElement("p");
    message.className = "empty-state";
    message.textContent = container.dataset.emptyMessage || "Aún no hay material publicado.";
    container.replaceChildren(message);
  };

  const render = (materials) => {
    const visible = materials.filter(
      (material) =>
        material.publication_status === "published" &&
        isSafePath(material.path) &&
        (!courseFilter || material.course_slug === courseFilter) &&
        (!termFilter || material.term === termFilter),
    );

    lists.forEach((container) => {
      const category = container.dataset.category;
      const matching = category
        ? visible.filter((material) => material.category === category)
        : visible;

      if (matching.length === 0) {
        showEmpty(container);
        return;
      }

      container.replaceChildren(...matching.map(makeMaterialCard));
    });

    document.querySelectorAll("[data-material-count]").forEach((counter) => {
      counter.textContent = String(visible.length);
    });
  };

  const showLoadError = () => {
    lists.forEach((container) => {
      const message = document.createElement("p");
      message.className = "empty-state empty-state--error";
      message.textContent = "No fue posible cargar el catálogo.";
      container.replaceChildren(message);
    });
  };

  fetch(new URL("data/materials.json", siteRoot))
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((catalog) => render(Array.isArray(catalog.materials) ? catalog.materials : []))
    .catch(showLoadError);

  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
