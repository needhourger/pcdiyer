<template>
  <div class="w-full p-5">
    <BaseForm v-model="storageForm" :formLabels="formLabels" />
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';
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
const formLabels = [
  {
    label: 'Type', prop: 'type', type: 'select',
    class: 'w-1/5',
    options: ["SSD(Solid-state Drive)", "HDD(Mechanical Hard Drive)"],
    placeholder: 'Storage Type'
  },
  {
    label: 'Interface', prop: 'interface', type: 'select',
    class: 'w-1/5',
    options: ["SATA(Serial ATA)","mSATA(mini-SATA)","SATA Express", "M2","PCIe","U.2","SAS"],
    placeholder: 'Storage Drive Interface'
  },
  {
    label: 'Protocol', prop: 'protocol', type: 'select',
    class: 'w-1/5',
    options: ["IDE(Integrated Drive Electronics)","AHCI(Advanced HOST Controller Interface)","NVMe(Non-Volatile Memory Express)","SCSI(Small Computer System Interface)"],
    placeholder: 'Drive Protocol'
  },
  {
    label: 'Size', prop: 'size', type: 'select',
    class: 'w-1/5',
    options: ["3.5Inch(146x101.6x25.4mm)","2.5Inch(69.85x100.2x9.5mm)","1.8Inch(54x78.5x5mm)","2230","2242","2260","2280"],
    placeholder: 'Storage Drive Size'
  },
  {
    label: 'Capacity', prop: 'capacity', type: 'number',
    class: 'w-1/5',
    placeholder: 'Storage Drive Capacity'
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-1/2',
    placeholder: 'Storage Drive Model Number',
  },
  {
    label: 'Link', prop: 'link', type: 'input',
    class: 'w-1/3',
    placeholder: 'Online Shopping Product URL',
  },
  {
    label: 'Price', prop: 'price', type: 'number',
    class: 'w-1/6', prefixIcon: Money
  },
  {
    label: 'Remark', prop: 'remark', type: 'input',
    class: 'w-full',
    placeholder: 'Remark'
  }
]
</script>
<style></style>