import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { transition, cardUp } from '../animations';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

//images
import AiSVG from '../svg/ai.svg';
import PsSVG from '../svg/ps.svg';
import WooSVG from '../svg/woo.svg';
import MDS_Thumb from '../img/mds_thumb.png';
import MM_Thumb from '../img/mm_thumb.jpg';
import TNT_Thumb from '../img/tnt_thumb.png';
import DOS_Thumb from '../img/dos_thumb.png';
import BH_Thumb from '../img/bh_thumb.png';

//--Grid Navigation------
const GridNav = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 30px 0 40px 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    list-style: none;
    padding: 0 15vw;
  }

  li {
    margin: 10px 10px;
  }
`;

const Label = styled.label`
  color: #EBF3F8;
  font-family: 'Oswald', sans-serif;
  font-size: clamp(1.7rem, 1.9vw, 3rem);
  font-weight: 400;
  padding: 5px 10px;
  transition: .3s;
  cursor: pointer;
`;

const GridNavInput = styled.input`
  display: none;

  &:checked + ${Label} {
    color: #26FF6B;
    padding: 5px 10px;
  }
`;


//--Project Cards/Links-----
const PortLink = styled(Link)``;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  list-style: none;
  padding: 0 15vw;

  div {
    margin: 10px 10px;
  }
`;
const show = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`;
const Figure = styled.figure`
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 20px 5px;
  animation: ${show} .8s ease;
`;
const Image = styled.img` {
    width: clamp(300px, 18vw, 390px);
    height: clamp(400px, 550px, 600px);
    left: 0;
    object-fit: cover;
`;
const Title = styled.figcaption`
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  position: absolute;
  color: #fff;
  text-transform: uppercase;
  font-size: clamp(28px, 1.4vw, 70px);
  top: 10px;
  left: 18px;
  padding-right: 15px;
`;
const Description = styled.figcaption`
  position: absolute;
  font-size: 1.4rem;
  text-align: left;
  color: #fff;
  left: 18px;
  bottom: 18px;

  i {
    margin-right: 17px;
  }
  img {
    height: 20px;
    width: 20px;
    margin-right: 17px;
    box-shadow: 0 0 0;
  }
`;

//Project object array
const imgs = [{alt:"Mended Moments", tag:"WEB DEVELOPMENT", page:"/mendedmoments", src:MM_Thumb, description:<><i class='fab fa-wordpress-simple'></i><i class='fab fa-html5'></i><i class='fab fa-css3-alt'></i><i class='fab fa-php'></i><i class='fab fa-elementor'></i><img src={WooSVG} /><img src={AiSVG} /><img src={PsSVG} /></>},
              {alt:"Medical Device Success", tag:"WEB DEVELOPMENT", page:"/medical-device-success", src:MDS_Thumb, description:<><i class='fab fa-wordpress-simple'></i><i class='fab fa-html5'></i><i class='fab fa-css3-alt'></i><i class='fab fa-elementor'></i><img src={AiSVG} /></>},
              {alt:"Discount Office Source", tag:"WEB DEVELOPMENT", page:"/discount-office-source", src:DOS_Thumb, description:<><i class='fab fa-html5'></i><i class='fab fa-css3-alt'></i><i class='fab fa-js'></i><img src={AiSVG} /><img src={PsSVG} /></>},
              {alt:"TNT AutoMart", tag:"WEB DEVELOPMENT", page:"/TNT-Automart", src:TNT_Thumb, description:<><i class='fab fa-wordpress-simple'></i><i class='fab fa-html5'></i><i class='fab fa-css3-alt'></i><img src={AiSVG} /><img src={PsSVG} /><i class='fas fa-camera'></i></>},
              {alt:"SRD Vision", description:"Wordpress, Elementor", tag:"WEB DEVELOPMENT", page:"/SRD-Vision", src:"https://www.srdvision.com/wp-content/uploads/2011/08/srdvision-logo.png"},
              {alt:"Brisket House", tag:"DESIGN", page:"/briskethouse", src:BH_Thumb, description:<><img src={AiSVG} /></>},
              {alt:"The Plastic Truth", description:"Adobe Illustrator", tag:"DESIGN", page:"/the-plastic-truth", src:"http://darrinwells.com/img/thumbnails/plastic_thumb.jpg"},
              {alt:"The Wild Acreage", description:"Adobe Illustrator", tag:"DESIGN", page:"/wild-acreage", src:""},
              {alt:"Ace Automotive", description:"Adobe Photoshop, FlexiSign Pro", tag:"DESIGN", page:"/ace-automotive", src:"http://darrinwells.com/img/thumbnails/aceauto_thumb.jpg"},
              {alt:"Fontana", description:"Adobe Illustrator", tag:"DESIGN", page:"/fontana", src:"http://darrinwells.com/img/thumbnails/fontana_thumb.jpg"},
              {alt:"Photo Restoration", description:"Adobe Photoshop", tag:"DESIGN", page:"/photo-restoration", src:"http://darrinwells.com/img/thumbnails/fontana_thumb.jpg"},
              {alt:"A Utah Engagement", description:"Nikon D750", tag:"PHOTOGRAPHY", page:"/utah-engagement", src:"http://darrinwells.com/img/thumbnails/scThumb.jpg"},
              {alt:"Landscapes", description:"Nikon D750", tag:"PHOTOGRAPHY", page:"/landscapes", src:""},
              {alt:"Night-scapes", description:"Nikon D750", tag:"PHOTOGRAPHY", page:"/night-scapes", src:""},
              {alt:"Nature", description:"Nikon D750", tag:"PHOTOGRAPHY", page:"/nature", src:"http://darrinwells.com/img/thumbnails/nature_thumb.jpg"},
              {alt:"Other", description:"Nikon D750", tag:"PHOTOGRAPHY", page:"/other", src:""}
];

//Project category object array
const filters = [
  {name:"DESIGN", status: false},
  {name:"WEB DEVELOPMENT", status: false},
  {name:"PHOTOGRAPHY", status: false},
];

const Filters = ({onClickAll, all, onClick, filters}) =>
  <GridNav 
      initial='out' 
      animate='in' 
      exit='out' 
      variants={cardUp}
      transition={transition}>
    <ul>
      <li onClick={onClickAll}>
        <GridNavInput 
          type="checkbox"
          checked={all}
        />
        <Label htmlFor="all">ALL</Label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <GridNavInput 
              id={filter.name} 
              type="checkbox" 
              checked={filter.status}
            />
            <Label htmlFor={filter.name}>{filter.name}</Label>
          </li>)}
    </ul>
  </GridNav>

const Cards = ({imgs}) =>
  <CardsContainer>
    {imgs.map(
      (img, i)=>
      <div key={i}>
        <PortLink to={img.page}>
          <Figure>
            <Image src={img.src} alt={img.alt}/>
              <Title>{img.alt}</Title>
              <Description>{img.description}</Description>    
          </Figure>
        </PortLink>
      </div>)}
  </CardsContainer>

class PortfolioGrid extends React.Component{
  state ={
    imgs, 
    filters,
    all: true
  };

  setFilter = (e) =>{
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;
   
    filters[index].status = !filters[index].status;
    this.setState({
      filters
    });
    
    this.updateFilters();
    this.updateImgs();
  }
  
  setAll = () =>{
    const {filters} = this.state;
    
    filters.forEach( 
      filter => {
        filter.status = false;
      }
    );
    
    this.setState({
      all: true,
      filters
    });
  }
  
  updateFilters(){

    const allFiltersFalse = filters.every( filter => filter.status === false);  
    if(allFiltersFalse){
      this.setAll();
    }else{
      this.setState({
        all: false
      });
    } 
  }
  
  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;
    
    imgs.forEach((img, imgKey) => { 
      filters.forEach((filter, filterKey)=> {  
        if((img.tag==filter.name)&&(filter.status==true)){
          newImgs[a] = img;
          a++;
        }
      })
    });
        
    this.setState({
      imgs: newImgs
    });
  }

  render(){
    const {filters, all} = this.state;  
    return(
      <div>
        <Filters 
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters} />
        {(all)?(
            <Cards imgs = {imgs}/>
          ):(
            <Cards imgs = {this.state.imgs}/>
        )}
      </div>


    );
  }
}

export default PortfolioGrid;