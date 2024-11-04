import ContentLoader from 'react-content-loader';

const FilmSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={413}
    viewBox="0 0 220 413"
    backgroundColor="#222222"
    foregroundColor="#555555"
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="8" width="220" height="304" />
    <rect x="0" y="315" rx="2" ry="2" width="118" height="12" />
    <rect x="0" y="335" rx="2" ry="2" width="56" height="12" />
    <rect x="0" y="360" rx="2" ry="2" width="87" height="9" />
  </ContentLoader>
);

export default FilmSkeleton;
