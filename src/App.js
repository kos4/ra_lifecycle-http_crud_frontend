import './App.css';
import Form from "./components/Form/Form";
import {Component} from "react";
import Note from "./components/Note/Note";
import Api from "./Api";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };

    this.api = new Api();
  }
  componentDidMount() {
    this.updateData();
  }

  updateData() {
    this.api.getData(this.setData.bind(this));
  }

  setData(response) {
    if (response.ok) {
      response.json().then(data => this.setState({
        notes: data
      }));
    }
  }

  handlerSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    event.target.reset();

    this.api.addData(data, this.saveNotes.bind(this));
  }

  saveNotes(response) {
    if (response.ok) {
      this.updateData();
    }
  }

  handlerUpdate() {
    this.updateData();
  }

  handlerDelete(id) {
    this.api.deleteData(id, this.deleteNote.bind(this));
  }

  deleteNote(response) {
    if (response.ok) {
      this.updateData();
    }
  }

  render() {
    return (
      <div className="notes">
        <div className="notes__head">
          <div className="notes__title">Notes</div>
          <button className="notes__head-button" type="button" onClick={this.handlerUpdate.bind(this)}>Update</button>
        </div>
        <div className="notes__list">
          {
            this.state.notes.map(item => {
              return (
                <Note key={item.id} item={item} onDelete={this.handlerDelete.bind(this)}/>
              );
            })
          }
        </div>
        <Form onSubmit={this.handlerSubmit.bind(this)}/>
      </div>
    );
  }
}
