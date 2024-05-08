// components/DetailCard.js
const DetailCard = ({ detail }) => {
    return (
      <div className="card">
        <h2>{detail.filename}</h2>
        <p>{detail.fileDescription}</p>
        {/* Add more details here */}
      </div>
    );
  };
  
  export default DetailCard;
  