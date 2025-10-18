// src/components/pokemonTypeLabel.tsx
// ポケモンのタイプのラベル
import { pokemonTypesMap } from '../pokemonTypesMap';

type PokemonTypeLabelProps = {
  type: string;
};

const PokemonTypeLabel: React.FC<PokemonTypeLabelProps> = ({ type }) => {
  const typeInfo = pokemonTypesMap.find((t) => t.jaType === type);
  return (
    <span 
      style={{
        backgroundColor: typeInfo?.color || '#6b7280',
        color: 'white',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        width: 'fit-content',
        fontSize: '0.875rem',
        fontWeight: '500',
        textAlign: 'center',
        display: 'inline-block'
      }}
      key={type}
    >
      {typeInfo?.jaType}
    </span>
  );
};

export default PokemonTypeLabel;
