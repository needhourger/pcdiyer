const { reactive } = require("vue")

const motherboardForm = reactive({
  cpuType: '',
  socket: '',
  formFactor: '',
  chipset: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
})
const cpuForm = reactive({
  cpuType: '',
  socket: '',
  generation: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
})
const memoryForm = reactive({
  generation: '',
  speed: '',
  capacity: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
})
const gpuForm = reactive({
  gpuType: '',
  generation: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
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
})
const powerForm = reactive({
  size: '',
  type: '',
  power: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
})
const caseForm = reactive({
  size: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
})
const otherForm = reactive({
  name: '',
  model: '',
  link: '',
  price: 0,
  remark: ''
})
const diyForm = reactive({
  motherBoard: motherboardForm,
  cpus: [cpuForm],
  memorys: [memoryForm],
  gpus: [gpuForm],
  storages: [storageForm],
  powers: [powerForm],
  caseForm: caseForm,
  others: [],
})
export {
  motherboardForm,
  cpuForm,
  memoryForm,
  gpuForm,
  storageForm,
  powerForm,
  caseForm,
  diyForm,
  otherForm,
}