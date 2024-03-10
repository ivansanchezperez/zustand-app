import {useBearStore} from 'zustand-sc';

export const withBears = (Component) => (props) => {
    const countBears = useBearStore((state) => state.bears);
    return <Component {...props} countBears={countBears} />;
};
  