type CommonConf = {
  size: string,
  length: number,
  height: number,
  width: number,
  model: string,
  price: number,
  remarks: string,
  manufacturer: string,
  link: string,
  count: number,
  optionId: string,
}
interface MotherboardConf extends CommonConf {
  chipset: string,
  socket: string,
}
interface CPUConf extends CommonConf {
  socket: string,
  generation: string,
  cores: number,
  threads: number,
  tdp: number,
  integratedGPU: string,
}
interface GPUConf extends CommonConf {
  generation: string,
  memory: string,
  memoryType: string,
  memoryBus: string,
  tdp: number,
  powerConnector: string,
  cooling: string,
}
interface MemoryConf extends CommonConf {
  generation: string,
  speed: string,
  capacity: string,
}
interface DiskConf extends CommonConf {
  type: string,
  capacity: string,
  interfaceType: string,
  protocol: string
}
interface CPUCoolerConf extends CommonConf {
  type: string,
}
interface FanConf extends CommonConf {
  lightType: string,
  speed: number,
  speedControlProtocol: string,
  noiseLevel: number,
  airflow: number,
}
interface PowerConf extends CommonConf {
  modularType: string,
  efficiencyRating: string,
  power: number,
  fanAutoStop: boolean,
}
interface CaseConf extends CommonConf {
  fanSupport: string,
  maxGPULength: number,
  maxCPUHeight: number,
  maxPSUHeight: number,
  maxDiskHeight: number,
  maxDiskWidth: number,
  maxDiskLength: number,
  maxDiskCount: number,
}
type OtherConf = CommonConf

type ConfOption = {
  label: string,
  id: string,
}

type PCConfiguration = {
  options: ConfOption[],
  motherboard: MotherboardConf[],
  cpu: CPUConf[],
  gpu: GPUConf[],
  memory: MemoryConf[],
  disk: DiskConf[],
  cpuCooler: CPUCoolerConf[],
  fan: FanConf[],
  power: PowerConf[],
  case: CaseConf[],
  other: OtherConf[],
}