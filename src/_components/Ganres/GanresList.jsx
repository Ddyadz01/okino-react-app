const GanresList = ({ styles, ganres, activeGanre, toggleGanre }) => {
  return (
    <div className={styles.ganres__list}>
      <ul>
        {ganres
          .filter((ganre) => activeGanre !== ganre.title)
          .map((ganre) => (
            <li key={ganre.id} onClick={() => toggleGanre(ganre.title)}>
              {ganre.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GanresList;
