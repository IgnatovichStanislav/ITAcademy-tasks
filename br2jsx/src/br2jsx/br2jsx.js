import "./br2jsx.css";
// const Wrapper = (props) => props.children;

const BR2JSX = (props) => {
  var items = props.text.split(/<br[^>]*>/g);

  let res = [];
  for (let i = 0; i < items.length; i++) {
    res.push(items[i]);
    if (i !== items.length - 1) res.push(<br key={i} />);
  }
  
  return <div className={"br2jsx"}>{res}</div>;
};

export default BR2JSX;
