// components/DetailCard.js
const DetailCard = (props:{ detail: any  }) => {
 
    return (
      <div className="card">
        <h2>{props.detail.filename}</h2>
        <p>{props.detail.fileDescription}</p>
        {/* Add more details here */}
      </div>
    );
  };
  
  export default DetailCard;
  