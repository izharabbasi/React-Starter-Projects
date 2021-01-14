import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.refImage = React.createRef();
  }

  componentDidMount() {
    this.refImage.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    console.log(this.refImage.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.refImage} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
