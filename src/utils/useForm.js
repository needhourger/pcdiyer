import { reactive } from "vue"

const motherboardForm = {
  cpuType: '',
  socket: '',
  formFactor: '',
  chipset: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const cpuForm = {
  cpuType: '',
  socket: '',
  generation: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const memoryForm = {
  generation: '',
  speed: '',
  capacity: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const gpuForm = {
  gpuType: '',
  generation: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const storageForm = {
  type: '',
  interface: '',
  protocol: '',
  size: '',
  capacity: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const powerForm = {
  size: '',
  type: '',
  power: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const caseForm = {
  size: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const cpuCoolerForm = {
  type: '',
  size: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const fanForm = {
  size: '',
  light: '',
  control: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
  option: '',
}
const otherForm = {
  name: '',
  link: '',
  count: 1,
  price: 0,
  remark: '',
  option: '',
}
const diyForm = reactive({
  motherboard: [motherboardForm],
  cpus: [cpuForm],
  memorys:[memoryForm],
  gpus: [gpuForm],
  storages:[storageForm],
  cpuCoolers:[cpuCoolerForm],
  powers:[powerForm],
  fans:[fanForm],
  case: [caseForm],
  others: [],
  options: [],
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
  fanForm,
  otherForm,
}