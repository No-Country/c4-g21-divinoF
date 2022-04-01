const Register = () => {
    const registerOk = () => {
        alert("Te registraste con éxito. Disfrutá de Di-Vino");
    };
    return (
        <div
            className="div-bg"
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
            }}
        >
            <div className="cont container d-flex flex-column align-items-center justify-content-evenly col-9 col-s-6 col-md-4">
                <h1 className="fs-3">REGISTER</h1>
                <div className="d-flex flex-column">
                    <div className="d-flex">
                        <div>I</div>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                        ></input>
                    </div>
                    <div className="d-flex">
                        <div>I</div>
                        <input type="text" placeholder="Nombres"></input>
                    </div>
                    <div className="d-flex">
                        <div>I</div>
                        <input type="text" placeholder="Apellidos"></input>
                    </div>
                    <div className="d-flex">
                        <div>I</div>
                        <input
                            type="text"
                            placeholder="Subí tu foto de perfil"
                        ></input>
                    </div>
                    <div className="d-flex">
                        <div>I</div>
                        <input type="password" placeholder="Contraseña"></input>
                        <div>V</div>
                    </div>
                    <div className="d-flex">
                        <div>I</div>
                        <input
                            type="password"
                            placeholder="Confirmá tu contraseña"
                        ></input>
                        <div>V</div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={registerOk}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;
