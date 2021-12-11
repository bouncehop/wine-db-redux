
const Regions = ({ onSelectRegion, selectedRegion, regions }) => {

  return (
    <div className="col s12 m6 l3">
      <h2 className="center-align">Regions</h2>
      <div className="collection">
        {regions.map((region) => (
          <a href="#" className={region == selectedRegion ? 'collection-item active' : 'collection-item'} key={region} onClick={(e) => onSelectRegion(e, region)}>
            
          {region}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Regions
