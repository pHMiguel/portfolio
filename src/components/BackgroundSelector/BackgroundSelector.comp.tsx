import { useState } from "react";

import styles from "./BackgroundSelector.module.scss";
import ColorLensIcon from "@mui/icons-material/ColorLens";

interface BackgroundSelectorProps {
  onBackgroundChange: (selectedBackground: string) => void;
}

const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({
  onBackgroundChange,
}) => {
  const [background, setBackground] = useState("1");

  const handleBackgroundChange = (selectedBackground: any) => {
    setBackground(selectedBackground);
    onBackgroundChange(selectedBackground);
  };
  return (
    <div className={styles.backgroundSelector}>
      <div className={styles.backgroundButton}>
        <ColorLensIcon fontSize="large" />
      </div>
      <div className={styles.backgroundOptions}>
        <a
          className={styles.categorySelector}
          onClick={() => handleBackgroundChange("1")}
        >
          Supernova
        </a>
        <a
          className={styles.categorySelector}
          onClick={() => handleBackgroundChange("2")}
        >
          Pulse
        </a>
        <a
          className={styles.categorySelector}
          onClick={() => handleBackgroundChange("3")}
        >
          Techno
        </a>
      </div>
    </div>
  );
};

export default BackgroundSelector;
