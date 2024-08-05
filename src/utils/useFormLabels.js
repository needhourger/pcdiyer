import { Money } from "@element-plus/icons-vue";

const motherboard = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-3/4",
    placeholder: "Motherboard Detail Model ",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/4",
    prefixIcon: Money,
  },
  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-full",
    placeholder: "Online Shopping Product url",
  },
  {
    label: "CPU Type",
    prop: "cpuType",
    type: "select",
    class: "w-1/4",
    options: ["AMD", "Intel", "Other"],
    placeholder: "CPU Manufacturer",
  },
  {
    label: "Socket",
    prop: "socket",
    type: "select",
    class: "w-1/4",
    options: [],
    placeholder: "Socket Type",
  },
  {
    label: "Form Factor",
    prop: "formFactor",
    type: "select",
    class: "w-1/4",
    options: ["E-ATX", "ATX", "Micro-ATX(mATX)", " Mini-ITX(ITX)", "Other"],
    placeholder: "MotherBoard Form Factor",
  },
  {
    label: "Chipset",
    prop: "chipset",
    type: "select",
    class: "w-1/4",
    options: [],
    placeholder: "Motherboard Chipset",
  },

  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-full",
    placeholder: "Remark",
  },
];
const cpu = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-2/3",
    placeholder: "CPU Model Number",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/6",
    prefixIcon: Money,
  },
  {
    label: "Count",
    prop: "count",
    type: "count",
    class: "w-1/6",
  },
  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-full",
    placeholder: "Online Shopping Product URL",
  },
  {
    label: "CPU Type",
    prop: "cpuType",
    type: "select",
    class: "w-1/3",
    options: ["AMD", "Intel", "Other"],
    placeholder: "CPU Manufacturer",
  },
  {
    label: "Socket",
    prop: "socket",
    type: "select",
    class: "w-1/3",
    options: [],
    placeholder: "Socket Type",
  },
  {
    label: "Generation",
    prop: "generation",
    type: "select",
    class: "w-1/3",
    options: [],
    placeholder: "CPU Generation",
  },

  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-full",
    placeholder: "Remark",
  },

];

const memory = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-2/3",
    placeholder: "Memory Model Number",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/6",
    prefixIcon: Money,
  },
  {
    label: "count",
    prop: "count",
    type: "count",
    class: "w-1/6",
  },
  {
    label: "Generation",
    prop: "generation",
    type: "select",
    class: "w-1/4",
    options: ["DDR2", "DDR3", "DDR4", "DDR5"],
    placeholder: "Memory Generation",
  },
  {
    label: "Speed",
    prop: "speed",
    type: "number",
    class: "w-1/4",
    suffix: "MHz",
    placeholder: "Memory Frequency",
  },
  {
    label: "Capacity",
    prop: "capacity",
    type: "number",
    class: "w-1/4",
    suffix: "GB",
  },
  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-1/2",
    placeholder: "Online Shopping Product URL",
  },
  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-1/2",
    placeholder: "Remark",
  },

];
const gpu = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-2/3",
    placeholder: "GPU Model Number",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/6",
    prefixIcon: Money,
  },
  {
    label: "Count",
    prop: "count",
    type: "count",
    class: "w-1/6",
  },
  {
    label: "GPU Type",
    prop: "gpuType",
    type: "select",
    class: "w-1/4",
    options: ["AMD", "NVIDIA", "Intel", "Other"],
    placeholder: "GPU Manufacturer",
  },
  {
    label: "Generation",
    prop: "generation",
    type: "select",
    class: "w-1/4",
    options: [],
    placeholder: "GPU Generation",
  },
  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-1/2",
    placeholder: "Online Shopping Product URL",
  },
  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-1/2",
    placeholder: "Remark",
  },

];
const storage = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-2/3",
    placeholder: "Storage Drive Model Number",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/6",
    prefixIcon: Money,
  },
  {
    label: "Count",
    prop: "count",
    type: "count",
    class: "w-1/6",
  },
  {
    label: "Type",
    prop: "type",
    type: "select",
    class: "w-1/5",
    options: ["SSD(Solid-state Drive)", "HDD(Mechanical Hard Drive)"],
    placeholder: "Storage Type",
  },
  {
    label: "Interface",
    prop: "interface",
    type: "select",
    class: "w-1/5",
    options: [
      "SATA(Serial ATA)",
      "mSATA(mini-SATA)",
      "SATA Express",
      "M2",
      "PCIe",
      "U.2",
      "SAS",
    ],
    placeholder: "Storage Drive Interface",
  },
  {
    label: "Protocol",
    prop: "protocol",
    type: "select",
    class: "w-1/5",
    options: [
      "IDE(Integrated Drive Electronics)",
      "AHCI(Advanced HOST Controller Interface)",
      "NVMe(Non-Volatile Memory Express)",
      "SCSI(Small Computer System Interface)",
    ],
    placeholder: "Drive Protocol",
  },
  {
    label: "Size",
    prop: "size",
    type: "select",
    class: "w-1/5",
    options: [
      "3.5Inch(146x101.6x25.4mm)",
      "2.5Inch(69.85x100.2x9.5mm)",
      "1.8Inch(54x78.5x5mm)",
      "2230",
      "2242",
      "2260",
      "2280",
    ],
    placeholder: "Storage Drive Size",
  },
  {
    label: "Capacity",
    prop: "capacity",
    type: "number",
    class: "w-1/5",
    placeholder: "Storage Drive Capacity",
  },
  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-1/2",
    placeholder: "Online Shopping Product URL",
  },
  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-1/2",
    placeholder: "Remark",
  },
];
const cpuCooler = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-2/3",
    placeholder: "CPU Cooler Model Number",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/6",
    prefixIcon: Money,
  },
  {
    label: "Count",
    prop: "count",
    type: "count",
    class: "w-1/6",
  },
  {
    label: "Cooler Type",
    prop: "type",
    type: "select",
    class: "w-1/4",
    options: [
      "Air-cooled Radiator",
      "Integrated Water-cooled Radiator",
      "Split Water-cooled Radiator",
    ],
    placeholder: "CPU Cooler Type",
  },
  {
    label: "Size",
    prop: "size",
    type: "select",
    class: "w-1/4",
    options: ["120mm", "140mm", "240mm", "280mm", "360mm", "480mm"],
    placeholder: "CPU Cooler Size",
  },
  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-1/2",
    placeholder: "Online Shopping Product URL",
  },
  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-1/2",
    placeholder: "Remark",
  },
];
const power = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-2/3",
    placeholder: "Power Supply Model Number",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/6",
    prefixIcon: Money,
  },
  {
    label: "Count",
    prop: "count",
    type: "count",
    class: "w-1/6",
  },
  {
    label: "Size",
    prop: "size",
    type: "select",
    class: "w-1/4",
    options: ["ATX-L", "ATX", "SFX-L", "SFX", "1U FLEX"],
    placeholder: "Power Supply Size",
  },
  {
    label: "Type",
    prop: "type",
    type: "select",
    class: "w-1/4",
    options: [
      "Integrated Power Supply",
      "Semi-modular Power Supply",
      "Fully Modular Power Supply",
    ],
    placeholder: "Power Supply Type",
  },
  {
    label: "Power",
    prop: "power",
    type: "number",
    class: "w-1/4",
    suffix: "W",
  },

  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-1/2",
    placeholder: "Online Shopping Product URL",
  },
  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-1/2",
    placeholder: "Remark",
  },

];
const fan = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-2/3",
    placeholder: "Fan Detail Model Number",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/6",
    prefixIcon: Money,
  },
  {
    label: "Count",
    prop: "count",
    type: "count",
    class: "w-1/6",
  },
  {
    label: "Size",
    prop: "size",
    type: "select",
    class: "w-1/4",
    options: [
      "4010(40x40x10mm)",
      "4020(40x40x20mm)",
      "6025(60x60x25mm)",
      "4028(40x40x28mm)",
      "8010(80x80x10mm)",
      "8020(80x80x20mm)",
      "12010(120x120x10mm)",
      "12020(120x120x20mm)",
    ],
    placeholder: "Fan Size",
  },
  {
    label: "Light Type",
    prop: "light",
    type: "select",
    class: "w-1/4",
    options: [
      "No Light",
      "Single Light",
      "Single Light(Red)",
      "Single Light(Blue)",
      "Single Light(Green)",
      "Single Light(White)",
      "RGB",
    ],
    placeholder: "Fan Light Type",
  },
  {
    label: "Speed Control",
    prop: "control",
    type: "select",
    class: "w-1/4",
    options: ["PWN(Pulse Width Modulation)", "DC(Direct Current)"],
    placeholder: "Fan Speed Control Type",
  },
  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-1/2",
    placeholder: "Online Shopping Product URL",
  },
  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-1/2",
    placeholder: "Remark",
  },

];
const computerCase = [
  {
    label: "Model",
    prop: "model",
    type: "input",
    class: "w-3/4",
    placeholder: "Case Detail Model Number",
  },
  {
    label: "Price",
    prop: "price",
    type: "number",
    class: "w-1/4",
    prefixIcon: Money,
  },
  {
    label: "Size",
    prop: "size",
    type: "select",
    class: "w-1/4",
    options: [
      "Full-Tower",
      "Mid-Tower",
      "Slim-Tower",
      "Micro/mini Tower",
      "E-ATX",
      "ATX",
      "M-ATX",
      "ITX",
      "Mini-ITX",
      "A4",
    ],
    placeholder: "Case Size",
  },

  {
    label: "Link",
    prop: "link",
    type: "input",
    class: "w-1/2",
    placeholder: "Online Shopping Product URL",
  },

  {
    label: "Remark",
    prop: "remark",
    type: "input",
    class: "w-1/2",
    placeholder: "Remark",
  },
];
const other = [
  { label: 'Name', prop: 'name', type:'input', class: 'w-5/6'},
  { label: 'Price', prop: 'price', type: 'number', class: 'w-1/6', prefixIcon: Money},
  { label: 'link', prop: 'link', type:'input', class: 'w-5/6'},
  { label: 'Count', prop: 'count', type: 'count', class: 'w-1/6'},
  { label: 'Remark', prop: 'remark', type: 'input', class: 'w-full'}
]
const labels = {
  motherboard,
  cpu,
  memory,
  gpu,
  storage,
  cpuCooler,
  fan,
  computerCase,
  power,
  other
};
export default labels