document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    {
      id: "section1",
      title: "HTML Basics and Document Structure",
      url: "section1.html",
    },
    {
      id: "section2",
      title: "Semantic HTML and Advanced Layout Techniques",
      url: "section2.html",
    },
    {
      id: "section3",
      title: "Text Formatting, Lists, and Tables",
      url: "section3.html",
    },
    {
      id: "section4",
      title: "HTML Forms and User Input",
      url: "section4.html",
    },
    { id: "section5", title: "Embedding Multimedia", url: "section5.html" },
  ];

  const currentSectionId = document.body.id;
  const currentIndex = sections.findIndex(
    (section) => section.id === currentSectionId
  );

  if (currentIndex === -1) {
    console.error("Current section not found in the sections list.");
    return;
  }

  const paginationContainer = document.createElement("nav");
  paginationContainer.classList.add("pagination");

  if (currentIndex > 0) {
    const prevSection = sections[currentIndex - 1];
    const prevLink = document.createElement("a");
    prevLink.href = prevSection.url;
    prevLink.textContent = `Previous: ${prevSection.title}`;
    paginationContainer.appendChild(prevLink);
  }

  if (currentIndex < sections.length - 1) {
    const nextSection = sections[currentIndex + 1];
    const nextLink = document.createElement("a");
    nextLink.href = nextSection.url;
    nextLink.textContent = `Next: ${nextSection.title}`;
    paginationContainer.appendChild(nextLink);
  }

  document.body.appendChild(paginationContainer);
});
