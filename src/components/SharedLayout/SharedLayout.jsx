import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
