export default function Form({onSubmit}) {
  return (
    <form className="notes__form" action="" onSubmit={onSubmit}>
      <textarea className="notes__form-textarea" name="content"></textarea>
      <button className="notes__form-button">Add</button>
    </form>
  );
}