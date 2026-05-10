import type { Recipe } from '../types';
import { useEffect, useState } from 'react';

interface Props {
  recipe: Recipe;
  onClose: () => void;
}

export default function Modal({ recipe, onClose }: Props) {
  const [servings, setServings] = useState(recipe.servings);
  const [cookMode, setCookMode] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(() => recipe.ingredients.map(() => false));

  // Prevent scrolling on background when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    setChecked(recipe.ingredients.map(() => false));
    setServings(recipe.servings);
  }, [recipe]);

  const handleCheck = (idx: number) => {
    setChecked(prev => prev.map((c, i) => (i === idx ? !c : c)));
  };

  const scaleIngredient = (ing: string) => {
    if (servings === recipe.servings) return ing;
    const ratio = servings / recipe.servings;
    // Simple regex to find numbers/fractions at the start of the string
    return ing.replace(/^(\d+(\.\d+)?)/, (match) => {
      const num = parseFloat(match);
      return (num * ratio).toFixed(1).replace(/\.0$/, '');
    });
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href + `#recipe-${recipe.id}`);
      alert('Recipe link copied!');
    } catch {
      alert('Could not copy link.');
    }
  };

  // Print-only rendering logic
  useEffect(() => {
    const handleBeforePrint = () => {
      // Logic for print handling if needed, but browser window.print() usually handles the visible modal well.
    };
    window.addEventListener('beforeprint', handleBeforePrint);
    return () => window.removeEventListener('beforeprint', handleBeforePrint);
  }, []);

  return (
    <div className={`modal-overlay ${cookMode ? 'cook-mode-active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-controls">
          <button className="cook-mode-toggle" onClick={() => setCookMode(!cookMode)}>
            {cookMode ? '📖 View Details' : '👨‍🍳 Cook Mode'}
          </button>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {!cookMode && (
          recipe.image ? (
            <img src={recipe.image} alt={recipe.title} className="modal-hero" />
          ) : (
            <div className="modal-hero emoji-bg">{recipe.emoji}</div>
          )
        )}

        <div className="modal-body">
          <div className="modal-header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="modal-title">{recipe.title}</h2>
              {recipe.rating && (
                <div className="modal-rating star">
                  ★ {recipe.rating}
                </div>
              )}
            </div>
            <div className="modal-meta">
              <span className="meta-item">⏱ {recipe.time}</span>
              <span className="meta-item">🔥 {recipe.calories} kcal</span>
              <span className="meta-item difficulty-badge">{recipe.difficulty}</span>
              <div className="servings-adjuster">
                <span>🍽 Servings:</span>
                <button onClick={() => setServings(Math.max(1, servings - 1))}>-</button>
                <span className="servings-count">{servings}</span>
                <button onClick={() => setServings(servings + 1)}>+</button>
              </div>
            </div>
          </div>
          <div className="modal-sections">
            <div className="section">
              <h3 className="modal-section-title">Ingredients</h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>
                    <label style={{ cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={checked[i]}
                        onChange={() => handleCheck(i)}
                        aria-label={`Check ingredient: ${ing}`}
                        style={{ marginRight: 8 }}
                      />
                      <span style={{ textDecoration: checked[i] ? 'line-through' : undefined }}>
                        {scaleIngredient(ing)}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="section">
              <h3 className="modal-section-title">Instructions</h3>
              <ol className="steps-list">
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="modal-footer" style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="print-btn" onClick={() => window.print()} aria-label="Print recipe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              Print Recipe
            </button>
            <button className="share-btn" onClick={handleShare} aria-label="Share recipe">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              Share Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
