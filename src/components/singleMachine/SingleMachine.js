import CustomIcon from '../customIcon/CustomIcon';
const SingleMachine = ({name, state, icons}) => {
    let bgColor, textColor;

    switch (state) {
        case 'running':
            bgColor = '#dcdcdc';
            textColor = 'black';
            break;
        case 'warning':
            bgColor = '#ff9706';
            textColor = 'white';
            break;
        case 'alarm':
            bgColor = '#fe3736';
            textColor = 'white';
            break;
        default:
            bgColor = '#dcdcdc';
            textColor = 'black';
    }
    const bigIcon = icons ? <CustomIcon machineName={name} /> : null
    return (
        <li onClick={() => console.log(state)} className='app__menu-item' style={{backgroundColor: bgColor, color: textColor}}>
            {bigIcon}
            <div>{name}</div>
            <CustomIcon machineState={state} />
        </li>
    )

};

export default SingleMachine;