import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      },
      {
        id: uuid.v4(),
        task: 'Find a job'
      }
    ];
  }
  create(note) {
    this.setState({
      notes: this.notes.concat(note)
    });
  }
  update(updatedNote) {
    this.setState({
      notes: this.notes.map(note => {
        if(note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote);
        }

        return note;
      })
    });
  }
  delete(id) {
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }
}

export default NoteStore;