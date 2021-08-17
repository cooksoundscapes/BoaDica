import Checkbox from './Checkbox.js';
import Icon from '../Icons/Icons';
import MultiSlider from './MultiSlider-Functional';
import '../Styles/FilterView.css';

const regions = ['Centro', 'Zona Norte', 'Zona Leste',
'Zona Sul', 'Oeste', 'ABC Paulista'];

export default function FilterView(props) {
    const CityList = () => {
        if (props.cities) return props.cities.map( (entry,index) => <option key={index}>{entry}</option> );
        else return <option>São Paulo</option>;
    }
    const RegionList = () => {
        return regions.map( (entry,index) => <li><Checkbox key={index} label={entry} /></li> );
    }
    return (
        <div className='filterView'>
            <h2>Filtrar Por</h2>
            <p>Cidade</p>
            <div style={{textAlign: 'center', marginBottom: 36}}>
                <span style={{
                    color: '#2DA661',
                    position: 'relative',
                    left: 44,
                    verticalAlign: 'middle'
                }}>{Icon.location}</span>
                <select>
                { CityList() }
                </select>
                <span></span>
            </div>
            <form>
                <fieldset>
                    <legend>Região</legend>
                    <ul>
                    { RegionList() }
                    </ul>
                </fieldset>
                <fieldset>
                    <legend>Valor mínimo e máximo <span>(R$)</span></legend>
                    <MultiSlider min={50} max={200} handlers={[60, 100]} style={{marginLeft: 56, marginBottom: 66}} />
                    <Checkbox label='Faz entrega?' style={{color: '#105D32', fontWeight: '500', marginLeft: 52}}/>
                </fieldset>
            </form>
        </div>
    )
}
