import React, { Component } from 'react';
import '../css/portfolio-grid.css';
import { motion } from 'framer-motion';
import { transition, cardUp, cardUpContainer } from '../animations';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const GridNav = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin: 30px 0 40px 0;
`;


const PortLink = styled(Link)`

`;

const imgs = [{description:"Wordpress, Elementor, WooCommerce", tag:"WEB DEVELOPMENT", page:"/mendedmoments", src:"http://darrinwells.com/img/thumbnails/mendedmoments_thumb.jpg"},
              {description:"Wordpress, Elementor", tag:"WEB DEVELOPMENT", page:"/medical-device-success", src:""},
              {description:"Network Solutions CMS, SEO, Inventory Management", tag:"WEB DEVELOPMENT", page:"/discount-office-source", src:"http://darrinwells.com/img/thumbnails/dos_thumb.jpg"},
              {description:"Wordpress, WPBakery Page Builder", tag:"WEB DEVELOPMENT", page:"/TNT-Automart", src:"http://darrinwells.com/img/thumbnails/tnt_thumb.jpg"},
              {description:"Adobe Illustrator", tag:"DESIGN", page:"/briskethouse", src:"http://darrinwells.com/img/thumbnails/brisket_thumb.jpg"},
              {description:"Adobe Illustrator", tag:"DESIGN", page:"/mendedmoments", src:"http://darrinwells.com/img/thumbnails/plastic_thumb.jpg"},
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
        <input 
          type="checkbox"
          checked={all}
        />
        <label htmlFor="all">ALL</label>
      </li>
       {filters.map(
        (filter, i)=>
          <li  key={i} data-index={i} onClick={onClick} >
            <input 
              id={filter.name} 
              type="checkbox" 
              checked={filter.status}
            />
            <label htmlFor={filter.name}>{filter.name}</label>
          </li>)}
    </ul>
  </GridNav>

const Cards = ({imgs}) =>
  <ul>
    {imgs.map(
      (img, i)=>
      <li  key={i}>
        <PortLink to={img.page}><figure>
          <img src={img.src} alt={img.description}/>
          <figcaption> 
            <div>{img.description} </div>
            <span>{img.tag}</span>
          </figcaption>
        </figure></PortLink>
      </li>)}
  </ul>

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