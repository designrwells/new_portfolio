import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { transition, cardUp } from '../animations';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


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
  color: #fff;
  font-size: clamp(1.5rem, 1.7vw, 2.5rem);
  font-weight: 700;
  padding: 5px 10px;
  transition: .3s;
  cursor: pointer;
`;

const GridNavInput = styled.input`
  display: none;

  &:checked + ${Label} {
    color: #444;
    padding: 5px 10px;
  }

`;

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
  overflow: hidden;
  margin: 0 5px;
  animation: ${show} .8s ease;

  img {
    width: clamp(350px, 22vw, 400px);
    height: clamp(400px, 500px, 500px);
    left: 0;
    object-fit: cover;
    box-shadow: 0 10px 15px #a8b4fc30;
  }
`;

const FigCaption = styled.figcaption`
  position: absolute;
  width: 100%;
  color: #ddd;
  left: 0;
  bottom: 0;

  

`;

const imgs = [{description:"Wordpress, Elementor, WooCommerce", tag:"WEB DEVELOPMENT", page:"/mendedmoments", src:"http://darrinwells.com/img/thumbnails/mendedmoments_thumb.jpg"},
              {description:"Wordpress, Elementor", tag:"WEB DEVELOPMENT", page:"/medical-device-success", src:"https://www.medicaldevicesuccess.com/wp-content/uploads/2019/07/mds-logo1.png"},
              {description:"Network Solutions CMS, SEO, Inventory Management", tag:"WEB DEVELOPMENT", page:"/discount-office-source", src:"http://darrinwells.com/img/thumbnails/dos_thumb.jpg"},
              {description:"Wordpress, WPBakery Page Builder", tag:"WEB DEVELOPMENT", page:"/TNT-Automart", src:"http://darrinwells.com/img/thumbnails/tnt_thumb.jpg"},
              {description:"Wordpress, Elementor", tag:"WEB DEVELOPMENT", page:"/SRD-Vision", src:""},
              {description:"Adobe Illustrator", tag:"DESIGN", page:"/briskethouse", src:"http://darrinwells.com/img/thumbnails/brisket_thumb.jpg"},
              {description:"Adobe Illustrator", tag:"DESIGN", page:"/mendedmoments", src:"http://darrinwells.com/img/thumbnails/plastic_thumb.jpg"},
              {description:"Adobe Illustrator", tag:"DESIGN", page:"/wild-acreage", src:""},
              {description:"Adobe Photoshop, FlexiSign Pro", tag:"DESIGN", page:"/ace-automotive", src:"http://darrinwells.com/img/thumbnails/aceauto_thumb.jpg"},
              {description:"Adobe Illustrator", tag:"DESIGN", page:"/fontana", src:"http://darrinwells.com/img/thumbnails/fontana_thumb.jpg"},
              {description:"Adobe Photoshop", tag:"DESIGN", page:"/photo-restoration", src:"http://darrinwells.com/img/thumbnails/fontana_thumb.jpg"},
              {description:"Nikon D750", tag:"DESIGN", page:"/utah-engagement", src:"http://darrinwells.com/img/thumbnails/scThumb.jpg"},
              {description:"Nikon D750", tag:"DESIGN", page:"/landscapes", src:""},
              {description:"Nikon D750", tag:"DESIGN", page:"/night-scapes", src:""},
              {description:"Nikon D750", tag:"DESIGN", page:"/nature", src:"http://darrinwells.com/img/thumbnails/nature_thumb.jpg"},
              {description:"Nikon D750", tag:"DESIGN", page:"/other", src:""}

];

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
            <img src={img.src} alt={img.description}/>
            <FigCaption> 
              <div>{img.description} </div>
              <span>{img.tag}</span>
            </FigCaption>
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