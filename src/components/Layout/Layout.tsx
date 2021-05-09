import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Footer } from '../Footer';
import { NavBar } from '../NavBar';

export interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <section className="flex flex-col font-sans bg-ads-base">
      <NavBar />
      <main>
        <div className="container" id="main-content">
          {children}
        </div>
      </main>
      <Footer />
    </section>
  );
};