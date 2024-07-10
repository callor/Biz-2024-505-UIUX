document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("section.main");

  const importHTML = (tag, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      tag.innerHTML = xhr.responseText;
    };
    xhr.send();
  };
  const onImageClickHandler = (e) => {
    const target = e.target;
    if (target.tagName !== "IMG") return false;
    const altText = e.target.getAttribute("alt");
    let url = "";
    if (altText === "몽이인증") {
      url = "./dog_detail_1.html";
    } else if (altText === "스피츠종") {
      url = "./dog_detail_2.html";
    } else if (altText === "바라보기") {
      url = "./dog_detail_3.html";
    } else if (altText === "눈치보기") {
      url = "./dog_detail_4.html";
    } else if (altText === "놀아죠!") {
      url = "./dog_detail_5.html";
    } else if (altText === "첫 만남") {
      url = "./dog_detail_6.html";
    }
    importHTML(container, url);
  };
  container.addEventListener("click", onImageClickHandler);
});
