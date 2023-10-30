import './title.scss';

type TitleProp = {
  text: string;
  greenText: string;
};

const Title = ({ text, greenText }: TitleProp) => {
  return (
    <h2 className="main-title">
      {text}
      <span>{greenText}</span>
    </h2>
  );
};

export default Title;
