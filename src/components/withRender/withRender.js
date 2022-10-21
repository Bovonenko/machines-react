import SingleMachine from '../singleMachine/SingleMachine';
import { v4 } from 'uuid';

const withRender = BaseComponent => props => {
    const renderData = (arr, icons = false) => {
        return arr.map(props => {
            return (
                <SingleMachine key={v4()} {...props} icons={icons}/>
            )
        })
    }
    const items = renderData(props.machines, props.icons);
    return <BaseComponent items={items} {...props} />
}

export default withRender;