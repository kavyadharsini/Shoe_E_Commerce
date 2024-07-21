import { Link } from 'react-router-dom';
import { shoes } from '../data.js'; // Adjust path as needed

function HomePage() {
  return (
    <div className="shoes-container">
      {shoes.map((shoe, index) => (
        <div key={index} className="shoe-card">
          <img src={shoe.colorways[0].image} alt={shoe.name} />
          <h2>{shoe.name}</h2>
          <p>${shoe.price}</p>
          <Link to={`/shoe/${index}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
