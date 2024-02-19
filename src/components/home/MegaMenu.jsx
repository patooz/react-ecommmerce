import React, { Component } from 'react'
import Icon from "../../assets/images/icon1.png"


class MegaMenu extends Component {

  constructor(props){
    super();

}



MenuItemClick=(event)=>{
  event.target.classList.toggle("active");
  var panel = event.target.nextElementSibling;
  if(panel.style.maxHeight){
       panel.style.maxHeight = null;
  }else{
       panel.style.maxHeight= panel.scrollHeight+ "px"
  }

}


  render() {
    const catList = this.props.data;
    const myView = catList.map((catList, i) => {
      return <div key={i.toString()}>
           <button onClick={this.MenuItemClick} className="accordion">
            <img className="accordionMenuIcon" src={catList.category_image} alt="" />&nbsp;
            {catList.category_name}
          </button>

          <div className="panel" id="panel">
            <ul>
              {/* <li><a href="#" className="accordionItem">  Men T-shirts 1</a></li>
              <li><a href="#" className="accordionItem">  Men T-shirts 2</a></li> */}
              {
                (catList.subcategory_name).map((Sublist, i) => {
                  return <li><a href="#" className="accordionItem">{Sublist.subcategory_name}</a></li>
                })
              }
            </ul>

          </div>

        </div>
    })
    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
          {myView}
        </div>

      </div>
    )
  }
}

export default MegaMenu