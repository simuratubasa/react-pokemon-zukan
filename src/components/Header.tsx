// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const pokeballSvg = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2020.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Pok%C3%A9ball'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20595.3%20594.1'%20style='enable-background:new%200%200%20595.3%20594.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20.st1{fill:%23DFDFDF;}%20.st2{fill:%23FF1C1C;}%20.st3{fill:%23DF1818;}%20%3c/style%3e%3cg%20id='Pok%C3%A9ball_1_'%3e%3cg%20id='Colours'%3e%3cpath%20id='Down'%20class='st0'%20d='M297.6,380.9c-40.4,0-74.1-28.6-82.1-66.6H81.1c9.5,110.5,102.2,197.2,215.1,197.2%20s205.7-86.7,215.1-197.2H379.7C371.7,352.4,338,380.9,297.6,380.9z'/%3e%3cpath%20id='Shadow_Down'%20class='st1'%20d='M345.6,505.9c89.6-21,157.7-97.7,165.7-191.6h-53C453,399.5,408.3,471.7,345.6,505.9z'/%3e%3cpath%20id='Center'%20class='st0'%20d='M347.1,297L347.1,297C347,297,347,297,347.1,297c-0.1-6.1-1.2-11.9-3.2-17.3%20c-7-18.8-25.1-32.1-46.3-32.1s-39.3,13.4-46.3,32.1c-2,5.4-3.1,11.2-3.1,17.3c0,0,0,0,0,0h0.1c0,0,0,0,0,0%20c0,6.1,1.1,11.9,3.1,17.3c7,18.8,25.1,32.1,46.3,32.1c21.2,0,39.3-13.4,46.3-32.1C346,309,347.1,303.1,347.1,297%20C347.1,297,347.1,297,347.1,297z'/%3e%3cpath%20id='Up'%20class='st2'%20d='M297.7,213.2c40.4,0,74.1,28.6,82.1,66.6h134.4C504.7,169.2,412,82.5,299,82.5S93.4,169.2,83.9,279.7%20h131.7C223.6,241.7,257.3,213.2,297.7,213.2z'/%3e%3cpath%20id='Shadow_Up'%20class='st3'%20d='M458.3,279.7h55.8c-8.2-95.5-78.6-173.3-170.5-192.6C407.4,120.8,452.9,193.7,458.3,279.7z'/%3e%3c/g%3e%3cpath%20id='Line'%20d='M299,82.5c113,0,205.7,86.7,215.1,197.2H379.7c-8-38-41.7-66.6-82.1-66.6c-40.4,0-74.1,28.6-82.1,66.6H83.9%20C93.4,169.2,186.1,82.5,299,82.5z%20M343.9,279.7c2,5.4,3.1,11.2,3.1,17.3c0,0,0,0,0,0h0.1c0,0,0,0,0,0c0,6.1-1.1,11.9-3.1,17.3%20c-7,18.8-25.1,32.1-46.3,32.1c-21.2,0-39.3-13.4-46.3-32.1c-2-5.4-3.1-11.2-3.1-17.3c0,0,0,0,0,0h-0.1c0,0,0,0,0,0%20c0-6.1,1.1-11.9,3.1-17.3c7-18.8,25.1-32.1,46.3-32.1S336.9,261,343.9,279.7z%20M296.2,511.6c-113,0-205.7-86.7-215.1-197.2h134.4%20c8,38,41.7,66.6,82.1,66.6s74.1-28.6,82.1-66.6h131.7C501.9,424.8,409.2,511.6,296.2,511.6z%20M297.6,41.3%20C156.4,41.3,41.9,155.8,41.9,297s114.5,255.7,255.7,255.7S553.4,438.3,553.4,297S438.9,41.3,297.6,41.3z'/%3e%3c/g%3e%3c/svg%3e";
  
  return (
    <header style={{
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '1rem'
    }}>
      <div style={{
        width: '100%',
        padding: '0 0 0 1rem',
        position: 'relative'
      }}>
        <h1 style={{
          fontSize: '1.75rem',
          lineHeight: '2.25rem',
          margin: 0
        }}>
          <Link 
            to="/" 
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <img 
              src={pokeballSvg}
              alt="モンスターボール" 
              style={{
                width: '2rem',
                height: '2rem',
                position: 'relative'
              }}
            />
            ポケモン図鑑
          </Link>
        </h1>
        <Link 
          to="/" 
          style={{
            position: 'absolute',
            bottom: '-2.25rem',
            left: '1rem',
            color: '#3b82f6',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#3b82f6';
          }}
        >
          ＜一覧
        </Link>
      </div>
    </header>
  );
};

export default Header;

