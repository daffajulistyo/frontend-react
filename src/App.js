
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import ManajemenBuku from './components/ManajemenBuku';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([
      {_id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 5},
      {_id: 2, judul: "Bumi", pengarang: "Tere Liye", harga: 85000, stok: 4},
  ]);

  function storeData(inputBook){
    console.log(inputBook);
    alert("Data Berhasil Ditambahkan!!");
  }

  function updateData(inputBook){
    console.log(inputBook);
    alert("Data Berhasil Diperbarui");
  }

  function deleteData(book){
    console.log(book);
    alert("Data Berhasil Dihapus");
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Beranda />
        </Route>
        <Route path="/manajemen-buku">
          <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData}/>

        </Route>
      </Switch>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
