# valaxy-addon-weather

暂未完成，暂时只有灯笼，将来添加一年四季特效

## Usage

```bash
pnpm i valaxy-addon-weather
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
