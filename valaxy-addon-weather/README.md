# valaxy-addon-weather

- [X] 春节灯笼，每年 1~2 月开启
- [X] 【已重制】一年四季特效，春花夏雨秋叶冬雪，按四个节气（春分等）判断北方体感季节

由于咱懒，暂不支持传入参数选择性启用和自定义配置

## Usage

```bash
#还没发版
#pnpm i valaxy-addon-weather
```

### 加载插件

```ts
import { defineValaxyConfig } from 'valaxy'
import { addonWeather} from 'valaxy-addon-weather'

export default defineValaxyConfig({
  addons: [
    addonWeather(),
  ],
})
```
