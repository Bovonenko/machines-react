import './navigation.scss';

const Navigation = ({items}) => {
    return (
        <div className="app__nav">
            <ul className='app__menu'>
                {items}
            </ul>
        </div>
    )
}

export default Navigation;