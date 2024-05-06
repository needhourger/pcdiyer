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
}
const gpuForm = {
  gpuType: '',
  generation: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
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
}
const caseForm = {
  size: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
}
const cpuCoolerForm = {
  type: '',
  size: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
  count: 1,
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
}
const otherForm = {
  name: '',
  link: '',
  count: 1,
  price: 0,
  remark: ''
}
const diyForm = reactive({
  motherboard: motherboardForm,
  cpus: [cpuForm],
  memorys:[memoryForm],
  gpus: [gpuForm],
  storages:[storageForm],
  cpuCoolers:[cpuCoolerForm],
  powers:[powerForm],
  fans:[fanForm],
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
  fanForm,
  otherForm,
}