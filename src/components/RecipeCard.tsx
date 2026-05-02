import type { Recipe } from '../types';

interface Props {
  recipe: Recipe;
  onView: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
}

export default function RecipeCard({ recipe, onView, isFavorite, onToggleFavorite }: Props) {
  return (
    <div className="recipe-card" onClick={onView} style={{ cursor: 'pointer', viewTransitionName: `card-${recipe.id}` }}>
      <div className="card-image-container">
        {recipe.image ? (
          <img src={recipe.image} alt={recipe.title} className="card-image" />
        ) : (
          <div className="card-emoji-fallback">{recipe.emoji}</div>
        )}
        <div className="time-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          {recipe.time}
        </div>
        <button 
          className={`favorite-btn ${isFavorite ? 'filled' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(e);
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? 'var(--primary)' : 'none'} stroke={isFavorite ? 'var(--primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div className="card-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <h3 className="card-title">{recipe.title}</h3>
          {recipe.rating && (
            <div className="rating">
              <span className="star">★</span> {recipe.rating}
            </div>
          )}
        </div>
        <div className="card-tags">
          {recipe.tags.slice(0, 3).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="card-footer">
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {recipe.servings} servings
          </span>
          <button className="view-btn">
            View Recipe
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
