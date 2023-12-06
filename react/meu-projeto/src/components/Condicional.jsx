import {useState} from 'react';

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail(){
        setUserEmail('');
    }
    return(
        <div>
            <h2>Cadastre seu Email</h2>
            <form>
                <input type="text" placeholder="Digite seu Email..." onChange={(e) => setEmail(e.target.value)} />
                <button onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional