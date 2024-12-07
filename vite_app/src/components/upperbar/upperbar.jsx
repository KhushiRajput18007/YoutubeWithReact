import './upperbar.css';

const upperbar = () => {
  return (
<>
    <div className="main-page">
      <div className="sugge">
        {['All', 'Coke Studio', 'UK', 'Case Study', 'Music', 'Bangla Lofi', 'Tour', 'Saintmartin', 'Tech', 'iPhone 13', 'UI Design'].map((tag) => (
          <div className="tag" key={tag}>{tag}</div>
        ))}
      </div>
      </div>
      </>
)
}
 export default upperbar;