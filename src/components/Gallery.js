import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Lightbox from 'react-images'
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
    constructor() {
        super()

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        }

        this.closeLightbox = this.closeLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this)
        this.gotoPrevious = this.gotoPrevious.bind(this)
        this.gotoImage = this.gotoImage.bind(this)
        this.handleClickImage = this.handleClickImage.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
    }
    openLightbox(index, event) {
        event.preventDefault()
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        })
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        })
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        })
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        })
    }
    gotoImage(index) {
        this.setState({
            currentImage: index,
        })
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return

        this.gotoNext()
    }
    renderGallery() {
        const { images } = this.props

        if (!images) return

        const gallery = images.map((obj, i) => {
            return (
                <GalleryItem
                    obj={obj}
                    handleOpenImage={this.openLightbox}
                    index={i}
                    key={i}
                />
            )
        })

        return gallery
    }
    render() {
        return (
            <div>
                <GalleryContainer>{this.renderGallery()}</GalleryContainer>
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                />
            </div>
        )
    }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
    images: PropTypes.array,
}

export default Gallery
