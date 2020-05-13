import React, { Component, ReactNode } from 'react';
import styles from './NotificationsManager.scss'; // tslint:disable-line

interface IToastState {
  toasts?: IToastElement[];
}

interface IToastElement {
  content: ReactNode;
  hideDelay: number;
  id: number;
}

interface INotificationConfig {
  hideDelay?: number;
}

interface INotificationsContext {
  notify(content: string, options: INotificationConfig): void;
}

/**
 *  Provides a global notification system
 */
export class NotificationsProvider extends Component<IToastState> {
  state: IToastState = { toasts: [] };
  counter: number = 0;

  notify = (content: string, options: INotificationConfig): void => {
    const { hideDelay = 5000 } = options;
    this.setState((state: IToastState) => {
      const id: number = this.counter++;
      this.hideAfterDelay(id, hideDelay);

      return { toasts: [...state.toasts].concat({ id, content, hideDelay }) };
    });
  };

  removeToast = (id: number): void => {
    this.setState((state: IToastState) => {
      return {
        toasts: state.toasts.filter((toast: IToastElement) => toast.id !== id),
      };
    });
  };

  onDismiss = (id: number): VoidFunction => (): void => {
    this.removeToast(id);
  };

  hideAfterDelay = (id: number, hideDelay: number): void => {
    setTimeout(() => this.removeToast(id), hideDelay);
  };

  render(): ReactNode {
    const { children } = this.props;
    const { toasts } = this.state;
    const context: INotificationsContext = {
      notify: this.notify,
    };

    return (
      <NotificationsContext.Provider value={context}>
        {children}
        <div className={styles[`toastsContainer`]}>
          {toasts.map(
            ({ content, id }: IToastElement): ReactNode => (
              <div
                className={styles[`toastElement`]}
                key={`toast-${id}`}
                onClick={this.onDismiss(id)}
                role="button"
              >
                {content}
              </div>
            )
          )}
        </div>
      </NotificationsContext.Provider>
    );
  }
}

export const NotificationsContext: any = React.createContext<
  INotificationsContext | undefined
>(undefined);
