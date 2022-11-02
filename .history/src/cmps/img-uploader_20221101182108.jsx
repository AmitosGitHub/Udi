import { Component } from 'react'
import { uploadService } from '../services/upload.service'
import { BsImage } from 'react-icons/bs'

export class ImgUploader extends Component {
  state = {
    imgUrl: null,
    height: 400,
    width: 800,
    isUploading: false,
    imgs: [],
  }
  uploadImg = async (ev) => {
    this.setState({ isUploading: true })
    const { secure_url, height, width } = await uploadService.uploadImg(ev)
    console.log('this.state.imgs:', this.state.imgs)
    // const newImgs = this.state.imgs
    this.state.imgs.unshift(secure_url)
    console.log('this.state.imgs:', this.state.imgs)
    // console.log('newImgs:', newImgs)
    this.setState({
      isUploading: false,
      imgUrl: secure_url,
      height,
      width,
      // imgs,
    })
    this.props.onUploaded && this.props.onUploaded(secure_url)
    this.props.onGridImgs(this.state.imgs)
  }
  get uploadMsg() {
    const { imgUrl, isUploading } = this.state
    if (imgUrl) return <BsImage />
    return isUploading ? 'Uploading....' : <BsImage />
  }
  render() {
    const { imgUrl } = this.state

    return (
      <div
        className="upload-preview"
        style={{ Width: '400px', Height: '200px' }}
      >
        <label htmlFor="imgUpload">
          {this.uploadMsg}
          <input
            type="file"
            onChange={this.uploadImg}
            multiple
            accept="img/*"
            id="imgUpload"
            // style={{ display: 'none' }}
          />
        </label>
      </div>
    )
  }
}
