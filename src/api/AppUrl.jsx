
class AppUrl {
    static BaseUrl = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseUrl+"/getvisitor"
    static PostContact = this.BaseUrl+"/contactus"
    static SiteInfo = this.BaseUrl+"/siteinfo"
    static CategoryDetails = this.BaseUrl+"/categories"
    static ProductListByRemark(remark){
        return this.BaseUrl+"/productListByRemark/"+remark
    }
    static ProductListByCategory(category){
        return this.BaseUrl+"/productListByCategory/"+category
    }
    static ProductListBySubcategory(category, subcategory){
        return this.BaseUrl+"/productListBySubcategory/"+category+"/"+subcategory
    }

}

export default AppUrl