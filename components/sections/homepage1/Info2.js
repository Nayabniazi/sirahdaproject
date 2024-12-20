import Link from "next/link";

export default function Info2() {
    return (
        <>
            <section className="section mt-55 bg- position-relative pt-90 pb-90"style={{backgroundColor:'black',}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"><span className="btn btn-tag wow animate__animated animate__fadeIn" style={{color: 'white', backgroundColor:'orange'}}>Get in
                            touch</span>
                            <h3 className="color- mb-20 mt-15 wow animate__animated animate__fadeIn"style={{color:'white'}}>Proud to Deliver<br className="d-none d-lg-block" />Excellence Every Time</h3>
                            <p className="font-md color- mb-40 wow animate__animated animate__fadeIn"style={{color:'white'}}>Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper
                                quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective
                                "outside the box" thinking.</p>
                            <div className="row">
                                <div className="col-lg-6 mb-30">
                                    <h6 className="chart-title font-md-bold color- wow animate__animated animate__fadeIn"style={{color:'white'}}>
                                        Boost your sale</h6>
                                    <p className="font-xs color- wow animate__animated animate__fadeIn"style={{color:'white'}}>The latest
                                        design trends meet hand-crafted templates.</p>
                                </div>
                                <div className="col-lg-6 mb-30">
                                    <h6 className="feature-title font-md-bold color- wow animate__animated animate__fadeIn"style={{color:'white'}}>
                                        Introducing New Features</h6>
                                    <p className="font-xs color- wow animate__animated animate__fadeIn"style={{color:'white'}}>The latest
                                        design trends meet hand-crafted templates.</p>
                                </div>
                            </div>
                            <div className="mt-20"><Link className="btn btn link mr-20 wow animate__animated animate__fadeIn" href="/contact" style={{color: 'black', backgroundColor: 'orange',width:'150px'}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn"style={{color:'white'}} href="#">Learn More
                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg></Link></div>
                        </div>
                    </div>
                </div>
                <div className="box-image-touch" />  
            </section>
        </>
    )
}
