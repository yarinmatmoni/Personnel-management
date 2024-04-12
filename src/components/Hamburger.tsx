export const Hamburger = ({
  onMenuClick,
  isOpen,
}: {
  onMenuClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <div className="container" onClick={onMenuClick} data-is-open={isOpen}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  );
};
