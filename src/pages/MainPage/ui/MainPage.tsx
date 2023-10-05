import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();

  return (
    <div>
      {t('новый перевод')}
      {t('Главная страница')}
    </div>
  );
}

export default MainPage;
