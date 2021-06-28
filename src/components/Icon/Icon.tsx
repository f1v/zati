import { isString } from 'lodash';
import React from 'react';
import {
  IconAdd,
  IconCalendar,
  IconCheck,
  IconCog,
  IconDelete,
  IconEdit,
  IconExit,
  IconHome,
  IconMeeting,
  IconStar,
  IconThumbsUp,
  IconUser,
  IconUsers,
} from '../../icons';

export interface ISvgProps {
  color?: string;
  size?: number;
}

export interface IIconProps extends ISvgProps {
  className?: string;
  icon: () => JSX.Element;
  onClick?(): void;
}

/**
 * A wrapper for an icon library
 */
export class Icon extends React.Component<IIconProps> {
  iconMap: { [key: string]: React.ComponentType<any> } = {
    add: IconAdd,
    calendar: IconCalendar,
    check: IconCheck,
    cog: IconCog,
    delete: IconDelete,
    edit: IconEdit,
    group: IconUsers,
    home: IconHome,
    logout: IconExit,
    meeting_room: IconMeeting,
    star: IconStar,
    thumbs_up: IconThumbsUp,
    user: IconUser,
  };

  getIconComponent(): React.ComponentType<ISvgProps> {
    const icon: React.ComponentType<ISvgProps> = this.iconMap[this.props.icon];
    if (!icon) {
      console.error('No icon', this.props.icon);
    }

    return icon;
  }

  render(): React.ReactNode {
    const { color, icon, onClick, size } = this.props;
    const Component: React.ComponentType<ISvgProps> = isString(icon)
      ? this.getIconComponent()
      : icon;

    return onClick ? (
      <button
        onClick={onClick}
        role="button"
        style={{ all: 'unset', cursor: 'pointer' }}
      >
        <Component color={color} size={size} />
      </button>
    ) : (
      <Component color={color} size={size} />
    );
  }
}
