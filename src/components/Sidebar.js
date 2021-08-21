import Sugestao from "./generics/Sugestao";
import User from "./generics/User";

export default function Sidebar() {
    const sugestoes = [
        {
            userImage: "assets/img/bad.vibes.memes.svg",
            userName: "bad.vibes.memes",
            reason: "Segue você"
        }, 
        {
            userImage: "assets/img/chibirdart.svg",
            userName: "chibirdart",
            reason: "Segue você"
        }, 
        {
            userImage: "assets/img/razoesparaacreditar.svg",
            userName: "razoesparaacreditar",
            reason: "Novo no Instagram"
        }, 
        {
            userImage: "assets/img/adorable_animals.svg",
            userName: "adorable_animals",
            reason: "Segue você"
        }, 
        {
            userImage: "assets/img/smallcutecats.svg",
            userName: "smallcutecats",
            reason: "Segue você"
        }
    ];
    return (
        <div class="sidebar">
            <User userImage="assets/img/catanacomics.svg" userHandle="catanacomics" userName="Catana" />

            <div class="sugestoes">

                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map(sugestao => <Sugestao userImage={sugestao.userImage} userName={sugestao.userName} reason={sugestao.reason} />)}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}