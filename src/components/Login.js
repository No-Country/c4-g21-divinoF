import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
    // Styling material components
    root: {
    color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(2),
      },
    },
    stylesImg: {
        color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,
          [theme.breakpoints.down("xs")]: {
            paddingTop: theme.spacing(2),
          },
        }
   
  }));


const Login = () => {
    const signIn = () => {
        alert("Te damos la bienvenida a Di-Vino");
    };

    const classes = useStyles();

    return (
        <div
            className={"div-bg"}
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
            }}
        >
            <div className="cont container d-flex flex-column align-items-center justify-content-evenly col-9 col-s-6 col-md-4">
                <h1 className="fs-3">LOG IN</h1>
                <div className="d-flex flex-column">
                    <div className="inputs d-flex">
                        <div>I</div>
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                        ></input>
                    </div>
                    <div className="d-flex">
                        <div>I</div>
                        <input type="password" placeholder="Contraseña"></input>
                        <div>V</div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={signIn}>
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
