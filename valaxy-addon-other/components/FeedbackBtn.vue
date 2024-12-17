<template>
  <button title="留言反馈" @click="show = !show" v-show="defaultBtn">留言反馈</button>
  <Transition name="modal">
  <div class="feedback-container markdown-body" v-if="show">
    <div class="feedback-form">
      <p style="font-size: 1.5em;font-weight: bold;">留言反馈</p>
      <input v-model="nickname" placeholder="请输入昵称" maxlength="16">
      <textarea v-model="message" placeholder="请输入留言内容" @input="checkMessageLength"></textarea>
      <div style="font-size: 12px;margin-top: -12px;text-align: right;color: red;" v-show="remainingCharacters <= 0">
        字数过多！
      </div>
      <p>请输入您想说的话。注意，请勿输入任何联系方式，我们不会添加或主动联系您。如需回复，请通过其他渠道留言。</p>
      <ul>
        <li>邮箱：qzqz7@qq.com</li>
        <li>B 站：轻稚天雪</li>
      </ul>
      <div v-show="false">验证码：</div>
      <br>
      <button @click="throttledSubmit" ref="btn">{{ result }}</button>
      <button @click="show = !show">返回</button>
    </div>
  </div>
</Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  selector: {
    required: false,
    type: String
  }
})

const router = useRouter()
router.afterEach(() => {
  setTimeout(() => {
    document.querySelector(props.selector).addEventListener('click', () => {
      show.value = !show.value
    })
  }, 1000)
})

onMounted(() => {
  if (props.selector) {
    setTimeout(() => {
      document.querySelector(props.selector).addEventListener('click', () => {
        show.value = !show.value
      })
    }, 1000)
  } else {
    defaultBtn.value = true
  }
})

onUnmounted(() => {
  //removeEventListener('click',)
})

let defaultBtn = ref(false)
let show = ref(false)
let nickname = ref('')
let message = ref('')
let btn = ref()
let maxMessageLength = 300; // 设置留言内容的最大长度
let remainingCharacters = ref(maxMessageLength);
let result = ref('提交')
let canSubmit = true;

const throttledSubmit = () => {
  if (!canSubmit) return;
  canSubmit = false;
  btn.value.style = 'cursor:not-allowed;'
  setTimeout(() => {
    canSubmit = true;
    btn.value.style = 'cursor:pointer;'
  }, 5100)
  submitMessage();
};

const checkMessageLength = () => {
  remainingCharacters.value = maxMessageLength - message.value.length;
  if (remainingCharacters.value < 0) {
    message.value = message.value.slice(0, maxMessageLength);
    remainingCharacters.value = 0;
  }
};

const submitMessage = () => {
  if (!nickname.value || !message.value || (nickname.value + message.value).match(/\|/)) {
    alert('昵称和留言内容不能为空，且不能含‘|’')
    return;
  }

  result.value = '正在提交...'
  console.log('昵称:', nickname.value)
  console.log('留言内容:', message.value)
  const feedbackData = {
    nickname: nickname.value,
    message: message.value,
    url: window.location.href
  }

  fetch('https://api.ra2map.com/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      result.value = data.message
      canSubmit = false
      setTimeout(() => {
        result.value = '提交'
        canSubmit = true
      }, 5000)

    })
    .catch(error => {
      console.error(error)
      result.value = '提交失败！可能您提交太频繁了，或服务器错误'
      canSubmit = false
      setTimeout(() => {
        result.value = '提交'
        canSubmit = true
      }, 5000)
    })

}

</script>


<style scoped>
.feedback-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 15;
  pointer-events: none;
  text-align: initial;
  transition: all 0.3s ease;
}

.feedback-form {
  width: 340px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: var(--va-c-bg-soft);
  box-sizing: border-box;
  pointer-events: auto;
}

h2 {
  text-align: center;
}

input,
textarea {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: none;
  font-size: 14px;
  font-family: sans-serif;
}

textarea {
  height: 7em;
}

.feedback-container button {
  width: 100%;
  padding: 8px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 4px 0;
}

.feedback-container button:hover {
  background: #0056b3;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
