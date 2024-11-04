import ContentLoader from 'react-content-loader';

const TitleSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={150}
    height={40}
    viewBox="0 0 150 40"
    backgroundColor="#222222"
    foregroundColor="#555555"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="150" height="40" />
    <rect x="0" y="308" rx="9" ry="9" width="118" height="16" />
    <rect x="0" y="331" rx="7" ry="7" width="56" height="12" />
    <rect x="0" y="352" rx="7" ry="7" width="87" height="9" />
  </ContentLoader>
);

export default TitleSkeleton;
