// src/pages/PokemonDetail.tsx
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../api/pokemonDetail';
import PokemonTypeLabel from '../components/PokemonTypeLabel';
import { apiQueryKeys } from '../queryKeys';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PokemonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: [apiQueryKeys.pokemon.detail(Number(id))],
    queryFn: () => fetchPokemonDetail(Number(id)),
    enabled: !!id,
  });

  useEffect(() => {
    console.log(data);
  }, [data])

  if (isLoading) return <PokemonDetailSkeleton />;
  if (error instanceof Error) return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      color: '#dc2626',
      fontSize: '1.125rem'
    }}>
      エラー: {error.message}
    </div>
  );
  if (!data) return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '1.125rem'
    }}>
      ポケモンが見つかりません
    </div>
  );

  return (
    <div style={{
      padding: '1rem',
      maxWidth: '500px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* 一覧に戻るボタン */}
      <div style={{
        marginBottom: '1rem'
      }}>
        <Link 
          to="/" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            borderRadius: '0.375rem',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'background-color 0.2s ease',
            border: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#3b82f6';
          }}
        >
          ← 一覧に戻る
        </Link>
      </div>
 
      <div style={{
        marginTop: '1rem',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <img 
          src={data.image} 
          alt={data.japaneseName} 
          style={{
            width: '10rem',
            height: '10rem',
            objectFit: 'contain'
          }}
        />
        <h1 style={{
          marginTop: '1rem',
          fontSize: '1.5rem',
          fontWeight: '700',
          textAlign: 'center',
          margin: 0
        }}>
          {data.japaneseName} (#{data.id})
        </h1>
        <p style={{
          marginTop: '0.5rem',
          textAlign: 'justify',
          lineHeight: '1.6',
          margin: '0.5rem 0'
        }}>
          {data.description}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.25rem',
          width: '100%',
          justifyItems: 'center'
        }}>
          {data?.types?.map((type) => (
            <PokemonTypeLabel key={type} type={type} />
          ))}
        </div>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem'
        }}>
          <span style={{
            width: '100%',
            textAlign: 'center',
            fontWeight: '600'
          }}>
            特性
          </span>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.25rem',
            width: '100%',
            justifyItems: 'center'
          }}>
            {data?.abilities?.map((ability) => (
              <span 
                key={ability}
                style={{
                  fontSize: '0.875rem'
                }}
              >
                {ability}
              </span>
            ))}
          </div>
        </div>
        <div style={{
          marginTop: '1rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0.5rem',
          width: '100%'
        }}>
          {data?.baseStats?.map((stat) => (
            <div 
              key={stat.name} 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{
                width: '6rem',
                textAlign: 'right',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}>
                {stat.name}
              </span>
              <div style={{
                flex: 1,
                backgroundColor: '#e5e7eb',
                borderRadius: '9999px',
                height: '1rem',
                overflow: 'hidden'
              }}>
                  <div
                    style={{
                      backgroundColor: '#2563eb',
                      borderRadius: '9999px',
                      height: '100%',
                      width: `${(stat.value / 255) * 100}%`,
                      transition: 'width 0.3s ease'
                    }}
                  ></div>
                </div>
              <span style={{
                marginLeft: '0.5rem',
                width: '2rem',
                textAlign: 'right',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                {stat.value}
              </span>
            </div>
          ))}
          {/* 合計種族値 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '0.5rem',
            marginTop: '0.5rem'
          }}>
            <span style={{
              width: '6rem',
              textAlign: 'right',
              fontSize: '0.875rem',
              fontWeight: '700'
            }}>
              合計
            </span>
            <div style={{
              flex: 1,
              backgroundColor: '#e5e7eb',
              borderRadius: '9999px',
              height: '1rem',
              overflow: 'hidden'
            }}>
              <div
                style={{
                  backgroundColor: '#2563eb',
                  borderRadius: '9999px',
                  height: '100%',
                  width: `${(data?.baseStats?.reduce((sum, stat) => sum + stat.value, 0) / 780) * 100}%`,
                  transition: 'width 0.3s ease'
                }}
              ></div>
            </div>
            <span style={{
              marginLeft: '0.5rem',
              width: '2rem',
              textAlign: 'right',
              fontSize: '0.875rem',
              fontWeight: '700'
            }}>
              {data?.baseStats?.reduce((sum, stat) => sum + stat.value, 0)}
            </span>
          </div>
        </div>
        
        {/* ナビゲーションボタン */}
        <div style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '3rem',
          width: '100%'
        }}>
          <div>
            {Number(id) !== 1 && (
              <Link 
                to={`/pokemon/${Number(id) - 1}`} 
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '0.375rem',
                  textDecoration: 'none'
                }}
              >
                前へ
              </Link>
            )}
          </div>
          <Link 
            to={`/pokemon/${Number(id) + 1}`} 
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.375rem',
              textDecoration: 'none'
            }}
          >
            次へ
          </Link>
        </div>
      </div>
    </div>
  );
};

const PokemonDetailSkeleton: React.FC = () => {
  return (
    <div style={{
      padding: '1rem',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <div style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#3b82f6',
        color: 'white',
        borderRadius: '0.375rem',
        marginBottom: '1rem',
        width: '6rem',
        height: '2.5rem'
      }}>
        <Skeleton />
      </div>
      <div style={{
        marginTop: '1rem',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <Skeleton circle={true} width={160} height={160} />
        <Skeleton width={200} height={24} />
        <Skeleton width={300} height={60} />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.5rem',
          width: '100%'
        }}>
          <Skeleton width={100} height={24} />
          <Skeleton width={100} height={24} />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.5rem',
          width: '100%'
        }}>
          <Skeleton width={100} height={24} />
          <Skeleton width={100} height={24} />
        </div>
        <div style={{
          marginTop: '1rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '0.5rem',
          width: '100%'
        }}>
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Skeleton width={60} height={20} />
              <div style={{ flex: 1, marginLeft: '0.5rem' }}>
                <Skeleton height={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Skeleton width={80} height={36} />
        <Skeleton width={80} height={36} />
      </div>
    </div>
  );
};

export default PokemonDetail;

