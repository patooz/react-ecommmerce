import React, { Component, Fragment } from 'react'

export class MobileMegaMenu extends Component {

    
  constructor(){
    super();
    this.MegaMenu = this.MegaMenu.bind(this);
}

componentDidMount(){
    this.MegaMenu();
}



MegaMenu(){
    var acc = document.getElementsByClassName("accordionMobile");
    var accNum = acc.length;
    var i;
    for(i=0;i<accNum;i++){
         acc[i].addEventListener("click",function (){
              this.classList.toggle("active");
              var panel = this.nextElementSibling;
              if(panel.style.maxHeight){
                   panel.style.maxHeight = null;
              }else{
                   panel.style.maxHeight= panel.scrollHeight+ "px"
              }
         })
    }
}



  render() {
    return (
        <div className="accordionMobileMenuDiv">
        <div className="accordionMobileMenuDivInside">
          <button className="accordionMobile">
            <img className="accordionMobileMenuIcon" src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
            Men Clothing
          </button>

          <div className="panelMobile">
            <ul>
              <li><a href="#" className="accordionMobileItem">  Men T-shirts</a></li>
              <li><a href="#" className="accordionMobileItem">  Men T-shirts</a></li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}

export default MobileMegaMenu