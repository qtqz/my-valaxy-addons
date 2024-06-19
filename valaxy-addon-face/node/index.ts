import { defineValaxyAddon } from 'valaxy'
import pkg from '../package.json'
import {faceOptions} from '../types'

export const addonFace = defineValaxyAddon<faceOptions>(options => ({
  name: pkg.name,
  enable: true,
  options,
}))
