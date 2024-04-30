import { reactive } from "vue"

const motherboardForm = reactive({
  cpuType: '',
  socket: '',
  formFactor: '',
  chipset: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const cpuForm = reactive({
  cpuType: '',
  socket: '',
  generation: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const memoryForm = reactive({
  generation: '',
  speed: '',
  capacity: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const gpuForm = reactive({
  gpuType: '',
  generation: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const storageForm = reactive({
  type: '',
  interface: '',
  protocol: '',
  size: '',
  capacity: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const powerForm = reactive({
  size: '',
  type: '',
  power: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const caseForm = reactive({
  size: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const otherForm = reactive({
  name: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const cpuCoolerForm = reactive({
  type: '',
  size: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const fanForm = reactive({
  size: '',
  light: '',
  control: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  num: 1,
})
const diyForm = reactive({
  motherBoard: motherboardForm,
  cpus: [cpuForm],
  memorys: [memoryForm],
  gpus: [gpuForm],
  storages: [storageForm],
  cpuCoolers: [cpuCoolerForm],
  powers: [powerForm],
  fans: [fanForm],
  case: caseForm,
  others: [],
})

export {
  motherboardForm,
  cpuForm,
  memoryForm,
  gpuForm,
  cpuCoolerForm,
  storageForm,
  powerForm,
  caseForm,
  diyForm,
  otherForm,
}