import "./Movie.css";

export function Movie(props){
return (<div id="movie-container">
    <img id="poster" src={props.poster}/>
    <div>
        <p id="name">{props.name}</p>
        <p>{props.release}</p>
        <p>{props.genre}</p>
        <p>{props.director}</p>
    </div>
</div>)
}