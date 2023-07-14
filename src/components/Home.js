const Home = () => {
    return(
        <div style={{backgroundColor:"lightblue"
    }}>
        <div style={{backgroundColor:"rgb(221, 194, 255)"}}>
            <div class="container" style={{width:"1300px",height:"600"}}>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://c8.alamy.com/comp/2HXNTHX/website-development-process-writing-code-in-web-studio-online-business-programmer-is-working-on-internet-project-vector-illustration-2HXNTHX.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:"black"}}>Learn to code! Courses for beginners and pros available</h5>
        <p>EduCode is the perfect place to learn coding.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://fossbytes.com/wp-content/uploads/2019/11/Learn-to-code-for-free_best-free-coding-websites.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style ={{color:"black"}}>Join any of our six courses for 3-4 months</h5>
        <h4 style ={{color:"black"}}>Become an awesome web-developer, or a cool system designer!.</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2020/10/CDG_blog_post_image_02-850x412.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Programming is an art! Get started with Coding!</h5>
        <p>Code your way into the new world!.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
        </div>
        </div>
    );
}

export default Home;