export default function Note({item, onDelete}) {
  return (
    <div className="notes__item">
      <button className="notes__item-button" type="button" onClick={() => onDelete(item.id)}>Delete</button>
      <div className="notes__item-text">{item.content}</div>
    </div>
  );
}