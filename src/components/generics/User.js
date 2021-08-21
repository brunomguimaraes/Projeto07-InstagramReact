export default function User(props) {
    return (
        <div class="usuario">
            <img src={props.userImage} />
            <div class="texto">
                <strong>{props.userHandle}</strong>
                {props.userName}
            </div>
        </div>
    );
}