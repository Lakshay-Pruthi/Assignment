import './App.scss'
import CardHorizontal from './Component/CardHorizontal'
import CardVertical from './Component/CardVertical'
import Navbar from './Component/Navbar'
import info from './assets/info.svg'
import tick from './assets/tick.svg'
import downArrow from './assets/downArrow.svg'
import Footer from './Component/Footer'
import Breadcrumb from './Component/miniComponents/Breadcrumb'
import InnerNavbar from './Component/InnerNavbar'


function App() {

  return (
    <>
      {/* Navbar  */}
      <Navbar />
      <main>
        <div id='container'>
          <div>
            <h1 id='mainHeading'>Best Website builders in the US</h1>
            <div id='update'>
              <div>
                <p className='sort'><img src={tick} alt="" /><p>Last Updated - Feburary 22,2020</p></p>
                <p className='sort'> <img src={info} alt="" /><p>Advertising Disclosure</p></p>
              </div>
              <p className='sort'>Top Relevant <img src={downArrow} alt="" /></p>
            </div>
          </div>
          <InnerNavbar />
          <Breadcrumb />
          {/* Horizontal Products */}
          <CardHorizontal key="1" tag={"Best Choice"} index="1" name={"Builder"} highlight={"WixPro 72-Inch Responsive Website Builder-"} text={"WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores"} mainHighlight={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."} rating={"9.8"} ratingComment={"Exceptional"} />
          <CardHorizontal key="2" tag={"Best Value"} index="2" name={"Builder1"} highlight={"SiteCraft 68-Inch Ultimate Web Design Studio"} text={" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"} mainHighlight={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."} rating={"9.5"} ratingComment={"Excellent"} />
          <CardHorizontal key="3" index="3" name={"Builder"} highlight={"WixPro 72-Inch Responsive Website Builder-"} text={"WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores"} mainHighlight={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."} rating={"9.3"} ratingComment={"Exceptional"} />
          <CardHorizontal key="4" index="4" name={"CDK"} highlight={"WixPro 72-Inch Responsive Website Builder-"} text={"WixPro 72-Inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores"} mainHighlight={""} specialHIghlight={true} rating={"9.1"} ratingComment={"Very good"} />
          {/* Featured Products */}
          <h2 className='featured'>Related deals you might like for</h2>
          <section>
            <div id='featuredProducts'>
              <CardVertical />
              <CardVertical />
              <CardVertical />
            </div>
          </section>
          {/*  Sign up Container */}
          <div id='signupContainer'>
            <h2 className='featured'>Sign up and get exclusive special deals</h2>
            <div id='signup'>
              <input type="email" name="" id="" />
              <button>Signup</button>
            </div>
          </div>
        </div>
      </main>
      {/* Footer  */}
      <Footer />
    </>
  )
}

export default App
