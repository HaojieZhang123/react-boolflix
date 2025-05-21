import ReactCountryFlag from "react-country-flag";

const flag = (lang) => {
    let code = lang.toUpperCase();
    const codesCorrection = {
        EN: "US",
        CS: "CZ",
        JA: "JP",
        DA: "DK",
        KO: "KR",
        ZH: "CN",
        UR: "PK",
        HI: "IN",
        AB: "GE",
        KA: "GE",
        EL: "GR",
        HE: "IL"
    };
    code = codesCorrection[code] ? codesCorrection[code] : code;
    return <ReactCountryFlag countryCode={code} />;
};

const starredVotes = (vote_average) => {
    let stars = []

    // vote is 10 based. round the vote_average to the nearest integer
    // then divide it by to to round it to the nearest 0.5
    for (let i = 0; i < Math.round(vote_average) / 2; i++) {
        stars.push('full')
    }

    // check if there is any half star
    if (Math.round(vote_average) % 2 !== 0) {
        stars.push('half')
    }

    // console.log(stars)
    // console.log(stars.length)
    const currentStars = stars.length

    // check if there is any empty star
    for (let i = 0; i < 5 - currentStars; i++) {
        stars.push('empty')
    }

    // return the stars
    return stars.map((star, index) => {
        return <span key={index} className="stars">
            {star === 'full' && <i className="fa-solid fa-star"></i>}
            {star === 'half' && <i className="fa-solid fa-star-half-stroke"></i>}
            {star === 'empty' && <i className="fa-regular fa-star"></i>}
        </span>
    })
}

const starVotes = (vote_average) => {
    // alternative to starredVotes with less for cycles
    // total stars to display
    const total = 5;
    const rating = Math.round(vote_average) / 2;

    const stars = [];

    for (let i = 0; i < total; i++) {
        if (rating - i >= 1) {
            stars.push('full');
        } else if (rating - i === 0.5) {
            stars.push('half');
        } else {
            stars.push('empty');
        }
    }

    return stars.map((star, index) => {
        return <span key={index} className="stars">
            {star === 'full' && <i className="fa-solid fa-star"></i>}
            {star === 'half' && <i className="fa-solid fa-star-half-stroke"></i>}
            {star === 'empty' && <i className="fa-regular fa-star"></i>}
        </span>
    })

}

const ShowCard = ({ show }) => (
    <div className="movieCard">
        <img
            src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
            alt={show.title || show.name}
        />
        <div className="movieCard-overlay">
            <h2>{show.title || show.name}</h2>
            <p><strong>Original title:</strong> {show.original_title || show.original_name}</p>
            <div>
                {flag(show.original_language)}
                <br />
                {starVotes(show.vote_average)} ({show.vote_count})
            </div>
            <p className="overview">{show.overview}</p>
        </div>
    </div>
);

export default ShowCard;