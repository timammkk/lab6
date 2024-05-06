function Team(props) {
    let colorClass = "";
    if (props.trophies > 10) {
        colorClass = "alert alert-success";
    } else if (props.trophies < 10 && props.trophies > 0) {
        colorClass = "alert alert-warning";
    } else {
        colorClass = "alert alert-danger";
    }

    return (
        <p className={`text-white display-12 ${colorClass}`}>
            {props.name} a remporté {props.trophies} trophées.
        </p>
    );
}

export default Team;