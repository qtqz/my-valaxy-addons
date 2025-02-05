<script>
// lang="ts" setup
</script>

<template>
  <div class="dl" id="dl">
    <!-- 给你的网站添加灯笼特效https://blog.tomys.top/2021-02/2021newyear/ -->
    <div class="deng-box1">
      <div class="deng">
        <div class="xian"></div>
        <div class="deng-a">
          <div class="deng-b">
            <img class="deng-t"
              src="data:image/png;base64,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">
          </div>
        </div>
        <div class="shui-a">
          <div class="shui-c"></div>
          <div class="shui-b"></div>
        </div>
      </div>
    </div>
    <div class="deng-box2">
      <div class="deng">
        <div class="xian"></div>
        <div class="deng-a">
          <div class="deng-b">
            <img class="deng-t"
              src="data:image/png;base64,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">
          </div>
        </div>
        <div class="shui-a">
          <div class="shui-c"></div>
          <div class="shui-b"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#dl {
  /* pointer-events: none; */
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
}

.deng-box1 {
  position: absolute;
  top: -30px;
  right: 14vw;
}

.deng-box2 {
  position: absolute;
  top: -40px;
  right: 10vw;
}

.deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  transform-origin: 50% -100px;
  box-shadow: -5px 5px 30px 4px rgba(252, 144, 61, 1);
}

.deng-box2 .deng {
  animation: swing 3s infinite ease-in-out;
}

.deng-box1 .deng {
  animation: swing 5s infinite ease-in-out;
}

.deng-a {
  width: 100px;
  height: 90px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.1);
  margin: 12px 8px 8px 8px;
  border-radius: 50% 50%;
  border: 2px solid #dc8f03;
}

.deng-b {
  width: 45px;
  height: 90px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.1);
  margin: -4px 8px 8px 26px;
  border-radius: 50% 50%;
  border: 2px solid #dc8f03;
}

.xian {
  position: absolute;
  top: -20px;
  left: 60px;
  width: 2px;
  height: 20px;
  background: #dc8f03;
}

.shui-a {
  position: relative;
  width: 5px;
  height: 20px;
  margin: -5px 0 0 59px;
  animation: swing 4s infinite ease-in-out;
  transform-origin: 50% -45px;
  background: #ffa500;
  border-radius: 0 0 5px 5px;
}

.shui-b {
  position: absolute;
  top: 14px;
  left: -2px;
  width: 10px;
  height: 10px;
  background: #dc8f03;
  border-radius: 50%;
}

.shui-c {
  position: absolute;
  top: 18px;
  left: -2px;
  width: 10px;
  height: 35px;
  background: #ffa500;
  border-radius: 0 0 0 5px;
}

.deng:before {
  position: absolute;
  top: -7px;
  left: 29px;
  height: 12px;
  width: 60px;
  content: " ";
  display: block;
  z-index: 999;
  border-radius: 5px 5px 0 0;
  border: solid 1px #dc8f03;
  background: #ffa500;
  background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
}

.deng:after {
  position: absolute;
  bottom: -7px;
  left: 10px;
  height: 12px;
  width: 60px;
  content: " ";
  display: block;
  margin-left: 20px;
  border-radius: 0 0 5px 5px;
  border: solid 1px #dc8f03;
  background: #ffa500;
  background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
}

.deng-t {
  /* font-family: 华文行楷, Arial, Lucida Grande, Tahoma, sans-serif;
  font-size: 3.2rem;
  color: #dc8f03;
  font-weight: bold;
  line-height: 85px;
  text-align: center; */
  pointer-events: none;
  user-select: none;
  max-width: unset;
  width: 55px;
  padding-top: 5px;
  transform: translateX(-5px);
  /* margin: 5px 0 0 -5px; */
}

.night .deng-t,
.night .deng-box2,
.night .deng-box1 {
  background: transparent !important;
}

@media screen and (max-width: 560px) {
  .dl {
    right: -17vw;
    transform: scale(0.70);
  }

  .deng-box1 {
    right: 19vw;
        scale: 0.8;
        margin-top: -8px;
  }
  .deng-box2 {
    right: 3vw;
        scale: 0.8;
        margin-top: -8px;
}
}

@keyframes swing {
  0% {
    transform: rotate(-10deg)
  }

  50% {
    transform: rotate(10deg)
  }

  100% {
    transform: rotate(-10deg)
  }
}
</style>
