import { Outlet, Link } from "react-router-dom";
const Header = () => {
    return (
      <>
<nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid" style={{backgroundColor: "rgb(112, 158, 222)"}}>
    <h2 color="light-blue">EduCode</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Service">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="About">About us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
        <Outlet />
      </>
    );
  };
  
  export default Header;