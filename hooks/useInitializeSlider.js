import { useEffect } from "react";

const useInitializeSlider = () => {
  useEffect(() => {
    const initializeSlider = () => {
      let items = document.querySelectorAll(".slider .list .item");
      let next = document.getElementById("next");
      let prev = document.getElementById("prev");
      let thumbnails = document.querySelectorAll(".thumbnail .item");

      if (items.length === 0 || !next || !prev) return;

      let countItem = items.length;
      let itemActive = 0;

      const showSlider = () => {
        let itemActiveOld = document.querySelector(
          ".slider .list .item.active"
        );
        let thumbnailActiveOld = document.querySelector(
          ".thumbnail .item.active"
        );

        if (itemActiveOld && thumbnailActiveOld) {
          itemActiveOld.classList.remove("active");
          thumbnailActiveOld.classList.remove("active");

          items[itemActive].classList.add("active");
          thumbnails[itemActive].classList.add("active");
        }

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
          if (next) next.click();
        }, 5000);
      };

      next.onclick = () => {
        itemActive = (itemActive + 1) % countItem;
        showSlider();
      };

      prev.onclick = () => {
        itemActive = (itemActive - 1 + countItem) % countItem;
        showSlider();
      };

      let refreshInterval = setInterval(() => {
        next.click();
      }, 10000);

      thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
          itemActive = index;
          showSlider();
        });
      });

      showSlider(); // Initial call to set the first item as active
    };

    initializeSlider();
  }, []);
};

export default useInitializeSlider;
