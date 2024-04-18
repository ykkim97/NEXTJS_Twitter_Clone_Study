import { ReactNode, FC } from 'react';

interface HomeLayoutProps {
    children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
    return (
        <div>
            홈 레이아웃
            {children}
        </div>
    );
};

export default HomeLayout;