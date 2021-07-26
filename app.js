function generate() {
  var saints = ["john", "mathew"];
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  var num = nums[Math.floor(Math.random() * nums.length)];

  let saint = saints[Math.floor(Math.random() * saints.length)];

  const url = `https://bible-api.com/${saint} ${num}:${num}`;
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      document.getElementById(
        "output"
      ).innerHTML = `${res["text"]} - ${saint} ${num}:${num}`;
    });
}
