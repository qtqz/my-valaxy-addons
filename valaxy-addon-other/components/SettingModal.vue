<template>
  <div @click="show = !show">
    <slot></slot>
  </div>
  <Teleport to="body">
    <Transition name="setting">
      <div class="settings-panel-wrap" v-show="show">
        <div class="settings-panel">
          <h2>网站设置（开发中）</h2>

          <!-- 字体大小设置 -->
          <div class="settings-section">
            <h3>字体设置</h3>
            <div class="toggle-group">
              <div class="toggle-item">
                <span>字体大小</span>
                <div class="option-group">
                  <button v-for="size in fontSizes" :key="size.value"
                    :class="['option-button', { active: settings.fontSize === size.value }]"
                    @click="settings.fontSize = size.value">
                    {{ size.label }}
                  </button>
                  <button class="option-button" onclick="alert('按住 Ctrl 滚动鼠标滚轮来调整到你满意为止 ^_^');"> 更多 </button>
                </div>
              </div>
              <div class="toggle-item">
                <span>字体选择（不能用）</span>
                <div class="option-group">
                  <button v-for="font in fonts" :key="font.value"
                    :class="['option-button', { active: settings.fontFamily === font.value }]"
                    @click="settings.fontFamily = font.value">
                    {{ font.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 主题设置 -->
          <div class="settings-section">
            <h3>主题设置</h3>
            <div class="toggle-group">
              <div class="toggle-item">
                <span>切换主题（不能用）</span>
                <div class="option-group">
                  <button v-for="theme in themes" :key="theme.value"
                    :class="['option-button', { active: settings.theme === theme.value }]"
                    @click="settings.theme = theme.value">
                    {{ theme.label }}
                  </button>
                </div>
              </div>
              <div class="toggle-item">
                <span>切换明暗</span>
                <div class="option-group">
                  <button class="option-button"
                    onclick="document.querySelector('aside > div.bottom-button > div > button:nth-child(1)').click()">
                    请点击左下角按钮来切换
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 功能开关 -->
          <div class="settings-section">
            <h3>特效设置</h3>
            <div class="toggle-group">
              <div class="toggle-item">
                <span>灯笼挂件</span>
                <div class="option-group">
                  <button v-for="option in lantern" :key="option.value"
                    :class="['option-button', { active: settings.lantern === option.value }]"
                    @click="settings.lantern = option.value">
                    {{ option.label }}
                  </button>
                </div>
              </div>
              <div class="toggle-item">
                <span>看板小人（不能用）</span>
                <button class="option-button" onclick="document.querySelector('div').click()">
                  请点击右下角按钮来切换
                </button>
              </div>
              <div class="toggle-item">
                <span>天气特效</span>
                <button class="option-button" onclick="document.querySelector('.nf-button').click()">
                  请到新窗口中设置
                </button>
              </div>
            </div>
          </div>

          <!-- 操作按钮 -->
          <div class="settings-actions">
            <button class="action-button reset" @click="resetToDefault">
              恢复默认
            </button>
            <button class="action-button cancel" @click="show = false">
              关闭面板
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>

const STORAGE_KEY = 'website_settings';

// 默认设置
const DEFAULT_SETTINGS = {
  fontSize: 'medium',
  fontFamily: 'default',
  theme: 'default',
  lantern: 'auto',
  //enableLive2D: false,
};

export default {
  name: 'SettingsPanel',

  data() {
    return {
      show: false,
      // 设置选项
      settings: { ...DEFAULT_SETTINGS },

      // 字体大小选项
      fontSizes: [
        { label: '小', value: 'small' },
        { label: '中', value: 'medium' },
        { label: '大', value: 'large' },
      ],

      // 字体选项
      fonts: [
        { label: '默认', value: 'default' },
        { label: '霞鹜文楷', value: 'xw' },
        { label: '筑紫A丸2', value: 'simsun' },
      ],

      // 主题选项
      themes: [
        { label: '默认', value: 'default' },
        { label: '透明', value: 'opacity' },
        { label: '文雅', value: 'elegant' },
      ],

      // 灯笼选项
      lantern: [
        { label: '仅过年时', value: 'auto' },
        { label: '常开', value: 'open' },
        { label: '常关', value: 'close' },
      ],
    };
  },

  methods: {
    // 从本地存储加载设置
    loadSettings() {
      try {
        const savedSettings = localStorage.getItem(STORAGE_KEY);
        if (savedSettings) {
          this.settings = {
            ...DEFAULT_SETTINGS,
            ...JSON.parse(savedSettings)
          };
        }
      } catch (error) {
        console.error('加载设置失败:', error);
      }
    },

    // 保存设置到本地存储
    saveSettings() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
      } catch (error) {
        console.error('保存设置失败:', error);
      }
    },

    // 应用设置
    applySettings() {
      // 应用字体大小
      document.documentElement.style.fontSize = {
        small: '14px',
        medium: '16px',
        large: '18px'
      }[this.settings.fontSize];

      // 应用字体
      document.documentElement.style.fontFamily = this.settings.fontFamily === 'default'
        ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        : this.settings.fontFamily;

      // 应用灯笼
      if (this.settings.lantern == 'open') {
        document.documentElement.classList.remove('disabled-lantern')
        document.documentElement.classList.add('enabled-lantern')
      } else if (this.settings.lantern == 'close') {
        document.documentElement.classList.remove('enabled-lantern')
        document.documentElement.classList.add('disabled-lantern')
      } else {
        document.documentElement.classList.remove('enabled-lantern')
        document.documentElement.classList.remove('disabled-lantern')
      }


      // 保存设置
      this.saveSettings();

      // 提示用户
      this.showNotification('设置已更新');
    },

    // 重置为默认设置
    resetToDefault() {
      this.settings = { ...DEFAULT_SETTINGS };
      this.applySettings();
      localStorage.removeItem(STORAGE_KEY)
    },

    // 显示通知
    showNotification(message) {
      if (this.settings.enableNotifications) {
        // 这里可以集成你的通知系统
        alert(message);
      }
    },
  },

  // 监听设置变化
  watch: {
    settings: {
      deep: true,
      handler(newSettings) {
        // 可以在这里添加设置预览功能
        console.log('设置已更改:', newSettings);
        this.applySettings()
      },
    },
  },

  // 组件挂载时加载设置
  mounted() {
    this.loadSettings();
    this.applySettings();
  },
};
</script>

<style lang="scss">
.setting-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.setting-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

// 变量定义
:root {
  --primary-color: #2196f3;
  --error-color: #f44336;
  --text-color: #333;
  --border-color: #e0e0e0;
  --bg-color: #ffffff;
  --hover-bg: #f5f5f5;
  --active-bg: #e3f2fd;
  --border-radius: 10px;
  --spacing: 16px;
}

.settings-panel-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  z-index: 12;
  pointer-events: none;
}

// 主面板样式
.settings-panel {
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: var(--bg-color);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  pointer-events: initial;

  h2 {
    margin: 0 0 24px;
    color: var(--text-color);
    font-size: 24px;
    font-weight: 500;
  }
}

// 设置区块样式
.settings-section {
  margin-bottom: 24px;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);

  h3 {
    margin: 0 0 16px;
    font-size: 18px;
    color: var(--text-color);
    font-weight: 500;
    display: none;
  }
}

// 选项组样式
.option-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

// 选项按钮样式
.option-button {
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;

  &:hover {
    background: var(--hover-bg);
  }

  &.active {
    background: var(--active-bg);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
}

// 下拉选择框样式
.select-input {
  width: 100%;
  max-width: 300px;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 14px;
  background-color: var(--bg-color);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
}

// 开关组样式
.toggle-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

// 开关项样式
.toggle-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* cursor: pointer; */

  input[type="checkbox"] {
    display: none;
  }

  .toggle-switch {
    position: relative;
    width: 48px;
    height: 24px;
    background: var(--border-color);
    border-radius: 12px;
    transition: background 0.3s;

    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: white;
      top: 2px;
      left: 2px;
      transition: transform 0.3s;
    }
  }

  input[type="checkbox"]:checked+.toggle-switch {
    background: var(--primary-color);

    &:before {
      transform: translateX(24px);
    }
  }
}

// 操作按钮样式
.settings-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
  justify-content: center;
}

.action-button {
  padding: 10px 20px;
  border: none;
  border-radius: var(--border-radius);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;

  &.reset {
    background: var(--primary-color);
    color: white;
    opacity: 0.8;
  }

  &.cancel {
    background: var(--error-color);
    color: white;
    opacity: 0.8;
  }

  &:hover {
    opacity: 0.6;
  }
}

// 响应式适配
@media (max-width: 768px) {
  .settings-panel {
    margin: 10px;
    padding: 15px;
    width: auto;
  }

  .settings-section {
    padding: 12px;
  }

  .option-group {
    gap: 8px;
  }

  .option-button {
    padding: 6px 12px;
    font-size: 13px;
  }

  .action-button {
    padding: 8px 16px;
  }
}

// 深色主题支持

html.dark {
  --text-color: #e0e0e0;
  --border-color: #424242;
  --bg-color: #1e1e1e;
  --hover-bg: #2d2d2d;
  --active-bg: #0d47a1;
}
</style>