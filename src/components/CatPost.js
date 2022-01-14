import './CatPost.css';

function CatPost(props) {
    const { cat, onBgClick } = props;
    return (
        <div className="cat-post">
            <div className="cat-post-bg" onClick={onBgClick}/>
            <div className="cat-post-content">
                <img src={cat.fullUrl} />
                <h4>{cat.title}</h4>
            </div>
        </div>
    );
}

export default CatPost;