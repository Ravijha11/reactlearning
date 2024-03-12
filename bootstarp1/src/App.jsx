import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return <div>
    <span class="border border-primary"></span>
<span class="border border-primary-subtle"></span>
<span class="border border-secondary"></span>
<span class="border border-secondary-subtle"></span>
<span class="border border-success"></span>
<span class="border border-success-subtle"></span>
<span class="border border-danger"></span>
<span class="border border-danger-subtle"></span>
<span class="border border-warning"></span>
<span class="border border-warning-subtle"></span>
<span class="border border-info"></span>
<span class="border border-info-subtle"></span>
<span class="border border-light"></span>
<span class="border border-light-subtle"></span>
<span class="border border-dark"></span>
<span class="border border-dark-subtle"></span>
<span class="border border-black"></span>
<span class="border border-white"></span>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  

  // return (
    // <>
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
  //   </>
  // )
  
}

export default App
