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
              <p>Penjualan Kursus</p>
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
        <div className="team">
          <div className='members'>
            <h3>Team anda</h3>
            <div className='cards'>
              <div className="card">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                </div>
                <div className="title">
                  <h4>Hatti Gill</h4>
                  <p>Visual Designer</p>
                </div>
              </div>

              <div className="card">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1577806934037-32d94e326e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" />
                </div>
                <div className="title">
                  <h4>Hope Brown</h4>
                  <p>Market Researcher</p>
                </div>
              </div>

              <div className="card">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                </div>
                <div className="title">
                  <h4>Jessi Fuller</h4>
                  <p>User Interface Desginer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='score'>
            <h3>Kategori</h3>
          </div>
        </div>  
      </div>
      <div className='popular'></div>
    </div>
  );
}

export default App;
