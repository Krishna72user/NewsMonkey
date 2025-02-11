import { Component } from "react"
export default class About extends Component{

    render(){
        let{style}=this.props
        return (
            <>
        <div style={style.color === 'black' ? { backgroundColor: 'white',color:'black' } : style} className="h-screen">
            <div className="container mx-auto px-4 py-8 max-w-2xl">
                <div style={style.color === 'black' ?{ backgroundColor: 'black',color:'white' } : {backgroundColor:'white',color:'black'}}  className={style.color==='black'?"shadow-gray-400 shadow-md mt-20 rounded-lg p-6":"shadow-gray-400 shadow-lg mt-20 rounded-lg p-6"} >
                    <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">NewsMonkey</h1>
                    <h2 className="text-2xl text-center mb-6">Your Global Information Hub</h2>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">Our Mission</h3>
                        <p className="leading-relaxed">
                            Delivering real-time, comprehensive news coverage across multiple categories with speed, accuracy, and depth.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">Key Features</h3>
                        <ul className="space-y-2">
                            {[
                                "Instant access to top headlines",
                                "Diverse news perspectives",
                                "Personalized reading experience",
                                "Multiple news categories"
                            ].map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <div className="text-center mt-8">
                        <p className="text-xl italic">Stay informed. Stay connected.</p>
                    </div>
                </div>
            </div>
        </div>
  </>
        )
    }
}