import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartItem, Items } from 'components/items';
import { Header } from 'main/Header';
import { MainPageContainer } from 'components/mainPage';
import { History, Login, Logout, Registration } from 'headerComponents';
import { AmmoCart, Ammos } from 'components/ammos';
import { ArmorCart, Armors } from 'components/armors';

const Main = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPageContainer />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="history" element={<History />} />
        <Route path="logout" element={<Logout />} />
        <Route path="ammos" element={<Ammos />} />
        <Route path="ammos/:itemId" element={<AmmoCart />} />
        <Route path="armors" element={<Armors />} />
        <Route path="armors/:itemId" element={<ArmorCart />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:itemId" element={<CartItem />} />
        <Route path="*" element={<h1>There's nothing here!</h1>} />
      </Routes>
    </div>
  );
};

export default Main;
