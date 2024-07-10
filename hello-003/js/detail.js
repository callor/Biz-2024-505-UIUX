document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("section.main");

  const importHTML = (tag, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./dog_detail.html", true);
    xhr.onreadystatechange = () => {
      container.innerHTML = xhr.responseText;
    };
    xhr.send();
  };
  const onImageClickHandler = (e) => {
    const target = e.target;
    if (target.tagName !== "IMG") return false;
    const altText = e.target.getAttribute("alt");
    importHTML();
  };
  container.addEventListener("click", onImageClickHandler);
});
