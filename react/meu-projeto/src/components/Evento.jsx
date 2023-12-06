import Button from './evento/Button';

const Evento = ({numero}) => {

    function meuEvento(){
        console.log(`Ativando primeiro evento!`);
    }
    function segundoEvento(){
        console.log('Ativando segundo evento!');
    }

    return(
        <>
            <p>Clique para disparar um Evento: </p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </>
    )
}

export default Evento;