import { useEffect, useState } from 'react';
import { Regions, Wine, WineList } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectWine } from './features/wineSlice';
import { setWines } from './features/winesSlice';
import { setRegions } from './features/regionsSlice';
import { fetchRegions, fetchWinesFrom, fetchWineFrom } from './api/WineApi';

function App() { 
  const dispatch = useDispatch();
  const wine = useSelector((state) => state.wine.value);
  const wines = useSelector((state) => state.wines.value);
  const [selectedRegion, setSelectedRegion] = useState('');
  

  const getRegions = async () => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions))
    getWines(regions[0]); 
    setSelectedRegion(regions[0]); 
  }

  const getWines = async (region) => {
    const wines = await fetchWinesFrom(region);
    dispatch(setWines(wines));
    wines.length ? getWine(wines[0].id) : dispatch(selectWine({})); 
  }

  const getWine = async (id) => {
    const wine = await fetchWineFrom(id);
    dispatch(selectWine(wine));
  }

  const onSelectRegion = (e, region) => {
    
    getWines(region);
    setSelectedRegion(region);

    
  }

  const onSelectWine = (wineId) => {
    getWine(wineId);
  }

  useEffect(() => {
    getRegions();
  }, [])
  
  return (
    <div className="container">
      <h1 className="center-align">Open Wine Database</h1>
      <div className="row">
        <Regions onSelectRegion={onSelectRegion} selectedRegion={selectedRegion} />
        {wines && <WineList onSelectWine={onSelectWine} />}
        {wine.id && <Wine />}
      </div>
    </div>

  );
}

export default App;
