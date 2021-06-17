window.onload = () => {
  const sortButton = document.getElementById("sortButton");
  const shuffleButton = document.getElementById("shuffleButton");
  const containerData = document.getElementById("shuffleSortContainer");
  let childElements = Array.from(containerData.children);

  const sorter = (sortType) => {
    if (sortType === "ascending") {
      return childElements.sort((each, each1) => {
        return Number(each.textContent) - Number(each1.textContent);
      });
    } else {
      return childElements.sort(() => Math.random() - 0.5);
    }
  };
  const sortItems = () => {
    childElements = sorter("ascending");
    if (
      childElements != undefined &&
      childElements != null &&
      childElements.length
    ) {
      for (let i = 0; i < childElements.length; i += 1) {
        containerData.appendChild(childElements[i]);
      }
    }
  };
  const shuffleItems = () => {
    childElements = sorter("random");
    if (
      childElements != undefined &&
      childElements != null &&
      childElements.length
    ) {
      for (let i = 0; i < childElements.length; i += 1) {
        containerData.appendChild(childElements[i]);
      }
    }
  };
  shuffleButton.onclick = shuffleItems;
  sortButton.onclick = sortItems;
};
