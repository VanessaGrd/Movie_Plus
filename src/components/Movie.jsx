

export default function Movie({movie}){
if (movie)
    return(
        <div>
            <h2>{movie.original_title}</h2>
        </div>

    );
    return null;
    };
    
