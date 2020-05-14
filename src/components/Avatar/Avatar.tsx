import _ from 'lodash';
import React from 'react';

import styles from './Avatar.scss';

export interface IAvatarProps {
  alt?: string;
  border?: string;
  circle?: boolean;
  height?: number;
  shadow?: string;
  size: number;
  src: string;
  width?: number;
}

const images: string[] = [
  'https://images.unsplash.com/photo-1546526660-0c79ddbb9582',
  'https://images.unsplash.com/photo-1550525811-e5869dd03032',
  'https://images.unsplash.com/photo-1550525811-d71cdbc59cc2',
  'https://images.unsplash.com/photo-1549365414-dcde6b449bfb',
  'https://images.unsplash.com/photo-1549738712-da3cb334e1d2',
  'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb',
  'https://images.unsplash.com/photo-1520484033379-7f74cc7d7340',
  'https://images.unsplash.com/photo-1544703251-1bfaf9e57d3c',
  'https://images.unsplash.com/photo-1532123675048-773bd75df1b4',
  'https://images.unsplash.com/photo-1548735385-8a065586a979',
  'https://images.unsplash.com/photo-1546015720-b8b30df5aa27',
  'https://images.unsplash.com/photo-1545877682-3ce2985b2085',
  'https://images.unsplash.com/photo-1545896535-6021b3815e29',
  'https://images.unsplash.com/photo-1549417229-aa67d3263c09',
  'https://images.unsplash.com/photo-1543984613-f55ca6a1ba35',
  'https://images.unsplash.com/photo-1544098347-ba4cb1cbdd9a',
  'https://images.unsplash.com/photo-1531078215167-91fcfe45b39e',
  'https://images.unsplash.com/photo-1520853504280-249b72dc947c',
  'https://images.unsplash.com/photo-1542613172-4ac1d7351721',
  'https://images.unsplash.com/photo-1544278864-46982bacd063',
  'https://images.unsplash.com/photo-1544592444-5a7ff1d4f986',
  'https://images.unsplash.com/photo-1544547520-c4bef4d32cdc',
  'https://images.unsplash.com/photo-1544534910-5d47ee76ad1a',
  'https://images.unsplash.com/photo-1545946551-0b395ce5b5f4',
  'https://images.unsplash.com/photo-1543008210-9a182bb94b8c',
  'https://images.unsplash.com/photo-1543299750-19d1d6297053',
  'https://images.unsplash.com/photo-1543422558-0442433e0456',
  'https://images.unsplash.com/photo-1520423465871-0866049020b7',
  'https://images.unsplash.com/photo-1543689975-276491e1547d',
  'https://images.unsplash.com/photo-1484774374809-69b9da12d46e',
  'https://images.unsplash.com/photo-1525708560449-b469a2d7d1a8',
];

/**
 * Avatar component
 */
export class Avatar extends React.Component<IAvatarProps> {
  imgSrc: string;

  constructor(props: IAvatarProps) {
    super(props);

    const { src } = props;
    this.imgSrc = src;

    if (src === 'random') {
      this.imgSrc = this.getRandomImage();
    }
  }

  getRandomImage = (): string => {
    return `${_.sample(images)}?w=${this.props.size * 4}`;
  };

  render(): React.ReactNode {
    return (
      <div
        className={styles.avatar}
        style={{
          backgroundImage: `url(${this.imgSrc})`,
          border: this.props.border,
          boxShadow: this.props.shadow,
          ...this.getDimensions(),
        }}
      />
    );
  }

  private getDimensions(): { height?: number; width?: number } {
    const { height, size, width } = this.props;

    return {
      ...(height || size ? { height: height || size } : {}),
      ...(width || size ? { width: width || size } : {}),
    };
  }
}
