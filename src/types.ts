export enum IconName {
  React = "react",
  Opera = "opera",
  GitHub = "github",
  Cloud = "cloud",
  Sun = "sun",
  Clock = "clock",
  Moon = "moon",
  Chrome = "chrome",
}

type GameLevelCard = {
  icon: IconName;
};

type GameLevel = {
  size: 4;
  cells: Array<Array<GameLevelCard>>; // 4x4
};

export type { GameLevel, GameLevelCard };
