import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'ch', lang: '中文' },
  { code: 'ms', lang: 'Bahasa Melayu'},
  { code: 'ta', lang: "தமிழ்"},
  { code: 'jpn', lang: "日本語"},

];

const changeLanguage = (lng, i18n) => {
  i18n.changeLanguage(lng);
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="btn-contain">
      {languages.map((lng) => (
        <button
          key={lng.code}
          className={lng.code === i18n.language ? 'selected' : ''}
          onClick={() => changeLanguage(lng.code, i18n)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
