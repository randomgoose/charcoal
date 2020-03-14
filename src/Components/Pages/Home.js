import React from 'react'
import Story from '../Story'

const Home = (props) => {
        return(
                <div className="Home">
                        <header>
                                <nav></nav>
                        </header>

                        <main>
                                <section className="Home__main">


                                        <div className="main__spacing" /> 
                                                

                                        <div className="main__content">
                                                <h3>Editor's Picks</h3>

                                                <div className="main_row col-1">
                                                        <Story type="headline" id={0} />
                                                </div>

                                                <div className="main__row">
                                                        <Story id={1}/>
                                                        <Story id={2}/>
                                                        <Story id={3}/>
                                                </div>

                                                <div className="main__row">
                                                        <Story id={4}/>
                                                        <Story id={5}/>
                                                        <Story id={6}/>
                                                </div>

                                                <div className="main__row">
                                                        <Story id={7}/>
                                                        <Story id={8}/>
                                                        <Story id={9}/>
                                                </div>

                                                 <div className="main__row">
                                                        <Story id={10}/>
                                                        <Story id={11}/>
                                                        <Story id={12}/>
                                                </div>

                                                <button>Load more articles</button>
                                        </div>

                                        <div className="main__spacing" />
                                </section>
                        </main>
                
                </div>
        )
}

export default Home