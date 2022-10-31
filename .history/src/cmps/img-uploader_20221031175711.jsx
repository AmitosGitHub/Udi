import { Component } from 'react'
import { uploadService } from '../services/upload.service'

import { BsImage } from 'react-icons/bs'

export class ImgUploader extends Component {
  state = {
    imgUrl: null,
    height: 400,
    width: 800,
    isUploading: false,
  }
  uploadImg = async (ev) => {
    this.setState({ isUploading: true })
    const { secure_url, height, width } = await uploadService.uploadImg(ev)
    this.setState({ isUploading: false, imgUrl: secure_url, height, width })
    this.props.onUploaded && this.props.onUploaded(secure_url)
  }
  get uploadMsg() {
    const { imgUrl, isUploading } = this.state
    if (imgUrl) return 'Upload Another?'
    return isUploading ? 'Uploading....' : <BsImage />
  }
  render() {
    const { imgUrl } = this.state

    return (
      <div className="upload-preview">
        {imgUrl && (
          <img src={imgUrl} style={{ maxWidth: '600px', float: 'right' }} />
        )}
        <label htmlFor="imgUpload">{this.uploadMsg}</label>
        <input
          type="file"
          onChange={this.uploadImg}
          accept="img/*"
          id="imgUpload"
          hidden={true}
        />
      </div>
    )
  }
}
