interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OverlayMenu = ({ isOpen, onClose }: OverlayMenuProps) => {
  if (!isOpen) return null;

  return <div className="overlay-menu" onClick={onClose}></div>;
};
