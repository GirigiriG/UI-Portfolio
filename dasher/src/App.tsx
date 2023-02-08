import React from 'react';
import './App.css';


function App() {
  return (
    <div className='container'>
      <div className='sidebar'></div>
      <div className='dashboard'>
        <section>
          <h1>Dashboard</h1>
          <div className="stats">
            <div>
              <h4>Monthly Statistics</h4>
              <p>28 January 2023</p>
            </div>
            <div className="filter">
              <select>
                <option value="5">5 minute</option>
                <option value="1">1 hour</option>
                <option value="6">6 hour</option>
                <option value="12">12 hour</option>
                <option value="1d"> 24 hour</option>
              </select>
            </div>
          </div>
        </section>  
        <div className="info">
        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>Jan</div>
        </section>

        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>Feb</div>
        </section>

        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>Mar</div>
        </section>

        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>Apr</div>
        </section>

        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>May</div>
        </section>

        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>Jun</div>
        </section>

        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>Jul</div>
        </section>

        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>Aug</div>
        </section>

        <section className='info-graph'>
          <div className="bar">
            <div></div>
            <div></div>
          </div>
          <div className='month'>Sep</div>
        </section>
        </div>
        <div className="price">
          <div className='content play'>
            <div className="icon">
              <img src="/play.png" alt="play button icon"/>
            </div>
            <div className="content-item">
              <p>Penjualan Kursus Pandapatan</p>
              <h3>18,000</h3>
            </div>
          </div>
          <div className='content revenue'>
            <div className="icon">
              <img src="/money.png" alt="money icon"/>
            </div>
            <div className="content-item">
              <div className="content-item">
                <p>Total Pandapatan</p>
                <h3>23,000,000</h3>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='popular'></div>
    </div>
  );
}

export default App;
