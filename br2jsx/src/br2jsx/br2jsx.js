import "./br2jsx.css";
const Wrapper = (props) => props.children;

const BR2JSX = (props) => {
  var res = props.text
    .replace(/<br[^>]*>/g, "*")
    .split("*")
    .map((item, index, items) => {
      return (
        <Wrapper key={index}>
          {item} {items.length - 1 === index ? null : <br />}
        </Wrapper>
      );
    });

  return <div className={"br2jsx"}>{res}</div>;
};

export default BR2JSX;
