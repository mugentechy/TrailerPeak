import Nav from './nav';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet /> {/* Renders the nested routes */}
    </>
  );
}