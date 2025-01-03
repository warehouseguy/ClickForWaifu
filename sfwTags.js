const waifuImage = document.querySelector("#waifus");
const imageLink = document.querySelector("#imageLink");

const maid = document.querySelector("#maid");
const waifu = document.querySelector("#waifu");
const raiden = document.querySelector("#raiden-shogun");
const oppai = document.querySelector("#oppai");
const selfies = document.querySelector("#selfies");
const uniform = document.querySelector("#uniform");
const marinKitagawa = document.querySelector("#marin");
const moriCalliope = document.querySelector("#mori");
const kamisatoAyaka = document.querySelector("#kamisato");


marinKitagawa.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=marin-kitagawa")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

moriCalliope.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=mori-calliope")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

kamisatoAyaka.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=kamisato-ayaka")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

maid.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=maid")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

waifu.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=waifu")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

raiden.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=raiden-shogun")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

oppai.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=oppai")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

selfies.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=selfies")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});

uniform.addEventListener("click", () => {
  fetch("https://api.waifu.im/search?included_tags=uniform")
    .then((res) => res.json())
    .then((res) => {
      waifuImage.src = res.images[0].url;
      imageLink.href = res.images[0].source;
      imageLink.textContent = res.images[0].source;
    })
    .catch((err) => console.log(err));
});
