import { Money } from "@element-plus/icons-vue";
import { useI18n } from "vue-i18n";

function useFormLabels() {
  const { t } = useI18n()
  const motherboard = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-3/4",
      placeholder: t('motherboardModelPlaceholder')
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/4",
      prefixIcon: Money,
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder')
    },
    {
      label: t('motherboardCpuType'),
      prop: "cpuType",
      type: "select",
      class: "w-1/4",
      options: ["AMD", "Intel", "Other"],
      placeholder: t('motherboardCpuTypePlaceholder'),
    },
    {
      label: t('motherboardCpuSocket'),
      prop: "socket",
      type: "select",
      class: "w-1/4",
      options: [],
      placeholder: t('motherboardCpuSocketPlaceholder')
    },
    {
      label: t('motherboardFormFactor'),
      prop: "formFactor",
      type: "select",
      class: "w-1/4",
      options: ["E-ATX", "ATX", "Micro-ATX(mATX)", " Mini-ITX(ITX)", "Other"],
      placeholder: t('motherboardFormFactorPlaceholder'),
    },
    {
      label: t('motherboardChipset'),
      prop: "chipset",
      type: "select",
      class: "w-1/4",
      options: [],
      placeholder: t('motherboardChipsetPlaceholder'),
    },

    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t("remarkPlaceholder"),
    },
  ];
  const cpu = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-2/3",
      placeholder: t('cpuModelPlaceholder'),
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/6",
      prefixIcon: Money,
    },
    {
      label: t('count'),
      prop: "count",
      type: "count",
      class: "w-1/6",
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder')
    },
    {
      label: t('cpuType'),
      prop: "cpuType",
      type: "select",
      class: "w-1/3",
      options: ["AMD", "Intel", "Other"],
      placeholder: t('cpuTypePlaceholder')
    },
    {
      label: t('cpuSocket'),
      prop: "socket",
      type: "select",
      class: "w-1/3",
      options: [],
      placeholder: t('cpuSocketPlaceholder'),
    },
    {
      label: t('cpuGeneration'),
      prop: "generation",
      type: "select",
      class: "w-1/3",
      options: [],
      placeholder: t('cpuGenerationPlaceholder'),
    },

    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t('remarkPlaceholder'),
    },
  ];

  const memory = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-2/3",
      placeholder: t('memoryModelPlaceholder')
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/6",
      prefixIcon: Money,
    },
    {
      label: t('count'),
      prop: "count",
      type: "count",
      class: "w-1/6",
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder'),
    },
    {
      label: t('memoryGeneration'),
      prop: "generation",
      type: "select",
      class: "w-1/4",
      options: ["DDR2", "DDR3", "DDR4", "DDR5"],
      placeholder: t('memoryGenerationPlaceholder')
    },
    {
      label: t('memorySpeed'),
      prop: "speed",
      type: "number",
      class: "w-1/4",
      suffix: "MHz",
    },
    {
      label: t('memoryCapacity'),
      prop: "capacity",
      type: "number",
      class: "w-1/4",
      suffix: "GB",
    },
    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t('remarkPlaceholder')
    },
  ];
  const gpu = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-2/3",
      placeholder: t('gpuModelPlaceholder')
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/6",
      prefixIcon: Money,
    },
    {
      label: t('count'),
      prop: "count",
      type: "count",
      class: "w-1/6",
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder'),
    },
    {
      label: t('gpuType'),
      prop: "gpuType",
      type: "select",
      class: "w-1/4",
      options: ["AMD", "NVIDIA", "Intel", "Other"],
      placeholder: t('gpuTypePlaceholder'),
    },
    {
      label: t('gpuGeneration'),
      prop: "generation",
      type: "select",
      class: "w-1/4",
      options: [],
      placeholder: t('gpuGenerationPlaceholder'),
    },
    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t('remarkPlaceholder')
    },
  ];
  const storage = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-2/3",
      placeholder: t('storageModelPlaceholder'),
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/6",
      prefixIcon: Money,
    },
    {
      label: t('count'),
      prop: "count",
      type: "count",
      class: "w-1/6",
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder')
    },
    {
      label: t('storageType'),
      prop: "type",
      type: "select",
      class: "w-1/3",
      options: ["SSD(Solid-state Drive)", "HDD(Mechanical Hard Drive)"],
      placeholder: t('storageTypePlaceholder')
    },
    {
      label: t('storageInterface'),
      prop: "interface",
      type: "select",
      class: "w-1/3",
      options: [
        "SATA(Serial ATA)",
        "mSATA(mini-SATA)",
        "SATA Express",
        "M2",
        "PCIe",
        "U.2",
        "SAS",
      ],
      placeholder: t('storageInterfacePlaceholder')
    },
    {
      label: t('storageProtocol'),
      prop: "protocol",
      type: "select",
      class: "w-1/3",
      options: [
        "IDE(Integrated Drive Electronics)",
        "AHCI(Advanced HOST Controller Interface)",
        "NVMe(Non-Volatile Memory Express)",
        "SCSI(Small Computer System Interface)",
      ],
      placeholder: t('storageProtocolPlaceholder')
    },
    {
      label: t('storageSize'),
      prop: "size",
      type: "select",
      class: "w-1/3",
      options: [
        "3.5Inch(146x101.6x25.4mm)",
        "2.5Inch(69.85x100.2x9.5mm)",
        "1.8Inch(54x78.5x5mm)",
        "2230",
        "2242",
        "2260",
        "2280",
      ],
      placeholder: t('storageSizePlaceholder'),
    },
    {
      label: t('storageCapacity'),
      prop: "capacity",
      type: "number",
      class: "w-1/3",
    },
    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t('remarkPlaceholder'),
    },
  ];
  const cpuCooler = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-2/3",
      placeholder: t('cpuCoolerModelPlaceholder'),
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/6",
      prefixIcon: Money,
    },
    {
      label: t('count'),
      prop: "count",
      type: "count",
      class: "w-1/6",
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder'),
    },
    {
      label: t('cpuCoolerType'),
      prop: "type",
      type: "select",
      class: "w-1/4",
      options: [
        "Air-cooled Radiator",
        "Integrated Water-cooled Radiator",
        "Split Water-cooled Radiator",
      ],
      placeholder: t('cpuCoolerTypePlaceholder'),
    },
    {
      label: t('cpuCoolerSize'),
      prop: "size",
      type: "select",
      class: "w-1/4",
      options: ["120mm", "140mm", "240mm", "280mm", "360mm", "480mm"],
      placeholder: t('cpuCoolerSizePlaceholder'),
    },

    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t('remarkPlaceholder')
    },
  ];
  const power = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-2/3",
      placeholder: t('powerSupplyModelPlaceholder'),
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/6",
      prefixIcon: Money,
    },
    {
      label: t('count'),
      prop: "count",
      type: "count",
      class: "w-1/6",
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder'),
    },
    {
      label: t('powerSupplySize'),
      prop: "size",
      type: "select",
      class: "w-1/3",
      options: ["ATX-L", "ATX", "SFX-L", "SFX", "1U FLEX"],
      placeholder: t('powerSupplySizePlaceholder')
    },
    {
      label: t('powerSupplyType'),
      prop: "type",
      type: "select",
      class: "w-1/3",
      options: [
        "Integrated Power Supply",
        "Semi-modular Power Supply",
        "Fully Modular Power Supply",
      ],
      placeholder: t('powerSupplyTypePlaceholder')
    },
    {
      label: t('powerSupplyPower'),
      prop: "power",
      type: "number",
      class: "w-1/3",
      suffix: "W",
    },
    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t('remarkPlaceholder'),
    },
  ];
  const fan = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-2/3",
      placeholder: t('fanModelPlaceholder'),
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/6",
      prefixIcon: Money,
    },
    {
      label: t('count'),
      prop: "count",
      type: "count",
      class: "w-1/6",
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder')
    },
    {
      label: t('fanSize'),
      prop: "size",
      type: "select",
      class: "w-1/3",
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
      placeholder: t('fanSizePlaceholder'),
    },
    {
      label: t('fanLightType'),
      prop: "light",
      type: "select",
      class: "w-1/3",
      options: [
        "No Light",
        "Single Light",
        "Single Light(Red)",
        "Single Light(Blue)",
        "Single Light(Green)",
        "Single Light(White)",
        "RGB",
      ],
      placeholder: t('fanLightTypePlaceholder'),
    },
    {
      label: t('fanSpeedControl'),
      prop: "control",
      type: "select",
      class: "w-1/3",
      options: ["PWN(Pulse Width Modulation)", "DC(Direct Current)"],
      placeholder: t('fanSpeedControlPlaceholder'),
    },
    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t('remarkPlaceholder'),
    },
  ];
  const computerCase = [
    {
      label: t('model'),
      prop: "model",
      type: "input",
      class: "w-3/4",
      placeholder: t('computerCaseModelPlaceholder'),
    },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/4",
      prefixIcon: Money,
    },
    {
      label: t('link'),
      prop: "link",
      type: "input",
      class: "w-full",
      placeholder: t('linkPlaceholder')
    },
    {
      label: t('computerCaseSize'),
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
      placeholder: t('computerCaseSizePlaceholder'),
    },
    {
      label: t('remark'),
      prop: "remark",
      type: "input",
      class: "w-full",
      placeholder: t('remarkPlaceholder'),
    },
  ];
  const other = [
    { label: t('model'), prop: "model", type: "input", class: "w-2/3" },
    {
      label: t('price'),
      prop: "price",
      type: "number",
      class: "w-1/6",
      prefixIcon: Money,
    },
    { label: t('count'), prop: "count", type: "count", class: "w-1/6" },
    { label: t('link'), prop: "link", type: "input", class: "w-full", placeholder: t('linkPlaceholder') },
    { label: t('remark'), prop: "remark", type: "input", class: "w-full" },
  ];
  return {
    motherboard,
    cpu,
    memory,
    gpu,
    storage,
    cpuCooler,
    fan,
    computerCase,
    power,
    other,
  };
}

export default useFormLabels
