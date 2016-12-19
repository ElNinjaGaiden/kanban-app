import NoteStore from '../../stores/NoteStore';
import DummyStore from '../../stores/DummyStore';

export default alt => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('DummyStore', DummyStore);
}