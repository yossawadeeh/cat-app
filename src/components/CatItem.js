import './CatItem.css';

function CatItem(props) {
  //props = object เราสามารถสกัดตัวแปรได้เลย
  // const { title, thumbnailUrl } = props;
  const { cat, onCatClick } = props;


  return (
    <div className="cat-item">
      <img src={cat.thumbnailUrl} onClick={() => {onCatClick(cat)}}></img>
      <h4>{cat.title}</h4>
    </div>
  );
}

export default CatItem;
