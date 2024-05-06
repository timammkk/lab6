function Message(props) {
    return (
    <p className="bg-primary text-white display-12">
        This a message from <b>{props.name}</b> who is a <b>{props.job}</b>, 
        and he is <b>{props.age}</b> years old.
    </p>
);
}
export default Message;