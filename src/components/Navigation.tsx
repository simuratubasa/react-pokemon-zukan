// src/components/Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const pathname = window.location.pathname;

  return (
    <nav style={{
      backgroundColor: '#f3f4f6',
      padding: '1rem'
    }}>
      <ul style={{
        display: 'flex',
        gap: '1rem',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        {/* 一覧画面の場合は一覧ボタンを非表示 */}
        {
          pathname !== '/' && pathname !== '/react-pokemon-zukan/' && (
            <li>
              <Link 
                to="/" 
                style={{
                  color: '#3b82f6',
                  textDecoration: 'none'
                }}
              >
                {"< "}一覧
              </Link>
            </li>
          )
        }
        {/* 追加のナビゲーションリンクをここに記載 */}
      </ul>
    </nav>
  );
};

export default Navigation;

