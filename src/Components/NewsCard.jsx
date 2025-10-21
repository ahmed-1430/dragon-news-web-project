import React from 'react';
import { FaEye, FaStar, FaFire, FaBookmark } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    others
  } = news;

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Generate star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-3 h-3 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Image Section */}
      <figure className="relative">
        <img 
          src={thumbnail_url} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {others?.is_today_pick && (
            <div className="badge badge-primary gap-1">
              <FaBookmark className="w-3 h-3" />
              Today's Pick
            </div>
          )}
          {others?.is_trending && (
            <div className="badge badge-secondary gap-1">
              <FaFire className="w-3 h-3" />
              Trending
            </div>
          )}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-lg font-bold line-clamp-2">
          {title}
        </h2>

        {/* Author Info */}
        <div className="flex items-center gap-3 mt-2">
          <div className="avatar">
            <div className="w-8 h-8 rounded-full">
              <img 
                src={author.img} 
                alt={author.name}
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 line-clamp-3">
          {details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="badge badge-outline badge-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats and Rating */}
        <div className="card-actions justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {renderStars(rating.number)}
            </div>
            <span className="text-sm font-medium">
              {rating.number}.0
            </span>
            {rating.badge === 'trending' && (
              <div className="badge badge-warning badge-sm">
                {rating.badge}
              </div>
            )}
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye className="w-4 h-4" />
            <span className="text-sm">{total_view.toLocaleString()}</span>
          </div>
        </div>

        {/* Read More Button */}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;