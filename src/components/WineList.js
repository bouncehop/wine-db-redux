const WineList = ({ onSelectWine, wines }) => {

  return (
    <div className="col s12 m6 l3">
      <h2 className="center-align">Wines</h2>
      <div className="collection">
        {wines.map((wine) => (
          <a href="#!" className={currentWine.id === wine.id ? "collection-item active": "collection-item"} key={wine.id} onClick={() => onSelectWine(wine.id)}>
          {wine.name}
          </a>
        ))}
      {console.log(wines)}
      </div>

    </div>

  )
}

export default WineList
