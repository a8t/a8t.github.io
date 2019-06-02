import PropTypes from 'prop-types'
import React, { Component } from 'react'
import GalleryItem from './GalleryItem'
import styled from 'styled-components'

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 862px) {
    flex-direction: column;
  }
`
class Gallery extends Component {
  renderGallery() {
    const { images } = this.props

    if (!images) return

    const gallery = images.map((obj, i) => {
      return <GalleryItem obj={obj} index={i} key={i} />
    })

    return gallery
  }
  render() {
    return <GalleryContainer>{this.renderGallery()}</GalleryContainer>
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
