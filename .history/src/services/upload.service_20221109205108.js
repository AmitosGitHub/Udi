export const uploadService = {
  uploadImg,
}
function uploadImg(ev, idx = 0) {
  console.log('ev:', ev)
  console.log('idx:', idx)
  const CLOUD_NAME = 'dcwibf9o5'
  const UPLOAD_PRESET = 'vt0iqgff'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData()
  formData.append('upload_preset', UPLOAD_PRESET)
  // formData.append('file', ev.target.files[0])
  // console.log('ev[0].fileUrl:', ev[idx].fileUrl)
  formData.append('file', ev.fileUrl)
  // ev.forEach((e) => formData.append('file', e.fileUrl))

  return fetch(UPLOAD_URL, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      return res
    })
    .catch((err) => console.error(err))
}
