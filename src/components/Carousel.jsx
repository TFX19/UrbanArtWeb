export default function Carousel(props) {

  const {imagem1, imagem2, imagem3, titulo1, titulo2, titulo3} = props;

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <img style={{height:'400px', objectFit: 'cover'}} src={imagem1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{titulo1}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{height:'400px', objectFit: 'cover'}} src={imagem2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{titulo2}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{height:'400px', objectFit: 'cover'}} src={imagem3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>{titulo3}</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
};