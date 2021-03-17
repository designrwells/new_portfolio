import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { transition, rowRight } from '../animations';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

//images
import AiSVG from '../svg/ai.svg';
import PsSVG from '../svg/ps.svg';
import LrSVG from '../svg/lr.svg';
import WooSVG from '../svg/woo.svg';
import MDS_Thumb from '../img/mds_thumb.png';
import MM_Thumb from '../img/mm_thumb.jpg';
import TNT_Thumb from '../img/tnt_thumb.png';
import DOS_Thumb from '../img/dos_thumb.png';
import BH_Thumb from '../img/bh_thumb.png';
import Ace_Thumb from '../img/ace_thumb.png';
import Utah_Thumb from '../img/utah_thumb.jpg';
import Plastic_Thumb from '../img/plastic_thumb.jpg';
import Fontana_Thumb from '../img/fontana_thumb.jpg';
import PR_Thumb from '../img/pr_thumb.jpg';
import Iceland_Thumb from '../img/iceland_thumb.jpg';
import Night_Thumb from '../img/night_thumb.jpg'; 

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
  transition: .2s ease;
   
   &:hover {
      box-shadow: 0px 9px 18px 3px rgba(0, 0, 0, 0.3);
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      transition: .2s ease;
    }
`;
const Image = styled.img` {
    width: clamp(330px, 18vw, 390px);
    height: clamp(400px, 550px, 600px);
    left: 0;
    object-fit: cover;
    margin-bottom: -4px;

   
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
  }
`;

//Project object array
const imgs = [{alt:"Mended Moments", tag:"WEB DEVELOPMENT", page:"/mended-moments", src:MM_Thumb, description:<><i className='fab fa-wordpress-simple'></i><i className='fab fa-html5'></i><i className='fab fa-css3-alt'></i><i className='fab fa-php'></i><i className='fab fa-elementor'></i><img src={WooSVG} alt='' /><img src={AiSVG} alt='' /><img src={PsSVG} alt='' /></>},
              {alt:"TNT AutoMart", tag:"WEB DEVELOPMENT", page:"/tnt-automart", src:TNT_Thumb, description:<><i className='fab fa-wordpress-simple'></i><i className='fab fa-html5'></i><i className='fab fa-css3-alt'></i><img src={AiSVG} alt='' /><img src={PsSVG} alt='' /><i className='fas fa-camera'></i></>},
              {alt:"Medical Device Success", tag:"WEB DEVELOPMENT", page:"/medical-device-success", src:MDS_Thumb, description:<><i className='fab fa-wordpress-simple'></i><i className='fab fa-html5'></i><i className='fab fa-css3-alt'></i><i className='fab fa-elementor'></i><img src={AiSVG} alt='' /></>},
              {alt:"Discount Office Source", tag:"WEB DEVELOPMENT", page:"/discount-office-source", src:DOS_Thumb, description:<><i className='fab fa-html5'></i><i className='fab fa-css3-alt'></i><i className='fab fa-js'></i><img src={AiSVG} alt='' /><img src={PsSVG} alt='' /></>},
              {alt:"Brisket House", tag:"DESIGN", page:"/briskethouse", src:BH_Thumb, description:<><img src={AiSVG} alt='' /></>},
              {alt:"The Plastic Truth", tag:"DESIGN", page:"/the-plastic-truth", src:Plastic_Thumb,  description:<><img src={AiSVG} alt='' /></>},   
              {alt:"Ace Automotive", tag:"DESIGN", page:"/ace-automotive", src:Ace_Thumb, description:<><img src={AiSVG} alt='' /><img src={PsSVG} alt='' /><b>FlexiSign Pro</b></>},
              {alt:"Fontana", tag:"DESIGN", page:"/fontana", src:Fontana_Thumb, description:<><img src={AiSVG} alt='' /></> },
              {alt:"Photo Restoration", tag:"DESIGN", page:"/photo-restoration", src:PR_Thumb, description:<><img src={PsSVG} alt='' /></>},
              {alt:"Utah Engagement", tag:"PHOTOGRAPHY", page:"/utah-engagement", src:Utah_Thumb, description:<><i className='fas fa-camera'></i><img src={PsSVG} alt='' /><img src={LrSVG} alt='' /></>},
              //{alt:"Landscapes", description:"Nikon D750", tag:"PHOTOGRAPHY", page:"/landscapes", src:""},
              {alt:"Night Photography", tag:"PHOTOGRAPHY", page:"/night-scapes", src:Night_Thumb, description:<><i className='fas fa-camera'></i><img src={LrSVG} alt='' /></>},
              //{alt:"Nature", description:"Nikon D750", tag:"PHOTOGRAPHY", page:"/nature", src:"http://darrinwells.com/img/thumbnails/nature_thumb.jpg"},
              {alt:"Iceland Landscapes", tag:"PHOTOGRAPHY", page:"/icland-landscapes", src:Iceland_Thumb, description:<><i className='fas fa-camera'></i><img src={LrSVG} alt='' /></>},
              //{alt:"Oklahoma Storms", tag:"PHOTOGRAPHY", page:"/other", src:"", description:<><i className='fas fa-camera'></i><img src={LrSVG} alt='' /></>},
              //{alt:"The Wild Acreage", description:"Adobe Illustrator", tag:"DESIGN", page:"/wild-acreage", src:""},
              //{alt:"SRD Vision", description:"Wordpress, Elementor", tag:"WEB DEVELOPMENT", page:"/SRD-Vision", src:"https://www.srdvision.com/wp-content/uploads/2011/08/srdvision-logo.png"}
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
      variants={rowRight}
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

class PortfolioGrid extends Component {
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
        if((img.tag===filter.name)&&(filter.statu===true)){
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