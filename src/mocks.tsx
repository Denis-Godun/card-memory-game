import { GameLevel, IconName } from './types';
import {
  FaSun,
  FaChrome,
  FaMoon,
  FaClock,
  FaCloud,
  FaGithub,
  FaOpera,
  FaReact,
} from 'react-icons/fa6';

const iconComponentMap: Record<IconName, JSX.Element> = {
  [IconName.React]: <FaReact />,
  [IconName.Opera]: <FaOpera />,
  [IconName.GitHub]: <FaGithub />,
  [IconName.Cloud]: <FaCloud />,
  [IconName.Sun]: <FaSun />,
  [IconName.Clock]: <FaClock />,
  [IconName.Moon]: <FaMoon />,
  [IconName.Chrome]: <FaChrome />,
};

export const cardConvert = (iconName: IconName): JSX.Element => {
  return iconComponentMap[iconName];
};

export const gameLevels: GameLevel[] = [
  {
    size: 4,
    cells: [
      [
        { icon: IconName.React },
        { icon: IconName.React },
        { icon: IconName.Opera },
        { icon: IconName.Opera },
      ],
      [
        { icon: IconName.GitHub },
        { icon: IconName.GitHub },
        { icon: IconName.Cloud },
        { icon: IconName.Cloud },
      ],
      [
        { icon: IconName.Sun },
        { icon: IconName.Sun },
        { icon: IconName.Clock },
        { icon: IconName.Clock },
      ],
      [
        { icon: IconName.Moon },
        { icon: IconName.Moon },
        { icon: IconName.Chrome },
        { icon: IconName.Chrome },
      ],
    ],
  },
];
