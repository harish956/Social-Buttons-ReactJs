const Button = (props) => {
  //  Write your code here.
  const { text, name } = props;
  return <button className={`${name} button`}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="inner-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttonContainer">
        <Button text="Like" name="likeButton" />
        <Button text="Comment" name="commentButton" />
        <Button text="Share" name="shareButton" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
