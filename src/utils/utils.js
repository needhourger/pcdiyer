import { ElMessage } from "element-plus"
import { currentForm, currentOptionId } from "./useForm"

export const copy2Clipboard = (text) => {
  if (!navigator.clipboard) {
    copy2ClipboardV0(text)
    return
  }

  navigator.clipboard.writeText(text).then(() => {
    ElMessage.success('Copy success!')
    console.log('copy success')
  }).catch(err => {
    console.log('copy failed', err)
  })
}

const copy2ClipboardV0 = (text) => {
  const textarea = document.createElement('textarea')
  textarea.value = text;
  textarea.style.position = 'fixed';
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  try {
    const flag = document.execCommand('copy')
    const msg = flag ? 'Copy success' : 'Copy failed'
    console.log(msg)
    if (msg) ElMessage.success(msg)
  } catch (err) {
    console.error(err)
  }
}

export const randomColorHex = () => {
  let r = Math.floor(Math.random() * 200) + 55; // 55-255
  let g = Math.floor(Math.random() * 200) + 55; // 55-255
  let b = Math.floor(Math.random() * 200) + 55; // 55-255

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`.toUpperCase();
}

export const singlePrice = (target, optionId = 'default') => {
  let price = 0
  if (!target || !Array.isArray(target)) return 0
  let targetOption = target.filter(v => v.option.id === optionId)
  if (targetOption.length === 0) {
    targetOption = target.filter(v => v.option.id === 'default')
  }
  targetOption.forEach(i => {
    price += i.price * i.count
  })
  return price
}

export const totalPrice = (optionId = undefined) => {
  if (!optionId) optionId = currentOptionId.value
  let price = 0
  for (const key in currentForm) {
    if (key === 'options') continue
    price += singlePrice(currentForm[key],optionId)
  }
  return price
}

export const getCurrentLocalTimeString = () => {
  const now = new Date();
  const formattedDatetime = now.toLocaleString();
  return formattedDatetime;
}

export const createDownload = (url, filename) => {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}