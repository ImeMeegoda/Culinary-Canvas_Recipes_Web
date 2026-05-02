import { useState, useMemo, useEffect } from 'react';
import './index.css';
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';
import Modal from './components/Modal';
import type { Recipe } from './types';

// Polyfill for view transition api
const flushSyncAndTransition = (callback: () => void) => {
  if (!document.startViewTransition) {
    callback();
    return;
  }
  document.startViewTransition(callback);
};

function App() {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('default');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  
  // Local storage persistence
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('recipe_favorites');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('recipe_theme');
    return saved ? JSON.parse(saved) : true;
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('recipe_favorites', JSON.stringify(Array.from(favorites)));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('recipe_theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const filterOptions = ['All', 'Vegetarian', 'Meat', 'Dessert', 'Quick', 'Favorites'];

  const filteredRecipes = useMemo(() => {
    let result = recipes.filter(r => {
      const matchSearch = r.title.toLowerCase().includes(search.toLowerCase());
      const matchFilter = 
        filter === 'All' ? true : 
        filter === 'Favorites' ? favorites.has(r.id) :
        r.tags.includes(filter);
      return matchSearch && matchFilter;
    });

    if (sortBy === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'time') {
      result.sort((a, b) => {
        const timeA = parseInt(a.time) || 0;
        const timeB = parseInt(b.time) || 0;
        return timeA - timeB; // Ascending time
      });
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [filter, search, favorites, sortBy]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFav = new Set(prev);
      if (newFav.has(id)) newFav.delete(id);
      else newFav.add(id);
      return newFav;
    });
  };

  const handleFilterSelect = (option: string) => {
    flushSyncAndTransition(() => {
      setFilter(option);
    });
  };
  
  const toggleTheme = () => {
    flushSyncAndTransition(() => {
      setIsDarkMode(!isDarkMode);
    });
  };

  return (
    <div className={`app-container ${!isDarkMode ? 'light-mode' : ''}`}>
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <header className="header">
        <div className="header-top">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
        <h1>Culinary Canvas</h1>
        <p>A premium collection of handcrafted recipes to elevate your dining experience.</p>
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search recipes..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select 
            className="sort-select" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort by...</option>
            <option value="rating">Top Rated</option>
            <option value="time">Fastest to Cook</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </header>

      <main className="main-content">
        <div className="filter-container">
          {filterOptions.map(option => (
            <button
              key={option}
              className={`filter-btn ${filter === option ? 'active' : ''}`}
              onClick={() => handleFilterSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onView={() => setSelectedRecipe(recipe)}
              isFavorite={favorites.has(recipe.id)}
              onToggleFavorite={(e) => toggleFavorite(recipe.id, e)}
            />
          ))}
          {filteredRecipes.length === 0 && (
            <div className="empty-state">
              <p>No recipes found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      {selectedRecipe && (
        <Modal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}

export default App;
