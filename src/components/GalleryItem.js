import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, duration, font, tech } from '../assets/vars.json'
import overlay from '../assets/scss/images/overlay.png'

import Tech from './Tech.js'

const LinkContainer = styled.p`
    margin: 0;
`

const Link = styled.a`
    &:not(:last-child) {
        margin-right: 30px;
        position: relative;
        &::before {
            border-right: 1px solid rgba(0, 0, 0, 0.4);
            content: '';
            height: 80%;
            position: absolute;
            right: -15px;
            top: 4px;
        }
    }
`

const GalleryItemArticle = styled.article`
    margin: 20px 0 50px 0;
    width: 46.5%;
    box-sizing: border-box;

    @media screen and (max-width: 862px) {
        width: 100%;
    }
`

const ItemThumbnailContainer = styled.a`
    border-radius: ${size.borderRadius};
    border: 0;
    display: inline-block;
    position: relative;
    text-align: center;
    display: block;
    margin: 0 0 ${size.elementMargin} 0;
    width: 100%;
    &:before {
        transition: opacity ${duration.transition} ease-in-out;
        background: url(${overlay});
        content: '';
        display: block;
        height: 100%;
        left: 0;
        opacity: 0.2;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &:after {
        transition: opacity ${duration.transition} ease-in-out;
        border-radius: ${size.borderRadius};
        border: solid 3px rgba(255, 255, 255, 0.5);
        color: #fff;
        content: 'View';
        display: inline-block;
        font-size: 0.8em;
        font-weight: ${font.weightBold};
        left: 50%;
        line-height: 2.25em;
        margin: -1.25em 0 0 -3em;
        opacity: 0;
        padding: 0 1.5em;
        position: absolute;
        text-align: center;
        text-decoration: none;
        top: 50%;
        white-space: nowrap;
    }
    &:hover {
        &:after {
            opacity: 1;
        }
        &:before {
            background: url(${overlay}), url(${overlay});
            opacity: 1;
        }
    }
`

const ItemThumbnail = styled.img`
    margin: 0 0 ${size.elementMargin * 0.75} 0;
    object-fit: cover;
    object-position: center top;
    height: 230px;
    width: 100%;
    border-radius: ${size.borderRadius};
    display: block;
`

const ItemTitle = styled.h3`
    font-size: 1.2em;
    margin: 0;
`

const ItemDescription = styled.p`
    font-size: 1em;
    line-height: 1.5em;
    margin: 10px 0 20px 0;
`

const TitleLinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TechContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class GalleryItem extends React.Component {
    render() {
        const { obj, index, handleOpenImage } = this.props
        const techStackBubbles = obj.techStack.map(eachTech => (
            <Tech key={eachTech.name} type={eachTech.type}>
                {eachTech.name}
            </Tech>
        ))
        return (
            <GalleryItemArticle>
                <ItemThumbnailContainer
                    href={obj.src}
                    onClick={e => handleOpenImage(index, e)}
                >
                    <ItemThumbnail src={obj.thumbnail} alt={obj.caption} />
                </ItemThumbnailContainer>
                <TitleLinkContainer>
                    <ItemTitle>{obj.caption}</ItemTitle>
                    <LinkContainer>
                        <Link
                            href={obj.demoLink}
                            target="_blank"
                            rel="noopener"
                        >
                            Demo
                        </Link>
                        <Link
                            href={obj.repoLink}
                            target="_blank"
                            rel="noopener"
                        >
                            Code
                        </Link>
                    </LinkContainer>
                </TitleLinkContainer>
                <ItemDescription>{obj.description}</ItemDescription>
                <TechContainer>{techStackBubbles}</TechContainer>
            </GalleryItemArticle>
        )
    }
}

GalleryItem.propTypes = {
    handleOpenImage: PropTypes.func.isRequired,
    obj: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default GalleryItem
