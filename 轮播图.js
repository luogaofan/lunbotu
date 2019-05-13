const e = sel => document.querySelector(sel);

const es = sel => document.querySelectorAll(sel);

const bindAll = (elements, eventName, callback) => {
  for (let i = 0; i < elements.length; i++) {
    var element = elements[i];
    bindEvent(element, eventName, callback);
  }
};

const bindEvent = (element, eventName, callback) => {
  element.addEventListener(eventName, callback);
};
//点击button轮播图切换
const bindEventSlide = () => {
  const button = es(".img-slide-button");
  bindAll(button, "click", event => {
    let self = event.target;
    let slide = e(".img-slide");
    let next = parseInt(self.dataset.next);
    let nb = parseInt(slide.dataset.active);
    let index = (7 + next + nb) % 7;
    showImg(index);
    showDot(index);
    slide.dataset.active = index;
  });
};
//点击小圆点轮播图切换
const bindEventDot = () => {
  const dot = es(".img-slide-dot");
  bindAll(dot, "click", event => {
    let self = event.target;
    let index = self.id.slice(-1);
    showDot(index);
    showImg(index);
  });
};
const 定时播放 = () => {
  setInterval(() => {
    let slide = e(".img-slide");
    let nb = parseInt(slide.dataset.active);
    let index = (7 + 1 + nb) % 7;
    showDot(index);
    showImg(index);
    slide.dataset.active = index;
  }, 3000);
};
//图片切换
const showImg = index => {
  let imgId = `#img-${index}`;
  let active = e(".active");
  active.classList.remove("active");
  let img = e(imgId);
  img.classList.add("active");
};
//小圆点切换
const showDot = index => {
  let dotId = `#dot-${index}`;
  let show = e(".show");
  show.classList.remove("show");
  let dot = e(dotId);
  dot.classList.add("show");
};

const __main = () => {
  bindEventSlide();
  bindEventDot();
  定时播放();
};

__main();
