import vinedo from "../assets/viñedo-1.png";
import wineImage1 from "../assets/WineImage.png";
import wineImage2 from "../assets/image-12.png";
import Bodega1 from "../assets/image-5.png";
import Bodega2 from "../assets/image-7.png";
import IconPatrocinio1 from "../assets/image-1.png";
import IconPatrocinio2 from "../assets/image-2.png";
import IconPatrocinio3 from "../assets/image-3.png";
import IconPatrocinio4 from "../assets/image-4.png";
import IconPatrocinio9 from "../assets/image-9.png";
import IconPatrocinio10 from "../assets/image-10.png";
import IconPatrocinio11 from "../assets/image-11.png";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const Content = () => {
    return (
        <div className="container" >
            <DrawerHeader />
            <div className="events">
                            
                <Typography paragraph variant="h3" className="Title-landing" >
                    Próximos eventos
                </Typography>
                <img src={vinedo} alt="icon" />
                <Typography paragraph>
                    Viñendo Nébula
                </Typography>
            </div>
            <div>
                <Typography paragraph variant="h4">
                    Vino destacado de la semana
                    {/* <Typography paragraph variant="h5"> */}
                    <h5>
                        Paua Bau Rico aroma, con impronta y de final amable. En
                        nariz se destaca mucha fruta fresca roja, de intensidad
                        media en boca lo que lo convierte en un tinto fácil de
                        tomarlo.
                    </h5>
                    {/* </Typography> */}
                    <img src={wineImage1} alt="icon" />
                </Typography>
            </div>
            <div className="store">
                    <Typography variant="h4" className="Title-landing">
                        Bodegas destacadas
                    </Typography>
                
                    <Typography>
                        Desde sus inicios, la bodega persigue un camino
                        fuertemente marcado por su obsesión y respeto por la
                        naturaleza. Los pilares fundamentales de la producción
                        en Achaval-Ferrer, tienen foco en la mínima intervención
                        necesaria entre la tierra y la copa. 
                        <img src={Bodega1} alt="icon" />
                    </Typography>
                   
                
                
                    <Typography>
                        Nuestros vinos tienen un delicado equilibrio entre
                        azúcar y acidez. Las uvas blancas nos regalan vinos
                        etéreos y aromáticos, mientras los tintos son robustos y
                        expresivos. Todos revelan un estilo definido y
                        equilibrado entre el clasismo y la modernidad. Cada uno
                        de nuestros vinos contiene el espíritu y la esencia de
                        la tierra patagónica.
                        <img src={Bodega2} alt="icon" />
                    </Typography>
                    
                
            </div>

            <div>
                <img src={wineImage1} alt="icon" />
                <img src={wineImage2} alt="icon" />
            </div>

            <div>
                <Typography variant="h4" className="Title-landing">
                    Bodegas partner
                </Typography>
                <img src={IconPatrocinio1} alt="icon" />
                <img src={IconPatrocinio2} alt="icon" />
                <img src={IconPatrocinio3} alt="icon" />
                <img src={IconPatrocinio4} alt="icon" />

                <img src={IconPatrocinio9} alt="icon" />
                <img src={IconPatrocinio10} alt="icon" />
                <img src={IconPatrocinio11} alt="icon" />
            </div>
        </div>
    );
};
export default Content;
