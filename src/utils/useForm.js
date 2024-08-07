import { reactive, ref, computed } from "vue";

const motherboardForm = () =>
  createForm({
    cpuType: "",
    socket: "",
    formFactor: "",
    chipset: "",
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const cpuForm = () =>
  createForm({
    cpuType: "",
    socket: "",
    generation: "",
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const memoryForm = () =>
  createForm({
    generation: "",
    speed: 0,
    capacity: 0,
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const gpuForm = () =>
  createForm({
    gpuType: "",
    generation: "",
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const storageForm = () =>
  createForm({
    type: "",
    interface: "",
    protocol: "",
    size: "",
    capacity: 0,
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const powerForm = () =>
  createForm({
    size: "",
    type: "",
    power: 0,
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const caseForm = () =>
  createForm({
    size: "",
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const cpuCoolerForm = () =>
  createForm({
    type: "",
    size: "",
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const fanForm = () =>
  createForm({
    size: "",
    light: "",
    control: "",
    model: "",
    link: "",
    price: 0,
    remark: "",
    count: 1,
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

const otherForm = () =>
  createForm({
    model: "",
    link: "",
    count: 1,
    price: 0,
    remark: "",
    option: { id: "default", name: "default", color: "#E5E7EB" },
  });

function createForm(form) {
  return reactive(form);
}

const currentOptionId = ref("default");

const currentForm = computed(() => {
  const form = {};
  const optionId =
    currentOptionId.value === "all" ? "default" : currentOptionId.value;

  for (const key in diyForm) {
    form[key] = extractSingleForm(diyForm[key], optionId)
  }
  return form;
});

function extractSingleForm(forms, optionId) {
  for (const form in forms) {
    if (form.option && form.option.id === optionId) {
      return form
    }
  }
  return forms[0]
}

const diyForm = reactive({
  motherboard: [motherboardForm()],
  cpus: [cpuForm()],
  memorys: [memoryForm()],
  gpus: [gpuForm()],
  storages: [storageForm()],
  cpuCoolers: [cpuCoolerForm()],
  powers: [powerForm()],
  fans: [fanForm()],
  case: [caseForm()],
  others: [otherForm()],
  options: [{ id: "default", name: "default", color: "#E5E7EB" }],
});

export {
  diyForm,
  currentOptionId,
  currentForm,
  motherboardForm,
  cpuForm,
  memoryForm,
  gpuForm,
  cpuCoolerForm,
  storageForm,
  powerForm,
  caseForm,
  fanForm,
  otherForm,
};
