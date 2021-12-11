
const Wine = ({ wine }) => {
  
  return (
    <div className="col s12 m12 l6">
      <h2 className="center-align">Wine details</h2>
      <div className="card horizontal">
        <div className="card-image">
          <img className="responsive-img wine-detail-image" alt={wine.name} src={`https://wines-api.herokuapp.com/api/wines/${wine.id}/image`} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h3>{wine.name}e</h3>
            <br/>
            <p><b>Appellation:</b> {wine.appellation.name}</p>
            <p><b>Region:</b> {wine.appellation.region}</p>
            <p><b>Color:</b> {wine.type}</p>
            <p><b>Grapes:</b> {(wine.grapes).map((grape) => (<span key={grape}>{grape} </span>))}</p>
          </div>
          <div className="card-action"></div>
        </div>
      </div>
    </div>
  )
}

export default Wine
