import { FC, ReactNode } from 'react';
import './PageTemplate.scss';

interface IPageTemplate {
    children: ReactNode;
}

export const PageTemplate: FC<IPageTemplate> = ({children}) => {
    return (
        <div>
            {/* <Header />
            <Container>
                {children}
            </Container> */}
        </div>
    )
};
