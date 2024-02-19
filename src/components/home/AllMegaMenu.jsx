import axios from "axios"
import React, { Component } from 'react'
import AppUrl from "../../api/AppUrl"

export class AllMegaMenu extends Component {

       
  constructor() {
    super()
    this.state = {
      MenuData: []
    }
  }
  componentDidMount() {
    axios.get(AppUrl.CategoryDetails).then(response => {
      this.setState({
        MenuData: response.data
      })
    }).catch(error => {
        
    })
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
    const catList = this.state.MenuData;
    const myView = catList.map((catList, i) => {
      return <div key={i.toString()}>
           <button onClick={this.MenuItemClick} className="accordionAll">
            <img className="accordionAllMenuIcon" src={catList.category_image} alt="" />&nbsp;
            {catList.category_name}
          </button>

          <div className="panelAll" id="panelAll">
            <ul>
              {/* <li><a href="#" className="accordionItem">  Men T-shirts 1</a></li>
              <li><a href="#" className="accordionItem">  Men T-shirts 2</a></li> */}
              {
                (catList.subcategory_name).map((Sublist, i) => {
                  return <li><a href="#" className="accordionMobileItem">{Sublist.subcategory_name}</a></li>
                })
              }
            </ul>

          </div>

        </div>
    })
    return (
        <div className="accordionAllMenuDiv">
        <div className="accordionAllMenuDivInside">
          {/* <button className="accordionAll">
            <img className="accordionAllMenuIcon" src="https://cdn-icons-png.flaticon.com/128/739/739249.png" alt="" />&nbsp;
            Men Clothing
          </button>

          <div className="panelAll">
            <ul>
              <li><a href="#" className="accordionAllItem">  Men T-shirts</a></li>
              <li><a href="#" className="accordionAllItem">  Men T-shirts</a></li>
            </ul>

          </div> */}
          {myView}
        </div>
      </div>
    )
  }
}

export default AllMegaMenu