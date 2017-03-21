import React      from 'react';
import BookList   from '../containers/bookList';
import BookDetail from '../containers/bookDetail';


class App extends React.Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
