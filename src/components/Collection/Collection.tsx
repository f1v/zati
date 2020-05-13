import _ from 'lodash';
import React from 'react';

export enum CollectionType {
  LIST = 'list',
  GALLERY = 'gallery',
}

interface ICollectionItem {
  id: string;
  render(): React.ReactNode;
  [x: string]: any;
}

interface ICollectionProps {
  itemDisplay: React.Component;
  items: ICollectionItem[];
  type?: CollectionType;

  onRemoveItem?(itemIds: string, newList?: ICollectionItem[]): void;
}

/**
 * A group of items
 */
class Collection extends React.Component<ICollectionProps> {
  static defaultProps: Partial<ICollectionProps> = {
    type: CollectionType.LIST,
  };

  onRemoveItem(itemId: string): void {
    const newList: ICollectionItem[] = _.filter(this.props.items, (item: ICollectionItem) => {
      return !_.includes(itemId, item.id);
    });

    this.props.onRemoveItem(itemId, newList);
  }

  render(): React.ReactNode {
    return this.props.items.map((item: ICollectionItem) => item.render());
  }
}

export { Collection, ICollectionItem };
