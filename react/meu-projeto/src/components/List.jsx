import Item from './Item';

const List = () =>{
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Alpharomeo" ano_lancamento={1987} />
                <Item marca="Ford" ano_lancamento={1984} />
                <Item />
            </ul>
        </>
    )
}

export default List;