import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';

class App extends React.Component {

  render() {
    const {notes, myProp} = this.props;

    return (
      <div>
        <div>{myProp}</div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes notes={notes} 
          onNoteClick={this.activateNoteEdit} 
          onDelete={this.deleteNote} 
          onEdit={this.editNote} />
      </div>
    );
  }

  addNote = () => {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New task'
    });
  }

  activateNoteEdit = (id, e) => {
    this.props.NoteActions.update({id, editing: true});
  }

  editNote = (id, task) => {
    const {NoteActions} = this.props;
    NoteActions.update({id, task, editing: false});
  }

  deleteNote = (id, e) => {
    e.stopPropagation();
    this.props.NoteActions.delete(id);
  }
}


export default connect(({notes, dummy}) => ({
  notes, 
  myProp: dummy.prop1
}), {
  NoteActions
})(App)