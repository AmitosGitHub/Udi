import { Uploader } from 'uploader'
import { UploadDropzone } from 'react-uploader'

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: 'free',
})

// Customize the dropzone UI (see "customization"):
const options = { multi: true }

// Render the file upload dropzone:
export const ImgUploader = () => (
  <UploadDropzone
    uploader={uploader} // Required.
    options={options} // Optional.
    width="600px" // Optional.
    height="375px" // Optional.
    onUpdate={(files) => {
      // Optional.
      if (files.length === 0) {
        console.log('No files selected.')
      } else {
        console.log('Files uploaded:')
        console.log(files.map((f) => f.fileUrl))
        console.log('files:', files)
      }
    }}
  />
)

// import { Component } from 'react'
// import { uploadService } from '../services/upload.service'
// import { BsImage } from 'react-icons/bs'

// export class ImgUploader extends Component {
//   state = {
//     imgUrl: null,
//     height: 400,
//     width: 800,
//     isUploading: false,
//     imgs: [],
//   }
//   uploadImg = async (ev) => {
//     this.setState({ isUploading: true })
//     const { secure_url, height, width } = await uploadService.uploadImg(ev)
//     // console.log('this.state.imgs:', this.state.imgs)
//     // const newImgs = this.state.imgs
//     console.log('secure_url:', secure_url)
//     this.state.imgs.unshift(secure_url)
//     // console.log('this.state.imgs:', this.state.imgs)
//     // console.log('newImgs:', newImgs)
//     this.setState({
//       isUploading: false,
//       imgUrl: secure_url,
//       height,
//       width,
//       // imgs,
//     })
//     this.props.onUploaded && this.props.onUploaded(secure_url)
//     this.props.onGridImgs(this.state.imgs)
//   }
//   get uploadMsg() {
//     const { imgUrl, isUploading } = this.state
//     if (imgUrl) return <BsImage />
//     return isUploading ? 'Uploading....' : <BsImage />
//   }
//   render() {
//     const { imgUrl } = this.state

//     return (
//       <div
//         className="upload-preview"
//         style={{ Width: '400px', Height: '200px' }}
//       >
//         <label htmlFor="imgUpload">
//           {this.uploadMsg}
//           <input
//             type="file"
//             onChange={this.uploadImg}
//             multiple
//             accept="img/*"
//             id="imgUpload"
//             // style={{ display: 'none' }}
//           />
//         </label>
//       </div>
//     )
//   }
// }
