import { ElMessage } from "element-plus"

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
