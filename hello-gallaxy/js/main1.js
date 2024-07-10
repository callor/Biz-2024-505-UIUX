document.addEventListener("DOMContentLoaded", () => {
  // 화면의 section.main 에 포함된 이미지 전체를 배열로 생성하기
  const images = document.querySelectorAll("section.main img");
  /*
    
    interctionObserver
    최신 JS 에 포함된 도구
    화면이 scroll 될때 화면의 변화를 감지하여 어떤 행위를 실행하는 도구
    interction : 교차점
    Observer : 감시자
  */
  const observerHandler = (items) => {
    // items 배열전체를 for 반복문으로 처리하기
    // items 각 요소를 item 에 담아 {} 블록으로 전달하기
    items.forEach((item) => {
      if (item.intersectionRatio > 0 && item.isIntersecting) {
        item.target.classList.add("show");
      } else {
        item.target.classList.remove("show");
      }
    });
  };
  const observer = new IntersectionObserver(observerHandler);
  images.forEach((img) => {
    observer.observe(img);
  });
});
