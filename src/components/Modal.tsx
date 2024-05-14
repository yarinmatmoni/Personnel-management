export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="modal">
      <div className="modal-container">{children}</div>
    </div>
  );
};
