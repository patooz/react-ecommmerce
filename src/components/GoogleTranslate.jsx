// import { useEffect } from "react";

// const SamplePage = () => {

//     const googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
//      }
     
//      useEffect(() => {
//        var addScript = document.createElement('script');
//        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
//        document.body.appendChild(addScript);
//        window.googleTranslateElementInit = googleTranslateElementInit;
//      }, [])
   
//      return (
//        <div>
        
//          <div id="google_translate_element"></div>
//          <div className="gx-d-flex justify-content-center">
//            <h4>Start building your app. Happy Coding!</h4>
//          </div>
   
//        </div>
//      );
//    };
   
//    export default SamplePage