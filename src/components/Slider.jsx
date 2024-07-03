import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://www.thelist.com/img/gallery/how-to-refresh-your-makeup-bag-in-the-new-year/l-intro-1673021989.jpg" alt="img" className="d-block w-100" style={{height:"400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309652.jpg" alt="img" className="d-block w-100" style={{height:"400px"}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2022/06/Untitled-1024-%C3%97-683px-26.jpg" alt="img" className="d-block w-100" style={{height:"400px"}} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;