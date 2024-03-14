function Block_info({data}){
    return(
        // Data.icon, data.alticon, data.title, data.text
        <div className="feature-item">
          <img src={data.icon} alt={data.alticon} className="feature-icon" />
          <h3 className="feature-item-title">{data.title}</h3>
          <p>{data.text}</p>
        </div>
    );
}
export default Block_info