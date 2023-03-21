import path from 'path';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import Footer from './layout/footer';
import HeaderPage from './layout/header';

export default function Index() {
  return (
    <>
      <Home/>
    </>
  )
}