import React from "react";

class ImageComp extends React.Component {
  state = {
    useDefaultImage: false
  };

  render() {
    const { alt, className, src } = this.props;
    const { useDefaultImage } = this.state;

    return (
      <img
        className={className}
        alt={alt}
        onError={() => this.setState({ useDefaultImage: true })}
        src={
          (useDefaultImage && process.env.PUBLIC_URL + "/default_img.png") ||
          src
        }
      />
    );
  }
}

export { ImageComp };
